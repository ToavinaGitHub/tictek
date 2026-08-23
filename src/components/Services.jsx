import { services } from '../data/content';
import ServiceCard from './ui/ServiceCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Services() {
  return (
    <div id="services" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Nos expertises"
            title="Une ingénierie complète, du code à la production"
            lede="Web, mobile, assurance qualité et cloud — quatre disciplines que nous maîtrisons en interne, sans sous-traitance ni maillon faible."
          />
        </Reveal>
        <div className="bento">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
