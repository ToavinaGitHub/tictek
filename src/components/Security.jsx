import { useLocale } from '../i18n';
import FeatureGrid from './FeatureGrid';
import SectionHead from './SectionHead';

/** Security and trust practices (locales: security), as a full section. `children`: shown below. */
export default function Security({ className = 'section', children }) {
  const { t } = useLocale();
  const { security } = t;

  return (
    <section className={className} aria-labelledby="security-title">
      <div className="container">
        <SectionHead id="security-title" eyebrow={security.eyebrow} title={security.title} lede={security.lede} />
        <FeatureGrid items={security.items} columns={4} className="feature-grid-ruled" />
        <p className="security-note">{security.note}</p>
        {children}
      </div>
    </section>
  );
}
