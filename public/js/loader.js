// Runs in <head> before first paint (classic script, allowed by the CSP as
// 'self'). The opening animation plays in full on the first page of a
// browser session, then as a shorter version on the following pages.
try {
  if (sessionStorage.getItem('tictek-loader-seen')) document.documentElement.classList.add('loader-quick');
} catch (e) {
  // Storage blocked: the full animation plays every time.
}
