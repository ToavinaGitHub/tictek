export default function StepItem({ n, title, text, deliverable }) {
  return (
    <div className="step">
      <div className="n">{n}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <span className="deliverable">{deliverable}</span>
      </div>
    </div>
  );
}
