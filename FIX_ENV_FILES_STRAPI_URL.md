# Fix Strapi URL in .env Files

Found the issue! The URL is set in `.env.local` and `.env.production`. Update both:

## Step 1: Fix .env.local

```bash
cd /var/www/pevonalive
nano .env.local
```

Find this line:
```env
NEXT_PUBLIC_STRAPI_URL=http://api.pevonaltd.co.uk
```

Change to:
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 2: Fix .env.production

```bash
nano .env.production
```

Find this line:
```env
NEXT_PUBLIC_STRAPI_URL=https://api.pevonaltd.co.uk
```

Change to:
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 3: Rebuild Next.js (REQUIRED!)

Since `NEXT_PUBLIC_*` variables are embedded at build time:

```bash
npm run build
```

## Step 4: Restart PM2

```bash
pm2 restart next --update-env
```

## Verify

```bash
# Check both files are updated
cat .env.local | grep STRAPI_URL
cat .env.production | grep STRAPI_URL

# Both should show: NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

## Quick One-Liner to Fix Both

```bash
cd /var/www/pevonalive

# Fix .env.local
sed -i 's|NEXT_PUBLIC_STRAPI_URL=.*|NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337|g' .env.local

# Fix .env.production
sed -i 's|NEXT_PUBLIC_STRAPI_URL=.*|NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337|g' .env.production

# Verify
echo "=== .env.local ==="
grep STRAPI_URL .env.local
echo "=== .env.production ==="
grep STRAPI_URL .env.production

# Rebuild
npm run build

# Restart
pm2 restart next --update-env
```

After this, the 301 error should be fixed!


