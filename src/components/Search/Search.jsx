import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./search.css";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [term, setTerm] = useState("");
  const url = `https://api.shrtco.de/v2/shorten?url=${term}`;

  const { isPending, error, data } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(keyword);
  };

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search__wrapper">
          <div className="container search">
            <input
              type="text"
              className="search__input"
              placeholder="Shorten a link here..."
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
            <button type="submit" className="btn btn--square">
              Shorten It!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;
