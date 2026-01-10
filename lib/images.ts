const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Converts a Strapi image URL to use the Next.js proxy (for HTTPS compatibility)
 * In production, we proxy Strapi images through Next.js to avoid mixed content errors
 * Always converts HTTP URLs to proxy paths to ensure HTTPS compatibility
 */
function convertToProxyUrl(url: string): string {
  // If already using proxy, return as-is
  if (url.startsWith('/strapi-uploads/')) {
    return url;
  }
  
  // If it's a full HTTP URL pointing to Strapi uploads, convert to proxy
  if (url.startsWith('http://') && url.includes('/uploads/')) {
    const uploadsIndex = url.indexOf('/uploads/');
    if (uploadsIndex !== -1) {
      const pathAfterUploads = url.substring(uploadsIndex + '/uploads/'.length);
      return `/strapi-uploads/${pathAfterUploads}`;
    }
  }
  
  // If it's a relative path starting with /uploads/, convert to proxy
  if (url.startsWith('/uploads/')) {
    return url.replace('/uploads/', '/strapi-uploads/');
  }
  
  return url;
}

export function getImageUrl(image: any): string {
  if (!image) return "/placeholder.jpg";
  
  if (typeof image === "string") {
    const url = image.startsWith("http") || image.startsWith("/") ? image : `${STRAPI_URL}${image}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(url);
  }
  
  if (image.data) {
    const url = image.data.attributes?.url || image.data.url;
    if (!url) return "/placeholder.jpg";
    const fullUrl = url.startsWith("http") || url.startsWith("/") ? url : `${STRAPI_URL}${url}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(fullUrl);
  }
  
  if (image.attributes?.url || image.url) {
    const url = image.attributes?.url || image.url;
    if (!url) return "/placeholder.jpg";
    const fullUrl = url.startsWith("http") || url.startsWith("/") ? url : `${STRAPI_URL}${url}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(fullUrl);
  }
  
  return "/placeholder.jpg";
}

// Helper function specifically for documents (files and images)
export function getDocumentUrl(document: any): string {
  if (!document) return "#";
  
  if (typeof document === "string") {
    const url = document.startsWith("http") || document.startsWith("/") ? document : `${STRAPI_URL}${document}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(url);
  }
  
  if (document.data) {
    const url = document.data.attributes?.url || document.data.url;
    if (!url) return "#";
    const fullUrl = url.startsWith("http") || url.startsWith("/") ? url : `${STRAPI_URL}${url}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(fullUrl);
  }
  
  if (document.attributes?.url || document.url) {
    const url = document.attributes?.url || document.url;
    if (!url) return "#";
    const fullUrl = url.startsWith("http") || url.startsWith("/") ? url : `${STRAPI_URL}${url}`;
    // Always convert HTTP URLs to proxy for HTTPS compatibility
    return convertToProxyUrl(fullUrl);
  }
  
  return "#";
}






