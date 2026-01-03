# How the Email Mechanism Works

This document explains the complete flow of how enquiry emails are sent when a customer submits a form on your website.

## 📋 Overview

When a customer submits an enquiry form (contact form or property enquiry), the system:
1. **Saves the enquiry to Strapi** (database)
2. **Sends an email notification via Mailgun** to the admin email
3. **Returns success to the user** (even if email fails, so the enquiry is still saved)

---

## 🔄 Complete Flow Diagram

```
┌─────────────────┐
│  Customer fills  │
│  enquiry form    │
└────────┬──────────┘
         │
         ▼
┌─────────────────┐
│  Form submits    │
│  to /api/       │
│  property-enquiry│
└────────┬──────────┘
         │
         ▼
┌─────────────────┐
│  API validates  │
│  required fields │
│  (name, email,  │
│   phone)         │
└────────┬──────────┘
         │
         ▼
┌─────────────────┐
│  Save to Strapi │
│  Database       │
└────────┬──────────┘
         │
         │ ✅ Success
         ▼
┌─────────────────┐
│  Send Email via  │
│  Mailgun API    │
└────────┬──────────┘
         │
         │ ✅ Success
         ▼
┌─────────────────┐
│  Return success │
│  to frontend    │
└─────────────────┘
```

---

## 📝 Step-by-Step Process

### Step 1: User Submits Form

**Location:** `app/contact/page.tsx` or `components/properties/PropertyDetail.tsx`

When a user fills out and submits a form:

```typescript
// User enters: name, email, phone, message, subject/property
const data = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+44 123 456 7890",
  message: "I'm interested in this property...",
  propertySlug: "property-123",  // or empty for contact form
  propertyTitle: "Beautiful 3 Bedroom House",  // or "General Inquiry"
  subject: "Property Management"  // for contact form
};

// Form submits to API
fetch("/api/property-enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
```

### Step 2: API Receives Request

**Location:** `app/api/property-enquiry/route.ts` (line 12)

The Next.js API route receives the POST request:

```typescript
export async function POST(request: NextRequest) {
  // 1. Parse the request body
  const body = await request.json();
  const { name, email, phone, message, propertySlug, propertyTitle, subject } = body;
  
  // 2. Validate required fields
  if (!name || !email || !phone) {
    return error response;
  }
}
```

### Step 3: Save to Strapi Database

**Location:** `app/api/property-enquiry/route.ts` (lines 35-189)

Before sending email, the enquiry is saved to Strapi:

```typescript
// Prepare data for Strapi
const enquiryData = {
  data: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+44 123 456 7890",
    message: "I'm interested...",
    property_slug: "property-123",
    property_title: "Beautiful 3 Bedroom House",
    status: "new"
  }
};

// Send to Strapi API
await fetch(`${STRAPI_URL}/api/property-enquiries`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${STRAPI_API_TOKEN}`
  },
  body: JSON.stringify(enquiryData)
});
```

**Why save first?** 
- Ensures the enquiry is stored even if email fails
- Provides a backup record in the database
- Allows tracking and management in Strapi admin

### Step 4: Send Email via Mailgun

**Location:** `app/api/property-enquiry/route.ts` (lines 191-216, 269-426)

After successfully saving to Strapi, the system sends an email:

```typescript
// Call email function
await sendEmailNotification({
  name: "John Doe",
  email: "john@example.com",
  phone: "+44 123 456 7890",
  message: "I'm interested...",
  propertyTitle: "Beautiful 3 Bedroom House",
  propertySlug: "property-123",
  subject: ""
});
```

#### Inside `sendEmailNotification()` function:

**1. Check Configuration** (lines 278-296)
```typescript
// Verify Mailgun is configured
if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
  console.warn("Mailgun not configured");
  throw new Error("Mailgun not configured");
}
```

**2. Initialize Mailgun Client** (lines 298-302)
```typescript
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY  // From environment variable
});
```

**3. Create Email Content** (lines 308-417)

The system creates two versions of the email:
- **HTML version** - Beautiful formatted email with styling
- **Text version** - Plain text fallback

**HTML Email includes:**
- Branded header with Pevona colors (#002f57)
- Property details with link (if property enquiry)
- Contact information (name, email, phone)
- Customer's message
- Next steps reminder
- Professional footer

**4. Send via Mailgun API** (lines 419-425)
```typescript
await mg.messages.create(MAILGUN_DOMAIN, {
  from: `Pevona <noreply@${MAILGUN_DOMAIN}>`,
  to: [ADMIN_EMAIL],  // admin-pev@pevonaltd.co.uk
  subject: `New Property Enquiry: Beautiful 3 Bedroom House`,
  text: emailText,    // Plain text version
  html: emailHtml     // HTML version
});
```

**What Mailgun does:**
- Receives the email request via API
- Validates the sender domain
- Delivers the email to the recipient
- Tracks delivery status
- Provides logs and analytics

### Step 5: Error Handling

**Location:** `app/api/property-enquiry/route.ts` (lines 203-216)

The system handles email failures gracefully:

```typescript
try {
  await sendEmailNotification({...});
  console.log("✅ Email sent successfully");
} catch (emailError) {
  console.error("❌ Email sending failed:", emailError);
  // Don't fail the request - enquiry is still saved to Strapi
}
```

**Key Point:** Even if email fails, the API still returns success because:
- The enquiry is already saved to Strapi
- You can still access it in Strapi admin
- The customer gets a success message
- Email errors are logged for debugging

### Step 6: Return Response to Frontend

**Location:** `app/api/property-enquiry/route.ts` (lines 218-221)

```typescript
return NextResponse.json(
  { success: true, data: savedEnquiry.data },
  { status: 200 }
);
```

The frontend receives success and shows a confirmation message to the user.

---

## 🔧 Configuration Required

### Environment Variables

The email mechanism requires these environment variables:

```env
# Mailgun Credentials
MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=sandboxXXXXX.mailgun.org

