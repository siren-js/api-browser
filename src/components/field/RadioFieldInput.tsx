import { Component, createSignal, For } from 'solid-js';

import { Field } from '@siren-js/client';

import { isOption, Option } from '../../types/Option';
import { fieldLabel } from '../../utils';

const getValidOptions = (field: Field): Option[] =>
  !Array.isArray(field.options) ? [] : field.options.filter((option) => isOption(option));

function defaultSelectedOptionIndex(options: Option[], value: unknown) {
  const currentIndex = options.findIndex((option) => option.value === value);
  return Math.max(0, currentIndex);
}

export const RadioFieldInput: Component<{ field: Field }> = ({ field }) => {
  // store default in case of re-render (e.g., changing tabs)
  if (field.default == null) field.default = field.value;

  const options = getValidOptions(field);
  const defaultNotInList = !options.some((option) => option.value === field.default);
  if (defaultNotInList) {
    options.unshift({ value: field.default, title: 'Select one...' });
  }

  const [selectedOptionIndex, setSelectedOptionIndex] = createSignal(defaultSelectedOptionIndex(options, field.value));

  return (
    <div class="field">
      <label class="label">{fieldLabel(field)}</label>
      <div class="control is-expanded has-icons-left">
        <div class="icon is-small is-left">
          <i class="fas fa-stream"></i>
        </div>
        <div class="select is-fullwidth">
          <select
            name={field.name}
            value={selectedOptionIndex()}
            onChange={(e) => {
              const selectedIndex = parseInt(e.currentTarget.value);
              setSelectedOptionIndex(selectedIndex);
              field.value = options[selectedIndex].value;
            }}
          >
            <For each={options}>
              {(option, index) => <option value={index()}>{option.title ?? String(option.value)}</option>}
            </For>
          </select>
        </div>
      </div>
    </div>
  );
};
