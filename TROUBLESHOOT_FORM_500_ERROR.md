# Troubleshooting Form Submission 500 Error

If you're getting a 500 error when submitting the contact form or property enquiry form, follow these steps to diagnose and fix the issue.

## Step 1: Check Server Logs

SSH into your server and check the Next.js application logs:

```bash
# Check PM2 logs for Next.js
pm2 logs next --lines 50

# Or if your process has a different name:
pm2 logs --lines 50

# Look for errors related to:
# - "STRAPI_API_TOKEN is not set"
# - "Failed to connect to Strapi"
# - "Failed to parse response from Strapi"
# - Any other error messages
```

## Step 2: Verify Environment Variables

Check if `STRAPI_API_TOKEN` is set on your server:

```bash
# SSH into your server
ssh your-username@31.97.117.9

# Navigate to your Next.js project directory
cd /path/to/pevona

# Check if .env.local exists and contains STRAPI_API_TOKEN
cat .env.local | grep STRAPI_API_TOKEN

# Or check PM2 environment variables
pm2 env next | grep STRAPI_API_TOKEN
```

## Step 3: Set Missing Environment Variables

If `STRAPI_API_TOKEN` is missing, set it:

### Option A: Add to .env.local (Recommended)

```bash
# Edit .env.local
nano .env.local

# Add these lines (replace with your actual values):
STRAPI_API_TOKEN=your_strapi_api_token_here
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000

# Save and exit (Ctrl+X, then Y, then Enter)
```

### Option B: Add to PM2 Ecosystem File

If you're using a PM2 ecosystem file:

```bash
# Edit ecosystem file
nano ecosystem.config.js

# Add to the env section:
{
  "apps": [{
    "name": "next",
    "env": {
      "STRAPI_API_TOKEN": "your_strapi_api_token_here",
      "NEXT_PUBLIC_STRAPI_URL": "http://31.97.117.9:1337",
      "NEXT_PUBLIC_SITE_URL": "http://31.97.117.9:3000"
    }
  }]
}
```

## Step 4: Get Your Strapi API Token

If you don't have a Strapi API token:

1. **Log into Strapi Admin:**
   - Go to `http://31.97.117.9:1337/admin`
   
2. **Navigate to API Tokens:**
   - Go to **Settings** → **API Tokens**
   
3. **Create a New Token:**
   - Click **"Create new API Token"**
   - **Name:** "Next.js Frontend Access"
   - **Token type:** "Full access"
   - **Token duration:** "Unlimited"
   - Click **"Save"**
   
4. **Copy the Token:**
   - **Immediately copy the token** (it's only shown once)
   - Add it to your `.env.local` file

## Step 5: Verify Strapi is Running

Check if Strapi backend is accessible:

```bash
# Test Strapi connection
curl http://31.97.117.9:1337/api/properties

# Or check if Strapi is running
pm2 list
pm2 logs strapi --lines 20
```

## Step 6: Restart Next.js Application

After setting environment variables, restart the Next.js app:

```bash
# Restart Next.js
pm2 restart next

# Or restart all PM2 processes
pm2 restart all

# Check logs again
pm2 logs next --lines 20
```

## Step 7: Test the Form Again

1. Go to your contact form page
2. Fill out and submit the form
3. Check the browser console (F12) for detailed error messages
4. Check server logs again for any new errors

## Common Error Messages and Solutions

### "Server configuration error: Strapi API token missing"
- **Solution:** Set `STRAPI_API_TOKEN` in `.env.local` and restart PM2

### "Failed to connect to Strapi backend"
- **Solution:** 
  - Verify Strapi is running: `pm2 list`
  - Check Strapi URL is correct: `NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337`
  - Verify network connectivity: `curl http://31.97.117.9:1337/api/properties`

### "Failed to parse response from Strapi"
- **Solution:** 
  - Check Strapi logs: `pm2 logs strapi --lines 50`
  - Verify the Strapi API endpoint exists: `/api/property-enquiries`
  - Check if Strapi content type is properly configured

### "Internal server error"
- **Solution:**
  - Check full error stack in server logs
  - Verify all environment variables are set correctly
  - Check if there are any syntax errors in the API route

## Additional Debugging

To see more detailed error information in the browser console, the API now returns:
- `error`: Error message
- `message`: Detailed error message
- `strapiUrl`: Strapi backend URL being used
- `hasToken`: Whether the API token is set (true/false)
- `details`: Additional error details (in development mode)

Check the browser console (F12 → Console tab) after submitting the form to see these details.

## Still Having Issues?

If the problem persists:
1. Share the exact error message from browser console
2. Share relevant lines from server logs (`pm2 logs next --lines 100`)
3. Verify all environment variables are set correctly
4. Check if Strapi backend is accessible and running

