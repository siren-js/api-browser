import './App.css';

import { Footer } from './Footer';
import { Main } from './Main';
import { AboutModal } from './menu/AboutModal';
import { Menu } from './menu/Menu';
import { SettingsModal } from './menu/SettingsModal';
import { Navigator } from './Navigator';

import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="App">
      <section class="section pb-4">
        <div class="container">
          <div class="columns is-mobile is-variable is-1">
            <div class="column">
              <Navigator />
            </div>
            <div class="column is-narrow">
              <Menu />
              <SettingsModal />
              <AboutModal />
            </div>
          </div>
        </div>
      </section>
      <main class="section pt-0">
        <div class="container">
          <Main />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
