import { Panel } from 'react-bulma-components';

import { Action } from '@siren-js/core';

import ActionPanelBlock from './ActionPanelBlock';

interface ActionsPanelProps {
  actions: ReadonlyArray<Action>;
}

export default function ActionsPanel({ actions }: ActionsPanelProps) {
  return (
    <Panel color="info">
      <Panel.Header>Actions</Panel.Header>
      {actions.map((action) => (
        <ActionPanelBlock key={action.name} action={action} />
      ))}
    </Panel>
  );
}
