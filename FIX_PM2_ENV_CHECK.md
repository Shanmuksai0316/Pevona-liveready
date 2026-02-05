# Fix: PM2 Environment Variable Check

If `pm2 env next` is not working, check the environment directly.

## Method 1: Check .env File Directly

```bash
# Navigate to project directory
cd /var/www/pevonalive

# Check if .env file exists
ls -la .env

# View STRAPI variables
cat .env | grep STRAPI

# Or view entire .env file
cat .env
```

## Method 2: Check PM2 Process Info

```bash
# List all PM2 processes
pm2 list

# Check process details (use the ID or name from pm2 list)
pm2 show next

# Or check the ecosystem file if using one
pm2 show 3  # Use the ID from pm2 list
```

## Method 3: Check PM2 Ecosystem File

If you're using a PM2 ecosystem file:

```bash
# Check for ecosystem file
ls -la ecosystem.config.js
ls -la pm2.config.js

# View ecosystem file
cat ecosystem.config.js
```

## Method 4: Check Runtime Environment

```bash
# Check what environment variables are actually loaded
pm2 describe next | grep -A 20 "env:"
```

## Method 5: Add Environment Variables to PM2

If variables are missing, you can:

### Option A: Add to .env and restart with --update-env

```bash
# Edit .env file
nano .env

# Add these lines:
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-token-here

# Save and restart
pm2 restart next --update-env
```

### Option B: Set environment in PM2 ecosystem file

Create or edit `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [
    {
      name: 'next',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1337',
        STRAPI_API_TOKEN: 'your-token-here',
        MAILGUN_API_KEY: 'your-key',
        MAILGUN_DOMAIN: 'your-domain',
        ADMIN_EMAIL: 'admin-pev@pevonaltd.co.uk,nagraj@grape5.com'
      }
    }
  ]
};
```

Then:
```bash
pm2 delete next
pm2 start ecosystem.config.js
```

## Quick Diagnostic Commands

Run these to diagnose:

```bash
# 1. Check .env file exists and has STRAPI vars
cd /var/www/pevonalive && cat .env | grep STRAPI

# 2. Check PM2 process status
pm2 status

# 3. Check PM2 process details
pm2 show next

# 4. Check Next.js logs for Strapi connection
pm2 logs next --lines 20 | grep -i strapi

# 5. Test Strapi connection manually
curl http://localhost:1337/api/property-enquiries -H "Authorization: Bearer YOUR_TOKEN"
```


