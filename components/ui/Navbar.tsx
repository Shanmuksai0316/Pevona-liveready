"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import PropertyManagementDropdown from "./PropertyManagementDropdown";
import InvestmentsDropdown from "./InvestmentsDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown) {
        const ref = dropdownRefs.current[openDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { 
      name: "Buy", 
      href: "/buy", 
      hasDropdown: true,
      submenu: [
        { name: "Finding Property", href: "/finding-property" },
        { name: "Buy Guide & Area Guide", href: "/buy-guide" },
      ]
    },
    { name: "Sell", href: "/sell" },
    { 
      name: "Rent", 
      href: "/rent", 
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
    <div className="bg-white border border-[rgba(0,0,0,0.12)] flex items-center justify-center lg:justify-between px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[50px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-[16px] rounded-[32px] lg:rounded-[100px] max-w-[1560px] w-full pointer-events-auto relative mt-4 overflow-visible z-[10001]">
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
              <div className="flex items-center gap-[2px] cursor-pointer">
                <Link href={link.href} className="font-manrope font-medium text-[16px] leading-[26px] text-[#002f57] hover:text-[#29902e] transition-colors">
                  {link.name}
                </Link>
                {'hasDropdown' in link && link.hasDropdown && (
                  <svg 
                    className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-45' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                )}
              </div>
              
              {/* Dropdown Menu */}
              {'hasDropdown' in link && link.hasDropdown && openDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] shadow-lg min-w-[220px] py-2 z-[10002] pointer-events-auto">
                  {'submenu' in link && link.submenu?.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-3 font-manrope font-medium text-[16px] leading-[26px] text-[#002f57] hover:bg-[#FAFAFA] hover:text-[#29902e] transition-colors first:rounded-t-[16px] last:rounded-b-[16px] pointer-events-auto"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
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
            
            // Use PropertyManagementDropdown component for Property Management on mobile
            if (link.name === "Property Management" && 'hasDropdown' in link && link.hasDropdown && 'submenu' in link) {
              return (
                <div key={link.name} className="border-b border-gray-100">
                  <PropertyManagementDropdown
                    className="w-full"
                    property1={isDropdownOpen ? "Variant2" : "Default"}
                    items={link.submenu?.map(item => ({ name: item.name, href: item.href })) || []}
                    onToggle={(isOpen) => {
                      setOpenDropdown(isOpen ? link.name : null);
                    }}
                  />
                </div>
              );
            }

            // Use InvestmentsDropdown component for Investments on mobile
            if (link.name === "Investments" && 'hasDropdown' in link && link.hasDropdown && 'submenu' in link) {
              return (
                <div key={link.name} className="border-b border-gray-100">
                  <InvestmentsDropdown
                    className="w-full"
                    property1={isDropdownOpen ? "Variant2" : "Default"}
                    items={link.submenu?.map(item => ({ name: item.name, href: item.href })) || []}
                    onToggle={(isOpen) => {
                      setOpenDropdown(isOpen ? link.name : null);
                    }}
                  />
                </div>
              );
            }
            
            return (
              <div key={link.name} className="border-b border-gray-100">
                {'hasDropdown' in link && link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : link.name)}
                      className="w-full font-manrope font-medium text-[24px] text-[#002f57] py-4 flex justify-between items-center"
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
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block py-3 font-manrope font-medium text-[24px] text-[#666666] hover:text-[#002f57] transition-colors"
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
                    className="block font-manrope font-medium text-[24px] text-[#002f57] py-4"
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


