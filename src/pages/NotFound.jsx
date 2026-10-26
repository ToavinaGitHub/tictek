import { navIds, paths } from '../data/site';
import { translations, useLocale } from '../i18n';

// A single 404 page for both languages: hosts serve it for any unknown URL.
export default function NotFound() {
  const { lang, t, href } = useLocale();
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  const other = translations[otherLang];

  return (
    <div className="container not-found">
      <h1>{t.pages.notFound.h1}</h1>
      <p className="lede">{t.pages.notFound.lede}</p>
      <ul className="plain-list">
        <li>
          <a href={href('home')}>{t.common.nav.home}</a>
        </li>
        {navIds.map((id) => (
          <li key={id}>
            <a href={href(id)}>{t.common.nav[id]}</a>
          </li>
        ))}
        <li>
          <a href={href('contact')}>{t.common.nav.contact}</a>
        </li>
      </ul>
      <p lang={otherLang} className="not-found-alt">
        {other.pages.notFound.h1}. <a href={paths[otherLang].home}>{other.common.nav.home}</a>
      </p>
    </div>
  );
}
