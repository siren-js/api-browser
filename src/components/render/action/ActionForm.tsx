import { Field } from '@siren-js/core';
import { withPreventDefault } from '../../../with';
import InputControl from '../field';

export default function ActionForm({
  fields,
  onSubmit,
  onCancel
}: ActionFormProps) {
  return (
    <form onSubmit={withPreventDefault(onSubmit)}>
      {fields.length === 0 ? (
        <p className="subtitle">This action has no fields.</p>
      ) : (
        fields.map((field) => <InputControl key={field.name} field={field} />)
      )}
      <p className="buttons">
        <button
          className="button is-info"
          onClick={withPreventDefault(onSubmit)}
        >
          Submit
        </button>
        <button
          className="button is-info is-outlined"
          onClick={withPreventDefault(onCancel)}
        >
          Cancel
        </button>
      </p>
    </form>
  );
}

export interface ActionFormProps {
  fields: readonly Field[];
  onCancel: () => void;
  onSubmit: () => void;
}
