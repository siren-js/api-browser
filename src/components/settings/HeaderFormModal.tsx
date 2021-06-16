import React from 'react';
import { ModalCard, ModalCardBody, ModalCardFoot } from '../util';

export interface HeaderFormModalProps {
  active: boolean;
  title: string;
  header?: Header;
  disableName?: boolean;
  onClose: () => void;
  onSubmit: (header: Header) => void;
}

export interface Header {
  name: string;
  value: string;
}

export default class HeaderFormModal extends React.Component<
  HeaderFormModalProps,
  Header
> {
  constructor(props: HeaderFormModalProps) {
    super(props);
    this.state = {
      name: props.header?.name ?? '',
      value: props.header?.value ?? ''
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.onSubmit(this.state);
    if (!this.props.disableName) {
      this.setState({ name: '', value: '' });
    }
  }

  render() {
    return (
      <ModalCard
        active={this.props.active}
        title={this.props.title}
        onClose={this.props.onClose}
      >
        <ModalCardBody>
          <form onSubmit={this.submit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Header name (Api-Key, Authorization, etc.)"
                  disabled={this.props.disableName}
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Value</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Header value(s)"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
              </div>
              <p className="help">
                Separate multiple values with a comma and a space
              </p>
            </div>
          </form>
        </ModalCardBody>
        <ModalCardFoot>
          <button className="button is-info" onClick={this.submit}>
            Submit
          </button>
          <button
            className="button is-info is-outlined"
            onClick={this.props.onClose}
          >
            Cancel
          </button>
        </ModalCardFoot>
      </ModalCard>
    );
  }
}
