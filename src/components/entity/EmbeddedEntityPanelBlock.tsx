import { Panel } from 'react-bulma-components';

import { EmbeddedEntity } from '@siren-js/core';

interface EmbeddedEntityPanelBlockProps {
  embeddedEntity: EmbeddedEntity;
}

export default function EmbeddedEntityPanelBlock({ embeddedEntity }: EmbeddedEntityPanelBlockProps) {
  return (
    <Panel.Block renderAs="a">
      <Panel.Icon>
        <i className="fas fa-file-alt" />
      </Panel.Icon>
    </Panel.Block>
  );
}
