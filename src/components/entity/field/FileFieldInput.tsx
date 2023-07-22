import { Component, createSignal } from 'solid-js';

import { Field } from '@siren-js/client';

import { fieldLabel } from '../../../utils/field';

function defaultFilename(field: Field): string {
  const { value } = field;
  if (value instanceof FileList && value.length > 0) {
    return value.item(0)!.name;
  }
  return '';
}

export const FileFieldInput: Component<{ field: Field }> = ({ field }) => {
  const [filename, setFilename] = createSignal(defaultFilename(field));
  return (
    <div class="field">
      <div class="file has-name is-fullwidth">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name={field.name}
            onInput={(e) => {
              setFilename(e.currentTarget.value);
              field.value = e.currentTarget.files;
            }}
          />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">{fieldLabel(field)}</span>
          </span>
          <span class="file-name">{filename()}</span>
        </label>
      </div>
    </div>
  );
};
