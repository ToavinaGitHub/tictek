import { offerIds } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

/** Cards of the six offers, each linking to its section of the services page. */
export default function OfferCards({ ids = offerIds, headingLevel = 3 }) {
  const { t, href } = useLocale();
  const Heading = `h${headingLevel}`;

  return (
    <ul className="grid grid-3 offer-grid">
      {ids.map((id) => {
        const offer = t.offers[id];
        return (
          <li className="card card-service offer-card" key={id}>
            <Icon name={id} className="icon card-icon" />
            <Heading className="card-title">
              <a href={`${href('services')}#${id}`} className="stretched-link" data-track="service_click" data-track-label={id}>
                {offer.title}
              </a>
            </Heading>
            <p>{offer.short}</p>
            <p className="offer-need">{offer.need}</p>
            <span className="card-more" aria-hidden="true">
              {t.common.learnMore}
              <Icon name="arrow" size={16} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}
