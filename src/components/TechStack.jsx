import { usePreferences } from '../context/PreferencesContext';
import ChipGroup from './ui/ChipGroup';
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
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {categories.map((cat) => (
              <ChipGroup key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
