# SSL Setup Guide - Step by Step

Since your domain is already working, follow these steps to add SSL/HTTPS:

## Step 1: SSH into Your Server

```bash
ssh root@31.97.117.9
```

## Step 2: Install Certbot

```bash
# For CentOS/RHEL/AlmaLinux
sudo yum install certbot python3-certbot-nginx -y

# For Ubuntu/Debian (if different)
# sudo apt install certbot python3-certbot-nginx -y
```

## Step 3: Get SSL Certificates

**Important:** Replace `pevonaltd.co.uk` with your actual domain name if different.

```bash
sudo certbot --nginx -d pevonaltd.co.uk -d www.pevonaltd.co.uk -d api.pevonaltd.co.uk
```

**What to expect:**
- Enter your email address (for renewal notices)
- Type `A` to agree to terms
- Type `Y` or `N` for sharing email with EFF (optional)
- Certbot will automatically configure Nginx

## Step 4: Verify SSL is Working

```bash
# Test Nginx configuration
sudo nginx -t

# If successful, reload Nginx
sudo systemctl reload nginx
```

## Step 5: Test in Browser

Visit:
- `https://pevonaltd.co.uk` (should show padlock)
- `https://api.pevonaltd.co.uk` (should show padlock)

## Step 6: Update Environment Variables

Navigate to your project:
```bash
cd /path/to/pevona
# Example: cd /var/www/pevona or cd ~/pevona
```

Edit environment file:
```bash
nano .env.production
# or
nano .env.local
```

**Change from `http://` to `https://`:**
```env
NEXT_PUBLIC_SITE_URL=https://pevonaltd.co.uk
NEXT_PUBLIC_STRAPI_URL=https://api.pevonaltd.co.uk
```

Save: `Ctrl+X`, then `Y`, then `Enter`

## Step 7: Rebuild and Restart

```bash
# Rebuild Next.js
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Restart services
pm2 restart all
```

## Step 8: Verify Auto-Renewal

```bash
# Check if auto-renewal is set up
sudo systemctl status certbot.timer

# Test renewal (dry run)
sudo certbot renew --dry-run
```

## Troubleshooting

**If Certbot says "Domain not pointing to this server":**
- Wait a few more minutes for DNS to fully propagate
- Verify: `nslookup pevonaltd.co.uk` should show `31.97.117.9`

**If port 80 is blocked:**
```bash
# Open ports in firewall
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

**If Nginx config has errors:**
```bash
# Check Nginx error log
sudo tail -f /var/log/nginx/error.log
```

## Done!

Your site should now be accessible via HTTPS. Certificates will auto-renew every 90 days.

