// Google Analytics 4 with Consent Mode v2, "basic" implementation: nothing is
// requested from Google until the visitor clicks Accept. The choice is kept
// 6 months (CNIL recommendation), then the banner asks again.
const GA_ID = import.meta.env.VITE_GA_ID;
const STORAGE_KEY = 'tictek-consent';
const MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000;
// GA cookies last 13 months at most (CNIL guidance), not the default 2 years.
const COOKIE_EXPIRES_S = 13 * 30 * 24 * 60 * 60;

function readChoice() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Date.now() - stored.date < MAX_AGE_MS) return stored.value;
  } catch {
    // Missing, malformed or blocked storage: ask again.
  }
  return null;
}

function saveChoice(value) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, date: Date.now() }));
  } catch {
    // Storage blocked (private mode): the choice holds for this page only.
  }
}

let loaded = false;

function loadAnalytics() {
  window[`ga-disable-${GA_ID}`] = false;
  if (loaded) {
    // Accepted again after a withdrawal on the same page.
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  // Only measurement is granted; advertising signals stay denied.
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    cookie_expires: COOKIE_EXPIRES_S,
    // No Google signals / ad personalization: measurement only, as stated
    // on the privacy page (this also keeps requests within the CSP).
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}

/** Withdrawal: stop collection and remove the GA cookies already set. */
function disableAnalytics() {
  window[`ga-disable-${GA_ID}`] = true;
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  const domains = ['', location.hostname, `.${location.hostname.replace(/^www\./, '')}`];
  for (const name of document.cookie.split(';').map((c) => c.split('=')[0].trim())) {
    if (!name.startsWith('_ga')) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
}

export function initConsent() {
  const banner = document.getElementById('consent');
  if (!GA_ID || !banner) return;

  const choice = readChoice();
  if (choice === 'granted') loadAnalytics();
  if (!choice) banner.hidden = false;

  banner.addEventListener('click', (e) => {
    const button = e.target.closest('[data-consent]');
    if (!button) return;
    const value = button.dataset.consent;
    saveChoice(value);
    banner.hidden = true;
    if (value === 'granted') loadAnalytics();
    else disableAnalytics();
  });

  for (const opener of document.querySelectorAll('[data-consent-open]')) {
    opener.hidden = false;
    opener.addEventListener('click', () => {
      banner.hidden = false;
      banner.querySelector('[data-consent="granted"]')?.focus();
    });
  }
}
