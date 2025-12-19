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
    <div className="flex flex-col gap-[36px] items-center w-full mt-[120px] lg:mt-[150px] overflow-hidden px-4 sm:px-6 lg:px-0">
      
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
        gap-[40px] lg:gap-0
      ">

        {/* IMAGE */}
        <div className="
          flex-1
          px-0
          sm:px-[40px]
          lg:pl-[130px] lg:pr-[100px]
        ">
          <div className="relative w-full rounded-[26px] overflow-hidden">
            <Image
              src="/images/3rd_Step-by-Step_Application_Process.png"
              alt="Property Process"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-[26px]"
              unoptimized
            />
          </div>
        </div>

        {/* STEPS */}
        <div className="
          flex-1 flex flex-col gap-[26px] items-start
          px-0
          sm:px-[40px]
          lg:pl-0 lg:pr-[140px]
          w-full
        ">
          {steps.map((step, i) => (
            <div key={i} className="w-full">
              <div className="h-px w-full border-t border-[rgba(0,0,0,0.12)] mb-[26px]"></div>

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
