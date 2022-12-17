import { useEffect, useState } from 'react';
import { Form, Icon } from 'react-bulma-components';

import InputFieldProps from './InputFieldProps';

const icons: Record<string, string | undefined> = {
  search: 'search',
  tel: 'phone',
  url: 'link',
  email: 'envelope',
  password: 'lock',
  date: 'calendar-day',
  month: 'calendar',
  week: 'calendar-week',
  time: 'clock',
  'datetime-local': 'calendar-alt',
  number: 'hashtag'
};

export default function TextBasedInputField({ id, field }: InputFieldProps) {
  const [value, setValue] = useState(String(field.value ?? ''));

  useEffect(() => {
    field.value = value;
  }, [value, field]);

  const type = field.type ?? 'text';
  const icon = icons[type];

  return (
    <Form.Field>
      <Form.Label htmlFor={id}>{field.title ?? field.name}</Form.Label>
      <Form.Control>
        <Form.Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={!!field.required}
        />
        {icon && (
          <Icon align="left">
            <i className={`fas fa-${icon}`} />
          </Icon>
        )}
      </Form.Control>
    </Form.Field>
  );
}
