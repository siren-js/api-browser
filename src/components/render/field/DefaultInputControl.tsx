import { BasicFormField, FieldProp, useFieldValue } from './core';

export default function DefaultInputControl({ field }: FieldProp) {
  const [value, onChange] = useFieldValue(field);
  return (
    <BasicFormField field={field}>
      <input
        className="input"
        type={field.type}
        value={value}
        onChange={onChange}
      />
    </BasicFormField>
  );
};
