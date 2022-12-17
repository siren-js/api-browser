import { Panel } from 'react-bulma-components';

import { EmbeddedLink, Link } from '@siren-js/core';

import LinkPanelBlock from './LinkPanelBlock';

interface LinksPanelProps {
  links: ReadonlyArray<Link | EmbeddedLink>;
}

export default function LinksPanel({ links }: LinksPanelProps) {
  return (
    <Panel color="info">
      <Panel.Header>Links</Panel.Header>
      {links.map((link) => (
        <LinkPanelBlock key={link.href} link={link} />
      ))}
    </Panel>
  );
}
