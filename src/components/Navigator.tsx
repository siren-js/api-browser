import { Component } from 'solid-js';

import { canGoBack, canGoForward, follow, goBack, goForward, loading } from '../stores/browser';
import { location, setLocation } from '../stores/location';

export const Navigator: Component = () => (
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
          onClick={goBack}
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
          onClick={goForward}
        >
          <span class="icon">
            <i class="fas fa-arrow-right" />
          </span>
        </button>
      </div>
      <div class="control is-expanded">
        <input
          class="input"
          name="location"
          placeholder="Request URL"
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
