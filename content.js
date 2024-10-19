const hideCommentsContainingBump = (extensionEnabled, hideBumpWithReplies, removeReplies) => {
    try {
        console.log(`Extension enabled: ${extensionEnabled}`);
        console.log(`Hide bump with replies: ${hideBumpWithReplies}`);
        console.log(`Remove replies: ${removeReplies}`);

        // Select all comments
        const comments = document.querySelectorAll('div[role="article"]');

        comments.forEach(comment => {
            const textElement = comment.querySelector('div[dir="auto"]'); // Text element in the comment
            const nextSibling = comment.nextElementSibling; // Get the next sibling, which could be a reply or reply block

            if (textElement && textElement.innerText.match(/bump\b/i)) {
                const hasReplies = nextSibling && nextSibling.querySelectorAll('div[role="article"]').length > 0; // Check if there are replies

                if (!extensionEnabled) {
                    // If the extension is disabled, show all bump comments and replies.
                    comment.style.display = '';  // Show the bump comment
                    if (nextSibling) {
                        nextSibling.style.display = '';  // Show the replies
                    }
                    return;
                }

                // Case 1: Bump comments with replies should be shown
                if (hasReplies && !hideBumpWithReplies) {
                    comment.style.display = '';  // Show the bump comment
                    if (nextSibling) {
                        nextSibling.style.display = '';  // Show the replies
                    }
                    console.log("Bump comment with replies shown.");
                }
                // Case 2: Bump comments with replies should be hidden
                else if (hasReplies && hideBumpWithReplies) {
                    comment.style.display = 'none';  // Hide the bump comment
                    if (removeReplies && nextSibling) {
                        nextSibling.style.display = 'none';  // Hide replies if setting is enabled
                        console.log("Bump comment and replies hidden.");
                    } else {
                        nextSibling.style.display = ''; // Keep replies if setting is disabled
                        console.log("Bump comment hidden, replies shown.");
                    }
                }
                // Case 3: Hide only the bump comment, but show replies
                else if (hasReplies && !removeReplies) {
                    comment.style.display = 'none';  // Hide the bump comment
                    if (nextSibling) {
                        nextSibling.style.display = '';  // Keep replies visible
                    }
                    console.log("Bump comment hidden, replies shown.");
                }
                // Case 4: Hide bump comment without replies
                else if (!hasReplies) {
                    comment.style.display = 'none';  // Hide the bump comment if no replies
                    console.log("Bump comment with no replies hidden.");
                }
            }
        });
    } catch (error) {
        console.error("Error in hideCommentsContainingBump: ", error);
    }
};

// Initial function to load settings and apply them
const applySettings = () => {
    chrome.storage.sync.get(["extensionEnabled", "hideBumpWithReplies", "removeReplies"], ({ extensionEnabled, hideBumpWithReplies, removeReplies }) => {
        hideCommentsContainingBump(extensionEnabled, hideBumpWithReplies, removeReplies);
    });
};

// Run the function to hide comments initially
applySettings();

// Set up a mutation observer to handle dynamically loaded comments
const observer = new MutationObserver(applySettings);
observer.observe(document.body, { childList: true, subtree: true });

// Listen for changes in settings and apply them dynamically
chrome.storage.onChanged.addListener((_, area) => {
    if (area === 'sync') {
        // Fetch the updated values and apply them
        chrome.storage.sync.get(["extensionEnabled", "hideBumpWithReplies", "removeReplies"], ({ extensionEnabled, hideBumpWithReplies, removeReplies }) => {
            console.log("Settings changed, applying new configuration.");
            hideCommentsContainingBump(extensionEnabled, hideBumpWithReplies, removeReplies);
        });
    }
});

// Clean up the observer when the tab is closed or page is reloaded
window.addEventListener('beforeunload', () => {
    observer.disconnect();
});
