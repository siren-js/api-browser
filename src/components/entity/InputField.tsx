import InputFieldProps from './InputFieldProps';
import TextBasedInputField from './TextBasedInputField';

export default function InputField({ id, field }: InputFieldProps) {
  switch (field.type) {
    // case 'checkbox':
    //   return <CheckboxControl field={field} />;
    // case 'file':
    //   return <FileUploadControl field={field} />;
    // case 'radio':
    //   return <RadioButtonControl field={field} />;
    // case 'select':
    //   return <SelectControl field={field} />;
    // case 'textarea':
    //   return <TextareaControl field={field} />;
    case 'hidden':
      return <input type="hidden" name={field.name} value={String(field.value)} />;
    default:
      // text, tel, email, etc.
      return <TextBasedInputField id={id} field={field} />;
  }
}
