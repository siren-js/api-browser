import { Accessor, Component, For } from 'solid-js';

import { Action } from '@siren-js/client';

import { ActionPanelBlock } from './ActionPanelBlock';

export const ActionsPanel: Component<{ actions: Accessor<Action[]> }> = ({ actions }) => {
  return (
    <div class="panel is-primary">
      <h2 class="panel-heading">Actions</h2>
      <For each={actions()} fallback={<div class="panel-block">No actions</div>}>
        {(action) => <ActionPanelBlock action={action} />}
      </For>
    </div>
  );
};
