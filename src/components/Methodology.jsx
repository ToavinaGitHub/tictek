import { usePreferences } from '../context/PreferencesContext';
import StepItem from './ui/StepItem';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function Methodology() {
  const { t } = usePreferences();
  const { eyebrow, title, steps } = t.methodology;

  return (
    <div id="methodologie" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className="steps">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={0.1 * (i + 1)}>
              <StepItem {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
