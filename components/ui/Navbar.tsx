"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PropertyManagementDropdown from "./PropertyManagementDropdown";
import InvestmentsDropdown from "./InvestmentsDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const router = useRouter();

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle desktop dropdowns, ignore mobile menu
      if (openDropdown && !isOpen) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown, isOpen]);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { 
      name: "Buy", 
      href: "/", 
      hasDropdown: true,
      submenu: [
        { name: "Finding Property", href: "/finding-property" },
        { name: "Buy Guide & Area Guide", href: "/buy-guide" },
      ]
    },
    { name: "Sell", href: "/sell" },
    { 
      name: "Rent", 
      href: "/", 
      hasDropdown: true,
      submenu: [
        { name: "Properties to Let", href: "/properties-to-let" },
        { name: "Tenant Services", href: "/tenant-services" },
        { name: "Landlord Services", href: "/landlord-services" },
        { name: "Application Process", href: "/application-process" },
      ]
    },
    { 
      name: "Property Management", 
      href: "/property-management", 
      hasDropdown: true,
      submenu: [
        { name: "Our Management Services", href: "/our-management-services" },
        { name: "Compliance & Licensing", href: "/compliance-licensing" },
        { name: "Maintenance & repair", href: "/maintenance-repair" },
        { name: "House Of Multiple Occupations (HMO)", href: "/hmo" },
        { name: "Client Portal", href: "/client-portal" },
      ]
    },
    { 
      name: "Investments", 
      href: "/investments", 
      hasDropdown: true,
      submenu: [
        { name: "Investment Opportunities", href: "/investments" },
        { name: "Market Insights", href: "/market-insights" },
        { name: "Portfolio Management", href: "/portfolio-management" },
        { name: "International Properties", href: "/international-properties" },
      ]
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.12)] flex items-center justify-center lg:justify-between pl-[60px] pr-[60px] pt-[10px] pb-[10px] rounded-[32px] lg:rounded-[100px] max-w-[1560px] w-full pointer-events-auto relative mt-4 overflow-visible z-[10001]">
      {/* Logo */}
      <div className="h-[48px] lg:h-[72px] w-[130px] lg:w-[180px] relative z-[10001]">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/pevona-logo-new.svg"
            alt="Pevona Logo"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5 flex-shrink-0">
        {navLinks.map((link) => {
          // Use PropertyManagementDropdown component for Property Management
          if (link.name === "Property Management" && 'hasDropdown' in link && link.hasDropdown && 'submenu' in link) {
            return (
              <PropertyManagementDropdown
                key={link.name}
                className="relative"
                property1={openDropdown === link.name ? "Variant2" : "Default"}
                items={link.submenu?.map(item => ({ name: item.name, href: item.href })) || []}
                onToggle={(isOpen) => setOpenDropdown(isOpen ? link.name : null)}
                triggerHover={true}
              />
            );
          }

          // Use InvestmentsDropdown component for Investments
          if (link.name === "Investments" && 'hasDropdown' in link && link.hasDropdown && 'submenu' in link) {
            return (
              <InvestmentsDropdown
                key={link.name}
                className="relative"
                property1={openDropdown === link.name ? "Variant2" : "Default"}
                items={link.submenu?.map(item => ({ name: item.name, href: item.href })) || []}
                onToggle={(isOpen) => setOpenDropdown(isOpen ? link.name : null)}
                triggerHover={true}
              />
            );
          }

          // Regular dropdown for other menu items
          // If no dropdown, render as simple link
          if (!('hasDropdown' in link && link.hasDropdown)) {
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group relative flex items-center justify-center px-[10px] pt-0 pb-[10px] shrink-0 whitespace-nowrap cursor-pointer overflow-hidden"
              >
                <p className="font-manrope font-medium leading-[26px] relative shrink-0 text-[#002f57] text-[24px] lg:text-[16px] text-center transition-all">
                  {link.name}
                </p>
                <span className="absolute bottom-0 left-0 h-[2px] bg-[#002f57] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            );
          }

          return (
            <div 
              key={link.name} 
              className="relative"
              ref={(el) => {
                if ('hasDropdown' in link && link.hasDropdown) {
                  dropdownRefs.current[link.name] = el;
                }
              }}
              onMouseEnter={() => 'hasDropdown' in link && link.hasDropdown && setOpenDropdown(link.name)}
              onMouseLeave={() => 'hasDropdown' in link && link.hasDropdown && setOpenDropdown(null)}
            >
              <button
                className="group relative flex gap-[2px] items-center justify-center px-[10px] pt-0 pb-[10px] shrink-0 whitespace-nowrap w-full lg:w-auto cursor-pointer overflow-hidden"
              >
                <p className={`font-manrope leading-[26px] relative shrink-0 text-[#002f57] text-[24px] lg:text-[16px] text-center font-medium transition-all ${
                  openDropdown === link.name ? 'font-bold' : ''
                }`}>
                  {link.name}
                </p>
                {'hasDropdown' in link && link.hasDropdown && (
                  <span className={`font-manrope leading-[26px] text-[#002f57] text-[24px] lg:text-[16px] ml-[2px] ${
                    openDropdown === link.name ? 'font-bold' : 'font-medium'
                  }`}>
                    {openDropdown === link.name ? '−' : '+'}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 h-[2px] bg-[#002f57] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
              
              {/* Dropdown Menu */}
              {'hasDropdown' in link && link.hasDropdown && openDropdown === link.name && (
                <div 
                  className="absolute top-full left-0 pt-1 flex flex-col gap-[6px] items-start bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] shadow-lg w-full lg:w-[350px] z-[10005] p-[15px] pointer-events-auto"
                >
                  {'submenu' in link && link.submenu?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-3 lg:px-4 py-2 w-full hover:bg-[#FAFAFA] transition-colors first:rounded-t-[16px] last:rounded-b-[16px] cursor-pointer"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <p className="font-manrope font-medium leading-[26px] text-[#002f57] text-[24px] lg:text-[16px] text-left hover:font-bold transition-all">
                      {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <Link href="/contact" className="bg-[#002f57] hover:bg-[#001f3a] px-[10px] py-[12px] rounded-[100px] w-[225px] transition-all inline-block text-center">
          <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">Book a Free Valuation</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-[10001] p-2 absolute right-5 350:right-5 480:right-5 650:right-[60px]"
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
        <div className="flex flex-col h-full pt-32 px-8 gap-0 overflow-y-auto">
          {navLinks.map((link) => {
            const isDropdownOpen = openDropdown === link.name;
            
            return (
              <div key={link.name} className="border-b border-gray-100">
                {'hasDropdown' in link && link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : link.name)}
                      className="w-full font-manrope font-medium text-[18px] text-[#002f57] py-4 flex justify-between items-center"
                    >
                      {link.name}
                      <svg 
                        className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-45' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                    {isDropdownOpen && 'submenu' in link && link.submenu && (
                      <div className="pl-4 pb-2">
                        {link.submenu.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              // Don't prevent default - let Link handle navigation
                              e.stopPropagation();
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                            className="block py-3 font-manrope font-medium text-[16px] text-[#666666] hover:text-[#002f57] transition-colors pointer-events-auto cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-manrope font-medium text-[18px] text-[#002f57] py-4"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            );
          })}
          <Link href="/contact" className="bg-[#002f57] mt-6 px-[10px] py-[18px] rounded-[12px] w-full transition-all inline-block text-center">
            <span className="font-manrope font-semibold text-[18px] text-white">Book a Free Valuation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


