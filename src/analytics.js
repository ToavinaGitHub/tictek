// Sends a GA4 event when Google Analytics is loaded, i.e. only after the
// visitor accepted analytics cookies (see src/client/consent.js). A no-op otherwise.
export function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}
