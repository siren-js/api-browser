import { Component } from 'solid-js';

import { Field } from '@siren-js/client';

import { fieldLabel } from '../../utils';

export const CheckboxFieldInput: Component<{ field: Field }> = ({ field }) => {
  // ensure checkbox's value is boolean
  field.value = !!field.value;

  return (
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input
            type="checkbox"
            style={{ 'margin-right': '0.3rem' }}
            name={field.name}
            checked={!!field.value}
            onChange={(e) => {
              field.value = e.currentTarget.checked;
            }}
          />
          {fieldLabel(field)}
        </label>
      </div>
    </div>
  );
};
