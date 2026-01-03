/**
 * Formats a number with consistent locale to avoid hydration mismatches
 * Uses 'en-GB' locale for UK-style number formatting (e.g., 100,000)
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-GB');
}






