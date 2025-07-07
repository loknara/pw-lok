#!/bin/bash

# Schwab API Token Exchange Script
# Replace the placeholder values with your actual values

CLIENT_ID="jLd6yQK9oJoSx5vehHAjwzfsU8XvBjpR"
CLIENT_SECRET="ZHAWsYTIWr5eBkqp"
REDIRECT_URI="https://localhost:3001/callback"
AUTHORIZATION_CODE="YOUR_CODE_FROM_CALLBACK_URL"

echo "Getting Schwab API tokens..."
echo "Make sure you've replaced the placeholder values above!"

curl -X POST https://api.schwabapi.com/v1/oauth/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code&code=$AUTHORIZATION_CODE&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&redirect_uri=$REDIRECT_URI" \
  | jq '.'

echo ""
echo "Save the 'refresh_token' from the response above!"
echo "This is your SCHWAB_REFRESH_TOKEN value." 

https://api.schwabapi.com/v1/oauth/authorize?client_id=jLd6yQK9oJoSx5vehHAjwzfsU8XvBjpR&redirect_uri=https://localhost:3001/callback&response_type=code&scope=readonly