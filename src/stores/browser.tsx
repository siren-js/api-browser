import { createSignal } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

import * as Siren from '@siren-js/client';

import { AppState, ErrorState, NormalState } from '../types/AppState';
import { setLocation } from './location';

export const [loading, setLoading] = createSignal(false);

const [history, setHistory] = createStore<AppState[]>([]);
const [historyIndex, setHistoryIndex] = createSignal(-1);
export const [appState, setAppState] = createSignal<AppState>();

function updateFrom(state: AppState) {
  setLocation(state.url);
  setAppState(state);
  setHistory(
    produce((history) => {
      history.splice(historyIndex() + 1, 1, state);
    }),
  );
  setHistoryIndex((i) => i + 1);
}

async function handleResponse(response: Response): Promise<void> {
  const body = await response.blob();
  const state: NormalState = {
    url: response.url,
    responseBody: body,
  };
  updateFrom(state);
}

function handleError(url: string, error: Error) {
  const state: ErrorState = { url, error };
  updateFrom(state);
}

const navigate = (sendRequest: () => Promise<Response>) => {
  setLoading(true);
  sendRequest()
    .then(handleResponse)
    // .catch((error) => handleError(url, error))
    .finally(() => setLoading(false));
};

export const follow = (target: Siren.Target) => navigate(() => Siren.follow(target));
export const submit = (action: Siren.Action) => navigate(() => Siren.submit(action));

const go = (indexFn: (currentIndex: number) => number) => {
  setHistoryIndex((currentIndex) => {
    const index = indexFn(currentIndex);
    const state = history[index];
    setLocation(state.url);
    setAppState(state);
    return index;
  });
};

export const canGoBack = () => historyIndex() > 0;
export const goBack = () => {
  if (canGoBack()) {
    go((i) => i - 1);
  }
};

export const canGoForward = () => historyIndex() < history.length - 1;
export const goForward = () => {
  if (canGoForward()) {
    go((i) => i + 1);
  }
};
