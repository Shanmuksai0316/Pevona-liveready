"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a small delay for better UX
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // You can trigger analytics/tracking scripts here if needed
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-white border-t-2 border-[#002f57] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-700 mb-2">
              We use cookies to improve your experience on our site and to show you relevant advertising. 
              By continuing to use our site, you accept our use of cookies.
            </p>
            <p className="font-manrope text-[12px] sm:text-[14px] leading-[18px] text-gray-600">
              To learn more, read our{" "}
              <Link 
                href="/cookie-policy" 
                className="text-[#0073B5] hover:underline font-medium"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 font-manrope text-[14px] sm:text-[16px] font-medium text-[#002f57] border-2 border-[#002f57] rounded-md hover:bg-[#002f57] hover:text-white transition-colors whitespace-nowrap"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 font-manrope text-[14px] sm:text-[16px] font-medium text-white bg-[#002f57] rounded-md hover:bg-[#003d6b] transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

