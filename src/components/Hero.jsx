import { contactInfo, heroPanels } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import Reveal from './Reveal';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const { t } = usePreferences();
  const hero = t.hero;

  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <Reveal as="div" className="col-lg-6" delay={0.1}>
            <p className="kicker">{hero.kicker}</p>
            <h1>{hero.title}</h1>
            <p className="lede">{hero.lede}</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href={`mailto:${contactInfo.email}`} className="btn btn-primary py-3 px-4">
                {hero.ctaPrimary}
              </a>
              <a href="#stack" className="btn btn-outline-light py-3 px-4">
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal as="div" className="col-lg-6" delay={0.3}>
            <HeroVisual panels={heroPanels} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
