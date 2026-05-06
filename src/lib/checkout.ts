export const CHECKOUT_URL = "https://ggcheckout.app/checkout/v2/lHi1GjloQAZsTDW5CK0l";

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
  "fbclid",
  "gclid",
  "ttclid",
];

export function buildCheckoutUrl(): string {
  if (typeof window === "undefined") return CHECKOUT_URL;
  const current = new URLSearchParams(window.location.search);
  const out = new URLSearchParams();
  for (const key of TRACKED_PARAMS) {
    const value = current.get(key);
    if (value) out.set(key, value);
  }
  const qs = out.toString();
  return qs ? `${CHECKOUT_URL}?${qs}` : CHECKOUT_URL;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function fireInitiateCheckout() {
  if (typeof window === "undefined") return;
  try {
    window.fbq?.("track", "InitiateCheckout");
  } catch {
    // ignore
  }
}

export function goToCheckout(e?: { preventDefault?: () => void }) {
  e?.preventDefault?.();
  if (typeof window === "undefined") return;
  fireInitiateCheckout();
  window.location.href = buildCheckoutUrl();
}