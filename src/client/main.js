// Loaded on every page. The site is static HTML; this only adds the mobile menu.
import '../styles/style.css';

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
