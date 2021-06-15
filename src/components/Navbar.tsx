import React from 'react';
import { version } from '../../package.json';
import { Icon, IconSize, IconStyle } from './Icon';
import { SettingsModal } from './settings';
import './Navbar.css';

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
      <GitHubLinkItem />
      <SettingsItem />
    </div>
  </div>
);

interface NavbarMenuProps {
  id: string;
  active: boolean;
}

class SettingsItem extends React.Component<{}, SettingsItemState> {
  state: SettingsItemState = {
    isModalActive: false
  };

  constructor(props: {}) {
    super(props);
    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
  }

  activateModal() {
    this.setState({ isModalActive: true });
  }

  deactivateModal() {
    this.setState({ isModalActive: false });
  }

  render() {
    return (
      <>
        <a
          href="/#"
          className="navbar-item"
          onClick={(event) => {
            event.preventDefault();
            this.activateModal();
          }}
        >
          <Icon name="cog" style={IconStyle.Solid} size={IconSize.Large} />
        </a>
        <SettingsModal
          active={this.state.isModalActive}
          onClose={this.deactivateModal}
        />
      </>
    );
  }
}

interface SettingsItemState {
  isModalActive: boolean;
}

const GitHubLinkItem = () => (
  <a
    className="navbar-item"
    href="https://github.com/siren-js/api-browser"
    target="_blank"
    rel="noreferrer"
  >
    <Icon name="github" style={IconStyle.Brands} size={IconSize.Large} />
  </a>
);
