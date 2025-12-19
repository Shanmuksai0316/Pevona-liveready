export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width: number;
    height: number;
    formats?: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiSEO {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaImage?: StrapiImage;
  metaRobots?: string;
  structuredData?: any;
  metaViewport?: string;
  canonicalURL?: string;
}

export interface StrapiProperty {
  id: number;
  attributes: {
    title: string;
    slug: string;
    status: "For Sale" | "For Rent" | "Sold";
    price: number;
    currency: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    short_description?: string;
    description?: string;
    features?: any;
    gallery?: {
      data: StrapiImage[];
    };
    floor_plans?: {
      data: StrapiImage[];
    };
    latitude?: number;
    longitude?: number;
    map_embed?: string;
    seo?: StrapiSEO;
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}

export interface StrapiBlog {
  id: number;
  attributes: {
    title: string;
    slug: string;
    author?: string;
    featured_image?: {
      data: StrapiImage;
    };
    excerpt?: string;
    content?: string;
    category?: string;
    tags?: string[];
    publishedAt?: string;
    seo?: StrapiSEO;
    createdAt: string;
    updatedAt: string;
  };
}






