# Stock Portfolio Setup Guide

This guide will help you set up the automated stock portfolio carousel that fetches data from Schwab API and displays it on your website.

## Architecture Overview

1. **Schwab API** - Provides real-time stock data
2. **Cloud Functions** - Scheduled daily to fetch data
3. **Firestore** - Stores stock portfolio data
4. **React Frontend** - Real-time carousel display

## Prerequisites

- Firebase project
- Schwab Developer Account
- Node.js 18+
- Firebase CLI

## Step 1: Set up Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Firestore Database
4. Enable Functions (Blaze plan required for external API calls)

## Step 2: Configure Firebase in Your App

1. Copy `firebase-config.example.js` to `.env` in your project root
2. Get your Firebase config from Project Settings > General > Your apps
3. Fill in the environment variables:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Step 3: Set up Schwab Developer Account

1. Go to [Schwab Developer Portal](https://developer.schwab.com/)
2. Create an account and register your application
3. Note down your Client ID and Client Secret
4. Set up redirect URI (for OAuth flow)

## Step 4: Get Schwab API Access Token

You'll need to complete the OAuth flow to get a refresh token:

1. Use this authorization URL:
```
https://api.schwabapi.com/v1/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=readonly
```

2. After authorization, you'll get a code in the redirect
3. Exchange the code for tokens:

```bash
curl -X POST https://api.schwabapi.com/v1/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=YOUR_CODE&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&redirect_uri=YOUR_REDIRECT_URI"
```

4. Save the `refresh_token` from the response

## Step 5: Deploy Cloud Functions

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init functions
```

4. Set up environment variables for functions:
```bash
firebase functions:config:set schwab.client_id="YOUR_CLIENT_ID"
firebase functions:config:set schwab.client_secret="YOUR_CLIENT_SECRET"
firebase functions:config:set schwab.refresh_token="YOUR_REFRESH_TOKEN"
firebase functions:config:set schwab.redirect_uri="YOUR_REDIRECT_URI"
```

5. Deploy the functions:
```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

## Step 6: Set up Firestore Security Rules

Add these rules to your Firestore:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to portfolio collection
    match /portfolio/{document} {
      allow read: if true;
      allow write: if false; // Only Cloud Functions can write
    }
  }
}
```

## Step 7: Test the Setup

1. Manually trigger the function to test:
```bash
firebase functions:shell
# Then run: updateStockPortfolio()
```

2. Or use the HTTP endpoint:
```bash
curl -X POST https://your-region-your-project.cloudfunctions.net/updateStockPortfolioManual
```

3. Check Firestore to see if data was populated

## Step 8: Verify Frontend Integration

1. Start your React app:
```bash
npm start
```

2. Navigate to your portfolio section
3. You should see the stock carousel with your data

## Firestore Data Structure

Each stock document in the `portfolio` collection has this structure:

```json
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "shares": 100,
  "averagePrice": 150.50,
  "currentPrice": 175.25,
  "marketValue": 17525.00,
  "totalGainLoss": 2475.00,
  "totalGainLossPercent": 16.45,
  "dayChange": 1.25,
  "dayChangeAmount": 2.15,
  "lastUpdated": "2024-01-15T21:00:00Z"
}
```

## Scheduled Execution

The function runs automatically:
- **Schedule**: 9 PM UTC (5 PM ET) on weekdays
- **Timezone**: America/New_York
- **Days**: Monday through Friday only

## Troubleshooting

### Common Issues:

1. **401 Unauthorized from Schwab API**
   - Check if your access token is valid
   - Refresh token might be expired
   - Verify client ID and secret

2. **Firebase permission denied**
   - Check Firestore security rules
   - Ensure Cloud Functions has proper permissions

3. **No data showing in carousel**
   - Check browser console for errors
   - Verify Firestore rules allow read access
   - Check if documents exist in Firestore

### Debugging:

1. Check Cloud Functions logs:
```bash
firebase functions:log
```

2. Test Firestore connection:
```javascript
// In browser console
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
getDocs(collection(db, 'portfolio')).then(console.log);
```

## Cost Considerations

- **Firestore**: Free tier covers most personal use
- **Cloud Functions**: Pay per invocation (daily = ~$0.05/month)
- **Schwab API**: Free for personal use

## Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- Firestore rules prevent unauthorized writes
- Consider IP restrictions for production

## Support

For issues with:
- **Schwab API**: Check their developer documentation
- **Firebase**: Check Firebase console and docs
- **This implementation**: Check the code comments and console logs 