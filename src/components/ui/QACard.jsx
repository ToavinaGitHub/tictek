export default function QACard({ letter, title, text }) {
  return (
    <div className="qa-card">
      <p className="lt">{letter}</p>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
