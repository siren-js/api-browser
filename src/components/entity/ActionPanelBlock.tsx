import { Component, createSignal, For, Show } from 'solid-js';

import { Action } from '@siren-js/client';

import { ActionModal } from './ActionModal';

export const ActionPanelBlock: Component<{ action: Action }> = ({ action }) => {
  const [active, setActive] = createSignal(false);
  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          setActive(true);
        }}
        class="panel-block"
      >
        <span class="panel-icon">
          <i class="fas fa-edit" aria-hidden="true"></i>
        </span>
        <Show when={action.title}>
          <span class="mr-3">{action.title}</span>
        </Show>
        <div class="tags">
          <span class="tag">{action.name}</span>
          <For each={action.class}>{(className) => <span class="tag is-info is-light">{className}</span>}</For>
        </div>
      </a>
      <ActionModal active={active} action={action} onClose={() => setActive(false)} />
    </>
  );
};
