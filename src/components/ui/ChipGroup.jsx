export default function ChipGroup({ name, items }) {
  return (
    <div className="stack-cat">
      <h4>{name}</h4>
      <div className="chips">
        {items.map((item) => (
          <span className="chip-tag" key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
