import React from 'react';

/**
 * Creates a function that calls the function `g` before calling the function
 * `f`
 */
export default function withFn<T>(f: AnyFn<T>, g: AnyFn): AnyFn<T> {
  return (...args: any[]) => {
    g(...args);
    return f(...args);
  };
}

export function withPreventDefault(f: AnyFn<void>): AnyFn<void> {
  return withFn(f, (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
  });
}

export type AnyFn<T = any> = (...args: any[]) => T;
