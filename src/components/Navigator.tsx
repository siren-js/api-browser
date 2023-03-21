import { Component } from 'solid-js';

import { useBrowserContext } from '../browser';

export const Navigator: Component = () => {
  const { loading, location, setLocation, follow } = useBrowserContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        follow(location());
      }}
    >
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input"
            name="location"
            placeholder="URL of a Siren API"
            required
            type="url"
            value={location()}
            onKeyUp={(e) => setLocation(e.currentTarget.value)}
          />
        </div>
        <div class="control">
          <button class="button is-primary" classList={{ 'is-loading': loading() }}>
            <span class="icon">
              <i class="fas fa-search" />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
