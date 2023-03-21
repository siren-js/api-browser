import './App.css';

import { Footer } from './Footer';
import { Main } from './Main';
import { Navigator } from './Navigator';

import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="App">
      <section class="section pb-4">
        <div class="container">
          <Navigator />
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
