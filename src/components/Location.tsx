import React from 'react';
import { withPreventDefault } from '../with';

export interface LocationProps {
  onNavigate: () => Promise<void>;
  onUrlChange: (url: string) => void;
  url: string;
}

interface LocationState {
  isNavigating: boolean;
}

export default class Location extends React.Component<
  LocationProps,
  LocationState
> {
  state: LocationState = {
    isNavigating: false
  };

  constructor(props: LocationProps) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit() {
    this.setState({ isNavigating: true });
    await this.props.onNavigate();
    this.setState({ isNavigating: false });
  }

  render() {
    return (
      <form className="pb-5" onSubmit={withPreventDefault(this.submit)}>
        <div className="columns is-vcentered">
          <div className="column has-text-right-tablet">
            <label className="label" htmlFor="location">
              Location
            </label>
          </div>
          <div className="column is-two-thirds">
            <input
              id="location"
              className="input"
              type="url"
              placeholder="URL"
              value={this.props.url}
              onChange={(event) => this.props.onUrlChange(event.target.value)}
            />
          </div>
          <div className="column">
            <button
              className={`button is-info ${
                this.state.isNavigating ? 'is-loading' : ''
              }`}
            >
              Fetch
            </button>
          </div>
        </div>
      </form>
    );
  }
}
