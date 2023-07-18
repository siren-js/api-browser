import { Component } from 'solid-js';

import { NormalState } from './AppState';

export type ContentComponent = Component<{
  state: NormalState;
}>;
