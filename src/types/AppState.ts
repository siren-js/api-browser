export interface NormalState {
  url: string;
  responseBody: Blob;
}

export interface ErrorState {
  url: string;
  error: Error;
}

export type AppState = NormalState | ErrorState;

export const isNormal = (state: AppState): state is NormalState => 'responseBody' in state;
export const isError = (state: AppState): state is ErrorState => 'error' in state;
