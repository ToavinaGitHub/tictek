import { useLocale } from '../i18n';
import Header from './Header';
import Footer from './Footer';
import ConsentBanner from './ConsentBanner';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ pageId, children }) {
  const { t } = useLocale();

  return (
    <>
      <a href="#main" className="skip-link">
        {t.common.skipLink}
      </a>
      <Header pageId={pageId} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ConsentBanner />
    </>
  );
}
