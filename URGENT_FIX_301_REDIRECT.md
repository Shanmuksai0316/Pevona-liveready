# ⚠️ URGENT FIX: 301 Redirect Error

## The Problem

Your server's `.env` file has the **WRONG Strapi URL**:
- ❌ Current: `NEXT_PUBLIC_STRAPI_URL=http://api.pevonaltd.co.uk`
- ✅ Should be: `NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337`

The domain `api.pevonaltd.co.uk` is redirecting (301), which breaks POST requests.

## Immediate Fix (Run on Server)

```bash
cd /var/www/pevonalive

# Edit .env file
nano .env
```

**Find and change this line:**
```env
NEXT_PUBLIC_STRAPI_URL=http://api.pevonaltd.co.uk
```

**To:**
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

**Save:** `Ctrl + O`, `Enter`, `Ctrl + X`

**Restart:**
```bash
pm2 restart next --update-env
```

## Verify It's Fixed

```bash
# Check the URL is correct
cat .env | grep STRAPI_URL

# Should show: NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

## Test

1. Submit a test enquiry from your website
2. Check it appears in Strapi Admin
3. No more 301 errors!

## Why This Happens

- The domain `api.pevonaltd.co.uk` has nginx redirect rules
- HTTP → HTTPS redirects break POST requests
- Using the direct IP address avoids redirects


