// Site-wide motion. Nothing is hidden unless this script runs, and only the
// header state is kept for visitors who prefer reduced motion.
//  - blocks fade and rise into view as the page scrolls, siblings in cascade;
//  - section headings rise word by word;
//  - figures count up (home stats, pricing rate);
//  - cards get a soft light that follows the pointer;
//  - main buttons lean towards the pointer ("magnetic");
//  - the header compacts once the page is scrolled.

// Blocks that rise into view. The hero and the inner-page headers have their
// own entrance animation in CSS, so they are left out.
const TARGETS = [
  '.reveal',
  '.section-head',
  '.section-link',
  '.grid > *',
  '.step',
  '.trust-list li',
  '.clocks-head',
  '.clock',
  '.country-list li',
  '.service',
  '.toc li',
  '.prose-grid > section',
  '.prose > section',
  '.panel',
  '.rate-card',
  '.two-col > *',
  '.faq details',
  '.team-card',
  '.skills > div',
  '.cta-band',
  '.contact-form',
  '.contact-aside > *',
  '.post-image',
  '.post-content > p',
].join(',');

// Headings split into words. Form islands are left alone: React hydrates them.
const SPLIT_HEADINGS = 'main h2:not(.eyebrow, .card-title), .cta-band h2';

const STAGGER_MS = 70;
const MAX_STAGGER_MS = 420;
const WORD_STAGGER_MS = 55;

const finePointer = () => matchMedia('(hover: hover) and (pointer: fine)').matches;

function observeOnce(elements, onVisible) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        onVisible(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  elements.forEach((el) => observer.observe(el));
}

const show = (el) => el.classList.add('is-visible');

function initReveal() {
  const candidates = [...document.querySelectorAll(TARGETS)].filter(
    (el) => !el.closest('.hero, .page-header, .loader'),
  );
  // Animate the outermost block only: a card inside a revealed column moves with it.
  const targets = candidates.filter((el) => !candidates.some((other) => other !== el && other.contains(el)));

  const countByParent = new Map();
  for (const el of targets) {
    const index = countByParent.get(el.parentElement) ?? 0;
    countByParent.set(el.parentElement, index + 1);
    el.classList.add('is-reveal-target');
    const delay = Math.min(index * STAGGER_MS, MAX_STAGGER_MS);
    // Delay only the entrance (opacity, translate), never hover transitions.
    if (delay) el.style.transitionDelay = `${delay}ms, ${delay}ms, 0s, 0s, 0s, 0s, 0s, 0s`;
  }
  observeOnce(targets, show);
}

function initSplitHeadings() {
  const headings = [...document.querySelectorAll(SPLIT_HEADINGS)].filter(
    (h) => !h.closest('[data-form], .hero, .page-header') && h.children.length === 0 && h.textContent.trim(),
  );
  for (const heading of headings) {
    const words = heading.textContent.trim().split(/\s+/);
    heading.textContent = '';
    words.forEach((word, i) => {
      if (i > 0) heading.append(' ');
      const outer = document.createElement('span');
      const inner = document.createElement('span');
      outer.className = 'word';
      inner.textContent = word;
      inner.style.transitionDelay = `${i * WORD_STAGGER_MS}ms`;
      outer.append(inner);
      heading.append(outer);
    });
    heading.classList.add('split-scroll');
  }
  observeOnce(headings, show);
}

function initCountUp() {
  const counters = [...document.querySelectorAll('.rate-value strong, .stat-value')].filter((el) => /\d/.test(el.textContent));
  observeOnce(counters, (el) => {
    const original = el.textContent;
    const [match] = original.match(/\d+/);
    const target = Number(match);
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      el.textContent = original.replace(match, String(Math.round(target * eased)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}

function initSpotlight() {
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = e.target.closest?.('.card:not(.project-card)');
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - box.left}px`);
      card.style.setProperty('--my', `${e.clientY - box.top}px`);
    },
    { passive: true },
  );
}

function initMagnetic() {
  const STRENGTH = 0.3;
  const MAX = 10;
  for (const btn of document.querySelectorAll('.btn-primary, .btn-secondary.btn-lg')) {
    btn.classList.add('is-magnetic');
    btn.addEventListener('pointermove', (e) => {
      const box = btn.getBoundingClientRect();
      const clamp = (v) => Math.max(-MAX, Math.min(MAX, v));
      const x = clamp((e.clientX - box.left - box.width / 2) * STRENGTH);
      const y = clamp((e.clientY - box.top - box.height / 2) * STRENGTH);
      btn.style.translate = `${x}px ${y}px`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.translate = '';
    });
  }
}

function initHeader(root) {
  let scrolled = null;
  const update = () => {
    const next = window.scrollY > 8;
    if (next !== scrolled) root.classList.toggle('is-scrolled', (scrolled = next));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
}

export function initMotion() {
  const root = document.documentElement;
  initHeader(root);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  initSplitHeadings();
  initReveal();
  initCountUp();
  if (finePointer()) {
    initSpotlight();
    initMagnetic();
  }
  root.classList.add('reveal-ready');
}
