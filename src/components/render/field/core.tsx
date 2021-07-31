import { Field } from '@siren-js/core';
import { useState } from 'react';

export const BasicFormField = ({ children, field }: BasicFieldProps) => (
  <FormField>
    {field.type === 'hidden' ? null : (
      <label className="label">{labelText(field)}</label>
    )}
    <FormControl>{children}</FormControl>
  </FormField>
);

export type BasicFieldProps = FieldProp & ParentProps;

export interface FieldProp {
  field: Field;
}

export interface ParentProps {
  children: React.ReactNode;
}

export const FormControl = (props: ParentProps) => (
  <div className="control">{props.children}</div>
);

export const FormField = (props: ParentProps) => (
  <div className="field">{props.children}</div>
);

export const labelText = (field: Field) => field.title ?? field.name;

export function useFieldValue(field: Field): [string, OnChangeEvent] {
  const [value, setValue] = useState(String(field.value ?? ''));
  const onChange: OnChangeEvent = ({ target: { value } }) => {
    setValue(value);
    field.value = value;
  };
  return [value, onChange];
}

export type OnChangeEvent = React.ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>;
