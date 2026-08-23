import { metrics, badges } from '../data/content';
import MetricTile from './ui/MetricTile';
import Reveal from './Reveal';

export default function MetricsBar() {
  return (
    <div className="metrics-bar">
      <div className="container">
        <div className="row g-3">
          {metrics.map((metric, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-6 col-md-3" key={metric.label}>
              <MetricTile {...metric} />
            </Reveal>
          ))}
        </div>
        <div className="badges justify-content-center">
          {badges.map((badge) => (
            <span className="badge-tech" key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
