const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function getImageUrl(image: any): string {
  if (!image) return "/placeholder.jpg";
  
  if (typeof image === "string") {
    return image.startsWith("http") ? image : `${STRAPI_URL}${image}`;
  }
  
  if (image.data) {
    const url = image.data.attributes?.url || image.data.url;
    if (!url) return "/placeholder.jpg";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  if (image.attributes?.url || image.url) {
    const url = image.attributes?.url || image.url;
    if (!url) return "/placeholder.jpg";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  return "/placeholder.jpg";
}

// Helper function specifically for documents (files and images)
export function getDocumentUrl(document: any): string {
  if (!document) return "#";
  
  if (typeof document === "string") {
    return document.startsWith("http") ? document : `${STRAPI_URL}${document}`;
  }
  
  if (document.data) {
    const url = document.data.attributes?.url || document.data.url;
    if (!url) return "#";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  if (document.attributes?.url || document.url) {
    const url = document.attributes?.url || document.url;
    if (!url) return "#";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  return "#";
}






