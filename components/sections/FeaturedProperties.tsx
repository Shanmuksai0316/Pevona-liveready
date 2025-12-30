import { fetchStrapi } from "@/lib/strapi";
import PropertyCard from "../properties/PropertyCard";
import Link from "next/link";
import type { StrapiProperty } from "@/types/strapi";

export default async function FeaturedProperties() {
  const properties = await fetchStrapi<StrapiProperty[]>(
    "/api/properties?populate=*&pagination[limit]=4"
  );

  return (

    <div className="flex flex-col gap-[36px] items-center px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-0 w-full mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] overflow-hidden">
      <div className="flex flex-col gap-[26px] items-center w-full">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] text-[#002f57] text-center tracking-tight md:tracking-[-1.68px] w-full">
          Explore a curated range of properties managed<br className="hidden sm:block" />and marketed by Pevona.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
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
        <button className="bg-[#002f57] px-[10px] py-[10px] rounded-[8px] w-[223px] h-[48px] hover:bg-[#003d70] transition-colors">
          <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">View All Properties</span>
        </button>
      </Link>
    </div>
  );
}
