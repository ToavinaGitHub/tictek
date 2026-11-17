// Loaded on every page. The site is static HTML; this only adds the opening
// animation exit, scroll animations, the mobile menu, the analytics consent banner, the home page clocks and click events
// on links marked data-track (e.g. WhatsApp).
import { initConsent } from './consent';
import { initClocks } from './clocks';
import { initLoader } from './loader';
import { initMotion } from './motion';
import { trackEvent } from '../analytics';

initLoader();
initMotion();
initConsent();
initClocks();

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-track]');
  if (link) trackEvent(link.dataset.track, { link_url: link.href });
});

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

