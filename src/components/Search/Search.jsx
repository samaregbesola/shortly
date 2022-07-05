import "./search.css";
const Search = () => {
  return (
    <form>
      <div className="search__wrapper">
        <div className="container search">
          <input
            type="text"
            className="search__input"
            placeholder="Shorten a link here..."
          />
          <button type="submit" className="btn btn--square">
            Shorten It!
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
