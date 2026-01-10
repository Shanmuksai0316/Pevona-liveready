'use client';

import { useMemo, useState, useEffect } from "react";
import type { StrapiProperty } from "@/types/strapi";

type FocusFilter = "All" | "Residential" | "Commercial" | "Investment";

interface PropertiesFilterProps {
  properties: StrapiProperty[];
  onFilterChange: (filtered: StrapiProperty[]) => void;
}

export default function PropertiesFilter({
  properties,
  onFilterChange,
}: PropertiesFilterProps) {
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
        // For now, "Investment" does not apply extra filtering until
        // you add a dedicated field/category in Strapi.
      }

      return true;
    });
  }, [properties, locationQuery, minPrice, maxPrice, beds, type, focus]);

  // Notify parent of filtered results
  useEffect(() => {
    onFilterChange(filtered);
  }, [filtered, onFilterChange]);

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] sm:rounded-[16px] px-4 sm:px-6 md:px-[36px] py-4 sm:py-6 md:py-[26px] space-y-4 sm:space-y-6 md:space-y-[10px] relative z-[99] w-full">
      {/* Top row: Location, Min Price, Max Price, Beds, Type, Apply/Clear */}
      <div className="flex flex-wrap items-end gap-4 lg:gap-6">
        {/* Location */}
        <div className="flex-1 min-w-full sm:min-w-[200px]">
          <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-3 sm:mb-4 md:mb-[30px] pl-[10px]">
            Location
          </label>
          <input
            type="text"
            placeholder="Address, postcode or city"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 sm:py-[10px] font-manrope text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#333] placeholder:text-[#333]/60 outline-none"
          />
        </div>

        {/* Min Price */}
        <div className="w-full sm:w-[130px]">
          <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-3 sm:mb-4 md:mb-[30px] pl-[10px]">
            Min Price
          </label>
          <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 sm:py-[10px] flex items-center justify-between">
            <select
              value={minPrice ?? ""}
              onChange={(e) =>
                setMinPrice(e.target.value ? Number(e.target.value) : null)
              }
              className="bg-transparent outline-none font-manrope text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#333]/80 w-full"
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
        <div className="w-full sm:w-[130px]">
          <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-3 sm:mb-4 md:mb-[30px] pl-[10px]">
            Max Price
          </label>
          <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 sm:py-[10px] flex items-center justify-between">
            <select
              value={maxPrice ?? ""}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : null)
              }
              className="bg-transparent outline-none font-manrope text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#333]/80 w-full"
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
        <div className="w-full sm:w-[120px]">
          <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-3 sm:mb-4 md:mb-[30px] pl-[10px]">
            Beds
          </label>
          <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 sm:py-[10px] flex items-center justify-between">
            <select
              value={beds ?? ""}
              onChange={(e) =>
                setBeds(e.target.value ? Number(e.target.value) : null)
              }
              className="bg-transparent outline-none font-manrope text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#333]/80 w-full"
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
        <div className="w-full sm:w-[130px]">
          <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-3 sm:mb-4 md:mb-[30px] pl-[10px]">
            Type
          </label>
          <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-3 sm:px-4 py-2 sm:py-[10px] flex items-center justify-between">
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as typeof type)
              }
              className="bg-transparent outline-none font-manrope text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-[#333]/80 w-full"
            >
              <option value="Any">Any</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
              <option value="Sold">Sold</option>
            </select>
          </div>
        </div>

        {/* Apply & Clear */}
        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="h-[44px] sm:h-[48px] px-4 sm:px-5 bg-[#002f57] rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white hover:bg-[#003d70] transition-colors flex-1 sm:flex-initial"
          >
            Apply
          </button>
          <button
            type="button"
            onClick={clearFilters}
            className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[26px] text-[#333] underline underline-offset-2"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Bottom row: Focus tabs */}
      <div>
        <label className="block font-crimson font-semibold text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#002f57] mb-4 sm:mb-[20px] md:mb-[30px] pl-[10px]">
          Focus
        </label>
        <div className="flex flex-wrap bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] px-2 sm:px-[10px] py-2 sm:py-[8px] gap-1 sm:gap-1">
          {(["All", "Residential", "Commercial", "Investment"] as FocusFilter[]).map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFocus(item)}
                className={`px-3 sm:px-[6px] py-1.5 sm:py-[2px] rounded-[8px] sm:rounded-[10px] font-manrope text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[22px] md:leading-[24px] whitespace-nowrap ${
                  focus === item
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
  );
}

