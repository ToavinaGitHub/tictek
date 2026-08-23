import { pricingPlans, pricingNote } from '../data/content';
import PricingCard from './ui/PricingCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Pricing() {
  return (
    <div id="tarifs" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Tarifs"
            title="Un engagement clair, adapté à la maturité de votre projet"
            lede="Pas de grille tarifaire figée pour du sur-mesure : voici les niveaux d'accompagnement que nous proposons le plus souvent, à affiner ensemble lors d'un premier échange technique."
          />
        </Reveal>
        <div className="row g-4 align-items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-lg-4" key={plan.name}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>
        <p className="note-flag mt-4 text-center">{pricingNote}</p>
      </div>
    </div>
  );
}
