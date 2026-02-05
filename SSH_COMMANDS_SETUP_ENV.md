# SSH Commands: Set Up .env File on Server

Run these commands in order after SSH'ing into your server.

## Step 1: SSH into Server

```bash
ssh root@31.97.117.9
```

## Step 2: Navigate to Project Directory

```bash
cd /var/www/pevonalive
```

## Step 3: Create .env File

```bash
nano .env
```

## Step 4: Paste This Content

Copy and paste this entire block into nano:

```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
```

## Step 5: Save and Exit nano

1. Press `Ctrl + O` (save)
2. Press `Enter` (confirm filename)
3. Press `Ctrl + X` (exit)

## Step 6: Restart PM2 with Updated Environment

```bash
pm2 restart next --update-env
```

## Step 7: Verify It's Working

```bash
# Check logs
pm2 logs next --lines 20

# Check if file was created
cat .env | grep STRAPI
```

## One-Liner Alternative (Quick Method)

If you prefer a one-liner instead of nano:

```bash
cd /var/www/pevonalive && cat > .env << 'EOF'
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
EOF
pm2 restart next --update-env
```

## Test After Setup

1. Submit a test enquiry from your website
2. Check Strapi Admin: `http://31.97.117.9:1337/admin` → Content Manager → Property Enquiry
3. Check email inboxes for notification


