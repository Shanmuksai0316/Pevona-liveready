"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export interface DropdownItem {
  name: string;
  href: string;
}

interface PropertyManagementDropdownProps {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4" | "Variant5" | "Variant6";
  items?: DropdownItem[];
  onToggle?: (isOpen: boolean) => void;
  triggerHover?: boolean; // Enable hover trigger for desktop
}

// Default items based on Figma design
const defaultItems: DropdownItem[] = [
  { name: "Our Management Services", href: "/our-management-services" },
  { name: "Compliance & Licensing", href: "/compliance-licensing" },
  { name: "Maintenance & repair", href: "/maintenance-repair" },
  { name: "House Of Multiple Occupations (HMO)", href: "/hmo" },
];

export default function PropertyManagementDropdown({
  className = "",
  property1 = "Default",
  items = defaultItems,
  onToggle,
  triggerHover = false,
}: PropertyManagementDropdownProps) {
  const [isOpen, setIsOpen] = useState(property1 === "Variant2");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync with property1 prop changes
  useEffect(() => {
    setIsOpen(property1 === "Variant2");
  }, [property1]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Don't close if clicking on a link inside the dropdown
      if (target.closest('a') && dropdownRef.current?.contains(target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
        onToggle?.(false);
      }
    };

    if (isOpen) {
      // Use click instead of mousedown to allow link clicks to register first
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        onToggle?.(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onToggle]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: DropdownItem) => {
    // Let the Link navigate - don't prevent default
    // Close dropdown immediately so it doesn't interfere
    setIsOpen(false);
    onToggle?.(false);
  };

  // Variant2: Expanded state with dropdown items
  if (property1 === "Variant2" || isOpen) {
    return (
      <div 
        className={`${className} relative`} 
        ref={dropdownRef} 
        data-name="Property 1=Variant2"
        onMouseEnter={triggerHover ? () => { setIsOpen(true); onToggle?.(true); } : undefined}
        onMouseLeave={triggerHover ? () => {
          // Simple: only close when truly leaving the entire container
            setIsOpen(false);
            onToggle?.(false);
        } : undefined}
      >
        <button
          onClick={!triggerHover ? handleToggle : undefined}
          className="group relative cursor-pointer flex gap-[2px] items-center justify-center px-[10px] pt-0 pb-[10px] shrink-0 whitespace-nowrap w-full lg:w-auto overflow-hidden"
        >
          <p className="font-manrope font-medium leading-[26px] relative shrink-0 text-[#002f57] text-[24px] lg:text-[16px] text-center transition-all">
            Property Management
          </p>
          <span className="font-manrope font-medium leading-[26px] text-[#002f57] text-[24px] lg:text-[16px] ml-[2px]">−</span>
          <span className="absolute bottom-0 left-0 h-[2px] bg-[#002f57] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
        </button>
        <div 
          className="dropdown-menu absolute top-full left-0 pt-1 flex flex-col gap-[6px] items-start bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] shadow-lg w-full lg:w-[350px] z-[10005] p-[15px] pointer-events-auto"
        >
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-3 lg:px-4 py-2 w-full hover:bg-[#FAFAFA] transition-colors first:rounded-t-[16px] last:rounded-b-[16px] cursor-pointer"
              onClick={(e) => {
                handleItemClick(e, item);
              }}
            >
              <p className="font-manrope font-medium leading-[26px] text-[#002f57] text-[24px] lg:text-[16px] text-left hover:font-bold transition-all">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default: Collapsed state with plus icon
  return (
    <div
      className={`${className} relative`}
      ref={dropdownRef}
      onMouseEnter={triggerHover ? () => { setIsOpen(true); onToggle?.(true); } : undefined}
      onMouseLeave={triggerHover ? () => { setIsOpen(false); onToggle?.(false); } : undefined}
    >
      <button
        onClick={!triggerHover ? handleToggle : undefined}
        className="group relative flex gap-[2px] items-center justify-center px-[10px] pt-0 pb-[10px] shrink-0 cursor-pointer whitespace-nowrap w-full lg:w-auto overflow-hidden"
        data-name="Property 1=Default"
      >
        <p className="font-manrope font-medium leading-[26px] relative shrink-0 text-[#002f57] text-[24px] lg:text-[16px] text-center transition-all">
          Property Management
        </p>
        <span className="font-manrope font-medium leading-[26px] text-[#002f57] text-[24px] lg:text-[16px] ml-[2px]">+</span>
        <span className="absolute bottom-0 left-0 h-[2px] bg-[#002f57] w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
      </button>
    </div>
  );
}
