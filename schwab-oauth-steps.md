# Schwab OAuth Flow - Step by Step

## Once you have your Client ID and Client Secret:

### Step 1: Build Authorization URL
Replace `YOUR_CLIENT_ID` in this URL with your actual Client ID:

```
https://api.schwabapi.com/v1/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=https://localhost:3001/callback&response_type=code&scope=readonly
```

### Step 2: Authorize Your App
1. Open the URL above in your browser
2. Log in with your Schwab credentials
3. You'll see a permission screen asking to authorize your app
4. Click "Allow" or "Authorize"

### Step 3: Get Authorization Code
After authorization, you'll be redirected to:
```
https://localhost:3001/callback?code=SOME_LONG_CODE_HERE
```

The page will show an error (that's normal - we don't have a callback handler), but look at the URL bar and **copy the code parameter**.

### Step 4: Exchange Code for Tokens
1. Open the `get-refresh-token.sh` file
2. Replace these placeholders with your actual values:
   - `YOUR_CLIENT_ID_HERE` → Your Client ID from Schwab
   - `YOUR_CLIENT_SECRET_HERE` → Your Client Secret from Schwab  
   - `YOUR_CODE_FROM_CALLBACK_URL` → The code you just copied

3. Make the script executable and run it:
```bash
chmod +x get-refresh-token.sh
./get-refresh-token.sh
```

### Step 5: Save the Refresh Token
The script will output JSON with your tokens. Look for:
```json
{
  "refresh_token": "SOME_LONG_TOKEN_HERE",
  "access_token": "...",
  "expires_in": 1800
}
```

**Save the `refresh_token` value** - this is your `SCHWAB_REFRESH_TOKEN`!

## Summary of Values You'll Have:
- ✅ SCHWAB_CLIENT_ID (from app creation)
- ✅ SCHWAB_CLIENT_SECRET (from app creation)  
- ✅ SCHWAB_REDIRECT_URI (https://localhost:3001/callback)
- ✅ SCHWAB_REFRESH_TOKEN (from OAuth flow above) 