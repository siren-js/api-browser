import { Accessor, createContext, createSignal, ParentComponent, Setter, useContext } from 'solid-js';

import { Action, Entity, follow, parse, submit, Target } from '@siren-js/client';

interface BrowserContextValue {
  entity: Accessor<Entity | undefined>;
  loading: Accessor<boolean>;
  location: Accessor<string>;
  rawContent: Accessor<string | undefined>;
  setLocation: Setter<string>;
  error: Accessor<Error | undefined>;
  follow: (target: Target) => void;
  submit: (action: Action) => void;
}

const BrowserContext = createContext({} as BrowserContextValue);

export const BrowserProvider: ParentComponent = (props) => {
  const [loading, setLoading] = createSignal(false);
  const [location, setLocation] = createSignal('');
  const [entity, setEntity] = createSignal<Entity>();
  const [rawContent, setRawContent] = createSignal<string>();
  const [error, setError] = createSignal<Error>();

  const responseHandler = async (res: Response): Promise<void> => {
    setLocation(res.url);
    const text = await res.text();
    setRawContent(text);
    const contentType = res.headers.get('Content-Type') ?? '';
    if (/^application\/vnd\.siren\+json(;|$)/.test(contentType)) {
      setError(undefined);
      setEntity(await parse(text));
    } else {
      setEntity(undefined);
      setError(new Error(`Unable to parse unrecognized Content-Type: ${contentType}`));
    }
  };

  const navigate = (req: () => Promise<Response>) => {
    setLoading(true);
    req()
      .then(responseHandler)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const value: BrowserContextValue = {
    entity,
    error,
    loading,
    location,
    rawContent,
    setLocation,
    follow: (url) => navigate(() => follow(url)),
    submit: (action: Action) => navigate(() => submit(action)),
  };

  return <BrowserContext.Provider value={value}>{props.children}</BrowserContext.Provider>;
};

export const useBrowserContext = () => useContext(BrowserContext);
