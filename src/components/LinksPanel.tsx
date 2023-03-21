import { Accessor, Component, For } from 'solid-js';

import { Link } from '@siren-js/client';

import { LinkPanelBlock } from './LinkPanelBlock';

export const LinksPanel: Component<{ links: Accessor<Link[]> }> = ({ links }) => {
  return (
    <div class="panel is-primary">
      <h2 class="panel-heading">Links</h2>
      <For each={links()} fallback={<div class="panel-block">No links</div>}>
        {(link) => <LinkPanelBlock link={link} />}
      </For>
    </div>
  );
};
