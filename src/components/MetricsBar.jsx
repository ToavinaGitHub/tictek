import { usePreferences } from '../context/PreferencesContext';
import MetricTile from './ui/MetricTile';
import Reveal from './Reveal';

export default function MetricsBar() {
  const { t } = usePreferences();

  return (
    <div className="metrics-bar">
      <div className="container">
        <div className="row g-3">
          {t.metrics.map((metric, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-6 col-md-3" key={i}>
              <MetricTile {...metric} />
            </Reveal>
          ))}
        </div>
        <div className="badges justify-content-center">
          {t.badges.map((badge) => (
            <span className="badge-tech" key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
