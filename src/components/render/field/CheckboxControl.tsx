import { useState } from 'react';
import { FieldProp, FormControl, FormField, labelText } from './core';

export default function CheckboxControl({ field }: FieldProp) {
  const [checked, setChecked] = useState(!!field.checked);
  return (
    <FormField>
      <FormControl>
        <label className="checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={({ target: { checked } }) => {
              field.checked = checked;
              setChecked(checked);
            }}
          />
          &nbsp;
          {labelText(field)}
        </label>
      </FormControl>
    </FormField>
  );
}
