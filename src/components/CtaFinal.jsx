import { contactInfo } from '../data/content';
import Reveal from './Reveal';

export default function CtaFinal() {
  return (
    <div className="container py-5">
      <Reveal variant="zoom" className="cta-final">
        <h2>Votre prochain projet mérite une ingénierie qui ne cède pas sous la charge.</h2>
        <p>
          Parlez 30 minutes avec un architecte TicTek — pas un commercial. Vous repartez avec un avis technique
          concret sur votre projet, que vous travailliez avec nous ensuite ou non.
        </p>
        <a href={`mailto:${contactInfo.email}`} className="btn btn-primary py-3 px-5">
          Réserver mon appel technique
        </a>
        <div className="micro">Réponse garantie sous 24h ouvrées.</div>
      </Reveal>
    </div>
  );
}
