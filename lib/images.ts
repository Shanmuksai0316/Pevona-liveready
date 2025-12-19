const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export function getImageUrl(image: any): string {
  if (!image) return "/placeholder.jpg";
  
  if (typeof image === "string") {
    return image.startsWith("http") ? image : `${STRAPI_URL}${image}`;
  }
  
  if (image.data) {
    const url = image.data.attributes?.url || image.data.url;
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  if (image.attributes?.url || image.url) {
    const url = image.attributes?.url || image.url;
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }
  
  return "/placeholder.jpg";
}






