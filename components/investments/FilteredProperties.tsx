'use client';

import { useState } from "react";
import type { StrapiProperty } from "@/types/strapi";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertiesFilter from "@/components/finding-property/PropertiesFilter";

interface FilteredPropertiesProps {
  properties: StrapiProperty[];
}

export default function FilteredProperties({ properties }: FilteredPropertiesProps) {
  const [filteredProperties, setFilteredProperties] = useState<StrapiProperty[]>(properties);

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Search Filter Section */}
      <div className="w-full max-w-full">
        <PropertiesFilter 
          properties={properties} 
          onFilterChange={setFilteredProperties}
        />
      </div>

      {/* Properties Grid */}
      {filteredProperties.length === 0 ? (
        <div className="w-full text-center py-12">
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            No properties match your filters. Try adjusting your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

