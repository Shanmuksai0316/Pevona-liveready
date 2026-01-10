# Next Steps Guide - Property Details Update

This guide walks you through completing the property details update with Excel data import.

---

## Step 1: Restart Strapi (Apply Schema Changes)

The Strapi schema has been updated with new fields. You need to restart Strapi for these changes to take effect.

**On your server (SSH):**
```bash
# SSH into your server
ssh your-username@31.97.117.9

# Navigate to Strapi directory (adjust path if different)
cd /path/to/strapi
# Example: cd ~/pevona/strapi or cd /var/www/pevona/strapi

# Restart Strapi
pm2 restart strapi

# Verify Strapi is running
pm2 status strapi
```

**Expected output:** Strapi should restart successfully and show as "online".

---

## Step 2: Get Strapi API Token

You need an API token to run the import script.

1. **Open Strapi Admin:**
   - Go to: `http://31.97.117.9:1337/admin`
   - Log in with your admin credentials

2. **Create API Token:**
   - Click **Settings** (left sidebar)
   - Click **API Tokens** (under Administration)
   - Click **"Create new API Token"** button
   - Fill in:
     - **Name:** "Excel Import Script"
     - **Description:** (optional) "For importing property data from Excel"
     - **Token type:** Select **"Full access"**
     - **Token duration:** Select **"Unlimited"**
   - Click **"Save"**
   - **IMPORTANT:** Copy the token immediately (you'll only see it once!)

---

## Step 3: Update Server with Latest Code

Pull the latest changes from git on your server.

**On your server (SSH):**
```bash
# Navigate to Next.js project directory
cd /path/to/pevona
# Example: cd ~/pevona or cd /var/www/pevona

# Pull latest changes
git pull origin main

# Install new dependencies (xlsx package)
npm install --legacy-peer-deps

# Build the Next.js application
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Restart Next.js
pm2 restart next
# Or if your process has a different name:
# pm2 restart all
```

---

## Step 4: Run Excel Import Script

Import the property data from Excel into Strapi.

**On your server (SSH):**
```bash
# Make sure you're in the project root
cd /path/to/pevona

# Set environment variables and run import script
export STRAPI_URL="http://31.97.117.9:1337"
export STRAPI_API_TOKEN="your-token-here"  # Replace with the token from Step 2

# Run the import script
node strapi/seed/import-excel-to-strapi.js
```

**Or if you prefer to set variables inline:**
```bash
STRAPI_URL="http://31.97.117.9:1337" STRAPI_API_TOKEN="your-token-here" node strapi/seed/import-excel-to-strapi.js
```

**Expected output:**
```
Reading Excel file...
Found 6 properties in Excel file

Processing: 9McGredy
✅ Updated property: 9McGredy (ID: 123)

Processing: Flat 2HH
✅ Updated property: Flat 2HH (ID: 124)
...
✅ Import completed!
```

**If you see warnings like "⚠️ Property not found":**
- The property reference in Excel doesn't match any property in Strapi
- Check the property titles/slugs in Strapi admin
- The script matches by "Property Internal Reference" (e.g., "9McGredy", "Flat 2HH")

---

## Step 5: Verify the Changes

Check that everything is working correctly.

### 5.1: Verify in Strapi Admin

1. **Go to Strapi Admin:** `http://31.97.117.9:1337/admin`
2. **Navigate to:** Content Manager → Properties
3. **Open any property** (e.g., the one with reference "9McGredy")
4. **Check that new fields are present:**
   - Rent Price
   - Annual Ground Rents
   - Estimated Annual Service Charges
   - Number of Years of Lease
   - HMO
   - Local Council
5. **Verify data is populated** from Excel

### 5.2: Verify on Frontend

1. **Visit a property page:**
   - Example: `http://31.97.117.9:3000/properties/3-bed-terraced-house-mcgredy-en7`
2. **Check the top bar:**
   - Should show "Sales Price" (not "Guide Price")
3. **Check Property Details section:**
   - Should show new fields (only if data exists):
     - Rent Price
     - Annual Ground Rents
     - Estimated Annual Service Charges
     - Number of Years of Lease
     - HMO
     - Council Tax Band
   - Fields with "N/A" or empty should be hidden
4. **Verify Deposit field is removed** (should not appear)

---

## Step 6: Troubleshooting

### Issue: Import script says "Property not found"

**Solution:**
- Check the "Property Internal Reference" in Excel matches property titles/slugs in Strapi
- The script searches by title containing the reference
- You may need to manually match properties if references don't match

### Issue: Fields not showing on frontend

**Possible causes:**
1. **Strapi not restarted** - Run Step 1 again
2. **Next.js not restarted** - Run Step 3 again
3. **Data not imported** - Check Step 4 output for errors
4. **Field is empty/N/A** - Fields are hidden if empty (this is expected behavior)

### Issue: "STRAPI_API_TOKEN is not set" error

**Solution:**
- Make sure you copied the token correctly from Step 2
- Check for extra spaces when pasting
- The token should be a long string of characters

### Issue: Import script fails with connection error

**Solution:**
- Verify Strapi is running: `pm2 status strapi`
- Check Strapi URL is correct: `http://31.97.117.9:1337`
- Test Strapi is accessible: `curl http://31.97.117.9:1337/api/properties`

---

## Summary Checklist

- [ ] Step 1: Restart Strapi on server
- [ ] Step 2: Get Strapi API token
- [ ] Step 3: Pull latest code, install dependencies, build, restart Next.js
- [ ] Step 4: Run Excel import script
- [ ] Step 5: Verify changes in Strapi admin
- [ ] Step 6: Verify changes on frontend

---

## Quick Reference Commands

```bash
# Restart Strapi
pm2 restart strapi

# Pull and update Next.js
cd /path/to/pevona
git pull origin main
npm install --legacy-peer-deps
NODE_OPTIONS="--max-old-space-size=4096" npm run build
pm2 restart next

# Run import script
export STRAPI_URL="http://31.97.117.9:1337"
export STRAPI_API_TOKEN="your-token-here"
node strapi/seed/import-excel-to-strapi.js
```

---

**Need help?** Check the error messages and refer to the troubleshooting section above.

