import { brand, navIds, paths } from '../data/site';
import { useLocale } from '../i18n';
import Icon from './Icon';

// The mobile menu toggle is wired up by src/client/main.js.
export default function Header({ pageId }) {
  const { lang, t, href } = useLocale();
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const otherHref = paths[otherLang][pageId] ?? paths[otherLang].home;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={href('home')} className="brand" aria-label={`${brand.name}, ${t.common.nav.home}`}>
          <img src={brand.logo} alt="" width={275} height={89} className="brand-logo" />
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded="false"
          aria-controls="site-nav"
          data-nav-toggle
        >
          <Icon name="menu" />
          <span>{t.common.menu}</span>
        </button>

        <nav id="site-nav" className="site-nav" aria-label={t.common.mainNav}>
          <ul>
            {navIds.map((id) => (
              <li key={id}>
                <a href={href(id)} aria-current={id === pageId ? 'page' : undefined}>
                  {t.common.nav[id]}
                </a>
              </li>
            ))}
            <li>
              <a href={otherHref} hrefLang={otherLang} lang={otherLang} title={t.common.switchLang.title} className="lang-link">
                <span aria-hidden="true">{t.common.switchLang.label}</span>
                <span className="visually-hidden">{t.common.switchLang.title}</span>
              </a>
            </li>
            <li>
              <a
                href={href('contact')}
                className="btn btn-primary btn-sm"
                aria-current={pageId === 'contact' ? 'page' : undefined}
              >
                {t.common.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
