import { Icon, IconContainerSize } from '../../util';
import {
  BasicFormField,
  FieldProp,
  FormField,
  Label,
  useFieldValue
} from './core';

const controlIcons = new Map<string, string>([
  ['search', 'search'],
  ['tel', 'phone'],
  ['url', 'link'],
  ['email', 'envelope'],
  ['password', 'lock'],
  ['date', 'calendar-day'],
  ['month', 'calendar'],
  ['week', 'calendar-week'],
  ['time', 'clock'],
  ['datetime-local', 'calendar-alt'],
  ['number', 'hashtag']
]);

export default function DefaultInputControl({ field }: FieldProp) {
  const [value, onChange] = useFieldValue(field);
  const input = (
    <input
      className="input"
      type={field.type}
      value={value}
      onChange={onChange}
    />
  );
  const controlIcon = controlIcons.get(field.type ?? 'text');
  return controlIcon === undefined ? (
    <BasicFormField field={field}>{input}</BasicFormField>
  ) : (
    <FormField>
      <Label field={field} />
      <div className="control has-icons-left">
        {input}
        <Icon
          name={controlIcon}
          containerSize={IconContainerSize.Small}
          left={true}
        />
      </div>
    </FormField>
  );
}
