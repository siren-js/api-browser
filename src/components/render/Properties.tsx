import toTitleCase from 'to-title-case';
import SettingsContext from '../../SettingsContext';

export default function Properties(props: PropertiesProps) {
  return (
    <SettingsContext.Consumer>
      {({ titleCasePropertyNames }) => (
        <div className="columns">
          <div className="column is-narrow">
            {Object.keys(props.value).map((key) => (
              <div className="has-text-right has-text-weight-bold" key={key}>
                {titleCasePropertyNames ? toTitleCase(key) : key}
              </div>
            ))}
          </div>
          <div className="column">
            {Object.values(props.value).map((value, index) => (
              <div key={index}>
                {value === '' ? <>&nbsp;</> : String(value)}
              </div>
            ))}
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
}

export interface PropertiesProps {
  value: Record<string, unknown>;
}
