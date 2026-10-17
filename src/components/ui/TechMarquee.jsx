import { techIcons, monoTechs } from '../../data/content';

// Short lists are repeated so one copy is always wider than the viewport.
const MIN_ITEMS = 12;
const SECONDS_PER_ITEM = 4;

function TechList({ items, hidden = false }) {
  return (
    <ul className="marquee-list" aria-hidden={hidden || undefined}>
      {items.map((name, i) => (
        <li className="marquee-item" key={i}>
          {techIcons[name] && (
            <img
              src={techIcons[name]}
              alt=""
              width={24}
              height={24}
              loading="lazy"
              className={monoTechs.has(name) ? 'mono' : undefined}
            />
          )}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Endless horizontal strip of technologies. The list is rendered twice so the loop is seamless. */
export default function TechMarquee({ items, reverse = false }) {
  const repeat = Math.ceil(MIN_ITEMS / items.length);
  const loop = Array.from({ length: repeat }, () => items).flat();

  return (
    <div className="marquee">
      <div
        className={`marquee-track${reverse ? ' reverse' : ''}`}
        style={{ animationDuration: `${loop.length * SECONDS_PER_ITEM}s` }}
      >
        <TechList items={loop} />
        <TechList items={loop} hidden />
      </div>
    </div>
  );
}
