# Property Migration Guide

This guide explains how to migrate properties from your local Strapi instance to production.

## Prerequisites

1. **Local Strapi** must be running on `http://localhost:1337`
2. **Production Strapi** must be running and accessible
3. **API Tokens** for both local and production Strapi

## Step 1: Get API Tokens

### Local Strapi:
1. Open `http://localhost:1337/admin`
2. Go to **Settings** → **API Tokens**
3. Create a new token with **Full access** permissions
4. Copy the token

### Production Strapi:
1. Open your production Strapi admin panel
2. Go to **Settings** → **API Tokens**
3. Create a new token with **Full access** permissions
4. Copy the token

## Step 2: Set Environment Variables

Create a `.env` file in the `strapi` directory or export these variables:

```bash
# Local Strapi (source)
export LOCAL_STRAPI_URL="http://localhost:1337"
export LOCAL_STRAPI_API_TOKEN="your-local-token-here"

# Production Strapi (destination)
export PROD_STRAPI_URL="http://31.97.117.9:1337"
export PROD_STRAPI_API_TOKEN="your-production-token-here"
```

Or on Windows PowerShell:
```powershell
$env:LOCAL_STRAPI_URL="http://localhost:1337"
$env:LOCAL_STRAPI_API_TOKEN="your-local-token-here"
$env:PROD_STRAPI_URL="http://31.97.117.9:1337"
$env:PROD_STRAPI_API_TOKEN="your-production-token-here"
```

## Step 3: Run the Migration Script

Navigate to the strapi directory and run:

```bash
cd strapi
node seed/migrate-properties-to-prod.js
```

## What the Script Does

1. **Fetches** all properties from local Strapi (with all relations populated)
2. **Uploads** media files (images, documents) to production Strapi
3. **Creates** each property in production Strapi with all data and media references

## Notes

- The script will skip properties that fail to create (logs will show errors)
- Media files are downloaded from local and uploaded to production
- If media upload fails, the property will still be created but without that media
- A small delay (500ms) is added between each property to avoid overwhelming the server

## Troubleshooting

### "API Token required" error
- Make sure you've set the `PROD_STRAPI_API_TOKEN` environment variable
- Verify the token has "Full access" permissions

### "Failed to fetch" error
- Check that local Strapi is running on `http://localhost:1337`
- Verify the `LOCAL_STRAPI_API_TOKEN` is correct (optional, only needed if local Strapi requires auth)

### "Failed to create property" error
- Check that production Strapi is accessible
- Verify the `PROD_STRAPI_API_TOKEN` is correct
- Check Strapi logs for more details

### Media upload failures
- Media uploads may fail if files are too large or network is slow
- Properties will still be created, but without the failed media
- You can manually upload media later through Strapi admin

## Alternative: Manual Migration

If the script doesn't work, you can:

1. Export properties from local Strapi admin (Settings → Transfer Tokens → Export)
2. Import to production Strapi admin (Settings → Transfer Tokens → Import)

Or manually copy properties through the Strapi admin interface.



