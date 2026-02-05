# How to Test Email Functionality

This guide will walk you through testing the enquiry email system to ensure emails are being sent correctly.

## 📋 Prerequisites

Before testing, make sure:

1. ✅ Code is pulled from Git on your server
2. ✅ Environment variables are set correctly
3. ✅ Email addresses are authorized in Mailgun (for sandbox domain)
4. ✅ Next.js application is running

---

## 🔧 Step 1: Set Up Environment Variables on Server

SSH into your server and add/update the environment variables:

```bash
# Navigate to your project directory
cd /path/to/pevonalive

# Edit your .env file (or PM2 ecosystem file)
nano .env
```

Add or update these variables:

```env
# Mailgun Configuration
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxd7f32dc88575490185686a9afc4c9983.mailgun.org

# Admin emails (comma-separated)
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,nagraj@grape5.com

# Site URL
NEXT_PUBLIC_SITE_URL=http://your-domain.com:3000
# Or if you have a domain:
# NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
# Or your Strapi URL:
# NEXT_PUBLIC_STRAPI_URL=http://your-server-ip:1337
STRAPI_API_TOKEN=your-strapi-api-token-here
```

**Save the file** and restart your Next.js application:

```bash
# If using PM2
pm2 restart nextjs

# Or if running directly
npm run build
npm start
```

---

## 📧 Step 2: Authorize Email Addresses in Mailgun

Since you're using a **sandbox domain**, you must authorize recipient emails:

