# Production Deployment Steps

## Prerequisites
- SSH access to your VPS
- PM2 installed (for process management)
- Node.js and npm installed

## Step-by-Step Deployment

### 1. SSH into Your Production Server
```bash
ssh your-username@your-server-ip
```

### 2. Navigate to Your Project Directory
```bash
cd /path/to/your/project
# Example: cd /var/www/pevona or cd ~/pevona
```

### 3. Pull Latest Changes from Git
```bash
git pull origin main
```

### 4. Install/Update Dependencies (if needed)
```bash
# For Next.js
npm install

# For Strapi (if in separate directory)
cd strapi
npm install
cd ..
```

### 5. Update Environment Variables

#### For Next.js (`.env.production` or `.env.local`):
```bash
nano .env.production
# or
nano .env.local
```

Ensure these variables are set:
```env
NEXT_PUBLIC_STRAPI_URL=http://your-server-ip:1337
# or if using domain:
# NEXT_PUBLIC_STRAPI_URL=https://api.yourdomain.com

STRAPI_API_TOKEN=your-production-strapi-api-token

MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
# or sandbox: sandboxXXXXX.mailgun.org

ADMIN_EMAIL=nagraj@grape5.com

NEXT_PUBLIC_SITE_URL=https://yourdomain.com
# or http://your-server-ip:3000 if not using domain
```

#### For Strapi (in `strapi/.env`):
```bash
cd strapi
nano .env
```

Ensure database and server settings are correct:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-password

HOST=0.0.0.0
PORT=1337
```

### 6. Rebuild Next.js Application
```bash
# Go back to project root if in strapi directory
cd ..

# Build Next.js for production
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### 7. Restart Services with PM2

#### Restart Next.js:
```bash
pm2 restart nextjs
# or if your process has a different name:
# pm2 restart all
# or
# pm2 restart pevona-nextjs
```

#### Restart Strapi (if needed):
```bash
pm2 restart strapi
# or
# pm2 restart pevona-strapi
```

### 8. Check PM2 Status
```bash
pm2 status
```

Verify both services are running:
- ✅ Next.js should show `online` status
- ✅ Strapi should show `online` status

### 9. Check Logs (if needed)
```bash
# Next.js logs
pm2 logs nextjs

# Strapi logs
pm2 logs strapi

# Exit logs: Press Ctrl+C
```

### 10. Verify Deployment

#### Check Next.js:
- Visit your site: `http://your-server-ip:3000` or `https://yourdomain.com`
- Test navigation links:
  - "Book a Free Valuation" should go to `/contact`
  - "Speak To Our Team" (homepage) should go to `/about`
- Check responsive padding on different screen sizes
- Verify Manrope font is applied to paragraphs and lists

#### Check Property Enquiry Form:
1. Navigate to any property page: `/properties/[slug]`
2. Fill out the "Book a Viewing or Reserve" form
3. Submit the form
4. Verify:
   - ✅ Success message appears
   - ✅ Check Strapi admin: `http://your-server-ip:1337/admin` → Content Manager → Property Enquiries
   - ✅ Check email at `nagraj@grape5.com`

#### Check Strapi:
- Visit: `http://your-server-ip:1337/admin`
- Verify you can log in
- Check that Property Enquiries content type exists

### 11. Firewall Check (if needed)

If Strapi is not accessible publicly, ensure port 1337 is open:
```bash
# For firewalld (CentOS/RHEL)
sudo firewall-cmd --permanent --add-port=1337/tcp
sudo firewall-cmd --reload

# For ufw (Ubuntu)
sudo ufw allow 1337/tcp

# For iptables
sudo iptables -A INPUT -p tcp --dport 1337 -j ACCEPT
```

## Troubleshooting

### Build Fails
- Check Node.js version: `node -v` (should be v18+ or v20)
- Check disk space: `df -h`
- Check memory: `free -h`
- Increase memory limit if needed: `NODE_OPTIONS="--max-old-space-size=6144" npm run build`

### Services Won't Start
- Check PM2 logs: `pm2 logs`
- Check if ports are in use: `netstat -tulpn | grep -E '3000|1337'`
- Verify environment variables are set correctly

### Property Enquiry Form Not Working
- Check browser console for errors
- Verify `STRAPI_API_TOKEN` is correct in Next.js `.env`
- Check Strapi logs for API errors
- Verify Property Enquiry content type exists in Strapi admin

### Email Not Sending
- Verify Mailgun credentials in `.env`
- Check Mailgun dashboard for delivery logs
- If using sandbox domain, ensure `nagraj@grape5.com` is authorized
- Check server logs for Mailgun errors

## Quick Reference Commands

```bash
# Pull and deploy in one go
cd /path/to/project && \
git pull origin main && \
npm install && \
NODE_OPTIONS="--max-old-space-size=4096" npm run build && \
pm2 restart all && \
pm2 status
```

## Notes
- Always backup your database before major deployments
- Test the form submission after deployment
- Monitor PM2 logs for the first few minutes after restart
- If using a domain, ensure DNS is properly configured

