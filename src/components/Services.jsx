import { usePreferences } from '../context/PreferencesContext';
import ServiceCard from './ui/ServiceCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Services() {
  const { t } = usePreferences();
  const { eyebrow, title, lede, items } = t.services;

  return (
    <div id="services" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} lede={lede} />
        </Reveal>
        <div className="bento">
          {items.map((service) => (
            <ServiceCard key={service.span + service.tag} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
