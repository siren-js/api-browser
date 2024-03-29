import { Accessor, Component, For } from 'solid-js';

import { Action } from '@siren-js/client';

import { submit } from '../../stores/browser';
import { FieldInput } from './field/FieldInput';

interface ActionModalProps {
  action: Action;
  active: Accessor<boolean>;
  onClose: () => void;
}

export const ActionModal: Component<ActionModalProps> = ({ action, active, onClose }) => {
  return (
    <div class="modal" classList={{ 'is-active': active() }}>
      <div class="modal-background" onClick={onClose}></div>
      <div class="modal-content">
        <div class="box">
          <h3 class="title" classList={{ 'is-family-monospace': !action.title }}>
            {action.title ?? 'Untitled'}
          </h3>
          <h4 class="subtitle tags">
            <span class="tag">{action.name}</span>
            <For each={action.class}>{(className) => <span class="tag is-info is-light">{className}</span>}</For>
          </h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
              submit(action);
            }}
          >
            <For each={action.fields}>{(field) => <FieldInput field={field} />}</For>
            <button class="button is-primary">Submit</button>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};
