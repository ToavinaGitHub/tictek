import { useLocale } from '../i18n';
import Header from './Header';
import Footer from './Footer';
import ConsentBanner from './ConsentBanner';
import WhatsAppButton from './WhatsAppButton';
import Loader from './Loader';
import KeywordBand from './KeywordBand';

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
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <KeywordBand />
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
    </>
  );
}
