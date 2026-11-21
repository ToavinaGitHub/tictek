/**
 * Questions and answers as native disclosure widgets: keyboard accessible,
 * no script. The same items feed the FAQPage structured data (seo/head.js).
 */
export default function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
