import { Component } from 'solid-js';

import { EmbeddedLink, Link } from '@siren-js/client';

import { useBrowserContext } from '../stores/browser';

function areEqualUrls(href1: string, href2: string): boolean {
  // wrap in URL to account for trailing slashes
  const url1 = new URL(href1);
  const url2 = new URL(href2);
  return url1.href === url2.href;
}

export const LinkPanelBlock: Component<{ link: Link | EmbeddedLink }> = ({ link }) => {
  const { follow, location } = useBrowserContext();
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
      {link.title ?? link.rel.join(', ')}
    </a>
  );
};
