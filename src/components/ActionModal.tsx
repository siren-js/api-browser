import { Accessor, Component, For, Show } from 'solid-js';

import { Action } from '@siren-js/client';

import { useBrowserContext } from '../browser';

interface ActionModalProps {
  action: Action;
  active: Accessor<boolean>;
  onClose: () => void;
}

const typeToIcon = new Map([
  ['search', 'search'],
  ['tel', 'phone'],
  ['url', 'link'],
  ['email', 'envelope'],
  ['password', 'lock'],
  ['date', 'calendar-day'],
  ['month', 'calendar'],
  ['week', 'calendar-week'],
  ['time', 'clock'],
  ['date-time', 'calendar-alt'],
  ['datetime-local', 'calendar-alt'],
  ['text', 'comment-alt'],
  ['number', 'hashtag'],
]);

export const ActionModal: Component<ActionModalProps> = ({ action, active, onClose }) => {
  const { submit } = useBrowserContext();
  return (
    <div class="modal" classList={{ 'is-active': active() }}>
      <div class="modal-background" onClick={onClose}></div>
      <div class="modal-content">
        <div class="box">
          <h3 class="title">{action.title ?? action.name}</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
              submit(action);
            }}
          >
            <For each={action.fields}>
              {(field) => {
                const type = field.type === 'date-time' ? 'datetime-local' : field.type;
                const icon = typeToIcon.get(field.type) ?? 'question';
                return (
                  <Show when={field.type !== 'hidden'}>
                    <div class="field">
                      <label class="label">{field.title ?? field.name}</label>
                      <div class="control has-icons-left">
                        <input
                          class="input"
                          type={type}
                          name={field.name}
                          value={String(field.value ?? '')}
                          onKeyUp={(e) => {
                            field.value = e.currentTarget.value;
                          }}
                        />
                        <span class="icon is-small is-left">
                          <i class={`fas fa-${icon}`}></i>
                        </span>
                      </div>
                    </div>
                  </Show>
                );
              }}
            </For>
            <button class="button is-primary">Submit</button>
          </form>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};
