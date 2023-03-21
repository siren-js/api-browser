import { Accessor, Component, For } from 'solid-js';

import { EmbeddedEntity, SubEntity } from '@siren-js/client';

import { EmbeddedEntityPanelBlock } from './EmbeddedEntityPanelBlock';
import { LinkPanelBlock } from './LinkPanelBlock';

export const SubEntitiesPanel: Component<{ subEntities: Accessor<SubEntity[]> }> = ({ subEntities }) => {
  return (
    <div class="panel is-primary">
      <h2 class="panel-heading">Sub-Entities</h2>
      <For each={subEntities()} fallback={<div class="panel-block">No sub-entities</div>}>
        {(subEntity) =>
          subEntity instanceof EmbeddedEntity ? (
            <EmbeddedEntityPanelBlock embeddedEntity={subEntity} />
          ) : (
            <LinkPanelBlock link={subEntity} />
          )
        }
      </For>
    </div>
  );
};
