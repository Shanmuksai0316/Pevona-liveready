import Image from "next/image";

export default function SolutionsSection() {
  const services = [
    {
      title: "Lettings",
      image: "/images/5th_sec_Lettings.png",
      description: "From tenant sourcing to application management, we simplify every step for landlords and renters.",
      width: 370,
    },
    {
      title: "Property Management",
      image: "/images/5th_sec_Property_Management.png",
      description: "Complete care for your property - from compliance and maintenance to reporting and renewals.",
      width: 370,
    },
    {
      title: "Investments",
      image: "/images/5th_sec_Investments.png",
      description: "Tailored UK property investment opportunities designed for performance and security.",
      width: 364,
    },
  ];

  return (
    <div
      className="
        flex flex-col gap-[26px] items-center w-full overflow-hidden
        mt-[100px] sm:mt-[120px] lg:mt-[150px]
        px-4 sm:px-6 lg:px-0
      "
    >
      {/* HEADING */}
      <h2
        className="
          font-crimson text-[#002f57] text-center tracking-[-1.68px]
          text-[32px] leading-[38px]
          sm:text-[44px] sm:leading-[48px]
          lg:text-[56px] lg:leading-[56px]
          max-w-[562px]
        "
      >
        Solutions That Protect and Grow Your Assets.
      </h2>

      {/* CARDS */}
      <div
        className="
          flex flex-col
          md:flex-row
          gap-[26px]
          items-center justify-center w-full
        "
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="
              flex flex-col gap-[21px] items-center
              w-full
              sm:w-[445px]
            "
          >
            {/* IMAGE */}
            <div
              className="
                relative w-full overflow-hidden rounded-[12px]
                h-[360px]
                sm:h-[420px]
                lg:h-[480px]
              "
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-[20px] left-[38px]">
                <h3
                  className="
                    font-crimson font-semibold text-white capitalize
                    text-[28px] leading-[32px]
                    sm:text-[34px] sm:leading-[36px]
                    lg:text-[40px] lg:leading-[40px]
                  "
                >
                  {service.title}
                </h3>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                font-manrope font-normal text-[#333333]
                text-[16px] leading-[24px]
                sm:text-[18px] sm:leading-[28px]
                text-center sm:text-left
              "
              style={{ width: `${service.width}px` }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
