import { Field } from '@siren-js/client';

export const fieldLabel = (field: Field) => field.title ?? field.name;
