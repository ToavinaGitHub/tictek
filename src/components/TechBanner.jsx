import { bannerTechs } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import TechMarquee from './ui/TechMarquee';

export default function TechBanner() {
  const { t } = usePreferences();

  return (
    <section className="tech-banner" aria-label={t.techBanner.label}>
      <p className="tech-banner-label">{t.techBanner.label}</p>
      <TechMarquee items={bannerTechs} />
    </section>
  );
}
