import { useState } from 'react';

export type ToggleFn = (value?: boolean) => void;

export type Toggle = [boolean, ToggleFn];

export function useToggle(defaultValue = false): Toggle {
  const [value, setValue] = useState(defaultValue);
  function toggleValue(value?: boolean) {
    setValue((current) => (typeof value === 'boolean' ? value : !current));
  }
  return [value, toggleValue];
}
