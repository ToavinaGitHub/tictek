import Icon from './Icon';

/**
 * Icon + title + text items (advantages, security practices, audiences,
 * market reasons). `columns`: 2, 3 or 4 on wide screens.
 */
export default function FeatureGrid({ items, columns = 4, headingLevel = 3, className = '' }) {
  const Heading = `h${headingLevel}`;

  return (
    <ul className={`feature-grid feature-grid-${columns} ${className}`.trim()}>
      {items.map((item) => (
        <li className="feature" key={item.title}>
          {item.icon && <Icon name={item.icon} className="icon feature-icon" />}
          <Heading className="feature-title">{item.title}</Heading>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
