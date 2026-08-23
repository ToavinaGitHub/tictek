import { caseStudies } from '../data/content';
import CaseStudyCard from './ui/CaseStudyCard';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function CaseStudies() {
  return (
    <div id="etudes-de-cas" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow="Études de cas" title="La preuve, pas la promesse" />
        </Reveal>

        <div className="row g-4">
          {caseStudies.map((study, i) => (
            <Reveal as="div" delay={0.1 * (i + 1)} className="col-lg-6" key={study.tag}>
              <CaseStudyCard {...study} />
            </Reveal>
          ))}
        </div>
        <p className="note-flag mt-2">
          ⚠️ Ces deux études de cas suivent une structure prête à publier ; les chiffres illustrent le niveau de
          rigueur attendu et doivent être remplacés par les données réelles et validées de vos projets clients
          avant mise en ligne.
        </p>
      </div>
    </div>
  );
}