1. Go to [Mailgun Dashboard](https://app.mailgun.com)
2. Navigate to **Sending** → **Authorized Recipients**
3. Click **Add Recipient**
4. Add both email addresses:
   - `admin-pev@pevonaltd.co.uk`
   - `nagraj@grape5.com`
5. Check both email inboxes and click the verification links
6. Wait for verification (usually instant)

**Important:** Sandbox domains can **only** send to authorized recipients. If an email isn't authorized, Mailgun will reject it.

---

## 🧪 Step 3: Test the Contact Form

### Option A: Test on Your Website

1. Navigate to your contact page:
   - `http://your-domain.com/contact`
   - Or `http://your-server-ip:3000/contact`

2. Fill out the contact form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Phone:** +44 123 456 7890
   - **Subject:** Select any option (e.g., "Property Management")
   - **Message:** This is a test enquiry to verify email functionality.

3. Click **Submit**

4. You should see:
   - ✅ Success message on the page
   - ✅ Form resets

### Option B: Test via API Directly (Advanced)

If you want to test the API directly:

```bash
curl -X POST http://your-domain.com/api/property-enquiry \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+44 123 456 7890",
    "message": "This is a test enquiry",
    "propertyTitle": "General Inquiry",
    "propertySlug": "",
    "subject": "Property Management"
  }'
```

---

## 🏠 Step 4: Test Property Enquiry Form

1. Navigate to any property detail page:
   - `http://your-domain.com/properties/[property-slug]`
   - Or browse properties and click on one

2. Scroll to the enquiry form (usually at the bottom)

3. Fill out the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Phone:** +44 123 456 7890
   - **Message:** I'm interested in viewing this property.

4. Click **Submit**

5. You should see:
   - ✅ Success message
   - ✅ Form resets

---

## ✅ Step 5: Verify Email Delivery

### Check Email Inboxes

1. **Check `admin-pev@pevonaltd.co.uk` inbox:**
   - Look for email with subject: `New Property Enquiry: [Property Title or Subject]`
   - Check spam folder if not in inbox

2. **Check `nagraj@grape5.com` inbox:**
   - Should receive the same email
   - Check spam folder if not in inbox

3. **Email should contain:**
   - ✅ Branded header with Pevona colors
   - ✅ Property title or subject
   - ✅ Customer name, email, phone
   - ✅ Customer's message
   - ✅ Next steps reminder
   - ✅ Clickable links (email, phone, property link)

### Check Mailgun Dashboard

1. Go to [Mailgun Dashboard](https://app.mailgun.com)
2. Navigate to **Sending** → **Logs**
3. You should see:
   - ✅ Your test email in the list
   - ✅ Status: "Delivered" (green checkmark)
   - ✅ Recipient addresses
   - ✅ Timestamp

**If email shows as "Failed" or "Bounced":**
- Check the error message
- Verify recipient is authorized (for sandbox)
- Check email address is correct

### Check Server Logs

SSH into your server and check logs:

```bash
# If using PM2
pm2 logs nextjs --lines 50

# Look for:
# ✅ "Email notification sent successfully to admin-pev@pevonaltd.co.uk, nagraj@grape5.com"
# ❌ "Email sending failed" (if there's an error)
```

**Good log output:**
```
✅ Email notification sent successfully to admin-pev@pevonaltd.co.uk, nagraj@grape5.com
Successfully saved to Strapi: 123
```

**Error log output:**
```
❌ Email sending failed: [error message]
Email error details: {
  message: "...",
  hasMailgunKey: true,
  hasMailgunDomain: true,
  adminEmails: ["admin-pev@pevonaltd.co.uk", "nagraj@grape5.com"]
}
```

---

## 🗄️ Step 6: Verify Strapi Database

Even if email fails, the enquiry should be saved to Strapi:

1. Go to Strapi Admin:
   - `http://your-server-ip:1337/admin`
   - Or `http://your-domain.com:1337/admin`

2. Navigate to **Content Manager** → **Property Enquiry**

3. You should see:
   - ✅ Your test enquiry in the list
   - ✅ Status: "new"
   - ✅ All details (name, email, phone, message)

---

## 🔍 Troubleshooting

### Email Not Received?

1. **Check Mailgun Logs:**
   - Go to Mailgun Dashboard → Sending → Logs
   - Look for your email and check status
   - Read error message if failed

2. **Check Spam Folder:**
   - Emails might be in spam/junk folder
   - Mark as "Not Spam" if found

3. **Verify Authorization:**
   - For sandbox domain, recipient must be authorized
   - Check Mailgun → Sending → Authorized Recipients
   - Verify both emails are listed and verified

4. **Check Environment Variables:**
   ```bash
   # On server, check if variables are set
   pm2 env nextjs | grep MAILGUN
   pm2 env nextjs | grep ADMIN_EMAIL
   ```

5. **Check Server Logs:**
   ```bash
   pm2 logs nextjs --lines 100 | grep -i "email\|mailgun"
   ```

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "Mailgun not configured" | Missing API key or domain | Add `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` to `.env` |
| "Forbidden" | Wrong API key | Verify API key in Mailgun dashboard |
| "Domain not found" | Wrong domain name | Check domain spelling in `.env` |
| "Sandbox subdomains are for testing" | Recipient not authorized | Authorize email in Mailgun dashboard |
| "Unauthorized" | API key doesn't have permissions | Check API key permissions in Mailgun |

### Email in Spam?

1. **Use Custom Domain:**
   - Sandbox domains often go to spam
   - Set up custom domain in Mailgun for production
   - Configure SPF and DKIM records

2. **Check Email Content:**
   - Avoid spam trigger words
   - Use proper email formatting
   - Include unsubscribe link (if required)

---

## ✅ Success Checklist

After testing, verify:

- [ ] Contact form submits successfully
- [ ] Property enquiry form submits successfully
- [ ] Success message appears on page
- [ ] Email received at `admin-pev@pevonaltd.co.uk`
- [ ] Email received at `nagraj@grape5.com`
- [ ] Email has correct formatting and content
- [ ] Enquiry saved in Strapi admin
- [ ] Server logs show "Email notification sent successfully"
- [ ] Mailgun dashboard shows "Delivered" status

---

## 🚀 Production Recommendations

For production use:

1. **Use Custom Domain:**
   - Add your own domain to Mailgun (e.g., `mg.pevonaltd.co.uk`)
   - Configure DNS records (SPF, DKIM)
   - Verify domain in Mailgun
   - Update `MAILGUN_DOMAIN` in environment

2. **Monitor Email Delivery:**
   - Set up Mailgun webhooks for delivery events
   - Monitor bounce rates
   - Track open rates (if needed)

3. **Set Up Alerts:**
   - Configure alerts for email failures
   - Monitor API usage
   - Set up rate limiting if needed

---

## 📞 Need Help?

If you encounter issues:

1. Check server logs: `pm2 logs nextjs --lines 100`
2. Check Mailgun dashboard for delivery status
3. Verify all environment variables are set
4. Ensure emails are authorized (for sandbox)
5. Check Strapi admin to confirm enquiry was saved

The system is designed to save enquiries even if email fails, so you'll always have a record in Strapi!


