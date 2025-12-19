"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Buy", href: "/buy", hasIcon: true },
    { name: "Sell", href: "/sell" },
    { name: "Rent", href: "/rent", hasIcon: true },
    { name: "Property Management", href: "/property-management", hasIcon: true },
    { name: "Investments", href: "/investments", hasIcon: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.12)] flex items-center justify-between px-6 lg:px-[60px] py-[16px] rounded-[32px] lg:rounded-[100px] max-w-[1560px] w-full pointer-events-auto relative mt-4">
      {/* Logo */}
      <div className="h-[40px] lg:h-[60px] w-[110px] lg:w-[145px] relative z-[10001]">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/Header-logo.svg"
            alt="Pevona Logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-[36px]">
        {navLinks.map((link) => (
          <div key={link.name} className="flex items-center gap-[2px]">
            <Link href={link.href} className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57] hover:text-[#29902e] transition-colors">
              {link.name}
            </Link>
            {link.hasIcon && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
              </svg>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <button className="bg-[#002f57] hover:bg-[#001f3a] px-[10px] py-[12px] rounded-[100px] w-[225px] transition-all">
          <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">Book a Free Valuation</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-[10001] p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 bg-[#002f57] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[10000] lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-32 px-8 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-manrope font-medium text-[24px] text-[#002f57] border-b border-gray-100 pb-2 flex justify-between items-center"
            >
              {link.name}
              {link.hasIcon && (
                <svg className="w-5 h-5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              )}
            </Link>
          ))}
          <button className="bg-[#002f57] mt-4 px-[10px] py-[18px] rounded-[12px] w-full transition-all">
            <span className="font-manrope font-semibold text-[18px] text-white">Book a Free Valuation</span>
          </button>
        </div>
      </div>
    </div>
  );
}


