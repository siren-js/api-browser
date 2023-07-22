import { isRecord, isString } from '../utils/types';

export interface Option<T = unknown> {
  value: T;
  title?: string;
}

export const isOption = (value: unknown): value is Option =>
  isRecord(value) && 'value' in value && (!('title' in value) || isString(value.title));
