import React from 'react';

export interface Settings {
  headers: Headers;
  titleCasePropertyNames: boolean;
  addHeader: (name: string, value: string) => void;
  deleteHeader: (name: string) => void;
  editHeader: (name: string, value: string) => void;
  toggleTitleCasePropertyNames: () => void;
}

const SettingsContext = React.createContext<Settings>({
  headers: new Headers(),
  titleCasePropertyNames: false,
  addHeader: () => {},
  deleteHeader: () => {},
  editHeader: () => {},
  toggleTitleCasePropertyNames: () => {}
});

export default SettingsContext;
