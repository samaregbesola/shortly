const MobileNav = () => {
  return (
    <div className="mobile__nav">
      <ul className="mobile__nav_list mobile__nav_line">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>

      <ul className="mobile__nav_list">
        <a href="/">Login</a>
        <a href="/" className="btn btn--rounded w-full">
          Sign Up
        </a>
      </ul>
    </div>
  );
};

export default MobileNav;
