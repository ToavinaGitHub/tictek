export default function CaseStudyCard({ tag, problem, solution, result }) {
  return (
    <div className="case">
      <p className="tag">{tag}</p>
      <div className="block problem">
        <p className="k">Problème initial</p>
        <p>{problem}</p>
      </div>
      <div className="block solution">
        <p className="k">Solution technique TicTek</p>
        <p>{solution}</p>
      </div>
      <div className="block result">
        <p className="k">Résultats chiffrés</p>
        <p>{result}</p>
      </div>
    </div>
  );
}
