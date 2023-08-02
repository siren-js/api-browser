import { Component, createSignal, For, Show } from 'solid-js';

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
        <Show when={embeddedEntity.title}>
          <span class="mr-3">{embeddedEntity.title}</span>
        </Show>
        <div class="tags">
          <For each={embeddedEntity.rel}>{(rel) => <span class="tag">{rel}</span>}</For>
          <For each={embeddedEntity.class}>{(className) => <span class="tag is-info is-light">{className}</span>}</For>
        </div>
      </a>
      <EmbeddedEntityModal embeddedEntity={embeddedEntity} active={active} onClose={() => setActive(false)} />
    </>
  );
};
