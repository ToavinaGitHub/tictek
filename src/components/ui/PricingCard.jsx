export default function PricingCard({ name, tag, price, description, features, cta, highlighted }) {
  return (
    <div className={`pricing-card${highlighted ? ' is-featured' : ''}`}>
      {highlighted && <span className="pricing-ribbon">{tag}</span>}
      <div className="pricing-head">
        {!highlighted && <span className="icon-tag">{tag}</span>}
        <h4>{name}</h4>
        <p className="pricing-price">{price}</p>
        <p className="desc">{description}</p>
      </div>
      <ul className="pricing-features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a href="#devis" className={`btn ${highlighted ? 'btn-primary' : 'btn-outline-light'} w-100 text-center`}>
        {cta}
      </a>
    </div>
  );
}
