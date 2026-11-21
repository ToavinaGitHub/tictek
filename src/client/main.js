// Loaded on every page. The site is static HTML; this only adds the opening
// animation exit, scroll animations, the mobile menu, the analytics consent
// banner, the live clocks and conversion events (see README, "Conversions").
import { initConsent } from './consent';
import { initClocks } from './clocks';
import { initLoader } from './loader';
import { initMotion } from './motion';
import { trackEvent } from '../analytics';

initLoader();
initMotion();
initConsent();
initClocks();

// Conversion events. They only reach Google Analytics after consent
// (trackEvent is a no-op otherwise).
//  - links marked data-track="<event>" (CTAs, quote requests, projects,
//    WhatsApp, booking), with data-track-label naming the placement;
//  - every mailto: link (contact_email);
//  - one view_commercial_page per visit of a sales page (<main data-page-type>).
document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-track], a[href^="mailto:"]');
  if (!link) return;
  const name = link.dataset.track ?? 'contact_email';
  trackEvent(name, {
    link_url: link.href,
    cta_label: link.dataset.trackLabel,
    page_path: location.pathname,
  });
});

const pageType = document.querySelector('main[data-page-type]')?.dataset.pageType;
if (pageType) {
  const sendView = () => trackEvent('view_commercial_page', { page_type: pageType, page_path: location.pathname });
  // Analytics is loaded either already (consent given on a previous visit)
  // or when the visitor accepts on this page.
  if (typeof window.gtag === 'function') sendView();
  else window.addEventListener('tictek:analytics-granted', sendView, { once: true });
}

const toggle = document.querySelector('[data-nav-toggle]');
const nav = toggle && document.getElementById(toggle.getAttribute('aria-controls'));

if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
}

