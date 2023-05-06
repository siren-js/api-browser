import './App.css';

import { AboutModal } from './AboutModal';
import { Footer } from './Footer';
import { Main } from './Main';
import { Menu } from './Menu';
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
