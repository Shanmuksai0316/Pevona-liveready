# Upload Property Images to Strapi

This guide explains how to upload property images from your Downloads folder to Strapi.

## Prerequisites

1. **Strapi must be running** (local or production)
2. **API Token** with Full access permissions
3. **Property images** in `C:\Users\Nagraj Y R\Downloads\Pevona property images`

## Step 1: Get API Token

### For Local Strapi:
1. Open `http://localhost:1337/admin`
2. Go to **Settings** → **API Tokens**
3. Create a new token with **Full access** permissions
4. Copy the token

### For Production Strapi:
1. Open `http://31.97.117.9:1337/admin`
2. Go to **Settings** → **API Tokens**
3. Create a new token with **Full access** permissions
4. Copy the token

## Step 2: Install Dependencies

```bash
cd strapi
npm install form-data
```

## Step 3: Run the Upload Script

### For Local Strapi:
```powershell
cd strapi
$env:STRAPI_URL="http://localhost:1337"
$env:STRAPI_API_TOKEN="your-local-token-here"
node seed/upload-property-images.js
```

### For Production Strapi:
```powershell
cd strapi
$env:STRAPI_URL="http://31.97.117.9:1337"
$env:STRAPI_API_TOKEN="your-production-token-here"
node seed/upload-property-images.js
```

## What the Script Does

1. **Fetches** all properties from Strapi
2. **Matches** properties by keywords in title/address:
   - `grantham` → 20 Grantham Grounds images
   - `mcgredy` → 9 McGredy images
   - `westwood`/`harrison` → Flat 2 Harrison House images
   - `leonards`/`st leonards` → 50 St Leonard Street images
   - `crystal` → 18 Crystal Way images
   - `armstrong` → 25 Armstrong images
3. **Uploads** up to 20 images per property to Strapi
4. **Updates** property gallery with uploaded images

## Notes

- The script filters out floor plans, EPC documents, and utility meter images
- Only JPG/PNG images are uploaded
- If a property is not found (no matching keywords), it will be skipped
- Images are uploaded from: `C:\Users\Nagraj Y R\Downloads\Pevona property images`


