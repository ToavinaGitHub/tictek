import { usePreferences } from '../context/PreferencesContext';
import PricingCard from './ui/PricingCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Pricing() {
  const { t } = usePreferences();
  const { eyebrow, title, lede, plans, note } = t.pricing;

  return (
    <div id="tarifs" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} lede={lede} />
        </Reveal>
        <div className="row g-4 align-items-stretch">
          {plans.map((plan, i) => (
            <Reveal as="div" variant="zoom" delay={0.1 * (i + 1)} className="col-lg-4" key={i}>
              <PricingCard {...plan} />
            </Reveal>
          ))}
        </div>
        <p className="note-flag mt-4 text-center">{note}</p>
      </div>
    </div>
  );
}
