import { brand } from '../data/site';

// Opening animation: the brand letters rise one by one, a bar fills, then a
// two-layer curtain lifts (src/client/loader.js). Decorative only, so hidden
// from assistive tech. Skipped after the first page of a session
// (public/js/loader.js) and for visitors who prefer reduced motion.
const ACCENT_INDEX = 3; // the second "T", in teal as in the logo

export default function Loader() {
  const letters = brand.name.toUpperCase().split('');

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-panel loader-panel-accent" />
      <div className="loader-panel">
        <div className="loader-inner">
          <p className="loader-word">
            {letters.map((letter, i) => (
              <span key={i} className="loader-letter">
                <span className={i === ACCENT_INDEX ? 'is-accent' : undefined}>
                  {letter}
                </span>
              </span>
            ))}
          </p>
          <span className="loader-bar">
            <i />
          </span>
        </div>
      </div>
    </div>
  );
}
