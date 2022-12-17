import { Panel } from 'react-bulma-components';

import { EmbeddedLink, SubEntity } from '@siren-js/core';

import EmbeddedEntityPanelBlock from './EmbeddedEntityPanelBlock';
import LinkPanelBlock from './LinkPanelBlock';

interface EntitiesPanelProps {
  entities: ReadonlyArray<SubEntity>;
}

export default function EntitiesPanel({ entities }: EntitiesPanelProps) {
  return (
    <Panel color="info">
      <Panel.Header>Entities</Panel.Header>
      {entities?.map((subEntity) =>
        subEntity instanceof EmbeddedLink ? (
          <LinkPanelBlock key={subEntity.href} link={subEntity} />
        ) : (
          <EmbeddedEntityPanelBlock key={subEntity.rel.join()} embeddedEntity={subEntity} />
        )
      )}
    </Panel>
  );
}
