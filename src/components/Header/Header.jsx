import "./header.css";
import Search from "../Search/Search";
import workingIllustration from "../../assets/images/illustration-working.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__image">
            <img
              src={workingIllustration}
              alt="working"
              className="header__photo"
            />
          </div>
          <div className="header__content">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="/" className="btn btn--rounded">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Search />
    </header>
  );
};

export default Header;
