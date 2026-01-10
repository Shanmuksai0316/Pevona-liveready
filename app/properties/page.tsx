import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import PropertiesFilterSection from "@/components/finding-property/PropertiesFilterSection";

export default async function PropertiesPage() {
  const properties = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-[100px] sm:pt-[120px] lg:pt-[140px] pb-16">
      <h1 className="font-crimson text-5xl font-bold text-pevona-dark mb-8">
        All Properties
      </h1>
      
      {/* Filter Section */}
      {properties?.data && properties.data.length > 0 && (
        <PropertiesFilterSection 
          properties={properties.data} 
        />
      )}
      
      {/* Fallback if no properties */}
      {(!properties?.data || properties.data.length === 0) && (
        <div className="text-center py-16">
          <p className="font-manrope text-lg text-gray-600">
            No properties found. Please add properties in Strapi admin.
          </p>
        </div>
      )}
    </div>
  );
}




