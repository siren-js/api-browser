import { Accessor, Component, For, Show } from 'solid-js';

import { EmbeddedEntity, Entity } from '@siren-js/client';

import { ActionsPanel } from './ActionsPanel';
import { LinksPanel } from './LinksPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { SubEntitiesPanel } from './SubEntitiesPanel';

export const EntityDisplay: Component<{ entity: Accessor<Entity | EmbeddedEntity> }> = ({ entity }) => {
  return (
    <>
      <h2 class="title" classList={{ 'is-family-monospace': !entity().title }}>
        {entity().title ?? 'Untitled'}
      </h2>
      <h3 class="subtitle tags">
        <Show when={entity() instanceof EmbeddedEntity}>
          <For each={(entity() as EmbeddedEntity).rel}>{(rel) => <span class="tag">{rel}</span>}</For>
        </Show>
        <For each={entity().class}>{(className) => <span class="tag is-info is-light">{className}</span>}</For>
      </h3>
      <PropertiesPanel properties={() => entity().properties} />
      <LinksPanel links={() => entity().links} />
      <ActionsPanel actions={() => entity().actions} />
      <SubEntitiesPanel subEntities={() => entity().entities} />
    </>
  );
};
