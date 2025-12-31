'use client';

import { useMemo, useState } from "react";
import type { StrapiProperty } from "@/types/strapi";
import PropertyCard from "@/components/properties/PropertyCard";
import Link from "next/link";

type FocusFilter = "All" | "Residential" | "Commercial" | "Investment";

interface PropertiesFilterSectionProps {
  properties: StrapiProperty[];
}

export default function PropertiesFilterSection({
  properties,
}: PropertiesFilterSectionProps) {
  const [locationQuery, setLocationQuery] = useState("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [beds, setBeds] = useState<number | null>(null);
  const [type, setType] = useState<"Any" | "For Sale" | "For Rent" | "Sold">(
    "Any"
  );
  const [focus, setFocus] = useState<FocusFilter>("All");

  const clearFilters = () => {
    setLocationQuery("");
    setMinPrice(null);
    setMaxPrice(null);
    setBeds(null);
    setType("Any");
    setFocus("All");
  };

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const attrs = p.attributes;

      // Location (matches address/city/state/zipcode)
      if (locationQuery.trim()) {
        const q = locationQuery.toLowerCase();
        const locationText = `${attrs.address} ${attrs.city} ${attrs.state} ${attrs.zipcode}`.toLowerCase();
        if (!locationText.includes(q)) return false;
      }

      // Price
      if (minPrice != null && attrs.price < minPrice) return false;
      if (maxPrice != null && attrs.price > maxPrice) return false;

      // Beds
      if (beds != null && attrs.bedrooms < beds) return false;

      // Type (map to status)
      if (type !== "Any" && attrs.status !== type) return false;

      // Focus – currently a simple mapping based on status
      if (focus !== "All") {
        if (focus === "Residential" && attrs.status !== "For Sale") {
          return false;
        }
        if (focus === "Commercial" && attrs.status !== "For Rent") {
          return false;
        }
        // For now, \"Investment\" does not apply extra filtering until
        // you add a dedicated field/category in Strapi.
      }

      return true;
    });
  }, [properties, locationQuery, minPrice, maxPrice, beds, type, focus]);

  return (
    <section className="max-w-[1440px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] mb-[60px] lg:mb-[120px]">
      {/* Search Filter */}
      <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] space-y-[10px]">
        {/* Top row: Location, Min Price, Max Price, Beds, Type, Apply/Clear */}
        <div className="flex flex-wrap items-end gap-4 lg:gap-6">
          {/* Location */}
          <div className="flex-1 min-w-[200px]">
            <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
              Location
            </label>
            <input
              type="text"
              placeholder="Address, postcode or city"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="w-full bg-[#FAFAFA] rounded-[16px] px-4 py-[10px] font-manrope text-[14px] leading-[24px] text-[#333] placeholder:text-[#333]/60 outline-none"
            />
          </div>

          {/* Min Price */}
          <div className="w-[130px]">
            <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
              Min Price
            </label>
            <div className="bg-[#FAFAFA] rounded-[16px] px-4 py-[10px] flex items-center justify-between">
              <select
                value={minPrice ?? ""}
                onChange={(e) =>
                  setMinPrice(e.target.value ? Number(e.target.value) : null)
                }
                className="bg-transparent outline-none font-manrope text-[14px] leading-[24px] text-[#333]/80 w-full"
              >
                <option value="">No min</option>
                <option value={100000}>£100,000</option>
                <option value={250000}>£250,000</option>
                <option value={500000}>£500,000</option>
                <option value={1000000}>£1,000,000</option>
              </select>
            </div>
          </div>

          {/* Max Price */}
          <div className="w-[130px]">
            <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
              Max Price
            </label>
            <div className="bg-[#FAFAFA] rounded-[16px] px-4 py-[10px] flex items-center justify-between">
              <select
                value={maxPrice ?? ""}
                onChange={(e) =>
                  setMaxPrice(e.target.value ? Number(e.target.value) : null)
                }
                className="bg-transparent outline-none font-manrope text-[14px] leading-[24px] text-[#333]/80 w-full"
              >
                <option value="">No max</option>
                <option value={250000}>£250,000</option>
                <option value={500000}>£500,000</option>
                <option value={1000000}>£1,000,000</option>
                <option value={2000000}>£2,000,000</option>
              </select>
            </div>
          </div>

          {/* Beds */}
          <div className="w-[120px]">
            <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
              Beds
            </label>
            <div className="bg-[#FAFAFA] rounded-[16px] px-4 py-[10px] flex items-center justify-between">
              <select
                value={beds ?? ""}
                onChange={(e) =>
                  setBeds(e.target.value ? Number(e.target.value) : null)
                }
                className="bg-transparent outline-none font-manrope text-[14px] leading-[24px] text-[#333]/80 w-full"
              >
                <option value="">Any</option>
                <option value={1}>1+ bed</option>
                <option value={2}>2+ beds</option>
                <option value={3}>3+ beds</option>
                <option value={4}>4+ beds</option>
              </select>
            </div>
          </div>

          {/* Type (maps to status) */}
          <div className="w-[130px]">
            <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
              Type
            </label>
            <div className="bg-[#FAFAFA] rounded-[16px] px-4 py-[10px] flex items-center justify-between">
              <select
                value={type}
                onChange={(e) =>
                  setType(e.target.value as typeof type)
                }
                className="bg-transparent outline-none font-manrope text-[14px] leading-[24px] text-[#333]/80 w-full"
              >
                <option value="Any">Any</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
          </div>

          {/* Apply & Clear */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="h-[48px] px-5 bg-[#002f57] rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] text-white hover:bg-[#003d70] transition-colors"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="font-manrope font-semibold text-[18px] leading-[26px] text-[#333] underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Bottom row: Focus tabs */}
        <div>
          <label className="block font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57] mb-[30px] pl-[10px]">
            Focus
          </label>
          <div className="inline-flex bg-[#FAFAFA] rounded-[16px] px-[10px] py-[8px] gap-1">
            {(["All", "Residential", "Commercial", "Investment"] as FocusFilter[]).map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFocus(item)}
                  className={`px-[6px] py-[2px] rounded-[10px] font-manrope text-[14px] leading-[24px] ${focus === item
                      ? "bg-[#002f57] text-white"
                      : "text-[#333] hover:bg-[#002f57]/10"
                    } transition-colors`}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Properties Grid - 3 columns, powered by Strapi (same as homepage) */}
      {filtered.length === 0 ? (
        <div className="mt-6 col-span-full flex items-center justify-center min-h-[200px]">
          <p className="font-manrope text-[18px] text-[#333333]">
            No properties match your filters. Try adjusting your criteria.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}

      <div className="mt-[36px] flex justify-center">
        <Link
          href="/properties"
          className="inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#003d70] transition-colors"
        >
          View More
        </Link>
      </div>
    </section>
  );
}


