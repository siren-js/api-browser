import { useState } from 'react';
import { FieldProp, FormControl, FormField, Label } from './core';

export default function RadioButtonControl({ field }: FieldProp) {
  const buttons = field.group as any[]; // TODO: guard type
  const init = buttons.findIndex((button) => button.checked);
  const [checkedIndex, setCheckedIndex] = useState(init);
  return (
    <FormField>
      <Label field={field} />
      <FormControl>
        {buttons.map((button, index) => (
          <label className="radio" key={index}>
            <input
              type="radio"
              name={field.name}
              value={index}
              checked={index === checkedIndex}
              onChange={() => {
                if (checkedIndex !== -1) {
                  buttons[checkedIndex].checked = false;
                }
                buttons[index].checked = true;
                setCheckedIndex(index);
              }}
            />
            &nbsp;
            {button.title}
          </label>
        ))}
      </FormControl>
    </FormField>
  );
}
