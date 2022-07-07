import { useState, useRef } from "react";
import "./result.css";
const Results = ({ result }) => {
  const { code, original_link, full_short_link } = result;
  const copyRef = useRef();
  const [copy, setCopy] = useState(false);

  const copyFunctionality = () => {
    navigator.clipboard.writeText(full_short_link).then(
      function () {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 5000);
      },
      function () {
        alert("copy failed");
      }
    );
  };
  return (
    <article key={code} className="result">
      <p className="result__link">{original_link}</p>
      <div className="result__line"></div>
      <div className="result__content">
        <p className="result__short">{full_short_link}</p>
        <button
          ref={copyRef}
          onClick={copyFunctionality}
          className={`btn btn--square ${copy && `btn--copy`}`}
        >
          {copy ? "Copied" : "Copy"}
        </button>
      </div>
    </article>
  );
};

export default Results;
