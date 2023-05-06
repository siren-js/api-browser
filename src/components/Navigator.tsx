import { Component } from 'solid-js';

import { useBrowserContext } from '../stores/browser';

export const Navigator: Component = () => {
  const {
    loading,
    location,
    setLocation,
    canGoBack,
    canGoForward,
    goBack: back,
    goForward: forward,
    follow,
  } = useBrowserContext();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        follow(location());
      }}
    >
      <div class="field has-addons">
        <div class="control">
          <button
            type="button"
            class="button"
            classList={{ 'is-loading': loading() }}
            disabled={!canGoBack()}
            onClick={back}
          >
            <span class="icon">
              <i class="fas fa-arrow-left" />
            </span>
          </button>
        </div>
        <div class="control">
          <button
            type="button"
            class="button"
            classList={{ 'is-loading': loading() }}
            disabled={!canGoForward()}
            onClick={forward}
          >
            <span class="icon">
              <i class="fas fa-arrow-right" />
            </span>
          </button>
        </div>
        {/* <div class="control">
          <button type="button" class="button" classList={{ 'is-loading': loading() }}>
            <span class="icon">
              <i class="fas fa-redo" />
            </span>
          </button>
        </div> */}
        <div class="control is-expanded">
          <input
            class="input"
            name="location"
            placeholder="URL of a Siren API"
            required
            type="url"
            value={location()}
            onInput={(e) => setLocation(e.currentTarget.value)}
          />
        </div>
        <div class="control">
          <button type="submit" class="button is-primary" classList={{ 'is-loading': loading() }}>
            <span class="icon">
              <i class="fas fa-search" />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
