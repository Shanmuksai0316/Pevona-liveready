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
    tenure_information?: string;
    council_tax_band?: string;
    rent_price?: number;
    annual_ground_rents?: string;
    estimated_annual_service_charges?: string;
    number_of_years_of_lease?: string;
    hmo?: string;
    local_council?: string;
    property_type?: string;
    utilities?: string;
    parking?: string;
    accessibility?: string;
    cladding_building_safety?: string;
    rights_restrictions?: string;
    flood_risk?: string;
    listed_status?: string;
    epc_rating?: string;
    service_charge?: number;
    ground_rent?: number;
    review_period?: string;
    lease_remaining?: string;
    documents?: {
      data: StrapiImage[];
    };
    epc_document?: {
      data: StrapiImage;
    };
    gas_safety_certificate?: {
      data: StrapiImage;
    };
    electrical_safety_report?: {
      data: StrapiImage;
    };
    hmo_licence?: {
      data: StrapiImage;
    };
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






