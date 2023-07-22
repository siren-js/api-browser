import { Component, Match, Switch } from 'solid-js';

import { Field } from '@siren-js/client';

import { CheckboxFieldInput } from './CheckboxFieldInput';
import { DefaultFieldInput } from './DefaultFieldInput';
import { FileFieldInput } from './FileFieldInput';
import { RadioFieldInput } from './RadioFieldInput';

export const FieldInput: Component<{ field: Field }> = ({ field }) => {
  const type = field.type.toLowerCase();
  return (
    <Switch>
      <Match when={type === 'checkbox'}>
        <CheckboxFieldInput field={field} />
      </Match>
      <Match when={type === 'file'}>
        <FileFieldInput field={field} />
      </Match>
      <Match when={type === 'radio'}>
        <RadioFieldInput field={field} />
      </Match>
      <Match when={type !== 'hidden'}>
        <DefaultFieldInput field={field} />
      </Match>
    </Switch>
  );
};
