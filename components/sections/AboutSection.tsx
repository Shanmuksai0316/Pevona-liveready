import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <div
      className="
        relative w-full flex flex-col items-start justify-end overflow-hidden
        gap-[31px]
        h-[811px] lg:h-[800px]
        pb-[24px] sm:pb-[30px] lg:pb-[36px]
        px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]
        mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]
      "
    >
      {/* Mobile Background Image */}
      <div className="absolute inset-0 lg:hidden h-[811px]">
        <Image
          src="/images/Home%20page/Home-about-sec-bg-mbl.webp"
          alt="About Us Background Mobile"
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
          quality={90}
          unoptimized
          style={{ objectPosition: 'top' }}
        />
        {/* Gradient overlay to fade house into dark blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/70 via-[#002f57]/90 to-[#002f57]"></div>
      </div>
      
      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden lg:block">
      <Image
          src="/images/Home%20page/Home-about-sec-bg-dsk.webp"
          alt="About Us Background Desktop"
        fill
        className="object-cover"
        unoptimized
          priority
      />
        {/* Gradient overlay from house to dark blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]"></div>
      </div>

      {/* TEXT CONTENT */}
      <div
        className="
          relative z-10 flex flex-col gap-[16px] items-start justify-end text-white w-full
          h-auto lg:h-[372px]
          pr-0
          sm:pr-[200px]
          md:pr-[400px]
          lg:pr-[800px]
        "
      >
        <div className="flex flex-col gap-[8px] items-start">
          <h2
            className="
              font-crimson tracking-[-1.68px]
              text-[32px] leading-[38px]
              sm:text-[44px] sm:leading-[48px]
              lg:text-[56px] lg:leading-[56px]
            "
          >
            About Pevona
          </h2>

          <p
            className="
              font-manrope font-normal
              text-[18px] leading-[26px]
              sm:text-[20px] sm:leading-[30px]
              lg:text-[22px] lg:leading-[32px]
            "
          >
            Rooted in Trust. Driven by Expertise.
          </p>
        </div>

        <p
          className="
            font-manrope font-normal opacity-80
            text-[16px] leading-[24px]
            sm:text-[18px] sm:leading-[28px]
          "
        >
          Pevona Ltd is a UK real estate company specialising in lettings, management, and investments. We deliver transparent, compliant, and client-focused solutions that protect assets and maximise returns.
        </p>
      </div>

      {/* CERTIFICATIONS */}
      <div className="relative z-10 flex flex-col gap-[10px] items-start w-full">
        <p
          className="
            font-crimson text-white
            text-[18px] leading-[26px]
            sm:text-[20px] sm:leading-[30px]
            lg:text-[22px] lg:leading-[32px]
            w-[278px]
          "
        >
          Certifications
        </p>

        <div
          className="
            flex flex-wrap gap-[16px] items-start overflow-hidden
            w-full
            sm:w-[316px]
          "
        >
          {[
            { src: "/images/Certifications-1.svg", alt: "Certification 1", width: 74, height: 30 },
            { src: "/images/Certifications-2.svg", alt: "Certification 2", width: 80, height: 33 },
            { src: "/images/Certifications-3.svg", alt: "Certification 3", width: 80, height: 32 },
            { src: "/images/Certifications-4.svg", alt: "Certification 4", width: 108, height: 20 },
          ].map((cert, i) => (
            <div
              key={i}
              className="
                bg-white border border-[rgba(0,0,0,0.12)]
                h-[56px] sm:h-[60px]
                w-[140px] sm:w-[150px]
                rounded-[10px]
                flex items-center justify-center
              "
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <Link
        href="/contact"
        className="
          relative z-10 bg-white rounded-[8px]
          w-full sm:w-[240px]
          h-[52px] sm:h-[56px]
          px-[10px] py-[10px]
          inline-flex items-center justify-center
          hover:bg-gray-50 transition-colors
        "
      >
        <span
          className="
            font-manrope font-semibold text-[#002f57]
            text-[16px] leading-[24px]
            sm:text-[18px] sm:leading-[28px]
          "
        >
          Learn More About Us
        </span>
      </Link>
    </div>
  );
}
