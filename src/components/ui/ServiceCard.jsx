export default function ServiceCard({ span, tag, title, desc, features, benefit }) {
  return (
    <div className={`card ${span}`}>
      <span className="icon-tag">{tag}</span>
      <h4>{title}</h4>
      <p className="desc">{desc}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="benefit">{benefit}</p>
    </div>
  );
}
