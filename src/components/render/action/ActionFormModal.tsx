import { Action } from '@siren-js/core';
import ActionForm from './ActionForm';

export default function ActionFormModal(props: ActionFormModalProps) {
  const { active, action, onClose, onSubmit } = props;
  return (
    <div className={`modal${active ? ' is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{action.title ?? action.name}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          {action.fields === undefined || action.fields.length === 0 ? (
            'This action has no fields.'
          ) : (
            <ActionForm
              fields={action.fields}
              onSubmit={() => onSubmit(action)}
            />
          )}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-info" onClick={() => onSubmit(action)}>
            Submit
          </button>
          <button className="button is-info is-outlined" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export interface ActionFormModalProps {
  active: boolean;
  action: Action;
  onClose: () => void;
  onSubmit: (action: Action) => void;
}
