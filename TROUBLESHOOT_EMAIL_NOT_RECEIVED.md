# Troubleshoot: Email Not Received

Follow these steps to find why emails aren't being sent.

## Step 1: Check Server Logs

SSH into your server and check logs:

```bash
cd /var/www/pevonalive
pm2 logs next --lines 100 | grep -i "email\|mailgun"
```

**Look for:**
- ✅ "✅ Email notification sent successfully" - Email was sent
- ❌ "❌ Email sending failed" - Email failed to send
- ⚠️ "Mailgun not configured" - Configuration missing
- ⚠️ "Forbidden" - Domain not verified or API key issue

## Step 2: Check Mailgun Dashboard

1. Go to [Mailgun Dashboard](https://app.mailgun.com)
2. Navigate to **Sending** → **Logs**
3. Look for your email attempts
4. Check the status:
   - **Delivered** ✅ - Email was sent (check spam folder)
   - **Failed** ❌ - Check error message
   - **Bounced** - Email address issue
   - **No entries** - Email wasn't sent from server

## Step 3: Verify Environment Variables

```bash
cd /var/www/pevonalive

# Check Mailgun config
cat .env.local | grep MAILGUN
cat .env.production | grep MAILGUN 2>/dev/null
```

Should show:
```env
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=em.pevonaltd.co.uk
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com
```

## Step 4: Check Domain Status in Mailgun

1. Go to Mailgun Dashboard → **Sending** → **Domains**
2. Find `em.pevonaltd.co.uk`
3. Check status:
   - **Active** ✅ - Domain is verified and ready
   - **Unverified** ⚠️ - Need to add DNS records
   - **Not found** ❌ - Domain not added yet

## Step 5: Common Issues

### Issue 1: Domain Not Verified
**Symptom:** "Forbidden" error in logs
**Fix:**
- Add DNS records in your domain's DNS settings
- Wait for Mailgun to verify (can take up to 24 hours)
- Or use sandbox domain temporarily

### Issue 2: API Key Wrong
**Symptom:** "Unauthorized" or "Forbidden" error
**Fix:**
- Verify API key in Mailgun Dashboard → Settings → API Keys
- Update in `.env.local`

### Issue 3: Email in Spam
**Symptom:** Mailgun shows "Delivered" but no email
**Fix:**
- Check spam/junk folder
- Mark as "Not Spam" if found
- Use custom domain (better deliverability)

### Issue 4: Domain Still Using Sandbox
**Symptom:** "Sandbox subdomains are for testing purposes only"
**Fix:**
- Update `MAILGUN_DOMAIN` to `em.pevonaltd.co.uk`
- Restart: `pm2 restart next --update-env`

### Issue 5: Recipients Not Authorized (Sandbox Only)
**Symptom:** "Recipient not authorized" error
**Fix:**
- If using sandbox, authorize recipients in Mailgun
- Or switch to custom domain (no authorization needed)

## Step 6: Test Email Directly

Test if Mailgun works at all:

```bash
# Get your API key and domain
cd /var/www/pevonalive
API_KEY=$(cat .env.local | grep MAILGUN_API_KEY | cut -d '=' -f2)
DOMAIN=$(cat .env.local | grep MAILGUN_DOMAIN | cut -d '=' -f2)

# Test sending email via Mailgun API
curl -X POST https://api.mailgun.net/v3/$DOMAIN/messages \
  -u "api:$API_KEY" \
  -F from="Pevona <noreply@$DOMAIN>" \
  -F to="admin-pev@pevonaltd.co.uk" \
  -F subject="Test Email" \
  -F text="This is a test email from Mailgun"
```

If this works, Mailgun is configured correctly. If it fails, check the error message.

## Step 7: Check Recent Logs After Form Submission

```bash
# Submit a form, then immediately check logs
pm2 logs next --lines 50 | tail -20
```

Look for email-related messages.

## Quick Diagnostic Commands

Run all at once:

```bash
cd /var/www/pevonalive

echo "=== Mailgun Config ==="
cat .env.local | grep MAILGUN

echo ""
echo "=== Recent Email Logs ==="
pm2 logs next --lines 50 | grep -i "email\|mailgun" | tail -10

echo ""
echo "=== Check if domain is set ==="
cat .env.local | grep MAILGUN_DOMAIN
```

Share the output and I can help identify the exact issue!


