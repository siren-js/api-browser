import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { SettingsProvider } from './hooks/useSettings';
import { SirenClientProvider } from './hooks/useSirenClient';

ReactDOM.render(
  <React.StrictMode>
    <SirenClientProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </SirenClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
