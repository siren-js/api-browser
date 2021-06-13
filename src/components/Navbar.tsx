import React from 'react';
import { version } from '../../package.json';

export default class Navbar extends React.Component<{}, NavbarState> {
  state: NavbarState = {
    isMenuActive: false
  };

  constructor(props: {}) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isMenuActive: !this.state.isMenuActive });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <NavbarBrand
            targetElementId="navbar-menu"
            active={this.state.isMenuActive}
            onBurgerClick={this.toggleMenu}
          />
          <NavbarMenu id="navbar-menu" active={this.state.isMenuActive} />
        </div>
      </nav>
    );
  }
}

interface NavbarState {
  isMenuActive: boolean;
}

const NavbarBrand = (props: NavbarBrandProps) => (
  <div className="navbar-brand">
    <a
      className={`navbar-burger${props.active ? ' is-active' : ''}`}
      href="/#"
      onClick={(event) => {
        event.preventDefault();
        props.onBurgerClick();
      }}
      role="button"
      aria-label="menu"
      aria-expanded={props.active}
      data-target={props.targetElementId}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
);

interface NavbarBrandProps {
  targetElementId: string;
  active: boolean;
  onBurgerClick: () => void;
}

const NavbarMenu = (props: NavbarMenuProps) => (
  <div
    id={props.id}
    className={`navbar-menu${props.active ? ' is-active' : ''}`}
  >
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

interface NavbarMenuProps {
  id: string;
  active: boolean;
}
