import { Component } from 'solid-js';

import { Field } from '@siren-js/client';

import { fieldLabel } from '../../../utils/field';

const typeToIcon = new Map([
  ['date', 'calendar-day'],
  ['datetime-local', 'calendar-alt'],
  ['email', 'envelope'],
  ['month', 'calendar'],
  ['number', 'hashtag'],
  ['password', 'lock'],
  ['search', 'search'],
  ['tel', 'phone'],
  ['text', 'comment-alt'],
  ['time', 'clock'],
  ['url', 'link'],
  ['week', 'calendar-week'],
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

const typeToAutocomplete = new Map([
  ['password', 'new-password'],
  ['email', 'username'],
]);

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
          autocomplete={typeToAutocomplete.get(type)}
        />
        <span class="icon is-small is-left">
          <i class={`fas fa-${icon}`}></i>
        </span>
      </div>
    </div>
  );
};
