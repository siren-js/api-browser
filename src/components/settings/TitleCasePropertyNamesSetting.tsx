import SettingsContext from '../../SettingsContext';

export default function TitleCasePropertyNamesSetting() {
  return (
    <SettingsContext.Consumer>
      {({ titleCasePropertyNames, toggleTitleCasePropertyNames }) => (
        <div className="field">
          <div className="control">
            <label className="checkbox has-text-dark">
              <input
                type="checkbox"
                checked={titleCasePropertyNames}
                onChange={toggleTitleCasePropertyNames}
              />
              &nbsp; Convert property names to title case
            </label>
          </div>
        </div>
      )}
    </SettingsContext.Consumer>
  );
}
