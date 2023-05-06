import './Footer.css';

import bulmaIcon from '../assets/bulma-icon.png';
import solidjsIcon from '../assets/solidjs-icon.png';
import { ExternalLink } from './ExternalLink';

import type { Component } from 'solid-js';
export const Footer: Component = () => {
  return (
    <footer class="footer pb-6">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <div class="content">
                <div class="is-size-5">Siren.js API Browser</div>
                &copy; 2023&nbsp;
                <ExternalLink href="https://github.com/dillonredding">Dillon Redding</ExternalLink>
              </div>
            </div>
          </div>
          <div class="level-item">
            <ExternalLink href="https://github.com/siren-js/api-browser">
              <span class="icon is-large has-text-dark">
                <i class="fab fa-github fa-2x"></i>
              </span>
            </ExternalLink>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="made-with-links">
                <span>Made with</span>
                <ExternalLink href="https://bulma.io">
                  <img class="img" src={bulmaIcon} alt="Bulma" />
                </ExternalLink>
                <span>&amp;</span>
                <ExternalLink href="https://www.solidjs.com">
                  <img class="img" src={solidjsIcon} alt="SolidJS" />
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
