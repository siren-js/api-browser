import './Footer.css';

import bulmaIcon from '../assets/bulma-icon.png';
import solidjsIcon from '../assets/solidjs-icon.png';

import type { Component } from 'solid-js';

export const Footer: Component = () => {
  return (
    <footer class="footer pb-6">
      <div class="level">
        <div class="level-item">
          <div class="content">
            <div class="is-size-5">Siren.js API Browser</div>
            &copy; 2023&nbsp;
            <a href="https://github.com/dillonredding" target="_blank">
              Dillon Redding
            </a>
          </div>
        </div>
        <div class="level-item">
          <a class="icon is-large has-text-dark" href="https://github.com/siren-js/api-browser" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div class="level-item">
          <div class="made-with-links">
            <span>Made with</span>
            <a href="https://bulma.io" target="_blank">
              <img class="img" src={bulmaIcon} alt="Bulma" />
            </a>
            <span>&amp;</span>
            <a href="https://www.solidjs.com" target="_blank">
              <img class="img" src={solidjsIcon} alt="SolidJS" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
