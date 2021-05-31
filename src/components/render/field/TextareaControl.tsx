import { BasicFormField, FieldProp, useFieldValue } from './core';

export default function TextareaControl({ field }: FieldProp) {
  const [value, onChange] = useFieldValue(field);
  return (
    <BasicFormField field={field}>
      <textarea
        className="textarea"
        value={value}
        onChange={onChange}
      ></textarea>
    </BasicFormField>
  );
}
