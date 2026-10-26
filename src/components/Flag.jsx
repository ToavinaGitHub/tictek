// Inline SVG flags: flag emoji don't render on Windows. Decorative only:
// the language name is always given as text next to or behind them.
export default function Flag({ lang }) {
  if (lang === 'fr') {
    return (
      <svg className="flag" viewBox="0 0 3 2" width="20" height="14" aria-hidden="true" focusable="false">
        <rect width="1" height="2" fill="#002654" />
        <rect x="1" width="1" height="2" fill="#FFFFFF" />
        <rect x="2" width="1" height="2" fill="#CE1126" />
      </svg>
    );
  }

  return (
    <svg className="flag" viewBox="0 0 60 30" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <clipPath id="flag-uk-diagonals">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-uk-diagonals)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}
