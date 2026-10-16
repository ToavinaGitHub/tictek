import { usePreferences } from '../context/PreferencesContext';
import CaseStudyCard from './ui/CaseStudyCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function CaseStudies() {
  const { t } = usePreferences();
  const { eyebrow, title, labels, items, note } = t.caseStudies;

  return (
    <div id="etudes-de-cas" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} />
        </Reveal>

        <div className="row g-4">
          {items.map((study, i) => (
            <Reveal as="div" delay={0.1 * (i + 1)} className="col-lg-6" key={i}>
              <CaseStudyCard {...study} labels={labels} />
            </Reveal>
          ))}
        </div>
        <p className="note-flag mt-2">{note}</p>
      </div>
    </div>
  );
}
