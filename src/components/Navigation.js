const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="container-navigation">
          <h1 className="heading-1">anna redler - dietetyk, psychodietetyk</h1>
          <ul className="container-links">
            <li>
              <a className="link" href="#about-us">
                o mnie
              </a>
            </li>
            <li>
              <a className="link" href="#offer">
                cennik
              </a>
            </li>
            <li>
              <a className="disabled link" disabled href="#contact">
                kontakt
              </a>
            </li>
            <li>
              <a className="link" href="#offer">
                aktualności
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
