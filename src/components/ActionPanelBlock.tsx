import { Component, createSignal } from 'solid-js';

import { Action } from '@siren-js/client';

import { ActionModal } from './ActionModal';

export const ActionPanelBlock: Component<{ action: Action }> = ({ action }) => {
  const [active, setActive] = createSignal(false);
  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault();
          console.log('clicked');
          setActive(true);
        }}
        class="panel-block"
      >
        <span class="panel-icon">
          <i class="fas fa-edit" aria-hidden="true"></i>
        </span>
        {action.title ?? action.name}
      </a>
      <ActionModal active={active} action={action} onClose={() => setActive(false)} />
    </>
  );
};
