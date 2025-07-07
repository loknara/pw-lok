#!/bin/bash

# Schwab API Token Exchange Script (Simple Version)
# Replace the placeholder values with your actual values

echo "================================================"
echo "🏦 SCHWAB API TOKEN EXCHANGE"
echo "================================================"
echo ""

# Configuration - REPLACE THESE VALUES
CLIENT_ID="YOUR_CLIENT_ID_HERE"
CLIENT_SECRET="YOUR_CLIENT_SECRET_HERE"
REDIRECT_URI="https://localhost:3001/callback"
AUTHORIZATION_CODE="YOUR_CODE_FROM_CALLBACK_URL"

echo "🔄 Exchanging authorization code for tokens..."
echo "Client ID: $CLIENT_ID"
echo "Redirect URI: $REDIRECT_URI"
echo ""

# Make the API call
response=$(curl -s -X POST https://api.schwabapi.com/v1/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=$AUTHORIZATION_CODE&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&redirect_uri=$REDIRECT_URI")

echo "📋 API Response:"
echo "$response"
echo ""

# Try to extract refresh token (basic method)
refresh_token=$(echo "$response" | grep -o '"refresh_token":"[^"]*' | cut -d'"' -f4)

if [ -n "$refresh_token" ]; then
    echo "✅ SUCCESS! Your refresh token is:"
    echo "================================================"
    echo "$refresh_token"
    echo "================================================"
    echo ""
    echo "💾 Save this as your SCHWAB_REFRESH_TOKEN!"
else
    echo "❌ Could not extract refresh token. Check the response above for errors."
    echo ""
    echo "Common issues:"
    echo "- Authorization code may be expired (get a new one)"
    echo "- Client ID/Secret might be incorrect"
    echo "- Redirect URI might not match exactly"
fi

echo ""
echo "🔗 Need a new authorization code? Use this URL:"
echo "https://api.schwabapi.com/v1/oauth/authorize?client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URI&response_type=code&scope=readonly" 