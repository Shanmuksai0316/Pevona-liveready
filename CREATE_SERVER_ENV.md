# Create .env File on Server

Your server doesn't have a `.env` file. Create it with these steps:

## Step 1: Create .env File

SSH into your server and run:

```bash
cd /var/www/pevonalive
nano .env
```

## Step 2: Add These Environment Variables

Copy and paste this into the `.env` file (replace with your actual values):

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=your-strapi-api-token-here

# Mailgun Configuration
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org

# Admin Emails (comma-separated)
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
# Or if you have a domain:
# NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Node Environment
NODE_ENV=production
```

## Step 3: Get Your Strapi API Token

1. Go to Strapi Admin: `http://31.97.117.9:1337/admin`
2. Navigate to **Settings** → **API Tokens**
3. Find or create a token with **Full access**
4. Copy the token
5. Replace `your-strapi-api-token-here` in the .env file

## Step 4: Save and Exit

In nano:
- Press `Ctrl + O` to save
- Press `Enter` to confirm
- Press `Ctrl + X` to exit

## Step 5: Restart PM2 with Updated Environment

```bash
pm2 restart next --update-env
```

## Step 6: Verify Environment Variables

```bash
# Check if variables are loaded
pm2 logs next --lines 20

# Test by submitting a form and checking logs
pm2 logs next --lines 50 | grep -i "strapi"
```

## Quick One-Liner to Create .env

If you want to create it quickly:

```bash
cd /var/www/pevonalive
cat > .env << 'EOF'
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=REPLACE_WITH_YOUR_TOKEN
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
EOF

# Then edit to add your actual STRAPI_API_TOKEN
nano .env
```

## Important Notes

1. **Replace `your-strapi-api-token-here`** with your actual Strapi API token
2. **Make sure Strapi is running** on port 1337
3. **Restart with `--update-env`** flag to load new variables
4. **Check logs** after restart to verify connection

