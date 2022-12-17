import { createContext, ReactNode, useContext } from 'react';

import { ToggleFn, useToggle } from './useToggle';

interface Settings {
  titleCasePropertyNames: boolean;
  toggleTitleCasePropertyNames: ToggleFn;
  // headers
  // addHeader
  // deleteHeader
  // editHeader
}

const SettingsContext = createContext({} as Settings);

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [titleCasePropertyNames, toggleTitleCasePropertyNames] = useToggle(false);

  const settings: Settings = {
    titleCasePropertyNames,
    toggleTitleCasePropertyNames
  };

  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}
