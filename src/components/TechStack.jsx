import { stackCategories } from '../data/content';
import ChipGroup from './ui/ChipGroup';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';

export default function TechStack() {
  return (
    <div id="stack" className="container-fluid py-5">
      <div className="container py-5">
        <Reveal>
          <SectionTitle
            eyebrow="Stack technique & rigueur"
            title="Des outils choisis par adéquation, pas par habitude"
            lede="Voici les technologies que nous maîtrisons en profondeur et déployons en production — pas en side-project."
          />
        </Reveal>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {stackCategories.map((cat) => (
              <ChipGroup key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
