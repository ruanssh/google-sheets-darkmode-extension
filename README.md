# Google Sheets Dark Mode Extension

Browser extension (Manifest V3) for Google Chrome and Microsoft Edge that applies dark mode to Google Sheets (`https://docs.google.com/spreadsheets/*`).

## Features

- Automatic dark mode on Google Sheets pages
- Popup toggle to enable/disable dark mode
- Preference saved with `chrome.storage.sync`
- Manifest V3 compatible (Chrome and Edge)

## Project Structure

- `manifest.json` - extension manifest (MV3)
- `content.js` - toggles `darkmode` class based on storage setting
- `styles.css` - dark mode filter styles
- `popup.html` - extension popup UI
- `popup.js` - enable/disable toggle logic

## Local Installation (Chrome / Edge)

1. Open extensions page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this project folder.

## Notes

- The extension only runs on Google Sheets URLs.
- No external dependencies are required.
