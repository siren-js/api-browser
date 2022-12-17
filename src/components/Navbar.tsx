import { useState } from 'react';
import { Heading, Icon, Navbar as Nav } from 'react-bulma-components';

import { version } from '../../package.json';
import { useToggle } from '../hooks/useToggle';
import SettingsModal from './SettingsModal';

const { Brand, Burger, Container, Link, Menu, Item } = Nav;

export default function Navbar() {
  const [isSettingsModalActive, toggleSettingsModal] = useState(false);
  const [isMenuActive, toggleMenu] = useToggle(false);
  return (
    <Nav color="info" active={isMenuActive}>
      <Brand>
        <Item renderAs="div">
          <Heading size={4} textColor="white">
            Siren.js API Browser
          </Heading>
        </Item>
        <Burger onClick={() => toggleMenu()} />
      </Brand>
      <Menu>
        <Container align="right">
          <Item textWeight="bold">v{version}</Item>
          <Item href="https://github.com/siren-js/api-browser" target="_blank">
            <Link arrowless>
              <Icon>
                <i className="fab fa-github fa-lg" />
              </Icon>
            </Link>
          </Item>
          <Item onClick={() => toggleSettingsModal(true)}>
            <Link arrowless>
              <Icon>
                <i className="fas fa-cog fa-lg" />
              </Icon>
            </Link>
          </Item>
        </Container>
        <SettingsModal active={isSettingsModalActive} onClose={() => toggleSettingsModal(false)} />
      </Menu>
    </Nav>
  );
}
