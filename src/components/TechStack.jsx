import { usePreferences } from '../context/PreferencesContext';
import TechMarquee from './ui/TechMarquee';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function TechStack() {
  const { t } = usePreferences();
  const { eyebrow, title, lede, categories } = t.stack;

  return (
    <div id="stack" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} lede={lede} />
        </Reveal>
        <div className="stack-rows">
          {categories.map((cat, i) => (
            <div className="stack-row" key={cat.name}>
              <h4>{cat.name}</h4>
              <TechMarquee items={cat.items} reverse={i % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
