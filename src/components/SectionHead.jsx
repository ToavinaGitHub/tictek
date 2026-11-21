/** Eyebrow, H2 and intro shared by every page section. `id` labels the section. */
export default function SectionHead({ id, eyebrow, title, lede, className = '' }) {
  return (
    <div className={`section-head reveal ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {lede && <p>{lede}</p>}
    </div>
  );
}
