import { Action, EmbeddedLink, SubEntity } from '@siren-js/core';
import React from 'react';
import LinkPanelBlock from '../link/LinkPanelBlock';
import EmbeddedEntityModal from './EmbeddedEntityModal';
import EmbeddedEntityPanelBlock from './EmbeddedEntityPanelBlock';

export default class SubEntitiesPanel extends React.Component<
  SubEntitiesProps,
  SubEntitiesState
> {
  state: SubEntitiesState = {
    activeModal: null
  };

  constructor(props: SubEntitiesProps) {
    super(props);
    this.activate = this.activate.bind(this);
    this.deactivate = this.deactivate.bind(this);
  }

  activate(subEntityIndex: number) {
    this.setState({ activeModal: subEntityIndex });
  }

  deactivate() {
    this.setState({ activeModal: null });
  }

  render() {
    return (
      <article className="panel is-info">
        <p className="panel-heading">Sub-Entites</p>
        {this.props.subEntities.map((subEntity, index) =>
          subEntity instanceof EmbeddedLink ? (
            <LinkPanelBlock
              key={index}
              link={subEntity}
              onClick={this.props.onFollow}
            />
          ) : (
            <React.Fragment key={index}>
              <EmbeddedEntityPanelBlock
                embeddedEntity={subEntity}
                onClick={() => this.activate(index)}
              />
              <EmbeddedEntityModal
                embeddedEntity={subEntity}
                active={index === this.state.activeModal}
                onClose={this.deactivate}
                onFollow={this.props.onFollow}
                onSubmit={this.props.onSubmit}
              />
            </React.Fragment>
          )
        )}
      </article>
    );
  }
}

export interface SubEntitiesProps {
  subEntities: readonly SubEntity[];
  onFollow: (link: EmbeddedLink) => void;
  onSubmit: (action: Action) => void;
}

export interface SubEntitiesState {
  activeModal: number | null;
}
