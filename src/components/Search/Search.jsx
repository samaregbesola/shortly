import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [term, setTerm] = useState("");
  const [validated, setValidated] = useState(false);
  const [validate, setValidate] = useState("");
  const url = `https://api.shrtco.de/v2/shorten?url=${term}`;

  const { fetchData, isPending, error, data } = useFetch(url);

  function validateForm() {
    setValidated(false);
    if (keyword === "") {
      setValidate("Please add a link");
      setTimeout(() => {
        setValidate("");
      }, 3000);
      return;
    } else if (keyword.length < 5 && !keyword.includes(".")) {
      setValidate("invalid link");
      setTimeout(() => {
        setValidate("");
      }, 3000);
      return;
    }
    setValidated(true);
    return keyword;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (validated) {
      setTerm(keyword);
      fetchData();
    }
  };

  console.log(data, error);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search__wrapper">
          <div className="container search">
            <input
              type="text"
              className={`search__input ${validate ? `error__input` : " "} `}
              placeholder="Shorten a link here..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            {!validated && <span className="search__error"> {validate} </span>}
            <button type="submit" className="btn btn--square">
              {isPending ? `Working on it...` : `Shorten It!`}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
