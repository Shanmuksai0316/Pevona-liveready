# Quick Check: Strapi Environment Variables

Based on your server, the PM2 process is named **"next"** (not "nextjs").

## Commands to Run on Server

### 1. Check Environment Variables

```bash
# Check Next.js environment variables
pm2 env next | grep STRAPI

# Or check all environment variables
pm2 env next
```

### 2. Check PM2 Process Status

```bash
pm2 status
```

You should see:
- `next` - Next.js application
- `strapi` - Strapi application

### 3. Check Environment Variables from .env File

```bash
# Check if .env file exists and has STRAPI variables
cd /var/www/pevonalive
grep STRAPI .env
```

### 4. Check Strapi URL and Token

```bash
# View .env file
cat .env | grep STRAPI

# Should show:
# NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# STRAPI_API_TOKEN=your-token-here
```

### 5. Restart with Updated Environment

If you updated .env file:

```bash
# Restart Next.js with updated environment
pm2 restart next --update-env

# Or delete and restart
pm2 delete next
pm2 start npm --name next -- start
```

### 6. Check Logs

```bash
# Check Next.js logs (correct process name)
pm2 logs next --lines 50

# Check Strapi logs
pm2 logs strapi --lines 50
```

## Common Issues

1. **Process name mismatch:** Use "next" not "nextjs"
2. **Environment not loaded:** Use `--update-env` flag when restarting
3. **.env file location:** Should be in `/var/www/pevonalive/`


