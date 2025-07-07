#!/bin/bash

# Schwab API Token Exchange Script
# Make sure to set your environment variables before running this script:
# export SCHWAB_CLIENT_ID="your_actual_client_id"
# export SCHWAB_CLIENT_SECRET="your_actual_client_secret"

CLIENT_ID="${SCHWAB_CLIENT_ID:-YOUR_CLIENT_ID_HERE}"
CLIENT_SECRET="${SCHWAB_CLIENT_SECRET:-YOUR_CLIENT_SECRET_HERE}"
REDIRECT_URI="https://localhost:3001/callback"
AUTHORIZATION_CODE="YOUR_CODE_FROM_CALLBACK_URL"

echo "Getting Schwab API tokens..."

if [ "$CLIENT_ID" = "YOUR_CLIENT_ID_HERE" ] || [ "$CLIENT_SECRET" = "YOUR_CLIENT_SECRET_HERE" ]; then
    echo "❌ ERROR: Please set your environment variables first!"
    echo "export SCHWAB_CLIENT_ID=\"your_actual_client_id\""
    echo "export SCHWAB_CLIENT_SECRET=\"your_actual_client_secret\""
    exit 1
fi

echo "Make sure you've set AUTHORIZATION_CODE to the code from the callback URL!"

curl -X POST https://api.schwabapi.com/v1/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=$AUTHORIZATION_CODE&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&redirect_uri=$REDIRECT_URI" \
  | jq '.'

echo ""
echo "Save the 'refresh_token' from the response above!"
echo "This is your SCHWAB_REFRESH_TOKEN value." 

echo ""
echo "🔗 Authorization URL (if needed):"
echo "https://api.schwabapi.com/v1/oauth/authorize?client_id=$CLIENT_ID&redirect_uri=https://localhost:3001/callback&response_type=code&scope=readonly"