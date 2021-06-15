import React from 'react';
import { EntityProp, RenderProps } from '../../types';
import { Tabs, View } from './Tabs';
import Rendering from './Rendering';

export default class Renderer extends React.Component<
  RenderProps,
  RendererState
> {
  state: RendererState = {
    view: View.Rendering
  };

  constructor(props: RenderProps) {
    super(props);
    this.updateView = this.updateView.bind(this);
  }

  updateView(view: View) {
    this.setState({ view });
  }

  render() {
    return (
      <div>
        <Tabs activeTab={this.state.view} onChange={this.updateView} />
        {this.state.view === View.Rendering ? (
          <Rendering
            cols={2}
            entity={this.props.entity}
            onFollow={this.props.onFollow}
            onSubmit={this.props.onSubmit}
          />
        ) : (
          <Source entity={this.props.entity} />
        )}
      </div>
    );
  }
}

export interface RendererState {
  view: View;
}

const Source = ({ entity }: EntityProp) => (
  <pre>{JSON.stringify(entity, null, 2)}</pre>
);
