import React from 'react';
import { withPreventDefault } from '../with';

export interface LocationProps {
  onNavigate: (url: string) => void;
}

export interface LocationState {
  url: string;
}

export default class Location extends React.Component<
  LocationProps,
  LocationState
> {
  state = { url: '' };

  constructor(props: LocationProps) {
    super(props);
    this.submit = this.submit.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
  }

  submit() {
    this.props.onNavigate(this.state.url);
  }

  updateUrl(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <form onSubmit={withPreventDefault(this.submit)}>
        <div className="columns is-mobile is-vcentered">
          <div className="column is-2 has-text-right">
            <label className="label" htmlFor="location">
              Location:
            </label>
          </div>
          <div className="column">
            <input
              id="location"
              className="input is-loading"
              type="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.updateUrl}
            />
          </div>
          <div className="column is-2">
            <button className="button is-info">Fetch</button>
          </div>
        </div>
      </form>
    );
  }
}
