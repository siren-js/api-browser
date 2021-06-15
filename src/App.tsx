import SirenClient from '@siren-js/client';
import * as Siren from '@siren-js/core';
import React from 'react';
import { Hero, Location, Navbar, Renderer } from './components';
import SettingsContext, { Settings } from './SettingsContext';

export default class App extends React.Component<{}, AppState> {
  private client = new SirenClient();

  constructor(props = {}) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.follow = this.follow.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleTitleCasing = this.toggleTitleCasing.bind(this);

    this.state = {
      titleCasePropertyNames: false,
      toggleTitleCasePropertyNames: this.toggleTitleCasing,
      headers: this.client.headers,
      addHeader: (name, value) => {
        this.client.headers.append(name, value);
      },
      deleteHeader: (name) => {
        this.client.headers.delete(name);
        this.setState({}); // trigger a re-render
      },
      editHeader: (name, value) => {
        this.client.headers.set(name, value);
      }
    };
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

  toggleTitleCasing() {
    this.setState({
      titleCasePropertyNames: !this.state.titleCasePropertyNames
    });
  }

  render() {
    return (
      <div className="App">
        <SettingsContext.Provider value={this.state}>
          <Navbar />
        </SettingsContext.Provider>
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

interface AppState extends Settings {
  entity?: Siren.Entity;
}
