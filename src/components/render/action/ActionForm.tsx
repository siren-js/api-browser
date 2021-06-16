import { Field } from '@siren-js/core';
import React from 'react';
import InputControl from '../field';

const withPreventDefault =
  (fn: () => void) => (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    fn();
  };

export default function ActionForm({
  fields,
  onSubmit,
  onCancel
}: ActionFormProps) {
  return (
    <form onSubmit={withPreventDefault(onSubmit)}>
      {fields.length === 0 ? (
        <p>This action has no fields.</p>
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
