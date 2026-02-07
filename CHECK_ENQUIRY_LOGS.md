# Check Enquiry Logs - Alternative Methods

If grep isn't finding the logs, try these methods:

## Method 1: Check All Recent Logs

```bash
# Check last 100 lines of Next.js logs
pm2 logs next --lines 100

# Look for:
# - "📤 Sending to Strapi"
# - "📥 Strapi response"
# - "✅ Successfully saved"
# - Any error messages
```

## Method 2: Check Logs in Real-Time

```bash
# Watch logs in real-time, then submit a form
pm2 logs next

# Press Ctrl+C to stop
```

## Method 3: Check Specific Log File

```bash
# Check the output log
tail -n 100 /root/.pm2/logs/next-out.log | grep -i "strapi\|enquiry\|saving"

# Check the error log
tail -n 100 /root/.pm2/logs/next-error.log
```

## Method 4: Check if Code Was Updated

```bash
# Verify you pulled the latest code
cd /var/www/pevonalive
git log --oneline -5

# Should see: "Add detailed logging for Strapi enquiry creation debugging"
```

## Method 5: Restart and Test

```bash
# Pull latest code
cd /var/www/pevonalive
git pull

# Restart Next.js
pm2 restart next --update-env

# Wait a moment, then submit a test enquiry from website
# Then check logs:
pm2 logs next --lines 50
```

## Method 6: Direct API Test

Test the API directly to see the response:

```bash
# Replace YOUR_TOKEN with actual token from .env
curl -X POST http://localhost:3000/api/property-enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+44 1234567890",
    "message": "Test enquiry",
    "propertyTitle": "Test Property",
    "propertySlug": ""
  }'
```

## What to Look For

After submitting a form, check logs for:

1. **"📤 Sending to Strapi"** - Shows data being sent
2. **"📥 Strapi response status"** - Should be 200
3. **"📥 Strapi response (full)"** - Shows the actual response
4. **"✅ Successfully saved to Strapi!"** - Confirms it worked
5. **"✅ Enquiry ID"** - Shows the ID of saved enquiry

If you see errors, copy the full error message.


