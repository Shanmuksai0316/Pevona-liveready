# How to Get Mailgun API Key and Domain

This guide will walk you through getting your Mailgun credentials from the Mailgun dashboard.

## Step 1: Sign Up / Log In to Mailgun

1. Go to [https://app.mailgun.com](https://app.mailgun.com)
2. Sign up for a free account (if you don't have one) or log in
3. Mailgun offers a free tier with 5,000 emails/month for 3 months, then 1,000 emails/month

## Step 2: Get Your API Key

1. Once logged in, click on your **profile/account icon** (usually top right)
2. Go to **Settings** → **API Keys** (or navigate to **Sending** → **Domain Settings** → **API Keys**)
3. You'll see your **Private API Key** - this is what you need
4. Click **Show** or **Reveal** to see the full key (it starts with something like `key-...`)
5. **Copy this key** - you'll need it for `MAILGUN_API_KEY`

**Note:** There are two types of keys:
- **Private API Key** - Use this one (starts with `key-`)
- **Public Validation Key** - Not needed for sending emails

## Step 3: Get Your Domain

You have two options:

### Option A: Use Mailgun Sandbox Domain (Free, for Testing)

1. In the Mailgun dashboard, go to **Sending** → **Domains**
2. You'll see a **sandbox domain** (format: `sandboxXXXXX.mailgun.org`)
3. **Copy this domain name** - this is your `MAILGUN_DOMAIN`
4. **Important:** Go to **Sending** → **Authorized Recipients**
5. Click **Add Recipient** and add `admin-pev@pevonaltd.co.uk`
6. Check your email and click the verification link
7. **Sandbox domains can only send to authorized recipients**, so this step is required!

**Example sandbox domain:** `sandbox1234567890abcdef.mailgun.org`

### Option B: Add Your Own Domain (For Production)

1. In the Mailgun dashboard, go to **Sending** → **Domains**
2. Click **Add New Domain**
3. Enter a subdomain like `mg.pevonaltd.co.uk` or `mail.pevonaltd.co.uk`
4. Click **Add Domain**
5. Mailgun will show you DNS records to add:
   - **TXT record** for domain verification
   - **MX records** for receiving emails (optional)
   - **CNAME records** for tracking (optional)
6. Add these DNS records to your domain's DNS settings
7. Wait for verification (can take a few minutes to 24 hours)
8. Once verified, use this domain as your `MAILGUN_DOMAIN`

## Step 4: Add Credentials to Your Environment Variables

### For Local Development (.env.local)

Create or edit `.env.local` in your project root:

```env
MAILGUN_API_KEY=key-your-actual-api-key-here
MAILGUN_DOMAIN=sandbox1234567890abcdef.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk
```

### For Production Server

Add these to your server's environment variables (usually in `.env` or PM2 ecosystem file):

```env
MAILGUN_API_KEY=key-your-actual-api-key-here
MAILGUN_DOMAIN=your-domain.mailgun.org
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk
```

## Step 5: Restart Your Application

After adding the environment variables:

**For Local Development:**
```bash
# Stop your Next.js server (Ctrl+C)
# Then restart it
npm run dev
```

**For Production:**
```bash
# Restart PM2 processes
pm2 restart nextjs
pm2 restart strapi
```

## Step 6: Test It

1. Go to your contact form or property enquiry form
2. Submit a test enquiry
3. Check:
   - ✅ Form shows success message
   - ✅ Enquiry appears in Strapi Admin → Content Manager → Property Enquiry
   - ✅ Email received at `admin-pev@pevonaltd.co.uk`

## Troubleshooting

### Email Not Sending?

1. **Check Mailgun Dashboard:**
   - Go to **Sending** → **Logs**
   - Look for your email attempt
   - Check for any error messages

2. **Verify API Key:**
   - Make sure you copied the **Private API Key** (starts with `key-`)
   - Check for extra spaces when pasting

3. **Verify Domain:**
   - If using sandbox domain, ensure recipient is authorized
   - If using custom domain, ensure DNS records are verified

4. **Check Server Logs:**
   ```bash
   # For Next.js
   pm2 logs nextjs --lines 50
   
   # Look for email-related errors
   ```

5. **Test API Connection:**
   - In Mailgun dashboard, go to **Sending** → **API**
   - Try sending a test email from there
   - If that works, your credentials are correct

### Common Errors

- **"Forbidden"** - API key is incorrect
- **"Domain not found"** - Domain name is wrong or not verified
- **"Sandbox subdomains are for testing purposes only"** - Need to authorize recipient or use custom domain
- **"Unauthorized"** - API key doesn't have sending permissions

## Mailgun Free Tier Limits

- **5,000 emails/month** for first 3 months
- **1,000 emails/month** after that
- **Sandbox domain** can only send to authorized recipients
- **Custom domain** can send to anyone (once verified)

## Security Best Practices

1. **Never commit API keys to Git** - Always use `.env.local` or environment variables
2. **Rotate API keys** periodically (every 90 days recommended)
3. **Use different keys** for development and production
4. **Monitor usage** in Mailgun dashboard to detect abuse

## Need Help?

- Mailgun Documentation: [https://documentation.mailgun.com](https://documentation.mailgun.com)
- Mailgun Support: Available in dashboard
- Check server logs for detailed error messages

