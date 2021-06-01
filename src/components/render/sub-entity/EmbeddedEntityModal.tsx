import { Action, EmbeddedEntity, Link } from '@siren-js/core';
import Rendering from '../Rendering';

export default function EmbeddedEntityModal(props: EmbeddedEntityModalProps) {
  const { active, embeddedEntity, onClose, onFollow, onSubmit } = props;
  return (
    <div className={`modal${active ? ' is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <Rendering
            cols={1}
            entity={embeddedEntity}
            onFollow={onFollow}
            onSubmit={onSubmit}
          />
          <div className="buttons mt-5">
            <button
              className="button is-info"
              onClick={() => onFollow(embeddedEntity.getLinksByRel('self')[0])}
            >
              Fetch
            </button>
            <button className="button is-info is-outlined" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export interface EmbeddedEntityModalProps {
  active: boolean;
  embeddedEntity: EmbeddedEntity;
  onClose: () => void;
  onFollow: (link: Link) => void;
  onSubmit: (action: Action) => void;
}
