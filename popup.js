document.addEventListener('DOMContentLoaded', () => {
    const toggleExtension = document.getElementById('toggleExtension');
    const toggleReplies = document.getElementById('toggleReplies');
    const toggleRemoveReplies = document.getElementById('toggleRemoveReplies');

    // Get the current settings from storage and update the checkbox states
    chrome.storage.sync.get(['extensionEnabled', 'hideBumpWithReplies', 'removeReplies'], ({ extensionEnabled, hideBumpWithReplies, removeReplies }) => {
        toggleExtension.checked = extensionEnabled !== false; // Default is true
        toggleReplies.checked = !hideBumpWithReplies;
        toggleRemoveReplies.checked = removeReplies || false;
        toggleRemoveReplies.disabled = !hideBumpWithReplies;  // Only enable if hiding bump comments with replies is allowed
    });

    // Save the extensionEnabled setting when the checkbox is changed
    toggleExtension.addEventListener('change', (event) => {
        chrome.storage.sync.set({
            extensionEnabled: event.target.checked
        });
    });

    // Save the hideBumpWithReplies setting when the checkbox is changed
    toggleReplies.addEventListener('change', (event) => {
        const hideBumpWithReplies = !event.target.checked;
        chrome.storage.sync.set({
            hideBumpWithReplies: hideBumpWithReplies
        });

        // Enable or disable the "Remove replies" checkbox based on whether bump comments with replies are hidden
        toggleRemoveReplies.disabled = !hideBumpWithReplies;
    });

    // Save the removeReplies setting when the checkbox is changed
    toggleRemoveReplies.addEventListener('change', (event) => {
        chrome.storage.sync.set({
            removeReplies: event.target.checked
        });
    });
});
