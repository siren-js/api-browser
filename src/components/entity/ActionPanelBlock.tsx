import { useState } from 'react';
import { Panel } from 'react-bulma-components';

import { Action } from '@siren-js/core';

import ActionModal from './ActionModal';

interface ActionPanelBlockProps {
  action: Action;
}

export default function ActionPanelBlock({ action }: ActionPanelBlockProps) {
  const [isModalActive, toggleModal] = useState(false);
  return (
    <>
      <Panel.Block renderAs="a" onClick={() => toggleModal(true)}>
        <Panel.Icon>
          <i className="fas fa-envelope" />
        </Panel.Icon>
        {action.title ?? action.name}
      </Panel.Block>
      <ActionModal action={action} active={isModalActive} onClose={() => toggleModal(false)} />
    </>
  );
}
