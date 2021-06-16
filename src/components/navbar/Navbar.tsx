import React from 'react';
import './Navbar.css';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

export interface NavbarState {
  isMenuActive: boolean;
}

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
      <nav className="navbar is-info" role="navigation" aria-label="navigation">
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
