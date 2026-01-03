# Production Deployment Steps - Your Server

## Server Information
- **Server IP**: 31.97.117.9
- **SSH**: `ssh root@31.97.117.9`
- **OS**: AlmaLinux 9 with cPanel
- **Hostname**: srv1102297.hstgr.cloud

## Step-by-Step Deployment

### 1. SSH into Your Server
```bash
ssh root@31.97.117.9
```
Enter your root password when prompted.

### 2. Navigate to Your Project Directory
First, find where your project is located:
```bash
# Common locations:
# /home/username/pevona
# /var/www/pevona
# /root/pevona

# Search for your project
find /home -name "pevona" -type d 2>/dev/null
find /var/www -name "pevona" -type d 2>/dev/null
find /root -name "pevona" -type d 2>/dev/null

# Or check where PM2 processes are running
pm2 list
pm2 info nextjs  # or your process name
```

Once you find it, navigate there:
```bash
cd /path/to/pevona
# Example: cd /home/username/pevona
```

### 3. Check Current Status
```bash
# Check if services are running
pm2 status

# Check current git status
git status

# Check current branch
git branch
```

### 4. Pull Latest Changes
```bash
# Make sure you're on main branch
git checkout main

# Pull latest changes
git pull origin main
```

If you get merge conflicts or need to reset:
```bash
# Backup current state (optional)
cp -r . ../pevona-backup-$(date +%Y%m%d)

# If you need to discard local changes and use remote
git fetch origin
git reset --hard origin/main
```

### 5. Install/Update Dependencies
```bash
# For Next.js (in project root)
npm install

# For Strapi (if in separate directory)
cd strapi
npm install
cd ..
```

### 6. Update Environment Variables

#### For Next.js:
```bash
# Check if .env.production exists
ls -la .env*

# Edit or create .env.production
nano .env.production
```

Add/update these variables:
```env
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
# Or if you have a domain:
# NEXT_PUBLIC_STRAPI_URL=https://api.yourdomain.com

STRAPI_API_TOKEN=your-production-strapi-api-token-here

MAILGUN_API_KEY=your-mailgun-api-key-here
MAILGUN_DOMAIN=your-mailgun-domain.com
# For sandbox: sandboxXXXXX.mailgun.org

ADMIN_EMAIL=nagraj@grape5.com

NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
# Or if you have a domain:
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Save and exit: `Ctrl+X`, then `Y`, then `Enter`

#### For Strapi:
```bash
cd strapi
nano .env
```

Ensure these are set:
```env
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-password

HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
JWT_SECRET=your-jwt-secret
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
```

Save and exit, then go back:
```bash
cd ..
```

### 7. Get/Create Strapi API Token (if needed)
If you need a new API token:
```bash
# Access Strapi admin
# Visit: http://31.97.117.9:1337/admin
# Go to Settings → API Tokens
# Create new token with "Full access"
# Copy and add to Next.js .env.production
```

### 8. Rebuild Next.js Application
```bash
# Make sure you're in project root
pwd

# Build with increased memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

If build fails due to memory:
```bash
# Check available memory
free -h

# Try with more memory
NODE_OPTIONS="--max-old-space-size=6144" npm run build
```

### 9. Restart Services with PM2

#### Check current PM2 processes:
```bash
pm2 list
```

#### Restart Next.js:
```bash
# If process is named "nextjs"
pm2 restart nextjs

# Or restart all
pm2 restart all

# Or if you have a specific name, use that
pm2 restart pevona-nextjs
```

#### Restart Strapi:
```bash
pm2 restart strapi
# or
pm2 restart pevona-strapi
```

#### If services aren't running, start them:
```bash
# For Next.js (from project root)
pm2 start npm --name "nextjs" -- start
# or if using custom script:
# pm2 start ecosystem.config.js

# For Strapi (from strapi directory)
cd strapi
pm2 start npm --name "strapi" -- start
cd ..
```

### 10. Save PM2 Configuration
```bash
# Save current PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the command it outputs
```

