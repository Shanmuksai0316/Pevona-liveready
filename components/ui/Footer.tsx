import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002f57] flex flex-col gap-[36px] items-center justify-end px-6 lg:px-0 pt-[73px] pb-12 lg:pb-[16px] w-full mt-[100px] lg:mt-[150px]">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:px-[135px] w-full max-w-[1560px] gap-12 lg:gap-0">
        {/* Logo and Description */}
        <div className="flex flex-col gap-[26px] items-start w-full lg:w-[480px]">
          <div className="h-[50px] w-[193px] relative">
            <Link href="/">
              <Image
                src="/images/Footer-logo.svg"
                alt="Pevona Logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <p className="font-manrope font-normal text-[18px] leading-[28px] text-white">
            Get an accurate, expert-led valuation tailored to your property and local market. Book now and take the next step with confidence.
          </p>
          <button className="bg-white hover:bg-gray-100 px-[10px] py-[10px] rounded-[8px] w-full lg:w-[240px] h-[56px] transition-colors">
            <span className="font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57]">Book a Free Valuation</span>
          </button>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-12 lg:gap-[60px] w-full lg:w-auto">
          {/* Company */}
          <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
            <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Company</p>
            <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
              <Link href="/about" className="hover:text-white hover:opacity-100 transition-opacity">About Us</Link>
              <Link href="/contact" className="hover:text-white hover:opacity-100 transition-opacity">Contact Us</Link>
              <Link href="/blog" className="hover:text-white hover:opacity-100 transition-opacity">News & Insights</Link>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
            <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Legal</p>
            <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
              <Link href="/privacy-policy" className="hover:text-white hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-white hover:opacity-100 transition-opacity">Cookie Policy</Link>
              <Link href="/terms" className="hover:text-white hover:opacity-100 transition-opacity">Terms & Conditions</Link>
              <Link href="/legal" className="hover:text-white hover:opacity-100 transition-opacity">Legal & Compliance</Link>
            </div>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col gap-[10px] items-start min-w-[140px]">
            <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Follow Us</p>
            <div className="flex flex-col gap-[10px] items-start font-manrope font-normal text-[18px] leading-[28px] text-white opacity-80">
              <Link href="#" className="hover:text-white hover:opacity-100 transition-opacity">Youtube</Link>
              <Link href="#" className="hover:text-white hover:opacity-100 transition-opacity">Twitter</Link>
              <Link href="#" className="hover:text-white hover:opacity-100 transition-opacity">LinkedIn</Link>
              <Link href="#" className="hover:text-white hover:opacity-100 transition-opacity">Instagram</Link>
              <Link href="#" className="hover:text-white hover:opacity-100 transition-opacity">Facebook</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col gap-[16px] items-center w-full px-6">
        <div className="h-px w-full max-w-[1560px] border-t border-white opacity-20"></div>
        <p className="font-manrope font-medium text-[16px] leading-[26px] text-white opacity-60 text-center">
          Copyright © All rights reserved Pevona
        </p>
      </div>
    </footer>
  );
}

