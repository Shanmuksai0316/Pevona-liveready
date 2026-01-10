# Fix: 301 Redirect Error

## Problem Identified

The error shows:
- **301 Moved Permanently** - The URL is redirecting
- **Strapi URL: http://api.pevonaltd.co.uk** - This is WRONG
- Should be: `http://31.97.117.9:1337`

The domain `api.pevonaltd.co.uk` is redirecting (probably HTTP → HTTPS), which breaks POST requests.

## Fix: Update .env File

SSH into your server and fix the URL:

```bash
cd /var/www/pevonalive
nano .env
```

**Change this line:**
```env
NEXT_PUBLIC_STRAPI_URL=http://api.pevonaltd.co.uk
```

**To this:**
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

**Save:** `Ctrl + O`, `Enter`, `Ctrl + X`

## Restart with Updated Environment

```bash
pm2 restart next --update-env
```

## Verify It's Fixed

1. Check the .env file:
   ```bash
   cat .env | grep STRAPI_URL
   ```
   Should show: `NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337`

2. Submit a test enquiry from the website

3. Check logs:
   ```bash
   pm2 logs next --lines 30 | grep "Making POST request"
   ```
   Should show: `📤 Making POST request to: http://31.97.117.9:1337/api/property-enquiries`

4. No more 301 errors!

## Why This Happened

- The domain `api.pevonaltd.co.uk` has nginx redirect rules
- HTTP requests get redirected (301) to HTTPS or another URL
- POST requests shouldn't follow redirects automatically
- Using the direct IP address avoids redirects

## Alternative: Use HTTPS URL

If you want to use the domain, you'd need to:
1. Use HTTPS: `https://api.pevonaltd.co.uk`
2. Ensure SSL is properly configured
3. Make sure the domain points to the correct Strapi instance

But for now, using the IP address is the quickest fix.

