/**
 * Cookie consent utility functions
 * Use these to check if cookies are allowed before loading scripts
 */

export interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

/**
 * Get current cookie preferences from localStorage
 */
export function getCookiePreferences(): CookiePreferences {
  if (typeof window === "undefined") {
    return { analytics: false, marketing: false };
  }

  const saved = localStorage.getItem("cookiePreferences");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing cookie preferences:", e);
    }
  }

  // Default: all disabled until consent is given
  return { analytics: false, marketing: false };
}

/**
 * Check if analytics cookies are allowed
 */
export function isAnalyticsAllowed(): boolean {
  const prefs = getCookiePreferences();
  return prefs.analytics;
}

/**
 * Check if marketing cookies are allowed
 */
export function isMarketingAllowed(): boolean {
  const prefs = getCookiePreferences();
  return prefs.marketing;
}

/**
 * Check if user has given any consent
 */
export function hasConsent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return localStorage.getItem("cookieConsent") !== null;
}

/**
 * Block non-essential cookies until consent is given
 * Call this function before loading analytics or marketing scripts
 */
export function shouldLoadScript(category: "analytics" | "marketing"): boolean {
  if (!hasConsent()) {
    return false; // Block until consent is given
  }

  const prefs = getCookiePreferences();
  return prefs[category];
}

