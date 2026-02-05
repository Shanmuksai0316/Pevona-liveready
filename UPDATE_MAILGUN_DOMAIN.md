# Update Mailgun Domain to em.pevonaltd.co.uk

## Step 1: Update .env.local on Server

```bash
cd /var/www/pevonalive
nano .env.local
```

Find this line:
```env
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org
```

Change to:
```env
MAILGUN_DOMAIN=em.pevonaltd.co.uk
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 2: Update .env.production (if it exists)

```bash
nano .env.production
```

Update the `MAILGUN_DOMAIN` line to:
```env
MAILGUN_DOMAIN=em.pevonaltd.co.uk
```

Save: `Ctrl + O`, `Enter`, `Ctrl + X`

## Step 3: Configure Domain in Mailgun

1. Go to [Mailgun Dashboard](https://app.mailgun.com)
2. Navigate to **Sending** → **Domains**
3. Click **Add New Domain**
4. Enter: `em.pevonaltd.co.uk`
5. Click **Add Domain**
6. Mailgun will show DNS records to add:
   - **TXT record** for domain verification
   - **MX records** (optional, for receiving)
   - **CNAME records** for tracking (optional)
7. Add these DNS records to your domain's DNS settings
8. Wait for verification (can take a few minutes to 24 hours)

## Step 4: Verify Domain in Mailgun

- Once DNS records are added, Mailgun will verify the domain
- Status will change from "Unverified" to "Active"
- You can send emails once verified

## Step 5: Restart Next.js

```bash
pm2 restart next --update-env
```

## Step 6: Test Email Sending

1. Submit a test enquiry from your website
2. Check email inboxes: `admin-pev@pevonaltd.co.uk` and `nagraj@grape5.com`
3. Check Mailgun Dashboard → **Sending** → **Logs** for delivery status

## Quick One-Liner to Update

```bash
cd /var/www/pevonalive

# Update .env.local
sed -i 's|MAILGUN_DOMAIN=.*|MAILGUN_DOMAIN=em.pevonaltd.co.uk|g' .env.local

# Update .env.production if exists
if [ -f .env.production ]; then
  sed -i 's|MAILGUN_DOMAIN=.*|MAILGUN_DOMAIN=em.pevonaltd.co.uk|g' .env.production
fi

# Verify
echo "=== .env.local ==="
grep MAILGUN_DOMAIN .env.local
echo "=== .env.production ==="
grep MAILGUN_DOMAIN .env.production 2>/dev/null || echo "File doesn't exist"

# Restart
pm2 restart next --update-env
```

## Important Notes

- **DNS Setup Required**: You must add DNS records in your domain's DNS settings
- **Verification Time**: Can take a few minutes to 24 hours
- **No Recipient Limits**: Custom domains can send to any email (unlike sandbox)
- **No Authorization Needed**: Unlike sandbox, you don't need to authorize recipients

## If Domain Not Verified Yet

If the domain isn't verified in Mailgun yet, you can:
1. Keep using sandbox domain temporarily
2. Or wait for domain verification before testing


