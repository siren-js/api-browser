import {
  EntityProp,
  OnFollowProp,
  OnSubmitProp,
  RenderProps
} from '../../types';
import { Tags } from '../util';
import ActionsPanel from './action';
import LinksPanel from './link';
import Properties from './Properties';
import SubEntitiesPanel from './sub-entity';

export default function Rendering(props: RenderingProps) {
  const { cols } = props;
  return cols === 1 ? (
    <SingleColumnRendering {...props} />
  ) : (
    <DoubleColumnRendering {...props} />
  );
}

export interface RenderingProps extends RenderProps {
  cols: 1 | 2;
}

const SingleColumnRendering = ({ entity, onFollow, onSubmit }: RenderProps) => (
  <div>
    <Header entity={entity} />
    <EntityProperties entity={entity} />
    <EntityActions entity={entity} onSubmit={onSubmit} />
    <EntityLinks entity={entity} onFollow={onFollow} />
    <EntitySubEntities
      entity={entity}
      onFollow={onFollow}
      onSubmit={onSubmit}
    />
  </div>
);

const EntityProperties = ({ entity }: EntityProp) =>
  entity.properties ? <Properties value={entity.properties} /> : null;

const EntityActions = ({ entity, onSubmit }: EntityProp & OnSubmitProp) =>
  isNonEmpty(entity.actions) ? (
    <ActionsPanel actions={entity.actions} onSubmit={onSubmit} />
  ) : null;

const EntityLinks = ({ entity, onFollow }: EntityProp & OnFollowProp) =>
  isNonEmpty(entity.links) ? (
    <LinksPanel links={entity.links} onClick={onFollow} />
  ) : null;

const EntitySubEntities = ({ entity, onFollow, onSubmit }: RenderProps) =>
  isNonEmpty(entity.entities) ? (
    <SubEntitiesPanel
      subEntities={entity.entities}
      onFollow={onFollow}
      onSubmit={onSubmit}
    />
  ) : null;

const DoubleColumnRendering = ({ entity, onFollow, onSubmit }: RenderProps) => (
  <div>
    <Header entity={entity} />
    <div className="columns">
      <div className="column">
        <EntityProperties entity={entity} />
      </div>
      <div className="column">
        <EntityActions entity={entity} onSubmit={onSubmit} />
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <EntityLinks entity={entity} onFollow={onFollow} />
      </div>
      <div className="column">
        <EntitySubEntities
          entity={entity}
          onFollow={onFollow}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  </div>
);

const Header = ({ entity }: EntityProp) => (
  <div className="level">
    <div className="level-left">
      <div className="level-item">
        <p className="title">{entity.title}</p>
      </div>
      <div className="level-item">
        <Tags values={entity.class ?? []} />
      </div>
    </div>
  </div>
);

function isNonEmpty<T>(value: readonly T[] | undefined): value is readonly T[] {
  return !!value && value.length > 0;
}
