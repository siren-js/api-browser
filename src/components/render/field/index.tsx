import CheckboxControl from './CheckboxControl';
import { FieldProp } from './core';
import DefaultInputControl from './DefaultInputControl';
import FileUploadControl from './FileUploadControl';
import RadioButtonControl from './RadioButtonControl';
import SelectControl from './SelectControl';
import TextareaControl from './TextareaControl';

export default function InputControl({ field }: FieldProp) {
  switch (field.type) {
    case 'checkbox':
      return <CheckboxControl field={field} />;
    case 'file':
      return <FileUploadControl field={field} />;
    case 'radio':
      return <RadioButtonControl field={field} />;
    case 'select':
      return <SelectControl field={field} />;
    case 'textarea':
      return <TextareaControl field={field} />;
    default:
      return <DefaultInputControl field={field} />;
  }
};
