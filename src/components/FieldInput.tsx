import { Component, createSignal, Match, Show, Switch } from 'solid-js';

import { Field } from '@siren-js/client';

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

function defaultFilename(field: Field): string {
  const { value } = field;
  if (value instanceof FileList && value.length > 0) {
    return value.item(0)!.name;
  }
  return '';
}

export const FieldInput: Component<{ field: Field }> = ({ field }) => {
  const type = field.type === 'date-time' ? 'datetime-local' : field.type;
  const icon = typeToIcon.get(field.type) ?? 'question';
  const [filename, setFilename] = createSignal(defaultFilename(field));
  return (
    <Show when={field.type !== 'hidden'}>
      <div class="field">
        <Switch
          fallback={
            <>
              <label class="label">{field.title ?? field.name}</label>
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
            </>
          }
        >
          <Match when={field.type === 'checkbox'}>
            <div class="control">
              <label class="checkbox">
                <input
                  type="checkbox"
                  style={{ 'margin-right': '0.3rem' }}
                  name={field.name}
                  checked={!!field.checked}
                  onChange={(e) => {
                    field.checked = e.currentTarget.checked;
                  }}
                />
                {field.title ?? field.name}
              </label>
            </div>
          </Match>
          <Match when={field.type === 'file'}>
            <div class="file has-name is-fullwidth">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name={field.name}
                  onInput={(e) => {
                    setFilename(e.currentTarget.value);
                    field.value = e.currentTarget.files;
                    console.dir(field);
                  }}
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">{field.title ?? field.name}</span>
                </span>
                <span class="file-name">{filename()}</span>
              </label>
            </div>
          </Match>
        </Switch>
      </div>
    </Show>
  );
};
