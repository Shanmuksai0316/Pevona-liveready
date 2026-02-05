# Create Complete .env File on Server

Your `.env` file is empty. Create it with all required variables.

## Quick One-Liner (Copy and Paste Entire Block)

```bash
cd /var/www/pevonalive
cat > .env << 'EOF'
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
EOF
```

## Or Use nano (Step by Step)

```bash
cd /var/www/pevonalive
nano .env
```

Paste this content:
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

## After Creating .env File

### Step 1: Verify It Was Created

```bash
cat .env
```

Should show all the variables.

### Step 2: Rebuild Next.js (IMPORTANT!)

Since `NEXT_PUBLIC_*` variables are embedded at build time:

```bash
npm run build
```

This will take a few minutes.

### Step 3: Restart PM2

```bash
pm2 restart next --update-env
```

## Verify Everything Works

```bash
# Check .env has the correct URL
cat .env | grep STRAPI_URL

# Should show: NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
```

Then test the form - the 301 error should be gone!


