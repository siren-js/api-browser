import React from 'react';

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

  submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.onNavigate(this.state.url);
  }

  updateUrl(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ url: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="location">
              Location:
            </label>
          </div>
          <div className="field-body">
            <FieldControl>
              <input
                id="location"
                className="input is-loading"
                type="url"
                placeholder="URL"
                value={this.state.url}
                onChange={this.updateUrl}
              />
            </FieldControl>
            <FieldControl>
              <button className="button is-info">Fetch</button>
            </FieldControl>
          </div>
        </div>
      </form>
    );
  }
}

function FieldControl(props: { children: React.ReactNode }) {
  return (
    <div className="field">
      <div className="control">{props.children}</div>
    </div>
  );
}
