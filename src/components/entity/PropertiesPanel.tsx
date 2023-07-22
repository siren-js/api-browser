import { Accessor, Component, For } from 'solid-js';

export const PropertiesPanel: Component<{ properties: Accessor<object> }> = ({ properties }) => {
  return (
    <div class="panel is-primary">
      <h2 class="panel-heading">Properties</h2>
      <For each={Object.entries(properties())} fallback={<div class="panel-block">No properties</div>}>
        {([key, value]) => (
          <div class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-database" aria-hidden="true"></i>
            </span>
            <div class="level is-mobile" style={{ width: '100%' }}>
              <div class="level-left">
                <div class="level-item">{key}</div>
              </div>
              <div class="level-right">
                <div class="level-item">{Array.isArray(value) ? value.join(', ') : value}</div>
              </div>
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
