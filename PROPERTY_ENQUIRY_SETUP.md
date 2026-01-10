# Property Enquiry Form Setup

## ✅ Completed Steps

1. ✅ Created Strapi content type for property enquiries
2. ✅ Installed Mailgun package
3. ✅ Created Next.js API route with email template
4. ✅ Updated PropertyDetail component with form submission

## 📋 Next Steps

### 1. Create `.env.local` file

Create a `.env.local` file in the root directory with:

```env
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-local-strapi-api-token-here

# Mailgun Configuration (Optional - leave empty to skip email sending)
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
# For sandbox: sandboxXXXXX.mailgun.org (find in Mailgun dashboard)

# Admin email (where property enquiry notifications go)
ADMIN_EMAIL=nagraj@grape5.com

# Site URL (for email links)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Get Strapi API Token

1. Open `http://localhost:1337/admin`
2. Go to **Settings** → **API Tokens**
3. Create a new token with **Full access** permissions
4. Copy the token and add it to `.env.local` as `STRAPI_API_TOKEN`

### 3. Get Mailgun Domain (Optional for Local Testing)

**Option A: Use Mailgun Sandbox Domain (Free, for testing)**

1. Go to https://app.mailgun.com and sign in
2. In the dashboard, go to **Sending** → **Domains**
3. You'll see a sandbox domain (format: `sandboxXXXXX.mailgun.org`)
4. Copy the domain name
5. Add it to `.env.local` as `MAILGUN_DOMAIN`
6. **Important:** Go to **Sending** → **Authorized Recipients** and add your email address (the one in `ADMIN_EMAIL`)
   - Sandbox domains can only send to authorized recipients
   - You'll receive a verification email - click the link to authorize

**Option B: Skip Email for Local Development**

If you don't want to set up Mailgun right now, you can leave `MAILGUN_DOMAIN` empty. The form will still work and save to Strapi, but emails won't be sent. Enquiry details will be logged to the console instead.

**Option C: Add Your Own Domain (For Production)**

1. In Mailgun dashboard, click **Add New Domain**
2. Enter your domain (e.g., `mg.pevona.com`)
3. Follow DNS setup instructions
4. Once verified, use it as `MAILGUN_DOMAIN`

### 4. Restart Strapi

After creating the content type, restart Strapi so it picks up the new schema:

```bash
cd strapi
npm run dev
```

### 5. Restart Next.js

Restart your Next.js dev server to load the new environment variables:

```bash
npm run dev
```

## 🧪 Testing

1. Navigate to any property detail page (e.g., `/properties/[slug]`)
2. Fill out the "Book a Viewing or Reserve" form
3. Submit the form
4. Check:
   - ✅ Form shows success message
   - ✅ Strapi admin → Content Manager → Property Enquiries (new entry appears)
   - ✅ Email received at `ADMIN_EMAIL`

## 📧 Email Template

The email includes:
- Branded header with Pevona colors (#002f57)
- Property details with link
- Contact information (name, email, phone)
- Message (if provided)
- Next steps reminder
- Professional footer

## 🔧 Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify `STRAPI_API_TOKEN` is correct
- Ensure Strapi is running and accessible

### Email not sending
- Verify `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` are correct
- Check Mailgun dashboard for delivery logs
- If using sandbox domain, ensure recipient is authorized
- Check server logs for Mailgun errors

### Enquiry not saving to Strapi
- Verify Strapi content type was created correctly
- Check Strapi logs for errors
- Ensure API token has proper permissions

