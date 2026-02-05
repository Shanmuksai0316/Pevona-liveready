#!/bin/bash

# Deployment script for ROI Calculator
# Run this on your server after SSH'ing in

echo "🚀 Starting deployment..."

# Step 1: Find and navigate to project directory
echo "📍 Finding project directory..."
if [ -d "/root/pevona" ]; then
    cd /root/pevona
elif [ -d "/var/www/pevona" ]; then
    cd /var/www/pevona
elif [ -d "/home/pevona" ]; then
    cd /home/pevona
else
    # Try to find it via PM2
    PM2_PATH=$(pm2 info next 2>/dev/null | grep "script path" | awk '{print $4}' | xargs dirname 2>/dev/null)
    if [ -n "$PM2_PATH" ]; then
        cd "$PM2_PATH"
        echo "✅ Found project at: $PM2_PATH"
    else
        echo "❌ Project directory not found. Please navigate manually."
        exit 1
    fi
fi

echo "✅ Project directory: $(pwd)"

# Step 2: Check git status
echo "📋 Checking git status..."
git status

# Step 3: Pull latest changes
echo "⬇️  Pulling latest changes from git..."
git pull origin main

if [ $? -ne 0 ]; then
    echo "❌ Git pull failed. Please check your git configuration."
    exit 1
fi

# Step 4: Install dependencies (if package.json changed)
echo "📦 Checking for dependency updates..."
if [ -f "package.json" ]; then
    npm install
fi

# Step 5: Build Next.js application
echo "🔨 Building Next.js application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Step 6: Restart PM2 process
echo "🔄 Restarting PM2 process..."
pm2 restart next --update-env

if [ $? -ne 0 ]; then
    echo "⚠️  PM2 restart failed. Trying to start instead..."
    pm2 start npm --name "next" -- start
fi

# Step 7: Check status
echo "✅ Deployment complete! Checking status..."
pm2 status
pm2 logs next --lines 20

echo ""
echo "🎉 Deployment successful! Your ROI Calculator is now live."
echo "🌐 Check your site at: https://pevonaltd.co.uk/roi-calculator"

