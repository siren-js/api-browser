import { Component, createSignal } from 'solid-js';

import { activateAboutModal } from '../stores/about';

export const Menu: Component = () => {
  const [isActive, setIsActive] = createSignal(false);
  return (
    <div class="dropdown is-right" classList={{ 'is-active': isActive() }}>
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsActive((value) => !value)}
        >
          <span class="icon is-small">
            <i class="fas fa-bars" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a class="dropdown-item">Settings (Coming Soon!)</a>
          <hr class="dropdown-divider" />
          <a
            class="dropdown-item"
            onClick={(e) => {
              e.preventDefault();
              setIsActive(false);
              activateAboutModal();
            }}
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
};
