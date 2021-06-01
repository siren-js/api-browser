import { Field } from '@siren-js/core';
import InputControl from '../field';

export default function ActionForm({ fields, onSubmit }: ActionFormProps) {
  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <InputControl key={field.name} field={field} />
      ))}
    </form>
  );
}

export interface ActionFormProps {
  fields: readonly Field[];
  onSubmit: () => void;
}
