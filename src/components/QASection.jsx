import { qaIntro, qaCards, qaMetrics, contactInfo } from '../data/content';
import QACard from './ui/QACard';
import MetricTile from './ui/MetricTile';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function QASection() {
  return (
    <div id="qa" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Assurance Qualité"
            title="Le bug le plus cher est celui qu'on trouve en production"
            lede={qaIntro}
            maxWidth={680}
          />
        </Reveal>

        <div className="row g-4">
          {qaCards.map((card, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-md-6" key={card.letter}>
              <QACard {...card} />
            </Reveal>
          ))}
        </div>

        <div className="row g-3 mt-2">
          {qaMetrics.map((metric, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-6 col-md-3" key={metric.label}>
              <MetricTile {...metric} />
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href={`mailto:${contactInfo.email}`} className="btn btn-primary py-3 px-4">
            Discuter de votre stratégie de tests actuelle
          </a>
        </div>
      </div>
    </div>
  );
}
