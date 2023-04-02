import { Accessor, createContext, createSignal, ParentComponent, Setter, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

import * as Siren from '@siren-js/client';

interface HistoryItem {
  url: string;
  content: string;
  entity?: Siren.Entity;
  error?: Error;
}

interface BrowserContextValue {
  canGoBack: Accessor<boolean>;
  canGoForward: Accessor<boolean>;
  entity: Accessor<Siren.Entity | undefined>;
  error: Accessor<Error | undefined>;
  loading: Accessor<boolean>;
  location: Accessor<string>;
  rawContent: Accessor<string | undefined>;
  setLocation: Setter<string>;
  follow(target: Siren.Target): void;
  goBack(): void;
  goForward(): void;
  submit(action: Siren.Action): void;
}

const BrowserContext = createContext({} as BrowserContextValue);

export const BrowserProvider: ParentComponent = (props) => {
  const [loading, setLoading] = createSignal(false);
  const [location, setLocation] = createSignal('');
  const [history, setHistory] = createStore<HistoryItem[]>([]);
  const [historyIndex, setHistoryIndex] = createSignal(-1);
  const [rawContent, setRawContent] = createSignal<string>();
  const [entity, setEntity] = createSignal<Siren.Entity>();
  const [error, setError] = createSignal<Error>();

  const responseHandler = async (res: Response): Promise<void> => {
    setLocation(res.url);

    const text = await res.text();
    setRawContent(text);

    const historyItem: HistoryItem = {
      url: res.url,
      content: text,
    };

    const contentType = res.headers.get('Content-Type') ?? '';
    if (/^application\/vnd\.siren\+json(;|$)/.test(contentType)) {
      const entity = await Siren.parse(text);
      setError(undefined);
      setEntity(entity);
      historyItem.entity = entity;
    } else {
      const error = new Error(`Unable to parse unrecognized Content-Type: ${contentType}`);
      setEntity(undefined);
      setError(error);
      historyItem.error = error;
    }

    setHistory([...history.slice(0, historyIndex() + 1), historyItem]);
    setHistoryIndex((value) => value + 1);
  };

  const navigate = (req: () => Promise<Response>) => {
    setLoading(true);
    req()
      .then(responseHandler)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const follow = (target: Siren.Target) => navigate(() => Siren.follow(target));
  const submit = (action: Siren.Action) => navigate(() => Siren.submit(action));

  const setStateFrom = (item: HistoryItem) => {
    setLocation(item.url);
    setRawContent(item.content);
    setEntity(item.entity);
    setError(item.error);
  };

  const go = (indexFn: (currentIndex: number) => number) => {
    setHistoryIndex((currentIndex) => {
      const index = indexFn(currentIndex);
      const historyItem = history[index];
      setStateFrom(historyItem);
      return index;
    });
  };

  const canGoBack = () => historyIndex() > 0;
  const goBack = () => {
    if (canGoBack()) {
      go((i) => i - 1);
    }
  };

  const canGoForward = () => historyIndex() < history.length - 1;
  const goForward = () => {
    if (canGoForward()) {
      go((i) => i + 1);
    }
  };

  return (
    <BrowserContext.Provider
      value={{
        canGoBack,
        canGoForward,
        entity,
        error,
        follow,
        goBack,
        goForward,
        loading,
        location,
        rawContent,
        setLocation,
        submit,
      }}
    >
      {props.children}
    </BrowserContext.Provider>
  );
};

export const useBrowserContext = () => useContext(BrowserContext);
