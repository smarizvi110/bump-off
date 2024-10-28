# Bump Off!

<div align="center">
    <img src="Icons/icon.svg" alt="Bump Off! Icon">
</div>

## Overview

**Bump Off!** is a Chrome extension that automatically hides Facebook comments containing the word 'bump.' It helps keep your Facebook feed clean by filtering out 'bump' comments, which are often used to push posts back to the top of the feed without adding value.

![https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png](https://chromewebstore.google.com/detail/bump-off/dlbcdmgkiplfhpaadbdfaenecklpadgo)

You can:

- Enable or disable the extension.
- Choose whether to show or hide 'bump' comments that have replies *(default: show)*.
- Optionally remove replies to hidden 'bump' comments.

## Features

- **Automatically hide 'bump' comments**: All comments containing the word 'bump' are hidden from view on Facebook.
- **Toggle visibility for 'bump' comments with replies**: You can choose to show or hide 'bump' comments that have replies.
- **Remove replies to hidden 'bump' comments**: Optionally remove replies associated with hidden 'bump' comments.

## Installation

### From the Chrome Web Store

[![Available in the Chrome Web Store](https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png)](https://chromewebstore.google.com/detail/bump-off/dlbcdmgkiplfhpaadbdfaenecklpadgo)

### From GitHub

1. Clone or download this repository:
2. 
    ```zsh
    git clone https://github.com/smarizvi110/bump-off.git
    ```

3. Open **chrome://extensions/** in your browser.
4. Enable **Developer mode** in the top-right corner.
5. Click **Load unpacked** and select the directory where you cloned the repo.
6. The extension should now appear in your toolbar. You can configure it from the popup menu.

## How to Use

![Bump Off! Screenshot](Screenshots/Screenshot_Demo.png)

1. Once installed, click the **Bump Off!** icon in the Chrome toolbar *(you may need to click the puzzle icon to find it)*.
2. Enable or disable the extension using the toggle switch.
3. Adjust other settings to customize how 'bump' comments and replies are handled.
4. Changes take effect instantly, no need to reload the page!

## Contributing

Contributions are welcome! Please refer to the [CONTRIBUTING](CONTRIBUTING.md) file for more details.

## Permissions

Below are the permissions required by this extension. You can also view our detailed privacy policy by referring to the [PRIVACY](PRIVACY.md) file. 

- **Storage**: Used to store the user's settings (e.g., enable/disable status, and visibility options).
- **Host permissions**: The extension needs access to `facebook.com` to hide comments.

## License

This project is licensed under the EUPL-1.2 License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out via [GitHub Issues](https://github.com/smarizvi/bump-off/issues).
