import "./result.css";
const Results = ({ result }) => {
  const { code, original_link, full_short_link } = result;
  return (
    <article key={code} className="result">
      <p className="result__link">{original_link}</p>
      <div className="result__line"></div>
      <div className="result__content">
        <p className="result__short">{full_short_link}</p>
        <button className="btn btn--square">Copy</button>
      </div>
    </article>
  );
};

export default Results;
