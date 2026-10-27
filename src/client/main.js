// Loaded on every page. The site is static HTML; this only adds the mobile
// menu, the theme toggle (the theme itself is applied before first paint
// by the inline script in seo/head.js) and the analytics consent banner.
import { initConsent } from './consent';

const THEME_STORAGE_KEY = 'tictek-theme';

initConsent();

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

const themeToggle = document.querySelector('[data-theme-toggle]');

if (themeToggle) {
  const root = document.documentElement;
  const sync = () => themeToggle.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  sync();

  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(THEME_STORAGE_KEY, root.dataset.theme);
    } catch {
      // Storage blocked (private mode): the choice just won't persist.
    }
    sync();
  });
}
