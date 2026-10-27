import { analyticsId } from '../data/site';
import { useLocale } from '../i18n';

/**
 * Analytics cookie banner. Rendered hidden; src/client/consent.js shows it
 * when no (recent) choice is stored, and wires the buttons. Accept and
 * Decline have the same weight, as the CNIL requires. Not rendered at all
 * when no GA4 ID is configured.
 */
export default function ConsentBanner() {
  const { t, href } = useLocale();
  if (!analyticsId) return null;
  const c = t.common.consent;

  return (
    <section className="consent" id="consent" aria-label={c.label} hidden>
      <p>
        {c.text} <a href={href('privacy')}>{c.more}</a>
      </p>
      <div className="consent-actions">
        <button type="button" className="btn btn-secondary btn-sm" data-consent="denied">
          {c.refuse}
        </button>
        <button type="button" className="btn btn-secondary btn-sm" data-consent="granted">
          {c.accept}
        </button>
      </div>
    </section>
  );
}
