import { Action } from '@siren-js/core';
import React from 'react';
import { Panel } from '../../util';
import ActionFormModal from './ActionFormModal';

export default class ActionsPanel extends React.Component<
  ActionsProps,
  ActionsState
> {
  state: ActionsState = {
    activeModal: null
  };

  constructor(props: ActionsProps) {
    super(props);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }

  activate(actionName: string) {
    this.setState({ activeModal: actionName });
  }

  deactivate() {
    this.setState({ activeModal: null });
  }

  render() {
    return (
      <Panel title="Actions">
        {this.props.actions.map((action, index) => (
          <React.Fragment key={index}>
            <ActionPanelBlock action={action} onClick={this.activate} />
            <ActionFormModal
              active={this.state.activeModal === action.name}
              action={action}
              onClose={this.deactivate}
              onSubmit={this.props.onSubmit}
            />
          </React.Fragment>
        ))}
      </Panel>
    );
  }
}

export interface ActionsProps {
  actions: readonly Action[];
  onSubmit: (action: Action) => void;
}

export interface ActionsState {
  activeModal: string | null;
}

const ActionPanelBlock = ({ action, onClick }: ActionPanelBlockProps) => (
  <a
    href="/#"
    className="panel-block"
    onClick={(e) => {
      e.preventDefault();
      onClick(action.name);
    }}
  >
    <span className="panel-icon">
      <i className="fas fa-file-alt" aria-hidden="true"></i>
    </span>
    {action.title ?? action.name}
  </a>
);

interface ActionPanelBlockProps {
  action: Action;
  onClick: (actionName: string) => void;
}
