# Troubleshoot: Enquiries Not Appearing in Strapi

If you're submitting enquiry forms but not seeing entries in Strapi, follow these steps:

## 🔍 Step 1: Check Server Logs

SSH into your server and check the Next.js logs:

```bash
# Check Next.js logs
pm2 logs nextjs --lines 100

# Look for:
# - "Saving to Strapi:" messages
# - "Successfully saved to Strapi:" messages
# - Any error messages about Strapi
```

**What to look for:**

✅ **Good signs:**
```
Saving to Strapi: { url: 'http://...', hasToken: true, ... }
Successfully saved to Strapi: 123
```

❌ **Error signs:**
```
Failed to connect to Strapi
Strapi returned error: ...
Failed to save enquiry to database
```

---

## 🔑 Step 2: Verify Environment Variables

Check that your environment variables are set correctly:

```bash
# On your server, check environment variables
pm2 env nextjs | grep STRAPI

# Should show:
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337 (or your Strapi URL)
# STRAPI_API_TOKEN=your-token-here
```

**Common issues:**
- `STRAPI_API_TOKEN` is missing or empty
- `NEXT_PUBLIC_STRAPI_URL` is wrong (should be your Strapi URL)
- Variables not loaded (need to restart PM2 after adding)

**Fix:**
```bash
# Edit your .env file
nano .env

# Add/update:
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# Or if Strapi is on different server:
# NEXT_PUBLIC_STRAPI_URL=http://your-server-ip:1337

STRAPI_API_TOKEN=your-actual-token-here

# Restart Next.js
pm2 restart nextjs
```

---

## 🔐 Step 3: Check Strapi API Token Permissions

The API token must have permission to create property-enquiries:

1. **Go to Strapi Admin:**
   - `http://your-server-ip:1337/admin`
   - Or `http://your-domain.com:1337/admin`

2. **Navigate to API Tokens:**
   - Go to **Settings** → **API Tokens**
   - Find your API token (the one in `STRAPI_API_TOKEN`)
   - Click on it to edit

3. **Check Token Type:**
   - Should be **"Full access"** (recommended)
   - OR if **"Custom"**, ensure it has:
     - ✅ `property-enquiry.create` permission
     - ✅ `property-enquiry.find` permission

4. **Save changes**

---

## 📋 Step 4: Verify Content Type Exists

Make sure the "Property Enquiry" content type exists in Strapi:

1. **Go to Content-Type Builder:**
   - Settings → Content-Type Builder
   - Look for **"Property Enquiry"** in the list

2. **If it doesn't exist:**
   - The content type might not be deployed
   - Check if it exists in your Strapi code: `strapi/src/api/property-enquiry/`
   - Restart Strapi: `pm2 restart strapi`

3. **Check Content Manager:**
   - Go to **Content Manager** → **Property Enquiry**
   - This is where enquiries should appear

---

## 🌐 Step 5: Test Strapi Connection

Test if your Next.js server can reach Strapi:

```bash
# SSH into your server
# Test the connection
curl -X GET http://localhost:1337/api/property-enquiries \
  -H "Authorization: Bearer YOUR_STRAPI_API_TOKEN"

# Should return: { "data": [...], "meta": {...} }
# If you get an error, Strapi is not accessible
```

**If connection fails:**
- Check if Strapi is running: `pm2 status`
- Check Strapi URL in environment variables
- Verify firewall/network settings

---

## 🔍 Step 6: Check Strapi Logs

Check Strapi logs for errors:

```bash
# Check Strapi PM2 logs
pm2 logs strapi --lines 100

# Look for:
# - "POST /api/property-enquiries" requests
# - Permission errors
# - Validation errors
# - Database errors
```

**Common errors in Strapi logs:**

1. **"Forbidden" or "Unauthorized":**
   - API token doesn't have permissions
   - Fix: Update API token permissions (Step 3)

2. **"Validation error":**
   - Data format doesn't match schema
   - Fix: Check the data being sent matches Strapi schema

3. **"Internal Server Error":**
   - Check full error message in logs
   - Could be database issue or content type issue

---

## 🧪 Step 7: Test API Directly

Test the API endpoint directly to see the exact error:

```bash
# On your server, test the API
curl -X POST http://localhost:3000/api/property-enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+44 123 456 7890",
    "message": "Test enquiry",
    "propertyTitle": "Test Property",
    "propertySlug": ""
  }'
```

**Check the response:**
- If it returns `{ "success": true, "data": {...} }` → Working!
- If it returns an error → Check the error message

---

## 🔧 Step 8: Verify API Endpoint URL

The code uses `/api/property-enquiries` (plural). Verify this matches Strapi:

1. **Check Strapi routes:**
   - The endpoint should be: `/api/property-enquiries`
   - Not `/api/property-enquiry` (singular)

2. **Verify in code:**
   - File: `app/api/property-enquiry/route.ts`
   - Line 100: `fetch(\`${STRAPI_URL}/api/property-enquiries\`, ...)`

3. **Test Strapi endpoint directly:**
   ```bash
   curl -X GET http://localhost:1337/api/property-enquiries \
     -H "Authorization: Bearer YOUR_TOKEN"
   ```

---

## 🐛 Common Issues & Solutions

### Issue 1: "STRAPI_API_TOKEN is not set"
**Solution:**
- Add `STRAPI_API_TOKEN` to your `.env` file
- Restart Next.js: `pm2 restart nextjs`

### Issue 2: "Failed to connect to Strapi"
**Solution:**
- Check `NEXT_PUBLIC_STRAPI_URL` is correct
- Verify Strapi is running: `pm2 status strapi`
- Check if Strapi is accessible from Next.js server

### Issue 3: "Forbidden" or "Unauthorized"
**Solution:**
- Update API token permissions in Strapi Admin
- Ensure token has `property-enquiry.create` permission

### Issue 4: "Content type not found"
**Solution:**
- Verify Property Enquiry content type exists
- Restart Strapi: `pm2 restart strapi`

### Issue 5: Enquiries save but don't appear in admin
**Solution:**
- Check Content Manager → Property Enquiry
- Refresh the page
- Check if there's a filter applied
- Verify you're looking at the right content type

---

## ✅ Quick Checklist

Before testing again, verify:

- [ ] `STRAPI_API_TOKEN` is set in environment variables
- [ ] `NEXT_PUBLIC_STRAPI_URL` is correct
- [ ] API token has `property-enquiry.create` permission
- [ ] Property Enquiry content type exists in Strapi
- [ ] Strapi is running (`pm2 status strapi`)
- [ ] Next.js is running (`pm2 status nextjs`)
- [ ] Both services restarted after env changes

---

## 🧪 Test Again

After fixing issues:

1. **Submit a test enquiry** from your website
2. **Check server logs:** `pm2 logs nextjs --lines 20`
3. **Check Strapi logs:** `pm2 logs strapi --lines 20`
4. **Check Strapi Admin:** Content Manager → Property Enquiry

---

## 📞 Still Not Working?

If enquiries still don't appear:

1. **Share the error from logs:**
   ```bash
   pm2 logs nextjs --lines 50 | grep -i "strapi\|error"
   ```

2. **Check browser console:**
   - Open browser DevTools (F12)
   - Submit a form
   - Check Console tab for errors
   - Check Network tab for API response

3. **Verify the data format:**
   - Check what data is being sent to Strapi
   - Compare with Strapi schema requirements

The most common issue is **API token permissions** - make sure your token has `property-enquiry.create` permission!

