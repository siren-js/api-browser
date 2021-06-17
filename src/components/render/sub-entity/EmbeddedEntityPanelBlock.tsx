import { EmbeddedEntity } from '@siren-js/core';
import { withPreventDefault } from '../../../with';

export default function EmbeddedEntityPanelBlock({
  embeddedEntity,
  onClick
}: EmbeddedEntityPanelBlockProps) {
  const label =
    embeddedEntity.title ??
    embeddedEntity.getLinksByRel('self')[0]?.title ??
    embeddedEntity.rel.join(', ');
  return (
    <a href="/#" className="panel-block" onClick={withPreventDefault(onClick)}>
      <span className="panel-icon">
        <i className="fas fa-bullhorn" aria-hidden="true"></i>
      </span>
      {label}
    </a>
  );
}

export interface EmbeddedEntityPanelBlockProps {
  embeddedEntity: EmbeddedEntity;
  onClick: () => void;
}
