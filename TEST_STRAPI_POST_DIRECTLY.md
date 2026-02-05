# Test Strapi POST API Directly

The response shows an array instead of a single object, which means POST might not be working. Test it directly:

## Step 1: Get Your API Token

```bash
cd /var/www/pevonalive
cat .env | grep STRAPI_API_TOKEN
```

## Step 2: Test POST Request Directly

```bash
# Replace YOUR_TOKEN with the actual token from Step 1
curl -X POST http://31.97.117.9:1337/api/property-enquiries \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "data": {
      "name": "Direct Test",
      "email": "test@example.com",
      "phone": "+44 1234567890",
      "message": "Testing direct API call",
      "property_slug": "",
      "property_title": "Test Property",
      "status": "new"
    }
  }'
```

## Expected Response (POST should return single object):

```json
{
  "data": {
    "id": 2,
    "attributes": {
      "name": "Direct Test",
      "email": "test@example.com",
      ...
    }
  }
}
```

## If You Get Array Response (WRONG):

```json
{
  "data": [
    {"id": 1, ...}
  ],
  "meta": {"pagination": {...}}
}
```

This means POST is not working - it's returning a GET response.

## Step 3: Check API Token Permissions

1. Go to: `http://31.97.117.9:1337/admin`
2. Settings → API Tokens
3. Find your token
4. **Must have:** `property-enquiry.create` permission
5. Token type should be **"Full access"**

## Step 4: Check Strapi Logs

```bash
pm2 logs strapi --lines 50 | grep -i "property-enquiry\|POST\|error"
```

Look for:
- POST requests to `/api/property-enquiries`
- Permission errors
- Validation errors

## Step 5: Verify Content Type Exists

1. Strapi Admin → Settings → Content-Type Builder
2. Verify "Property Enquiry" exists
3. Check all fields match the schema

## Common Issues:

1. **Token doesn't have create permission** - Fix in Step 3
2. **Content type not found** - Restart Strapi: `pm2 restart strapi`
3. **Validation error** - Check required fields
4. **Database issue** - Check Strapi logs


