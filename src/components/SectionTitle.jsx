export default function SectionTitle({ eyebrow, title, lede, maxWidth = 640 }) {
  return (
    <div className="section-title text-center mx-auto" style={{ maxWidth }}>
      <p className="eyebrow justify-content-center">{eyebrow}</p>
      <h1>{title}</h1>
      {lede && <p style={{ margin: '14px auto 0' }}>{lede}</p>}
    </div>
  );
}
