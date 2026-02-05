# Find Where STRAPI_URL is Set on Server

Since `.env` is empty but the error shows `http://api.pevonaltd.co.uk`, it's set somewhere else. Check these locations:

## Step 1: Check All Environment Files

```bash
cd /var/www/pevonalive

# List all .env files
ls -la .env*

# Check each one
echo "=== .env ==="
cat .env 2>/dev/null | grep -i strapi || echo "No STRAPI found"

echo "=== .env.local ==="
cat .env.local 2>/dev/null | grep -i strapi || echo "No STRAPI found"

echo "=== .env.production ==="
cat .env.production 2>/dev/null | grep -i strapi || echo "No STRAPI found"

echo "=== .env.development ==="
cat .env.development 2>/dev/null | grep -i strapi || echo "No STRAPI found"
```

## Step 2: Check PM2 Ecosystem/Config Files

```bash
# Check for PM2 config files
ls -la ecosystem.config.js pm2.config.js pm2.json 2>/dev/null

# If exists, check contents
if [ -f ecosystem.config.js ]; then
  echo "=== ecosystem.config.js ==="
  cat ecosystem.config.js | grep -i strapi
fi

if [ -f pm2.config.js ]; then
  echo "=== pm2.config.js ==="
  cat pm2.config.js | grep -i strapi
fi
```

## Step 3: Check PM2 Process Environment

```bash
# Check what environment PM2 has loaded
pm2 show next | grep -A 30 "env:"
```

This shows all environment variables PM2 has for the `next` process.

## Step 4: Check Next.js Config

```bash
# Check next.config.js
cat next.config.js | grep -i strapi
```

## Step 5: Check Built Files

Since `NEXT_PUBLIC_*` vars are embedded at build time, check the built files:

```bash
# Check if .next directory exists
ls -la .next 2>/dev/null

# Search in built files (this might take a moment)
grep -r "api.pevonaltd.co.uk" .next 2>/dev/null | head -5
```

## Step 6: Check System Environment

```bash
# Check system-wide environment
env | grep -i strapi
```

## Step 7: Check Where PM2 Was Started

```bash
# Check PM2 process info
pm2 describe next

# Look for the "exec cwd" (working directory) and "script path"
```

## Quick All-in-One Check

Run this to check everything at once:

```bash
cd /var/www/pevonalive

echo "=== Checking .env files ==="
for file in .env .env.local .env.production .env.development; do
  if [ -f "$file" ]; then
    echo "--- $file ---"
    grep -i strapi "$file" || echo "No STRAPI found"
  fi
done

echo ""
echo "=== Checking PM2 config ==="
for file in ecosystem.config.js pm2.config.js pm2.json; do
  if [ -f "$file" ]; then
    echo "--- $file ---"
    grep -i strapi "$file" || echo "No STRAPI found"
  fi
done

echo ""
echo "=== Checking PM2 process env ==="
pm2 show next | grep -A 30 "env:" | grep -i strapi || echo "No STRAPI in PM2 env"

echo ""
echo "=== Checking next.config.js ==="
if [ -f next.config.js ]; then
  grep -i strapi next.config.js || echo "No STRAPI found"
fi
```

Run this and share the output - it will show where the URL is currently set!


