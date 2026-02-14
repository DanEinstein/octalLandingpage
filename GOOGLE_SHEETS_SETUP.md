# Google Sheets Integration - Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it **"Octal Foundry Signups"**
3. In **Row 1**, add these headers (exactly as shown):

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | User Type | Name | Email | Phone | University | Message | Newsletter |

## Step 2: Add the Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toLocaleString(),
    data.user_type || '',
    data.name || '',
    data.email || '',
    data.phone || '',
    data.university || '',
    data.message || '',
    data.newsletter || 'No'
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (Ctrl+S), name the project **"Octal Form Handler"**

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the ⚙️ gear icon → Select **Web app**
3. Set:
   - **Description**: "Octal Foundry Form"
   - **Execute as**: "Me"
   - **Who has access**: **"Anyone"**
4. Click **Deploy**
5. **Authorize** when prompted (click through the "Advanced" → "Go to Octal Form Handler" if Google shows a warning)
6. **Copy the Web App URL** — it will look like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Step 4: Update the React Code

Open `src/components/SignupForm.jsx` and replace the placeholder URL on **line 4**:

```javascript
// Change this:
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// To your deployed URL:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec';
```

## Done! 🎉

Form submissions will now automatically appear as new rows in your Google Sheet.

> **Note:** If you update the Apps Script code later, you need to create a **new deployment** (not just save) for changes to take effect.
