# How to Set STRAPI_API_TOKEN on Server

## Quick Setup Instructions

### 1. SSH into Your Server
```bash
ssh your-username@31.97.117.9
```

### 2. Navigate to Your Project Directory
```bash
cd /path/to/pevona
# Example: cd ~/pevona or cd /var/www/pevona
```

### 3. Set the Environment Variable

**Option A: Add to .env.local file (Recommended)**
```bash
nano .env.local
```

Add this line (replace with your actual token):
```env
STRAPI_API_TOKEN=your-token-here
```

Also ensure these are set:
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
```

Save and exit: `Ctrl+X`, then `Y`, then `Enter`

**Option B: Export in PM2 ecosystem file**
If you're using PM2 with an ecosystem file, add it there:
```bash
nano ecosystem.config.js
```

Add to the env section:
```javascript
{
  "apps": [{
    "name": "next",
    "env": {
      "STRAPI_API_TOKEN": "your-token-here",
      "NEXT_PUBLIC_STRAPI_URL": "http://31.97.117.9:1337",
      "NEXT_PUBLIC_SITE_URL": "http://31.97.117.9:3000"
    }
  }]
}
```

### 4. Restart Next.js Application
```bash
pm2 restart next
# or
pm2 restart all
```

### 5. Verify It's Working
1. Test the contact form on the website
2. Check Strapi Admin → Content Manager → Property Enquiry
3. You should see new enquiries appearing there

## Important Notes

- **Never commit the .env.local file to git** - it contains sensitive tokens
- The token should only be set on the server, not in your local code
- If you need to change the token later, just update the .env.local file and restart PM2

