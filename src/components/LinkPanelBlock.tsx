import { Component } from 'solid-js';

import { EmbeddedLink, Link } from '@siren-js/client';

import { useBrowserContext } from '../browser';

export const LinkPanelBlock: Component<{ link: Link | EmbeddedLink }> = ({ link }) => {
  const { follow } = useBrowserContext();
  return (
    <a
      class="panel-block"
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
