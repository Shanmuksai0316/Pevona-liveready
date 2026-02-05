# Find Where STRAPI_URL is Configured

The `.env` file doesn't have `STRAPI_URL`, but the error shows it's using `http://api.pevonaltd.co.uk`. Check these locations:

## Step 1: Check All .env Files

```bash
cd /var/www/pevonalive

# Check all environment files
ls -la .env*

# Check each one
cat .env 2>/dev/null | grep -i strapi
cat .env.local 2>/dev/null | grep -i strapi
cat .env.production 2>/dev/null | grep -i strapi
```

## Step 2: Check PM2 Ecosystem File

```bash
# Check if there's a PM2 config file
ls -la ecosystem.config.js pm2.config.js 2>/dev/null

# If exists, check it
cat ecosystem.config.js 2>/dev/null | grep -i strapi
```

## Step 3: Check PM2 Environment

```bash
# Check what PM2 has loaded
pm2 show next | grep -A 20 "env:"
```

## Step 4: Check Next.js Build Config

The URL might be baked into the build. Check:

```bash
# Check if it's in next.config.js
cat next.config.js | grep -i strapi
```

## Step 5: Add to .env File

If `.env` doesn't exist or is missing the variable:

```bash
cd /var/www/pevonalive

# Create or edit .env
nano .env
```

Add these lines:
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 6: Rebuild and Restart

Since `NEXT_PUBLIC_*` variables are baked into the build:

```bash
# Rebuild Next.js (this will include the new env vars)
npm run build

# Restart PM2
pm2 restart next --update-env
```

## Important Note

`NEXT_PUBLIC_*` environment variables are embedded at **build time**, not runtime. So you need to:
1. Add the variable to `.env`
2. **Rebuild** the Next.js app: `npm run build`
3. Restart: `pm2 restart next`

Just restarting won't work - you must rebuild!


