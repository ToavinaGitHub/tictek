export default function MetricTile({ num, label }) {
  return (
    <div className="metric">
      <div className="num">{num}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}
