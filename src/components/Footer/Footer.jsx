import "./footer.css";
import whiteLogo from "../../assets/images/logo-white.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="footer__heading">
          <img src={whiteLogo} alt="Shortly" className="" />
        </div>
        <div className="footer__content">
          <div>
            <h4>Features</h4>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul className="footer__icons">
              <li>
                <img src={facebook} alt="fb" />
              </li>
              <li>
                <img src={twitter} alt="tw" />
              </li>
              <li>
                <img src={pinterest} alt="pi" />
              </li>
              <li>
                <img src={instagram} alt="ig" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
