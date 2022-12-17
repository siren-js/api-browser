import { Panel } from 'react-bulma-components';

import { EmbeddedLink, Link } from '@siren-js/core';

import { useSirenClient } from '../../hooks/useSirenClient';

interface LinkPanelBlockProps {
  link: Link | EmbeddedLink;
}

export default function LinkPanelBlock({ link }: LinkPanelBlockProps) {
  const { follow } = useSirenClient();
  return (
    <Panel.Block renderAs="a" onClick={() => follow(link)} active={link.rel.includes('self')}>
      <Panel.Icon>
        <i className="fas fa-link" />
      </Panel.Icon>
      {link.title ?? link.rel.join(', ')}
    </Panel.Block>
  );
}
