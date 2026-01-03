# Step-by-Step: Set STRAPI_API_TOKEN on Server

## Prerequisites
- SSH access to your server (31.97.117.9)
- Your SSH username and password/key
- The Strapi API token: `c4ff7f15e34413ac57a6a10826b560e4ff579d71262450402f83ec180ba78c906e8908777a809a015009d92072903799f32f1349829a1cb6e205c3eba9b5a0c98bac847093cc7a7787f1abcc184d35e1413d2bc05832ba5b629d68e5d6f53263e60e337a92075352bff0a154527c7fe6db185e272f35d5e43e98bd4eadec47a7`

## Step 1: Connect to Your Server

### On Windows (PowerShell or Command Prompt):
```powershell
ssh your-username@31.97.117.9
```

### On Mac/Linux:
```bash
ssh your-username@31.97.117.9
```

**Replace `your-username` with your actual SSH username**

You'll be prompted for your password. Enter it when asked.

## Step 2: Navigate to Your Project Directory

Once connected, find your project directory. Common locations:
```bash
# Check where you are
pwd

# Common project locations - try these:
cd ~/pevona
# or
cd /var/www/pevona
# or
cd /home/your-username/pevona
# or check what's in your home directory
ls -la
```

## Step 3: Check if .env.local Already Exists

```bash
ls -la .env.local
```

If it exists, you'll edit it. If not, you'll create it.

## Step 4: Create or Edit .env.local File

### If file doesn't exist, create it:
```bash
nano .env.local
```

### If file exists, edit it:
```bash
nano .env.local
```

## Step 5: Add the Environment Variables

In the nano editor, add or update these lines:

```env
STRAPI_API_TOKEN=c4ff7f15e34413ac57a6a10826b560e4ff579d71262450402f83ec180ba78c906e8908777a809a015009d92072903799f32f1349829a1cb6e205c3eba9b5a0c98bac847093cc7a7787f1abcc184d35e1413d2bc05832ba5b629d68e5d6f53263e60e337a92075352bff0a154527c7fe6db185e272f35d5e43e98bd4eadec47a7
NEXT_PUBLIC_STRAPI_URL=http://31.97.117.9:1337
NEXT_PUBLIC_SITE_URL=http://31.97.117.9:3000
```

**Important**: Make sure there are NO spaces around the `=` sign.

## Step 6: Save and Exit nano

1. Press `Ctrl + X` to exit
2. Press `Y` to confirm you want to save
3. Press `Enter` to confirm the filename

## Step 7: Verify the File Was Created/Updated

```bash
cat .env.local
```

You should see your environment variables. Make sure the token is there.

## Step 8: Restart Next.js Application

### Check what PM2 processes are running:
```bash
pm2 list
```

### Restart Next.js (use the name from pm2 list):
```bash
# Common names:
pm2 restart next
# or
pm2 restart nextjs
# or
pm2 restart all
```

### Check if it restarted successfully:
```bash
pm2 logs next --lines 20
```

Look for any errors. If you see the app starting successfully, you're good!

## Step 9: Test the Contact Form

1. Go to: `http://31.97.117.9:3000/contact`
2. Fill out the contact form
3. Submit it
4. Check if you see a success message
5. Go to Strapi Admin: `http://31.97.117.9:1337/admin`
6. Navigate to: **Content Manager** → **Property Enquiry**
7. You should see the new enquiry there!

## Troubleshooting

### If PM2 restart fails:
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs next --lines 50

# If process doesn't exist, start it:
cd /path/to/pevona
pm2 start npm --name "next" -- start
```

### If environment variable isn't being read:
```bash
# Check if .env.local exists
ls -la .env.local

# Verify contents
cat .env.local

# Make sure you're in the right directory
pwd
```

### If you need to check if the token is being read:
```bash
# Check PM2 environment (if using ecosystem file)
pm2 show next

# Or check the logs for any token-related errors
pm2 logs next | grep -i token
```

## Quick Reference Commands

```bash
# SSH into server
ssh your-username@31.97.117.9

# Navigate to project
cd ~/pevona

# Edit environment file
nano .env.local

# Restart app
pm2 restart next

# Check logs
pm2 logs next --lines 20

# Check status
pm2 status
```

