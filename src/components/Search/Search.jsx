import { useState, useEffect } from "react";
// import { useFetch } from "../../hooks/useFetch";
import Results from "./Results";
import "./search.css";
const Search = () => {
  const [link, setLink] = useState("");
  const [isPending, setIsPending] = useState(false);
  // const [error, setError] = useState(null);
  const [linkResults, setLinkResults] = useState(
    JSON.parse(localStorage.getItem("links") || "[]")
  );
  const [valid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.localStorage.setItem("links", JSON.stringify(linkResults));
  }, [linkResults]);

  const messageTimeout = () => {
    setTimeout(() => {
      setValid(true);
    }, 3000);
  };

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const getShortLink = async () => {
    let url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    setIsPending(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      setIsPending(false);
      setLinkResults([...linkResults, data]);
    } catch (err) {
      setIsPending(false);
      console.log(err);
    }
    setLink("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex =
      /[(http(s) ?): /(www)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
    const isValid = regex.test(link);
    if (isValid) {
      getShortLink();
    } else if (link === "") {
      setValid(false);
      setErrorMessage("Please add a link");
      messageTimeout();
      return;
    } else {
      setValid(false);
      setErrorMessage("Please enter a valid link");
      messageTimeout();
    }
    e.target.reset();
  };

  return (
    <section className="search">
      <div className="search__wrapper">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="search__box">
              <input
                type="text"
                className={`search__input ${valid ? `` : `error__input`} `}
                placeholder="Shorten a link here..."
                onChange={handleChange}
              />
              {!valid && (
                <span className={`search__error ${!errorMessage && "hidden"}`}>
                  {errorMessage}
                </span>
              )}
              <button type="submit" className="btn btn--square">
                {isPending ? `Generating Link...` : `Shorten It!`}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="search__results_container">
        {linkResults
          ? linkResults?.map((link) => {
              return <Results key={link.result.code} result={link.result} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default Search;
