import { Component, For, Show } from 'solid-js';

import { EmbeddedLink, Link } from '@siren-js/client';

import { follow } from '../../stores/browser';
import { location } from '../../stores/location';

function areEqualUrls(href1: string, href2: string): boolean {
  // wrap in URL to account for trailing slashes
  const url1 = new URL(href1);
  const url2 = new URL(href2);
  return url1.href === url2.href;
}

export const LinkPanelBlock: Component<{ link: Link | EmbeddedLink }> = ({ link }) => {
  return (
    <a
      class="panel-block"
      classList={{ 'is-active': areEqualUrls(link.href, location()) }}
      onClick={(e) => {
        e.preventDefault();
        follow(link);
      }}
    >
      <span class="panel-icon">
        <i class="fas fa-link" aria-hidden="true"></i>
      </span>
      <Show when={link.title}>
        <span class="mr-3">{link.title}</span>
      </Show>
      <div class="tags">
        <For each={link.rel}>{(rel) => <span class="tag">{rel}</span>}</For>
        <For each={link.class}>{(className) => <span class="tag is-info is-light">{className}</span>}</For>
      </div>
    </a>
  );
};
