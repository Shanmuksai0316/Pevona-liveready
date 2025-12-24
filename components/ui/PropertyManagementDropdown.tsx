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
        onMouseLeave={triggerHover ? (e) => {
          // Check if mouse is moving to dropdown menu or a link
          const relatedTarget = e.relatedTarget as HTMLElement;
          if (relatedTarget) {
            // Don't close if moving to menu or a link
            if (dropdownRef.current?.querySelector('.dropdown-menu')?.contains(relatedTarget) ||
                relatedTarget.closest('a')) {
              return;
            }
          }
          // Only close if truly leaving the area
          if (!dropdownRef.current?.contains(relatedTarget)) {
            setIsOpen(false);
            onToggle?.(false);
          }
        } : undefined}
      >
        <button
          onClick={!triggerHover ? handleToggle : undefined}
          className="bg-[#fafafa] cursor-pointer flex gap-[2px] items-center px-[10px] py-[16px] relative shrink-0 hover:bg-[#f0f0f0] transition-colors whitespace-nowrap"
        >
          <p className="font-manrope font-bold leading-[26px] relative shrink-0 text-[#002f57] text-[16px] text-left">
            Property Management
          </p>
          <span className="font-manrope font-bold leading-[26px] text-[#002f57] text-[16px] ml-[2px]">−</span>
        </button>
        <div 
          className="dropdown-menu absolute top-full left-0 mt-2 flex flex-col gap-[6px] items-start bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] shadow-lg w-[350px] z-[10003] py-2 pointer-events-auto"
          onMouseEnter={triggerHover ? () => { setIsOpen(true); onToggle?.(true); } : undefined}
          onMouseLeave={triggerHover ? (e) => {
            // Don't close if moving to a link
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (relatedTarget && (relatedTarget.closest('a') || relatedTarget.tagName === 'A')) {
              return;
            }
            // Only close if truly leaving
            if (!dropdownRef.current?.contains(relatedTarget)) {
              setIsOpen(false);
              onToggle?.(false);
            }
          } : undefined}
        >
          {items.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-[36px] py-[16px] w-full hover:bg-[#FAFAFA] transition-colors first:rounded-t-[16px] last:rounded-b-[16px] cursor-pointer"
              onClick={(e) => {
                // Stop propagation to prevent outside click handler from firing
                e.stopPropagation();
                handleItemClick(e, item);
              }}
              onMouseDown={(e) => {
                // Prevent the outside click handler from closing dropdown on mousedown
                e.stopPropagation();
              }}
            >
              <p className="font-manrope font-medium leading-[26px] text-[#002f57] text-[16px] text-left hover:text-[#29902e] transition-colors">
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
        className="flex gap-[2px] items-center px-[10px] py-[16px] relative shrink-0 hover:bg-[#fafafa] transition-colors cursor-pointer whitespace-nowrap"
        data-name="Property 1=Default"
      >
        <p className="font-manrope font-medium leading-[26px] relative shrink-0 text-[#002f57] text-[16px] text-left">
          Property Management
        </p>
        <span className="font-manrope font-medium leading-[26px] text-[#002f57] text-[16px] ml-[2px]">+</span>
      </button>
    </div>
  );
}
