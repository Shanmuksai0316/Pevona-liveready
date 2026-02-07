# Fix: Wrong Strapi URL and Response Issue

## Problem Identified

From the logs:
1. **Wrong URL**: Using `http://api.pevonaltd.co.uk` instead of `http://31.97.117.9:1337`
2. **Response Issue**: Strapi is returning an array instead of creating new enquiries

## Fix Steps

### Step 1: Check and Fix .env File

```bash
cd /var/www/pevonalive

# Check current .env file
cat .env

# Look for NEXT_PUBLIC_STRAPI_URL
cat .env | grep STRAPI_URL
```

### Step 2: Update .env File

```bash
nano .env
```

**Make sure it has:**
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

**NOT:**
```env
NEXT_PUBLIC_STRAPI_URL=http://api.pevonaltd.co.uk
```

### Step 3: Check for Other .env Files

```bash
# Check for other environment files
ls -la .env*

# Check if there's a .env.production or .env.local overriding
cat .env.production 2>/dev/null | grep STRAPI
cat .env.local 2>/dev/null | grep STRAPI
```

### Step 4: Restart with Updated Environment

```bash
pm2 restart next --update-env
```

### Step 5: Verify the URL is Correct

```bash
# Check logs after restart
pm2 logs next --lines 20 | grep "Saving to Strapi"

# Should show: url: 'http://31.97.117.9:1337/api/property-enquiries'
# NOT: url: 'http://api.pevonaltd.co.uk/api/property-enquiries'
```

## Why This Matters

The wrong URL (`api.pevonaltd.co.uk`) might:
- Point to a different Strapi instance
- Not be accessible
- Return cached/old data
- Not allow POST requests

## Test After Fix

1. Submit a new enquiry
2. Check logs: `pm2 logs next --lines 30`
3. Verify URL is correct
4. Check Strapi Admin for the new enquiry


