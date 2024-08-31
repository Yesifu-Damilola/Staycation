const Navbar = () => {
  return (
    <div className="header container">
      <nav className="navbar navbar-expand-lg mt-2">
        <div className="staycation">
          <a className="navbar-brand" href="/">
            <span className="stay-span">Stay</span>cation.
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <span className="home-nav">Home</span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Browser by
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Agents
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
