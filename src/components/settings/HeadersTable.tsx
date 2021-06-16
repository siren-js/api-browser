import React from 'react';
import SettingsContext from '../../SettingsContext';
import HeaderFormModal from './HeaderFormModal';
import { Icon, IconStyle } from '../util';

export interface HeadersTableState {
  isAddHeaderModalActive: boolean;
  activeEditHeaderModal?: string;
}

export default class HeadersTable extends React.Component<
  {},
  HeadersTableState
> {
  static contextType = SettingsContext;

  state: HeadersTableState = {
    isAddHeaderModalActive: false
  };

  constructor(props: {}) {
    super(props);
    this.activateAddHeaderModal = this.activateAddHeaderModal.bind(this);
    this.activateEditHeaderModal = this.activateEditHeaderModal.bind(this);
    this.deactivateAddHeaderModal = this.deactivateAddHeaderModal.bind(this);
    this.deactivateEditHeaderModal = this.deactivateEditHeaderModal.bind(this);
  }

  activateAddHeaderModal() {
    this.setState({ isAddHeaderModalActive: true });
  }

  activateEditHeaderModal(name: string) {
    this.setState({ activeEditHeaderModal: name });
  }

  deactivateAddHeaderModal() {
    this.setState({ isAddHeaderModalActive: false });
  }

  deactivateEditHeaderModal() {
    this.setState({ activeEditHeaderModal: undefined });
  }

  render() {
    return (
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[...this.context.headers.entries()].map(([name, value]) => (
            <tr key={name}>
              <td className="has-whitespace-nowrap">
                <code>{name}</code>
              </td>
              <td className="has-whitespace-nowrap">
                <code>{value}</code>
              </td>
              <td className="has-whitespace-nowrap">
                <button
                  className="button is-small is-outlined is-info mr-1"
                  onClick={() => this.activateEditHeaderModal(name)}
                >
                  <Icon name="edit" style={IconStyle.Solid} />
                  <span>Edit</span>
                </button>
                <HeaderFormModal
                  title={`Edit ${name} Header`}
                  active={this.state.activeEditHeaderModal === name}
                  header={{ name, value }}
                  disableName={true}
                  onClose={this.deactivateEditHeaderModal}
                  onSubmit={({ value }) => {
                    this.context.editHeader(name, value);
                    this.deactivateEditHeaderModal();
                  }}
                />
                <button
                  className="button is-small is-outlined is-danger"
                  onClick={() => this.context.deleteHeader(name)}
                >
                  <Icon name="trash-alt" style={IconStyle.Solid} />
                  <span>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              <button
                className="button is-small is-outlined is-info"
                onClick={this.activateAddHeaderModal}
              >
                <Icon name="plus" style={IconStyle.Solid} />
                <span>Add</span>
              </button>
              <HeaderFormModal
                title="Add Header"
                active={this.state.isAddHeaderModalActive}
                onClose={this.deactivateAddHeaderModal}
                onSubmit={({ name, value }) => {
                  console.log(`adding ${name}: ${value}`);
                  this.context.addHeader(name, value);
                  this.deactivateAddHeaderModal();
                }}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
