import { Accessor, Component, Show } from 'solid-js';

import { EmbeddedEntity, Entity } from '@siren-js/client';

import { ActionsPanel } from './ActionsPanel';
import { LinksPanel } from './LinksPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { SubEntitiesPanel } from './SubEntitiesPanel';

export const EntityDisplay: Component<{ entity: Accessor<Entity | EmbeddedEntity> }> = ({ entity }) => {
  return (
    <>
      <Show when={entity().title}>
        <h1 class="title">{entity().title}</h1>
      </Show>
      <PropertiesPanel properties={() => entity().properties} />
      <LinksPanel links={() => entity().links} />
      <ActionsPanel actions={() => entity().actions} />
      <SubEntitiesPanel subEntities={() => entity().entities} />
    </>
  );
};
