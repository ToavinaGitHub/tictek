const LINKS = [
  [80, 120, 220, 90], [220, 90, 360, 140], [80, 120, 150, 240], [220, 90, 240, 230],
  [360, 140, 330, 260], [150, 240, 240, 230], [240, 230, 330, 260], [150, 240, 120, 360],
  [240, 230, 260, 370], [330, 260, 350, 380], [120, 360, 260, 370], [260, 370, 350, 380],
];

const NODES = [
  [80, 120, 6], [220, 90, 8], [360, 140, 6], [150, 240, 7], [240, 230, 10],
  [330, 260, 6], [120, 360, 6], [260, 370, 8], [350, 380, 6],
];

export default function HeroVisual({ panels }) {
  return (
    <div className="hero-visual">
      <svg viewBox="0 0 480 460" aria-hidden="true">
        <defs>
          <linearGradient id="hero-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0066FF" />
            <stop offset="1" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
        <g>
          {LINKS.map(([x1, y1, x2, y2], i) => (
            <line key={i} className="link" x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
          {NODES.map(([cx, cy, r], i) => (
            <circle key={i} className="node" cx={cx} cy={cy} r={r} />
          ))}
        </g>
      </svg>
      {panels.map((panel) => (
        <div key={panel.text} className={`hero-panel ${panel.className}`} style={panel.style}>
          {panel.text}
        </div>
      ))}
    </div>
  );
}
