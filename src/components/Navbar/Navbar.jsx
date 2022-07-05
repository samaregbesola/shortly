import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import MobileNav from "./MobileNav";
import "./navbar.css";
import { FcMenu } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="nav__content">
          <div className="nav__heading">
            <img src={logo} alt="Shortly" />
            <ul className="nav__list">
              <li>features</li>
              <li>pricing</li>
              <li>resources</li>
            </ul>
          </div>
          <div className="nav__menu">
            <button
              className="nav__menu_item"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? <FcMenu /> : <FaTimes />}
            </button>
            <div className="nav__cta">
              <a href="/">Login</a>
              <a href="/" className="btn btn--rounded">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        {isOpen ? <MobileNav /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
