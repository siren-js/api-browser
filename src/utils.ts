import { Field } from '@siren-js/client';

export const fieldLabel = (field: Field) => field.title ?? field.name;

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  value != null && typeof value === 'object' && !Array.isArray(value);
