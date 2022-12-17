import { createContext, ReactNode, useContext, useState } from 'react';

import SirenClient, { ClientResponse } from '@siren-js/client';
import * as Siren from '@siren-js/core';

const client = new SirenClient();

interface SirenClientContextValue {
  entity?: Siren.Entity;
  loading: boolean;
  location: string;
  setLocation(url: string): void;
  fetch(url: string): Promise<void>;
  follow(link: Siren.Link): Promise<void>;
  submit(action: Siren.Action): Promise<void>;
}

const SirenClientContext = createContext({} as SirenClientContextValue);

interface SirenClientProviderProps {
  children: ReactNode;
}

export function SirenClientProvider({ children }: SirenClientProviderProps) {
  const [location, setLocation] = useState('');
  const [entity, setEntity] = useState<Siren.Entity>();
  const [loading, setLoading] = useState(false);

  const withResponseHandler = async (request: () => Promise<ClientResponse>) => {
    setLoading(true);
    const response = await request();
    const entity = await response.siren();
    setEntity(entity);
    setLocation(response.url);
    setLoading(false);
  };

  const fetch = (url: string) => withResponseHandler(() => client.fetch(url));
  const follow = (link: Siren.Link) => withResponseHandler(() => client.follow(link));
  const submit = (action: Siren.Action) => withResponseHandler(() => client.submit(action));

  return (
    <SirenClientContext.Provider value={{ entity, loading, location, setLocation, fetch, follow, submit }}>
      {children}
    </SirenClientContext.Provider>
  );
}

export const useSirenClient = () => useContext(SirenClientContext);
