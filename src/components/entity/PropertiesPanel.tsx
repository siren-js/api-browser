import { Columns } from 'react-bulma-components';
import toTitleCase from 'to-title-case';

import { Entity } from '@siren-js/core';

import { useSettings } from '../../hooks/useSettings';

interface PropertiesPanelProps {
  properties: Entity['properties'];
}

export default function PropertiesPanel({ properties }: PropertiesPanelProps) {
  const { titleCasePropertyNames } = useSettings();

  if (!properties) return null;

  return (
    <Columns className="is-mobile">
      <Columns.Column narrow>
        {Object.keys(properties).map((key) => (
          <div className="has-text-right has-text-weight-bold" key={key}>
            {titleCasePropertyNames ? toTitleCase(key) : key}
          </div>
        ))}
      </Columns.Column>
      <Columns.Column>
        {Object.entries(properties).map(([key, value]) => (
          <div key={key}>{value === '' ? <>&nbsp;</> : String(value)}</div>
        ))}
      </Columns.Column>
    </Columns>
  );
}
