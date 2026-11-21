import { useLocale } from '../i18n';
import { marketIds } from '../data/markets';
import Header from './Header';
import Footer from './Footer';
import ConsentBanner from './ConsentBanner';
import WhatsAppButton from './WhatsAppButton';
import Loader from './Loader';
import KeywordBand from './KeywordBand';

// Pages whose views count as interest in our services (client/main.js sends
// a view_commercial_page event for them, after analytics consent).
const COMMERCIAL_PAGES = ['home', 'services', 'outsourcing', 'work', 'collaboration', 'pricing', 'contact', ...marketIds];

export default function Layout({ pageId, children }) {
  const { t } = useLocale();

  return (
    <>
      <Loader />
      <div className="scroll-progress" aria-hidden="true" />
      <a href="#main" className="skip-link">
        {t.common.skipLink}
      </a>
      <Header pageId={pageId} />
      <main id="main" tabIndex={-1} data-page-type={COMMERCIAL_PAGES.includes(pageId) ? pageId : undefined}>
        {children}
      </main>
      <KeywordBand />
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
    </>
  );
}
