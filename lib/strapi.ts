import { getImageUrl } from "./images";
import type { StrapiResponse } from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function fetchStrapi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<StrapiResponse<T> | null> {
  const url = `${STRAPI_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      cache: "no-store", // Always fetch fresh data in development
    });

    if (!response.ok) {
      console.warn(`Strapi API error: ${response.statusText}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.warn(`Failed to fetch from Strapi: ${error}`);
    return null;
  }
}

export { getImageUrl };


