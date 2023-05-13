import { Accessor, Component } from 'solid-js';

import { EmbeddedEntity } from '@siren-js/client';

import { EntityDisplay } from './EntityDisplay';

interface EmbeddedEntityModalProps {
  active: Accessor<boolean>;
  embeddedEntity: EmbeddedEntity;
  onClose: () => void;
}

export const EmbeddedEntityModal: Component<EmbeddedEntityModalProps> = ({ active, embeddedEntity, onClose }) => {
  return (
    <div class="modal" classList={{ 'is-active': active() }}>
      <div class="modal-background" onClick={onClose}></div>
      <div class="modal-content">
        <div class="box">
          <EntityDisplay entity={() => embeddedEntity} />
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};
