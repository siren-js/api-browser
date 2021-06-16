import React from 'react';
import { Icon, IconSize, IconStyle } from '../util';
import { SettingsModal } from '../settings';

export interface SettingsItemState {
  isModalActive: boolean;
}

export default class SettingsItem extends React.Component<
  {},
  SettingsItemState
> {
  state: SettingsItemState = {
    isModalActive: false
  };

  constructor(props: {}) {
    super(props);
    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
  }

  activateModal() {
    this.setState({ isModalActive: true });
  }

  deactivateModal() {
    this.setState({ isModalActive: false });
  }

  render() {
    return (
      <>
        <a
          href="/#"
          className="navbar-item"
          onClick={(event) => {
            event.preventDefault();
            this.activateModal();
          }}
        >
          <Icon name="cog" style={IconStyle.Solid} size={IconSize.Large} />
        </a>
        <SettingsModal
          active={this.state.isModalActive}
          onClose={this.deactivateModal}
        />
      </>
    );
  }
}
