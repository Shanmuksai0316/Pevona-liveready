"use client";

import Image from "next/image";
import { useState } from "react";

export default function AreaInsights() {
  const [activeCity, setActiveCity] = useState<"London" | "Manchester" | "Birmingham" | "Leeds">(
    "London",
  );

  const cityContent = {
    London: {
      title: "London Area Guide",
      image: "/images/buy-guide/london.png",
      body: `London offers unmatched connectivity, diverse neighbourhoods, and a strong property
market with year-round activity. Whether you're buying or renting, the area provides
options for every lifestyle — from modern apartments to family homes. High tenant and
buyer demand make it a stable and future-ready location.`,
    },
    Manchester: {
      title: "Manchester Area Guide",
      image: "/images/buy-guide/manchester.png",
      body: `Manchester combines a strong jobs market, growing regeneration zones and excellent
transport links across the North. It offers a mix of city-centre apartments and family
homes, making it attractive for both owner-occupiers and long-term investors.`,
    },
    Birmingham: {
      title: "Birmingham Area Guide",
      image: "/images/buy-guide/birmingham.png",
      body: `Birmingham is a major UK hub with a diverse economy, strong student population and
ongoing infrastructure investment. From new-build schemes to traditional suburbs, it
provides a wide spread of options and strong rental demand.`,
    },
    Leeds: {
      title: "Leeds Area Guide",
      image: "/images/buy-guide/leeds.png",
      body: `Leeds offers a balance of city-centre living, leafy suburbs and strong regional
employment. Its mix of professional tenants and families supports a stable sales and
rental market with good long-term fundamentals.`,
    },
  } as const;

  const active = cityContent[activeCity];

  return (
    <section className="bg-[#002f57] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] py-[60px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-0.06em] text-white">
            Area Insights
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] opacity-80 max-w-[720px] mx-auto text-white">
            The right area shapes your lifestyle, rental return and long-term value. Below are
            short descriptions of key UK areas. Explore full guides for deeper detail.
          </p>
        </div>

        {/* Area tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {(["London", "Manchester", "Birmingham", "Leeds"] as const).map((city) => (
            <button
              key={city}
              type="button"
              className={`px-4 py-2 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] ${
                activeCity === city
                  ? "bg-white text-[#002f57]"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
              onClick={() => setActiveCity(city)}
            >
              {city.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 space-y-6">
            <h3 className="font-crimson text-[26px] leading-[30px] text-white">
              {active.title}
            </h3>
            <p className="font-manrope text-[18px] leading-[28px] opacity-80 text-white">
              {active.body}
            </p>
            <ul className="font-manrope text-[18px] leading-[28px] opacity-80 list-disc list-inside space-y-1 text-white">
              <li>Excellent transport and year-round demand</li>
              <li>Mix of modern flats and family homes</li>
              <li>Strong rental and resale movement</li>
              <li>Suits professionals, families, investors</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[520px] h-[360px] rounded-[24px] overflow-hidden">
              <Image
                src={active.image}
                alt={`${activeCity} area`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


