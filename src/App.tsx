import SirenClient from '@siren-js/client';
import * as Siren from '@siren-js/core';
import React from 'react';
import Hero from './components/Hero';
import Location from './components/Location';
import Renderer from './components/render';

export default class App extends React.Component<{}, AppState> {
  private client = new SirenClient();
  state: AppState = {};

  constructor(props = {}) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.follow = this.follow.bind(this);
    this.submit = this.submit.bind(this);
  }

  async fetch(url: string) {
    const response = await this.client.fetch(url);
    this.setState({ entity: await response.siren() });
  }
  
  async follow(link: Siren.Link) {
    const response = await this.client.follow(link);
    this.setState({ entity: await response.siren() });
  }

  async submit(action: Siren.Action) {
    const response = await this.client.submit(action);
    this.setState({ entity: await response.siren() });
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <div className="container">
          <section className="section">
            <Location onNavigate={this.fetch} />
            {this.state.entity ? (
              <Renderer
                entity={this.state.entity}
                onFollow={this.follow}
                onSubmit={this.submit}
              />
            ) : null}
          </section>
        </div>
      </div>
    );
  }
}

interface AppState {
  entity?: Siren.Entity;
}
