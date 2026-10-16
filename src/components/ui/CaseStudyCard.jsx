export default function CaseStudyCard({ tag, problem, solution, result, labels }) {
  return (
    <div className="case">
      <p className="tag">{tag}</p>
      <div className="block problem">
        <p className="k">{labels.problem}</p>
        <p>{problem}</p>
      </div>
      <div className="block solution">
        <p className="k">{labels.solution}</p>
        <p>{solution}</p>
      </div>
      <div className="block result">
        <p className="k">{labels.result}</p>
        <p>{result}</p>
      </div>
    </div>
  );
}
