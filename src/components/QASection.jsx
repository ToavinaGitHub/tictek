import { contactInfo } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import QACard from './ui/QACard';
import MetricTile from './ui/MetricTile';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function QASection() {
  const { t } = usePreferences();
  const qa = t.qa;

  return (
    <div id="qa" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={qa.eyebrow} title={qa.title} lede={qa.intro} maxWidth={680} />
        </Reveal>

        <div className="row g-4">
          {qa.cards.map((card, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-md-6" key={card.letter}>
              <QACard {...card} />
            </Reveal>
          ))}
        </div>

        <div className="row g-3 mt-2">
          {qa.metrics.map((metric, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-6 col-md-3" key={i}>
              <MetricTile {...metric} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href={`mailto:${contactInfo.email}`} className="btn btn-primary py-3 px-4">
            {qa.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
