import Image from "next/image";

export default function SolutionsSection() {
  const services = [
    {
      title: "Lettings",
      image: "/images/Home%20page/home-letting-bg-dsk.webp",
      description: "From tenant sourcing to application management, we simplify every step for landlords and renters.",
      width: 370,
    },
    {
      title: "Property Management",
      image: "/images/Home%20page/home-property%20management-bg-dsk.webp",
      description: "Complete care for your property - from compliance and maintenance to reporting and renewals.",
      width: 370,
    },
    {
      title: "Investments",
      image: "/images/Home%20page/home-invetments-bg-dsk.webp",
      description: "Tailored UK property investment opportunities designed for performance and security.",
      width: 364,
    },
  ];

  return (
    <div
      className="
        flex flex-col gap-[26px] items-center w-full overflow-hidden
        mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]
        px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]
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
                relative w-full overflow-hidden rounded-[16px]
                h-[360px]
                sm:h-[420px]
                lg:h-[480px]
              "
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-[16px]"
                unoptimized
              />
              <div className="absolute bottom-[20px] left-[20px] sm:left-[30px] lg:left-[38px]">
                <h3
                  className="
                    font-crimson font-semibold text-white capitalize
                    text-[24px] leading-[28px]
                    sm:text-[26px] sm:leading-[30px]
                    md:text-[28px] md:leading-[32px]
                    lg:text-[30px] lg:leading-[34px]
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
