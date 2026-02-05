# Fix: Mailgun Environment Variables Not Loading

The logs show `hasMailgunKey: false` and `hasMailgunDomain: false`, meaning PM2 isn't loading the variables from `.env.local`.

## Step 1: Check .env.local Has Mailgun Variables

```bash
cd /var/www/pevonalive
cat .env.local | grep MAILGUN
```

Should show:
```env
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
```

## Step 2: If Missing, Add to .env.local

```bash
nano .env.local
```

Make sure these lines exist:
```env
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
ADMIN_EMAIL=your-admin@example.com
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 3: PM2 May Not Auto-Load .env.local

PM2 doesn't automatically load `.env.local`. You have options:

### Option A: Use .env File (Recommended)

```bash
# Copy from .env.local to .env
cp .env.local .env

# Or add Mailgun vars to .env
nano .env
```

Add:
```env
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
ADMIN_EMAIL=your-admin@example.com
```

### Option B: Use PM2 Ecosystem File

Create `ecosystem.config.js`:

```bash
nano ecosystem.config.js
```

Add:
```javascript
module.exports = {
  apps: [{
    name: 'next',
    script: 'npm',
    args: 'start',
    env_file: '.env.local',
    env: {
      NODE_ENV: 'production'
    }
  }]
};
```

Then:
```bash
pm2 delete next
pm2 start ecosystem.config.js
```

## Step 4: Quick Fix - Copy to .env

```bash
cd /var/www/pevonalive

# Add Mailgun vars to .env file
cat >> .env << 'EOF'
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
ADMIN_EMAIL=your-admin@example.com
EOF

# Verify
cat .env | grep MAILGUN

# Restart
pm2 restart next --update-env
```

## Step 5: Verify Variables Are Loaded

After restart, check logs:
```bash
pm2 logs next --lines 20 | grep -i "mailgun\|email"
```

Should NOT show "hasMailgunKey: false" anymore.

## Why This Happens

- PM2 doesn't automatically load `.env.local`
- PM2 looks for `.env` by default
- `--update-env` flag only works if variables are in `.env` or ecosystem file

The quickest fix is to add the Mailgun variables to the `.env` file.


