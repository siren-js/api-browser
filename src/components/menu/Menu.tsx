import { Component, createSignal, Show } from 'solid-js';

import { showAboutModal } from '../../stores/about';
import { appState } from '../../stores/browser';
import { showSettingsModal } from '../../stores/settings';
import { isNormal, NormalState } from '../../types/AppState';
import { createDownload } from '../../utils/download';

export const Menu: Component = () => {
  const [isActive, setIsActive] = createSignal(false);
  const hideMenu = () => setIsActive(false);
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
          <a
            class="dropdown-item"
            onClick={() => {
              hideMenu();
              showSettingsModal();
            }}
          >
            <span class="icon is-small mr-2">
              <i class="fas fa-cog" aria-hidden="true"></i>
            </span>
            Settings
          </a>
          <Show when={appState()} keyed>
            {(state) => (
              <Show when={isNormal(state)}>
                <a
                  class="dropdown-item"
                  onClick={() => {
                    hideMenu();
                    createDownload('response', (state as NormalState).responseBody);
                  }}
                >
                  <span class="icon is-small mr-2">
                    <i class="fas fa-download" aria-hidden="true"></i>
                  </span>
                  Download Content
                </a>
              </Show>
            )}
          </Show>
          <hr class="dropdown-divider" />
          <a
            class="dropdown-item"
            onClick={() => {
              hideMenu();
              showAboutModal();
            }}
          >
            <span class="icon is-small mr-2">
              <i class="fas fa-info-circle" aria-hidden="true"></i>
            </span>
            About
          </a>
        </div>
      </div>
    </div>
  );
};
