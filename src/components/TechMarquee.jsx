import { techLogos } from '../data/site';
import { useLocale } from '../i18n';

function TechList({ hidden = false }) {
  return (
    <ul className="marquee-list" aria-hidden={hidden || undefined}>
      {techLogos.map((tech) => (
        <li key={tech.name}>
          <img
            src={tech.logo}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            className={tech.mono ? 'mono' : undefined}
          />
          <span>{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Endless logo strip. The list is rendered twice so the CSS loop is seamless;
 * the copy is hidden from assistive tech. Pausing is a plain checkbox (CSS
 * :has), so it works without JavaScript; hover and keyboard focus pause too,
 * and reduced-motion users get a static grid.
 */
export default function TechMarquee() {
  const { t } = useLocale();
  const hero = t.pages.home.hero;

  return (
    <div className="marquee">
      <div className="marquee-head">
        <p>{hero.stackTitle}</p>
        <label className="marquee-pause">
          <input type="checkbox" />
          <span className="visually-hidden">{hero.stackPause}</span>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
            <path className="i-pause" d="M8 5v14M16 5v14" />
            <path className="i-play" d="M7 4.5v15l12-7.5z" />
          </svg>
        </label>
      </div>
      <div className="marquee-viewport">
        <div className="marquee-track">
          <TechList />
          <TechList hidden />
        </div>
      </div>
    </div>
  );
}
