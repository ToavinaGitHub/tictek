// Inline SVG flags: flag emoji don't render on Windows. Decorative only:
// the language or country name is always given as text next to or behind them.
// Keys are language codes (header switcher) and lowercase ISO country codes
// (site.js clocks, markets.js); "fr" serves both, "en" is also "gb".
// Union Jack; each copy needs its own clipPath id (the header and the home
// clocks can show it on the same page).
function ukFlag(clipId) {
  return (
    <svg className="flag" viewBox="0 0 60 30" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const FLAGS = {
  fr: (
    <svg className="flag" viewBox="0 0 3 2" width="20" height="14" aria-hidden="true" focusable="false">
      <rect width="1" height="2" fill="#002654" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </svg>
  ),
  en: ukFlag('flag-uk-diagonals'),
  mu: (
    <svg className="flag" viewBox="0 0 3 2" width="20" height="14" aria-hidden="true" focusable="false">
      <rect width="3" height=".5" fill="#EA2839" />
      <rect y=".5" width="3" height=".5" fill="#1A206D" />
      <rect y="1" width="3" height=".5" fill="#FFD500" />
      <rect y="1.5" width="3" height=".5" fill="#00A551" />
    </svg>
  ),
  mg: (
    <svg className="flag" viewBox="0 0 3 2" width="20" height="14" aria-hidden="true" focusable="false">
      <rect width="3" height="2" fill="#FFFFFF" />
      <rect x="1" width="2" height="1" fill="#FC3D32" />
      <rect x="1" y="1" width="2" height="1" fill="#007E3A" />
    </svg>
  ),
  ca: (
    <svg className="flag" viewBox="0 0 9600 4800" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <rect width="9600" height="4800" fill="#D52B1E" />
      <rect x="2400" width="4800" height="4800" fill="#FFFFFF" />
      <path
        fill="#D52B1E"
        d="M4890 4430l-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
      />
    </svg>
  ),
  ch: (
    <svg className="flag" viewBox="0 0 30 20" width="20" height="14" aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#DA291C" />
      <path d="M13 4h4v4h4v4h-4v4h-4v-4H9V8h4z" fill="#FFFFFF" />
    </svg>
  ),
  ae: (
    <svg className="flag" viewBox="0 0 12 6" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <rect width="12" height="2" fill="#00732F" />
      <rect y="2" width="12" height="2" fill="#FFFFFF" />
      <rect y="4" width="12" height="2" fill="#000000" />
      <rect width="3" height="6" fill="#FF0000" />
    </svg>
  ),
};

// Simplified at 20×14: stripes and canton only, no individual stars.
FLAGS.gb = ukFlag('flag-gb-diagonals');
FLAGS.us = (
  <svg className="flag" viewBox="0 0 19 10" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <rect width="19" height="10" fill="#FFFFFF" />
    <path d="M0 0h19v.77H0zM0 1.54h19v.77H0zM0 3.08h19v.77H0zM0 4.62h19v.77H0zM0 6.15h19v.77H0zM0 7.69h19v.77H0zM0 9.23h19V10H0z" fill="#B22234" />
    <rect width="7.6" height="5.38" fill="#3C3B6E" />
  </svg>
);
FLAGS.au = (
  <svg className="flag" viewBox="0 0 20 10" width="20" height="14" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <rect width="20" height="10" fill="#012169" />
    <path d="M0 0l10 5M10 0L0 5" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M5 0v5M0 2.5h10" stroke="#FFFFFF" strokeWidth="1.6" />
    <path d="M5 0v5M0 2.5h10" stroke="#C8102E" strokeWidth=".9" />
    <circle cx="5" cy="7.6" r=".9" fill="#FFFFFF" />
    <circle cx="15" cy="2" r=".5" fill="#FFFFFF" />
    <circle cx="13" cy="4.8" r=".5" fill="#FFFFFF" />
    <circle cx="17.2" cy="4.2" r=".5" fill="#FFFFFF" />
    <circle cx="15" cy="8.2" r=".5" fill="#FFFFFF" />
  </svg>
);

export default function Flag({ code }) {
  return FLAGS[code] ?? null;
}
