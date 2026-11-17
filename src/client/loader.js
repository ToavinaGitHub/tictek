// Lifts the opening curtain (components/Loader.jsx) once the page has loaded
// and the animation had time to play, and remembers it for the session so
// later pages get the short version (public/js/loader.js).
const MIN_VISIBLE_MS = 1300;
const MIN_VISIBLE_QUICK_MS = 650;
const MAX_WAIT_MS = 3000;
const STORAGE_KEY = 'tictek-loader-seen';

export function initLoader() {
  const root = document.documentElement;
  if (!document.querySelector('.loader')) return;
  const minVisible = root.classList.contains('loader-quick') ? MIN_VISIBLE_QUICK_MS : MIN_VISIBLE_MS;

  let done = false;
  const lift = () => {
    if (done) return;
    done = true;
    setTimeout(() => {
      root.classList.add('is-loaded');
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // Storage blocked: the full animation will play again next time.
      }
    }, Math.max(0, minVisible - performance.now()));
  };

  if (document.readyState === 'complete') lift();
  else window.addEventListener('load', lift, { once: true });
  setTimeout(lift, MAX_WAIT_MS);
}
