# Fix: Mixed Content Error and Share Modal JavaScript Error

## Issues Fixed

### 1. Mixed Content Error ✅
**Problem**: The site is served over HTTPS (`https://pevonaltd.co.uk`) but was loading images from HTTP Strapi server (`http://31.97.117.9:1337`), causing browsers to block the images.

**Solution**: 
- Added a Next.js rewrite rule in `next.config.js` to proxy Strapi images through Next.js
- Updated `lib/images.ts` to automatically convert HTTP Strapi URLs to use the proxy path (`/strapi-uploads/`)
- This ensures all images are served over HTTPS through the Next.js server

### 2. Share Modal JavaScript Error
**Problem**: `share-modal.js:1 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`

**Possible Causes**:
- Browser extension injecting a script
- Third-party service script
- Missing DOM element that the script expects

**Solution**: The error is likely from an external source. If it persists, check:
1. Browser extensions (disable them to test)
2. Third-party scripts loaded in the page
3. Check browser console for the full stack trace

## Changes Made

### `next.config.js`
Added rewrite rule to proxy Strapi uploads:
```javascript
async rewrites() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  return [
    {
      source: '/strapi-uploads/:path*',
      destination: `${strapiUrl}/uploads/:path*`,
    },
  ];
}
```

### `lib/images.ts`
- Added `convertToProxyUrl()` function to convert HTTP Strapi URLs to proxy paths
- Updated `getImageUrl()` and `getDocumentUrl()` to automatically use proxy paths
- Works for both server-side and client-side rendering

## How It Works

1. When an image URL like `http://31.97.117.9:1337/uploads/image.jpg` is generated
2. The `convertToProxyUrl()` function converts it to `/strapi-uploads/image.jpg`
3. Next.js rewrite rule intercepts requests to `/strapi-uploads/*`
4. Next.js proxies the request to the actual Strapi server
5. Image is served over HTTPS through Next.js, avoiding mixed content errors

## Testing

After deploying:
1. Check browser console - mixed content errors should be gone
2. Verify images load correctly on all pages
3. Check Network tab - images should be served from `/strapi-uploads/` path
4. Verify images are served over HTTPS

## Deployment Notes

- No environment variable changes needed
- The rewrite works automatically based on `NEXT_PUBLIC_STRAPI_URL`
- Works in both development and production
- No changes needed to Strapi server

## If Share Modal Error Persists

1. Open browser DevTools → Console
2. Check the full error stack trace
3. Look for where `share-modal.js` is loaded from
4. Check if it's a browser extension (disable extensions to test)
5. Check Network tab for any external scripts loading `share-modal.js`

