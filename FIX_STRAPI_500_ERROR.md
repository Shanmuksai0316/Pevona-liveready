# Fix Strapi 500 Error for Property Enquiries

The logs show that Strapi is returning a 500 Internal Server Error when trying to create property enquiries. This is typically a **permissions issue** or a **validation error**.

## Quick Fix: Check Strapi Permissions

The most common cause is that the API token doesn't have permission to create property-enquiries.

### Step 1: Check API Token Permissions

1. **Log into Strapi Admin:**
   - Go to `http://api.pevonaltd.co.uk/admin` (or `http://31.97.117.9:1337/admin`)

2. **Navigate to API Tokens:**
   - Go to **Settings** → **API Tokens**
   - Find your API token (the one used in `STRAPI_API_TOKEN`)
   - Click on it to edit

3. **Check Token Type:**
   - The token should be **"Full access"** OR
   - If it's **"Custom"**, make sure it has:
     - `property-enquiry.create` permission
     - `property-enquiry.find` permission (if needed)

### Step 2: Check Content-Type Permissions (Alternative Method)

If you're using role-based permissions instead of API tokens:

1. **Go to Settings → Users & Permissions Plugin → Roles**
2. **Select "Public" or "Authenticated" role** (depending on your setup)
3. **Find "Property Enquiry" in the permissions list**
4. **Enable the following permissions:**
   - ✅ `create` - Allow creating new enquiries
   - ✅ `find` - Allow reading enquiries (optional, for testing)
   - ✅ `findOne` - Allow reading single enquiry (optional)

5. **Click "Save"**

### Step 3: Verify Content Type Exists

1. **Go to Content-Type Builder:**
   - Settings → Content-Type Builder
   - Look for **"Property Enquiry"**
   - If it doesn't exist, you need to create it or restore it from your Strapi backup

### Step 4: Check Strapi Logs

SSH into your server and check Strapi logs for more details:

```bash
# Check Strapi PM2 logs
pm2 logs strapi --lines 100

# Look for errors related to:
# - "property-enquiry"
# - "permission denied"
# - "validation error"
# - "Internal Server Error"
```

### Step 5: Test the API Endpoint Directly

Test if the Strapi API endpoint is accessible:

```bash
# Replace YOUR_TOKEN with your actual API token
curl -X POST http://api.pevonaltd.co.uk/api/property-enquiries \
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

This will show you the exact error message from Strapi.

## Common Issues and Solutions

### Issue 1: "Permission Denied"
**Solution:** Follow Step 1 or Step 2 above to grant permissions.

### Issue 2: "Validation Error"
**Solution:** Check that all required fields are being sent:
- `name` (required)
- `email` (required, must be valid email)
- `phone` (required)

### Issue 3: "Content Type Not Found"
**Solution:** 
- Verify the content type exists in Content-Type Builder
- Restart Strapi: `pm2 restart strapi`

### Issue 4: "Database Error"
**Solution:**
- Check Strapi database connection
- Verify the `property_enquiries` table exists in the database
- Check database logs for errors

## Verify the Fix

After making changes:

1. **Restart Strapi:**
   ```bash
   pm2 restart strapi
   ```

2. **Test the form again:**
   - Go to your contact form
   - Submit a test enquiry
   - Check if it appears in Strapi Admin → Content Manager → Property Enquiry

3. **Check logs:**
   ```bash
   pm2 logs next --lines 20
   pm2 logs strapi --lines 20
   ```

## Still Not Working?

If the issue persists:

1. **Check the exact error in Strapi logs:**
   ```bash
   pm2 logs strapi --lines 200 | grep -i "error\|property-enquiry"
   ```

2. **Verify the API token is correct:**
   - Get a fresh token from Strapi Admin
   - Update `STRAPI_API_TOKEN` in `.env.local`
   - Restart Next.js: `pm2 restart next`

3. **Check if Strapi content type schema matches:**
   - Compare `strapi/src/api/property-enquiry/content-types/property-enquiry/schema.json`
   - With what's actually in your Strapi admin

4. **Try creating an enquiry manually in Strapi Admin:**
   - Go to Content Manager → Property Enquiry → Create new entry
   - If this fails, there's a problem with the Strapi content type itself

## Additional Debugging

The improved error handling in the API route will now log:
- The exact data being sent to Strapi
- The full Strapi error response
- Validation errors if any
- Permission errors if any

Check your Next.js logs (`pm2 logs next`) to see these detailed error messages.

