import { methodologySteps } from '../data/content';
import StepItem from './ui/StepItem';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Methodology() {
  return (
    <div id="methodologie" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow="Méthodologie" title="Du cadrage au monitoring, un process qui ne saute aucune étape" />
        </Reveal>
        <div className="steps">
          {methodologySteps.map((step, i) => (
            <Reveal key={step.n} delay={0.1 * (i + 1)}>
              <StepItem {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
