import { fetchStrapi } from "@/lib/strapi";
import PropertyCard from "../properties/PropertyCard";
import Link from "next/link";
import type { StrapiProperty } from "@/types/strapi";

export default async function FeaturedProperties() {
  const properties = await fetchStrapi<StrapiProperty[]>(
    "/api/properties?populate=*&pagination[limit]=4"
  );

  return (

    <div className="flex flex-col gap-[36px] items-center px-[139.5px] py-0 w-full mt-[150px] overflow-hidden">
      <div className="flex flex-col gap-[26px] items-center w-full">
        <h2 className="font-crimson text-[56px] leading-[56px] text-[#002f57] text-center tracking-[-1.68px] w-full">
          Explore a curated range of properties managed<br />and marketed by Pevona.
        </h2>
        <div className="grid grid-cols-2 gap-[16px] w-full">
          {properties?.data && properties.data.length > 0 ? (
            properties.data.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-2 flex items-center justify-center min-h-[400px]">
              <p className="font-manrope text-[18px] text-[#333333]">
                Properties will appear here when Strapi is running.
              </p>
            </div>
          )}
        </div>
      </div>
      <Link href="/properties">
        <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-[223px] h-[48px]">
          <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">View All Properties</span>
        </button>
      </Link>
    </div>
  );
}
