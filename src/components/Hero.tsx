import { version } from '../../package.json';

export default function Hero() {
  return (
    <section className="hero is-info">
      <HeroHead />
      <HeroBody />
    </section>
  );
}

const HeroHead = () => (
  <div className="hero-head">
    <Navbar />
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <NavbarMenu />
    </div>
  </nav>
);

const NavbarMenu = () => (
  <div className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item has-text-weight-bold">v{version}</div>
      <a
        className="navbar-item"
        href="https://github.com/siren-js/api-browser"
        target="_blank"
        rel="noreferrer"
      >
        <span className="icon">
          <i className="fab fa-github fa-lg"></i>
        </span>
      </a>
      {/* TODO: make things like property name casing and client headers configurable */}
      {/* <a className="navbar-item" href="/#">
        <span className="icon">
          <i className="fas fa-cog fa-lg"></i>
        </span>
      </a> */}
    </div>
  </div>
);

const HeroBody = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">Siren API Browser</p>
      <p className="subtitle">with Siren.js</p>
    </div>
  </div>
);