# Admin Email (recipient) - can be comma-separated for multiple emails
ADMIN_EMAIL=admin-pev@pevonaltd.co.uk,test@example.com

# Site URL (for email links)
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # or your production URL

# Strapi (for saving enquiries)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-strapi-token
```

### Mailgun Setup Requirements

1. **API Key** - From Mailgun Dashboard → Settings → API Keys
2. **Domain** - Either:
   - Sandbox domain (for testing) - format: `sandboxXXXXX.mailgun.org`
   - Custom domain (for production) - e.g., `mg.pevonaltd.co.uk`
3. **Authorized Recipients** (for sandbox):
   - Must authorize `admin-pev@pevonaltd.co.uk` in Mailgun dashboard
   - Sandbox domains can only send to authorized emails

---

## 📧 Email Template Details

### Email Structure

```
┌─────────────────────────────────────┐
│  Header (Pevona Blue #002f57)        │
│  "New Property Enquiry"             │
├─────────────────────────────────────┤
│  Introduction text                   │
│  "You have received a new enquiry..." │
├─────────────────────────────────────┤
│  Property Box (if property enquiry) │
│  - Property Title                    │
│  - Link to view property            │
├─────────────────────────────────────┤
│  Contact Details:                    │
│  - Name: John Doe                   │
│  - Email: john@example.com          │
│  - Phone: +44 123 456 7890          │
│  - Message: [customer message]      │
├─────────────────────────────────────┤
│  Next Steps:                        │
│  - Contact the enquirer             │
│  - Update status in Strapi          │
│  - Follow up within 24 hours         │
├─────────────────────────────────────┤
│  Footer                             │
│  "Sent from Pevona system"          │
└─────────────────────────────────────┘
```

### Email Features

- **Responsive Design** - Works on mobile and desktop
- **Branded Colors** - Uses Pevona brand colors (#002f57, #0073B5)
- **Clickable Links** - Email, phone, and property links are clickable
- **HTML & Text Versions** - Email clients receive both formats
- **Security** - HTML is escaped to prevent XSS attacks

---

## 🔍 Monitoring & Debugging

### Check Email Delivery

1. **Mailgun Dashboard:**
   - Go to **Sending** → **Logs**
   - See all sent emails and their status
   - Check for bounces or failures

2. **Server Logs:**
   ```bash
   # Check Next.js logs
   pm2 logs nextjs --lines 50
   
   # Look for:
   # ✅ "Email notification sent successfully"
   # ❌ "Email sending failed"
   ```

3. **Strapi Admin:**
   - Go to **Content Manager** → **Property Enquiry**
   - Verify enquiries are being saved
   - Check enquiry details

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Email not sending | Mailgun not configured | Add `MAILGUN_API_KEY` and `MAILGUN_DOMAIN` to `.env` |
| "Forbidden" error | Wrong API key | Verify API key in Mailgun dashboard |
| "Domain not found" | Wrong domain name | Check domain spelling in `.env` |
| "Sandbox error" | Recipient not authorized | Authorize email in Mailgun dashboard |
| Email in spam | Sandbox domain | Use custom domain for production |

---

## 🚀 Production Considerations

### For Production Use:

1. **Use Custom Domain:**
   - Add your own domain to Mailgun (e.g., `mg.pevonaltd.co.uk`)
   - Configure DNS records
   - Verify domain in Mailgun
   - Update `MAILGUN_DOMAIN` in environment

2. **Monitor Usage:**
   - Check Mailgun dashboard for email volume
   - Set up alerts for failures
   - Monitor bounce rates

3. **Rate Limiting:**
   - Mailgun free tier: 1,000 emails/month
   - Consider upgrading if needed
   - Implement queue for high volume

4. **Security:**
   - Never commit API keys to Git
   - Use environment variables
   - Rotate API keys periodically
   - Use different keys for dev/prod

---

## 📊 Summary

**The email mechanism ensures:**
- ✅ All enquiries are saved to Strapi (permanent record)
- ✅ Admin receives immediate email notification
- ✅ System continues working even if email fails
- ✅ Professional, branded email templates
- ✅ Complete enquiry details in email
- ✅ Easy tracking and management

**Key Files:**
- `app/api/property-enquiry/route.ts` - Main API handler
- `app/contact/page.tsx` - Contact form
- `components/properties/PropertyDetail.tsx` - Property enquiry form
- `.env.local` - Environment variables (not in Git)

**Dependencies:**
- `mailgun.js` - Mailgun SDK for Node.js
- `form-data` - For Mailgun API requests

---

## 🔗 Related Documentation

- `HOW_TO_GET_MAILGUN_CREDENTIALS.md` - How to get Mailgun API key and domain
- `PROPERTY_ENQUIRY_SETUP.md` - Complete setup guide
- `DEPLOYMENT_STEPS_SERVER.md` - Server deployment with email setup

