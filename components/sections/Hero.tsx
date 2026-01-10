import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function Hero({
  title = "Managing, Letting, & Investing - the Right Way",
  subtitle = "Expert management, lettings, and investment opportunities across the UK - powered by transparency and modern compliance.",
  buttonText = "Speak To Our Team",
}: HeroProps) {
  return (
    <div className="relative w-full h-[826px] overflow-hidden rounded-b-[36px] z-0">
      <div className="absolute inset-0">
        {/* Mobile Banner Image */}
        <div className="relative w-full h-full lg:hidden">
          <Image
            src="/images/Home%20page/Home-banner-bg-mbl.webp"
            alt="Hero background mobile"
            fill
            className="object-cover rounded-b-[36px]"
            unoptimized
            priority
          />
        </div>
        {/* Desktop Banner Image */}
        <div className="relative w-full h-full hidden lg:block">
          <Image
            src="/images/Home%20page/Home-banner-bg-dsk.webp"
            alt="Hero background desktop"
            fill
            className="object-cover rounded-b-[36px]"
            unoptimized
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 rounded-b-[36px]"></div>
      </div>

      {/* Hero Content */}

      <div className="relative z-10 flex flex-col items-center justify-end h-full px-[20px] py-[37px] gap-[113px]">
        <div className="flex flex-col items-center gap-[36px]">
          <div className="flex flex-col items-center gap-[16px]">
            <h1 className="font-crimson text-[66px] leading-[66px] text-white text-center tracking-[-1.98px] max-w-[653px]">
              {title}
            </h1>
            <p className="font-manrope font-normal text-[18px] leading-[28px] text-white text-center max-w-full">
              {subtitle}
            </p>
          </div>
          <Link href="/contact" className="bg-white px-[10px] py-[10px] rounded-[8px] w-[217px] h-[56px] flex items-center justify-center hover:bg-[#0073B5] transition-colors group">
            <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57] group-hover:text-white transition-colors">
              {buttonText}
            </span>
          </Link>
        </div>

        {/* Credibility Section */}
        <div className="flex flex-col gap-[16px] items-start pl-[60px] pr-0 py-0 w-full">
          <div className="h-[66px] w-[176px] relative">




            <div className="absolute left-[2px] top-[4.35px] w-[58.364px] h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_1.png"
                alt="Avatar 1"
                fill
                className="rounded-full border-4 border-white object-cover object-top"
                style={{ borderWidth: '3px' }}
                unoptimized
              />
            </div>



            <div className="absolute left-[39.36px] top-[4.35px] w-[58.364px] h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_2.png"
                alt="Avatar 2"
                fill
                className="rounded-full border-4 border-white object-cover object-top"
                style={{ borderWidth: '3px' }}
                unoptimized
              />
            </div>



            <div className="absolute left-[76.72px] top-[4.35px] w-[58.364px] h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_3.png"
                alt="Avatar 3"
                fill
                className="rounded-full border-4 border-white object-cover object-top"
                style={{ borderWidth: '3px' }}
                unoptimized
              />
            </div>



            <div className="absolute left-[114.08px] top-[4.35px] w-[58.364px] h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_4.png"
                alt="Avatar 4"
                fill
                className="rounded-full border-4 border-white object-cover object-top"
                style={{ borderWidth: '3px' }}
                unoptimized
              />
            </div>
          </div>
          <p className="font-manrope font-semibold text-[20px] leading-[30px] text-white max-w-[452px] w-full">
            Thousands of residents have chosen our community to call home.
          </p>
        </div>
      </div>
    </div>
  );
}
