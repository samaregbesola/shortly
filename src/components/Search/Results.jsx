import "./result.css";
const Results = () => {
  return (
    <article className="result">
      <p className="result__link">https://frontendmentor.io</p>
      <div className="result__line"></div>
      <div className="result__content">
        <p className="result__short">https://ink.to/she1p</p>
        <button className="btn btn--square">Copy</button>
      </div>
    </article>
  );
};

export default Results;
