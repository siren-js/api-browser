import { Component, createSignal } from 'solid-js';

import { EmbeddedEntity } from '@siren-js/client';

import { EmbeddedEntityModal } from './EmbeddedEntityModal';

export const EmbeddedEntityPanelBlock: Component<{ embeddedEntity: EmbeddedEntity }> = ({ embeddedEntity }) => {
  const [active, setActive] = createSignal(false);
  return (
    <>
      <a
        class="panel-block"
        onClick={(e) => {
          e.preventDefault();
          setActive(true);
        }}
      >
        <span class="panel-icon">
          <i class="fas fa-file-alt" aria-hidden="true"></i>
        </span>
        {embeddedEntity.title ?? embeddedEntity.rel.join(', ')}
      </a>
      <EmbeddedEntityModal embeddedEntity={embeddedEntity} active={active} onClose={() => setActive(false)} />
    </>
  );
};
