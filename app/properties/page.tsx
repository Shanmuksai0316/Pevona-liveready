import { fetchStrapi } from "@/lib/strapi";
import PropertyCard from "@/components/properties/PropertyCard";
import type { StrapiProperty } from "@/types/strapi";

export default async function PropertiesPage() {
  const properties = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-crimson text-5xl font-bold text-pevona-dark mb-8">
        All Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties?.data && properties.data.length > 0 ? (
          properties.data.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <p className="font-manrope text-lg text-gray-600">
              No properties found. Please add properties in Strapi admin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}




