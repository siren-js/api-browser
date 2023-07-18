import { Entity } from '@siren-js/client';

export interface NormalState {
  url: string;
  response: Response;
  rawContent: string;
  parseResult: Entity | Error;
}

export interface ErrorState {
  url: string;
  error: Error;
}

export type AppState = NormalState | ErrorState;

export const isNormal = (state: AppState): state is NormalState => 'response' in state;
export const isError = (state: AppState): state is ErrorState => 'error' in state;
