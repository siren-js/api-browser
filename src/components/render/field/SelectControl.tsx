import { useState } from 'react';
import { BasicFormField, FieldProp } from './core';

export default function SelectControl({ field }: FieldProp) {
  const options = field.options as any[]; // TODO: guard type
  // TODO: account for multiple
  const init = options.findIndex((option) => option.selected);
  const [selectedIndex, setSelectedIndex] = useState(init);
  return (
    <BasicFormField field={field}>
      <div className="select">
        <select
          value={
            options[selectedIndex]?.value ?? options[selectedIndex]?.title ?? ''
          }
          onChange={(e) => {
            if (selectedIndex !== -1) {
              options[selectedIndex].selected = false;
            }
            options[e.target.selectedIndex].selected = true;
            setSelectedIndex(e.target.selectedIndex);
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </BasicFormField>
  );
}
