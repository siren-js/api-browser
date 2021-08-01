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

    this.state = {
      locationUrl: '',
      titleCasePropertyNames: false,
      toggleTitleCasePropertyNames: () => {
        this.setState({
          titleCasePropertyNames: !this.state.titleCasePropertyNames
        });
      },
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

  async fetch(): Promise<void> {
    const response = await this.client.fetch(this.state.locationUrl);
    this.setState({
      locationUrl: response.url,
      entity: await response.siren()
    });
  }

  async follow(link: Siren.Link): Promise<void> {
    const response = await this.client.follow(link);
    this.setState({
      locationUrl: response.url,
      entity: await response.siren()
    });
  }

  async submit(action: Siren.Action): Promise<void> {
    const response = await this.client.submit(action);
    this.setState({
      locationUrl: response.url,
      entity: await response.siren()
    });
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        <Navbar />
        <Hero />
        <div className="container">
          <section className="section">
            <Location
              url={this.state.locationUrl}
              onUrlChange={(url) => this.setState({ locationUrl: url })}
              onNavigate={this.fetch}
            />
            {this.state.entity ? (
              <Renderer
                entity={this.state.entity}
                onFollow={this.follow}
                onSubmit={this.submit}
              />
            ) : null}
          </section>
        </div>
      </SettingsContext.Provider>
    );
  }
}

interface AppState extends Settings {
  entity?: Siren.Entity;
  locationUrl: string;
}
