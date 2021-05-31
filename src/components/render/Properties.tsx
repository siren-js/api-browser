import toTitleCase from 'to-title-case';

export default function Properties(props: PropertiesProps) {
  return (
    <div className="columns">
      <div className="column is-narrow">
        {Object.keys(props.value).map((key) => (
          <div className="has-text-right has-text-weight-bold" key={key}>
            {toTitleCase(key)}
          </div>
        ))}
      </div>
      <div className="column">
        {Object.values(props.value).map((value, index) => (
          <div key={index}>{String(value)}</div>
        ))}
      </div>
    </div>
  );
}

export interface PropertiesProps {
  value: Record<string, unknown>;
}
