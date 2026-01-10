"use client";

import { useState, useEffect } from "react";

export default function CookiePreferencesLink() {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Load saved preferences
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        console.error("Error parsing cookie preferences:", e);
      }
    }
  }, []);

  const applyCookiePreferences = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      console.log("Analytics cookies enabled");
    } else {
      console.log("Analytics cookies disabled");
    }

    if (prefs.marketing) {
      console.log("Marketing cookies enabled");
    } else {
      console.log("Marketing cookies disabled");
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    setShowPreferences(false);
  };

  const togglePreference = (category: keyof typeof preferences) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const openPreferences = () => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (e) {
        console.error("Error parsing cookie preferences:", e);
      }
    }
    setShowPreferences(true);
  };

  return (
    <>
      <button
        onClick={openPreferences}
        className="hover:text-white hover:opacity-100 transition-opacity cursor-pointer"
      >
        Cookie Preferences
      </button>

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[10001] bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] font-semibold text-[#002f57]">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              
              <p className="font-manrope text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-gray-700 mb-6">
                We use cookies to make our site work and to improve your experience. You can
                accept all cookies, reject non‑essential cookies, or manage preferences for
                Analytics and Marketing. We only set non‑essential cookies after you choose
                Accept.
              </p>

              <div className="space-y-4 mb-6">
                {/* Analytics Toggle */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-manrope font-semibold text-[16px] text-[#002f57] mb-1">
                      Analytics
                    </h4>
                    <p className="font-manrope text-[14px] text-gray-600">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference("analytics")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#002f57] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002f57"></div>
                  </label>
                </div>

                {/* Marketing Toggle */}
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-manrope font-semibold text-[16px] text-[#002f57] mb-1">
                      Marketing
                    </h4>
                    <p className="font-manrope text-[14px] text-gray-600">
                      Used to deliver personalized advertisements and track campaign performance
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference("marketing")}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#002f57] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002f57"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2.5 font-manrope text-[14px] sm:text-[16px] font-medium text-[#002f57] border-2 border-[#002f57] rounded-md hover:bg-[#002f57] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 font-manrope text-[14px] sm:text-[16px] font-medium text-white bg-[#002f57] rounded-md hover:bg-[#003d6b] transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

