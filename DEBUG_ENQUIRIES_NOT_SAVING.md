# Debug: Enquiries Not Saving to Strapi

Follow these steps in order to find the issue.

## Step 1: Check Next.js Logs

SSH into your server and run:

```bash
ssh root@31.97.117.9
cd /var/www/pevonalive
pm2 logs next --lines 50
```

**Look for:**
- ✅ "Saving to Strapi:" - Shows it's trying to save
- ✅ "Successfully saved to Strapi:" - Shows it worked
- ❌ "Failed to connect to Strapi" - Connection issue
- ❌ "Strapi returned error" - Strapi rejected the request
- ❌ "Forbidden" or "Unauthorized" - Permission issue

**Copy the error message you see.**

## Step 2: Check Strapi Logs

```bash
pm2 logs strapi --lines 50
```

**Look for:**
- POST requests to `/api/property-enquiries`
- Error messages
- Permission denied errors

## Step 3: Verify Environment Variables

```bash
# Check if .env file exists and has correct values
cat .env | grep STRAPI

# Should show:
# NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
# STRAPI_API_TOKEN=your-token-here
```

## Step 4: Test Strapi Connection Manually

```bash
# Replace YOUR_TOKEN with your actual token from .env
curl -X GET http://31.97.117.9:1337/api/property-enquiries \
  -H "Authorization: Bearer YOUR_TOKEN"
```

**Expected:** Should return `{"data":[],"meta":{...}}` or list of enquiries

**If you get "Unauthorized":** Token is wrong or doesn't have permissions

## Step 5: Test Creating Enquiry Directly

```bash
# Replace YOUR_TOKEN with your actual token
curl -X POST http://31.97.117.9:1337/api/property-enquiries \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "1234567890",
      "message": "Test message",
      "property_slug": "",
      "property_title": "Test Property",
      "status": "new"
    }
  }'
```

**If this works:** The issue is with Next.js → Strapi connection
**If this fails:** The issue is with Strapi permissions or content type

## Step 6: Check Strapi API Token Permissions

1. Go to: `http://31.97.117.9:1337/admin`
2. Navigate to: **Settings** → **API Tokens**
3. Find your token (the one in `STRAPI_API_TOKEN`)
4. Click to edit
5. **Check:**
   - Token type should be **"Full access"** OR
   - If "Custom", must have `property-enquiry.create` permission

## Step 7: Verify Content Type Exists

1. In Strapi Admin: **Settings** → **Content-Type Builder**
2. Look for **"Property Enquiry"**
3. If missing, the content type needs to be created

## Step 8: Check Content Manager

1. In Strapi Admin: **Content Manager** → **Property Enquiry**
2. Check if there are any existing entries
3. Try creating one manually to test

## Common Issues & Quick Fixes

### Issue 1: "Failed to connect to Strapi"
**Fix:**
- Check Strapi is running: `pm2 status strapi`
- Verify URL in `.env`: `NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337`
- Restart Next.js: `pm2 restart next --update-env`

### Issue 2: "Forbidden" or "Unauthorized"
**Fix:**
- Update API token permissions (Step 6)
- Verify token in `.env` matches Strapi Admin
- Restart Next.js: `pm2 restart next --update-env`

### Issue 3: "Content type not found"
**Fix:**
- Verify Property Enquiry exists in Content-Type Builder
- Restart Strapi: `pm2 restart strapi`

### Issue 4: No errors but enquiries don't appear
**Fix:**
- Check if form is actually calling the API (browser console)
- Verify environment variables are loaded: `pm2 restart next --update-env`
- Check Strapi logs for silent failures

## Quick Test Commands

Run these all at once:

```bash
# 1. Check services are running
pm2 status

# 2. Check environment variables
cat .env | grep STRAPI

# 3. Check recent Next.js logs
pm2 logs next --lines 30 | grep -i "strapi\|error\|saving"

# 4. Check recent Strapi logs
pm2 logs strapi --lines 30 | grep -i "property-enquiry\|error\|POST"
```

## Share the Results

After running these checks, share:
1. What you see in Next.js logs when submitting a form
2. What you see in Strapi logs
3. Result of the curl test (Step 4)
4. API token permissions status

This will help identify the exact issue!


