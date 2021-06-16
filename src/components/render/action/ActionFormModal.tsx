import { Action } from '@siren-js/core';
import ActionForm from './ActionForm';
import { Modal } from '../../util';

export default function ActionFormModal(props: ActionFormModalProps) {
  const { active, action, onClose, onSubmit } = props;
  return (
    <Modal active={active} onClose={onClose}>
      <div className="box">
        <p className="title">{action.title ?? action.name}</p>
        <ActionForm
          fields={action.fields ?? []}
          onSubmit={() => onSubmit(action)}
          onCancel={onClose}
        />
      </div>
    </Modal>
  );
}

export interface ActionFormModalProps {
  active: boolean;
  action: Action;
  onClose: () => void;
  onSubmit: (action: Action) => void;
}
