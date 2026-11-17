// Inline SVG flags: flag emoji don't render on Windows. Decorative only:
// the language or country name is always given as text next to or behind them.
// Keys are language codes (header switcher) and lowercase ISO country codes
// (site.js clocks); "fr" serves both.
const FLAGS = {
  fr: (
    <svg className="flag" viewBox="0 0 3 2" width="20" height="14" aria-hidden="true" focusable="false">
      <rect width="1" height="2" fill="#002654" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#CE1126" />
    </svg>
  ),
  en: (
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
  ),
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

export default function Flag({ code }) {
  return FLAGS[code] ?? null;
}
