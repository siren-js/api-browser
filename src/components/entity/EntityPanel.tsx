import { Columns, Heading, Level, Tag } from 'react-bulma-components';

import * as Siren from '@siren-js/core';

import ActionsPanel from './ActionsPanel';
import EntitiesPanel from './EntitiesPanel';
import LinksPanel from './LinksPanel';
import PropertiesPanel from './PropertiesPanel';

interface EntityPanelProps {
  entity: Siren.Entity;
}

export default function EntityPanel({ entity }: EntityPanelProps) {
  return (
    <>
      <Level>
        <Level.Side>
          <Level.Item>
            <Heading renderAs="h2">{entity.title}</Heading>
          </Level.Item>
          <Level.Item>
            <Tag.Group>
              {entity.class?.map((name) => (
                <Tag key={name} color="info">
                  {name}
                </Tag>
              ))}
            </Tag.Group>
          </Level.Item>
        </Level.Side>
      </Level>
      <Columns>
        <Columns.Column>
          <PropertiesPanel properties={entity.properties} />
        </Columns.Column>
        <Columns.Column>
          <ActionsPanel actions={entity?.actions ?? []} />
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <LinksPanel links={entity?.links ?? []} />
        </Columns.Column>
        <Columns.Column>
          <EntitiesPanel entities={entity?.entities ?? []} />
        </Columns.Column>
      </Columns>
    </>
  );
}
