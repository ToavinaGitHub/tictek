import { analyticsId, brand, companyIds, contactInfo, serviceIds } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

export default function Footer() {
  const { t, href } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <img src={brand.logo} alt={brand.name} width={275} height={89} className="brand-logo logo-light" loading="lazy" />
          <img src={brand.logoDark} alt={brand.name} width={275} height={89} className="brand-logo logo-dark" loading="lazy" />
          <p>{t.footer.about}</p>
        </div>

        <div>
          <h2 className="footer-title">{t.footer.servicesTitle}</h2>
          <ul className="footer-links">
            {serviceIds.map((id) => (
              <li key={id}>
                <a href={`${href('services')}#${id}`}>{t.services[id].title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer-title">{t.footer.companyTitle}</h2>
          <ul className="footer-links">
            {companyIds.map((id) => (
              <li key={id}>
                <a href={href(id)}>{t.common.nav[id]}</a>
              </li>
            ))}
            <li>
              <a href={href('contact')}>{t.common.nav.contact}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">{t.footer.contactTitle}</h2>
          <ul className="footer-contact">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>{t.footer.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {brand.name}. {t.footer.rights}
        </p>
        <p className="footer-legal">
          <a href={href('privacy')}>{t.common.nav.privacy}</a>
          {analyticsId && (
            // Shown by src/client/consent.js: it needs JavaScript to work.
            <button type="button" className="link-button" data-consent-open hidden>
              {t.common.consent.manage}
            </button>
          )}
        </p>
      </div>
    </footer>
  );
}
