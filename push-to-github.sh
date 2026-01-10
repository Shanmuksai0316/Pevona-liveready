#!/bin/bash
# Script to push to GitHub
# This will prompt you for your GitHub username and Personal Access Token

cd "$(dirname "$0")"

echo "Pushing to GitHub..."
echo "If using HTTPS, you'll need:"
echo "  - Username: Your GitHub username"
echo "  - Password: Your Personal Access Token (not your GitHub password)"
echo ""
echo "Get a token at: https://github.com/settings/tokens"
echo ""

# Try SSH first
if git push -u origin master:main 2>&1 | grep -q "Permission denied"; then
    echo ""
    echo "SSH authentication failed. Switching to HTTPS..."
    git remote set-url origin https://github.com/Shanmuksai0316/Pevona-liveready.git
    echo "Now run: git push -u origin master:main"
    echo "When prompted, use your GitHub username and Personal Access Token"
else
    echo "Successfully pushed to GitHub!"
fi

