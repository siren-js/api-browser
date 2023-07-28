import { Component, For } from 'solid-js';

import {
  addHeader,
  hideSettingsModal,
  isSettingsModalActive,
  removeHeader,
  settings,
  updateHeaderName,
  updateHeaderValue,
} from '../../stores/settings';

export const SettingsModal: Component = () => {
  return (
    <div class="modal" classList={{ 'is-active': isSettingsModalActive() }}>
      <div class="modal-background" onClick={hideSettingsModal}></div>
      <div class="modal-content">
        <SettingsModalContent />
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={hideSettingsModal}></button>
    </div>
  );
};

const SettingsModalContent: Component = () => (
  <div class="box">
    <h2 class="title is-3">Settings</h2>
    <h3 class="title is-4">Headers</h3>
    <p class="subtitle is-6 mb-3">HTTP headers sent with each request</p>
    <For each={settings.headers}>
      {([name, value], index) => (
        <div class="columns is-variable is-1 is-vcentered mb-0">
          <div class="column is-one-third">
            <input
              class="input"
              type="text"
              placeholder="Name"
              value={name}
              onInput={(e) => updateHeaderName(index(), e.currentTarget.value)}
            />
          </div>
          <div class="column">
            <input
              class="input"
              type="text"
              placeholder="Value"
              value={value}
              onInput={(e) => updateHeaderValue(index(), e.currentTarget.value)}
            />
          </div>
          <div class="column is-narrow">
            <button class="delete" onClick={() => removeHeader(index())}></button>
          </div>
        </div>
      )}
    </For>
    <button class="button is-primary is-outlined is-fullwidth is-small" onClick={addHeader}>
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
    </button>
  </div>
);
