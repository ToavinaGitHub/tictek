import { useLocale } from '../i18n';
import Icon from './Icon';

/**
 * TicTek's commitments (locales: common.guarantees). `compact`: a plain list
 * for the contact page aside; otherwise a four-column band (home page).
 */
export default function Guarantees({ compact = false, headingLevel = 3 }) {
  const { t } = useLocale();
  const Heading = `h${headingLevel}`;
  const { items } = t.common.guarantees;

  return (
    <ul className={compact ? 'guarantees guarantees-compact' : 'guarantees'}>
      {items.map((item) => (
        <li key={item.title}>
          <Icon name={item.icon} className="icon guarantee-icon" />
          <div>
            <Heading>{item.title}</Heading>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
