import { useLocale } from '../i18n';

/** Short trust points under the hero and on the outsourcing page. */
export default function TrustList({ label, className = '' }) {
  const { t } = useLocale();

  return (
    <ul className={`trust-points ${className}`.trim()} aria-label={label}>
      {t.common.trust.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