### 11. Check Service Status
```bash
# Check PM2 status
pm2 status

# Check if ports are listening
netstat -tulpn | grep -E '3000|1337'
# or
ss -tulpn | grep -E '3000|1337'
```

### 12. Check Logs
```bash
# Next.js logs
pm2 logs nextjs --lines 50

# Strapi logs
pm2 logs strapi --lines 50

# Exit logs: Press Ctrl+C
```

### 13. Verify Firewall (if Strapi not accessible)
```bash
# Check firewall status
systemctl status firewalld

# If firewalld is active, open ports
sudo firewall-cmd --permanent --add-port=1337/tcp
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload

# Verify ports are open
sudo firewall-cmd --list-ports
```

### 14. Verify Deployment

#### Test Next.js:
1. Visit: `http://31.97.117.9:3000`
2. Check navigation:
   - "Book a Free Valuation" → should go to `/contact`
   - "Speak To Our Team" (homepage) → should go to `/about`
3. Check responsive design on different screen sizes
4. Verify Manrope font on paragraphs and lists

#### Test Property Enquiry Form:
1. Go to any property: `http://31.97.117.9:3000/properties/[slug]`
2. Fill out the enquiry form
3. Submit
4. Verify:
   - ✅ Success message appears
   - ✅ Check Strapi admin: `http://31.97.117.9:1337/admin` → Content Manager → Property Enquiries
   - ✅ Check email at `nagraj@grape5.com`

#### Test Strapi:
- Visit: `http://31.97.117.9:1337/admin`
- Login and verify Property Enquiries content type exists

## Quick Deployment Script

You can create a script to automate this:

```bash
# Create deployment script
nano deploy.sh
```

Paste this:
```bash
#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Navigate to project (update path)
cd /path/to/pevona

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build Next.js
echo "🔨 Building Next.js..."
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Restart services
echo "🔄 Restarting services..."
pm2 restart all

# Show status
echo "✅ Deployment complete!"
pm2 status
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

## Troubleshooting

### Can't find project directory
```bash
# Search more broadly
find / -name "package.json" -path "*/pevona/*" 2>/dev/null | head -5
```

### Git pull fails
```bash
# Check git remote
git remote -v

# If needed, set remote
git remote set-url origin https://github.com/nyr95/pevonalive.git
```

### Build fails
```bash
# Check Node version
node -v  # Should be v18+ or v20

# Check disk space
df -h

# Check memory
free -h

# Clear Next.js cache
rm -rf .next
npm run build
```

### PM2 process not found
```bash
# List all processes
pm2 list

# Check PM2 logs
pm2 logs

# If you need to start fresh:
cd /path/to/pevona
pm2 delete all
pm2 start npm --name "nextjs" -- start
cd strapi
pm2 start npm --name "strapi" -- start
pm2 save
```

### Port already in use
```bash
# Find what's using the port
lsof -i :3000
lsof -i :1337

# Kill the process if needed
kill -9 <PID>
```

### Strapi not accessible from outside
```bash
# Check Strapi config
cat strapi/config/server.js

# Ensure HOST is 0.0.0.0, not 127.0.0.1
# Check firewall rules
sudo firewall-cmd --list-all
```

## Important Notes

1. **Backup First**: Always backup your database before major deployments
   ```bash
   # Backup PostgreSQL
   pg_dump -U strapi strapi > backup_$(date +%Y%m%d).sql
   ```

2. **Test Locally First**: Test all changes locally before deploying

3. **Monitor Logs**: Keep an eye on PM2 logs after deployment:
   ```bash
   pm2 logs --lines 100
   ```

4. **cPanel Access**: You can also manage some things through cPanel at your server's cPanel URL

5. **Domain Setup**: If you have a domain, update DNS records and use domain names in environment variables instead of IP addresses

## Need Help?

If something goes wrong:
1. Check PM2 logs: `pm2 logs`
2. Check system logs: `journalctl -xe`
3. Verify environment variables are correct
4. Ensure all services are running: `pm2 status`

