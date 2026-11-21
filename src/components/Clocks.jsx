import { homeClock } from '../data/site';
import { useLocale } from '../i18n';
import Flag from './Flag';

/**
 * Live clocks: Madagascar first, then `clocks` ({ id, flag, timeZone }).
 * The time and the gap are filled in by src/client/clocks.js. `children`:
 * the heading block shown above the list.
 */
export default function Clocks({ clocks, children }) {
  const { t } = useLocale();
  const { hours } = t;
  const all = [homeClock, ...clocks.filter((clock) => clock.id !== homeClock.id)];

  return (
    <div className="clocks" data-clocks data-same={hours.same} data-unit={hours.hourUnit} data-versus={hours.versus}>
      <div className="clients-head reveal">
        <div>{children}</div>
        <p className="clocks-langs">
          <span>{hours.languagesLabel}</span>
          {hours.languages.map((language) => (
            <strong key={language}>{language}</strong>
          ))}
        </p>
      </div>
      <ul className={`clock-grid clock-grid-${Math.min(all.length, 4)}`} aria-label={hours.listLabel}>
        {all.map((clock, index) => (
          <li key={clock.id} className={index === 0 ? 'clock is-home' : 'clock'} data-tz={clock.timeZone}>
            <span className="clock-place">
              <Flag code={clock.flag} />
              <span>
                <strong>{t.cities[clock.id].city}</strong>
                <span className="clock-country">{t.cities[clock.id].country}</span>
              </span>
            </span>
            <span className="clock-time" data-clock-time>
              --:--
            </span>
            <span className="clock-gap" data-clock-gap>
              {index === 0 ? hours.ours : ' '}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
