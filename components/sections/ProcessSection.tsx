'use client';

import Image from "next/image";
import { useState } from "react";

export default function ProcessSection() {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([0]);

  const steps = [
    { title: "Onboarding & Compliance", description: "We collect documentation, verify safety and licensing, and onboard your property to our management system." },
    { title: "Maintenance & Repairs", description: "Our maintenance team provides 24/7 emergency response and regular upkeep to keep your property in excellent condition." },
    { title: "Routine Inspections", description: "Regular property inspections ensure tenant compliance and identify any maintenance needs early." },
    { title: "Rent Collection", description: "Automated rent collection with transparent financial reporting and direct deposit to your account." },
    { title: "End of Tenancy", description: "Comprehensive end-of-tenancy process including inspections, deposit returns, and property preparation for new tenants." },
  ];

  const toggleStep = (index: number) => {
    setExpandedSteps(prev =>
      prev.includes(index) ? [] : [index]
    );
  };

  return (
    <div className="flex flex-col gap-[36px] items-center w-full mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] overflow-hidden px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      
      {/* HEADING */}
      <div className="flex flex-col gap-[10px] items-center text-center w-full">
        <h2 className="
          font-crimson text-[#002f57] tracking-[-1.68px]
          text-[32px] leading-[38px]
          sm:text-[40px] sm:leading-[46px]
          lg:text-[56px] lg:leading-[56px]
          w-full
        ">
          Property Management Process
        </h2>

        <div className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333] w-full max-w-[700px]">
          <p>We handle every aspect of property care - from compliance and maintenance to rent collection</p>
          <p>- with complete transparency and efficiency.</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="
        flex flex-col lg:flex-row
        items-center justify-center w-full
        gap-[40px] lg:gap-[7%]
      ">

        {/* IMAGE */}
        <div className="
          flex-1
        ">
          <div className="relative w-full rounded-[26px] overflow-hidden">
            {/* Mobile Image */}
            <div className="relative w-full lg:hidden">
              <Image
                src="/images/Home%20page/home-Property%20Management%20Process-sec-mbl.webp"
                alt="Property Management Process Mobile"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-[26px]"
                unoptimized
                priority
              />
            </div>
            {/* Desktop Image */}
            <div className="relative w-full hidden lg:block">
            <Image
                src="/images/Home%20page/home-Property%20Management%20Process-sec-dsk.webp"
                alt="Property Management Process Desktop"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-[26px]"
              unoptimized
                priority
            />
            </div>
          </div>
        </div>

        {/* STEPS */}
        <div className="
          flex-1 flex flex-col gap-[26px] items-start
          w-full
        ">
          {steps.map((step, i) => (
            <div key={i} className="w-full">
              {i > 0 && <div className="h-px w-full border-t border-[rgba(0,0,0,0.12)] mb-[26px]"></div>}

              <div
                className="flex flex-col gap-[8px] items-start w-full cursor-pointer"
                onClick={() => toggleStep(i)}
              >
                <div className="flex items-center justify-between w-full">
                  <h4 className="
                    font-crimson font-semibold text-[#002f57]
                    text-[22px] leading-[28px]
                    sm:text-[24px] sm:leading-[30px]
                    lg:text-[26px] lg:leading-[30px]
                  ">
                    {step.title}
                  </h4>

                  <span className="
                    font-crimson font-bold text-[#002f57]
                    text-[30px]
                    lg:text-[36px]
                    leading-[36px]
                    transition-transform duration-200
                  ">
                    {expandedSteps.includes(i) ? "-" : "+"}
                  </span>
                </div>

                <div className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${expandedSteps.includes(i) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333] pt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
