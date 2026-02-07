# Add Strapi API Token to Server

Your Strapi API token has been provided. Add it to your server's .env file.

## Quick Commands to Run on Server

### Option 1: Using nano (Recommended)

```bash
cd /var/www/pevonalive
nano .env
```

Then add or update this line:
```env
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

### Option 2: Using echo (Quick)

```bash
cd /var/www/pevonalive

# Create .env file if it doesn't exist, or append to existing
cat >> .env << 'EOF'
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
NODE_ENV=production
EOF
```

## Complete .env File Content

Your complete `.env` file should contain:

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
STRAPI_API_TOKEN=73171e7bc606443e0da22b9de46866673e7681df42268b7256cb9d31d8bc000b56e170ea49caff64a50990492650a908354040b6ddc73c9b3a7006f5e047a19b20a09d8eb069e13a323a9d6b421f9a406deee0ba0c7654cb7f259d59d30bd6d8d859ea5e90399dc87ce706187b55cd1b75018f04e4897600c6d952deca20e46d

# Mailgun Configuration
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org

# Admin Emails (comma-separated)
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000

# Node Environment
NODE_ENV=production
```

## After Adding Token

1. **Restart PM2 with updated environment:**
   ```bash
   pm2 restart next --update-env
   ```

2. **Verify it's working:**
   ```bash
   # Check logs
   pm2 logs next --lines 20
   
   # Test by submitting a form, then check:
   pm2 logs next --lines 50 | grep -i "strapi"
   ```

3. **Check Strapi Admin:**
   - Go to: `http://31.97.117.9:1337/admin`
   - Navigate to: **Content Manager** → **Property Enquiry**
   - Submit a test enquiry and verify it appears here

## Security Note

⚠️ **Important:** The `.env` file should NOT be committed to Git. It's already in `.gitignore`, but make sure it stays that way.

