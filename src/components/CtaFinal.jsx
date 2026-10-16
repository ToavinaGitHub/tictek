import { contactInfo } from '../data/content';
import { usePreferences } from '../context/PreferencesContext';
import Reveal from './Reveal';

export default function CtaFinal() {
  const { t } = usePreferences();

  return (
    <div className="container py-5">
      <Reveal variant="zoom" className="cta-final">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.text}</p>
        <a href={`mailto:${contactInfo.email}`} className="btn btn-primary py-3 px-5">
          {t.cta.button}
        </a>
        <div className="micro">{t.cta.micro}</div>
      </Reveal>
    </div>
  );
}
