import { Component } from 'solid-js';

import { Field } from '@siren-js/client';

import { fieldLabel } from '../../utils';

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
  ['datetime-local', 'calendar-alt'],
  ['text', 'comment-alt'],
  ['number', 'hashtag'],
]);

const normalizeType = (field: Field) => {
  const type = field.type.toLowerCase();
  return type === 'date-time' ? 'datetime-local' : type;
};

function inputTypeAndIcon(field: Field): [string, string] {
  const type = normalizeType(field);
  const icon = typeToIcon.get(type);
  return icon ? [type, icon] : ['text', 'question'];
}

export const DefaultFieldInput: Component<{ field: Field }> = ({ field }) => {
  const [type, icon] = inputTypeAndIcon(field);
  return (
    <div class="field">
      <label class="label">{fieldLabel(field)}</label>
      <div class="control has-icons-left">
        <input
          class="input"
          type={type}
          name={field.name}
          value={String(field.value ?? '')}
          onInput={(e) => {
            field.value = e.currentTarget.value;
          }}
        />
        <span class="icon is-small is-left">
          <i class={`fas fa-${icon}`}></i>
        </span>
      </div>
    </div>
  );
};
