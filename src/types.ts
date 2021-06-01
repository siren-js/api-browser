import * as Siren from '@siren-js/core';

export type RenderProps = EntityProp & InteractionProps;

export interface EntityProp {
  entity: Siren.Entity;
}

export type InteractionProps<L extends Siren.Link = Siren.Link> =
  OnFollowProp<L> & OnSubmitProp;

export interface OnFollowProp<L extends Siren.Link = Siren.Link> {
  onFollow: FollowLinkEvent<L>;
}

export type FollowLinkEvent<L extends Siren.Link = Siren.Link> = (
  link: L
) => void;

export interface OnSubmitProp {
  onSubmit: SubmitActionEvent;
}

export type SubmitActionEvent = (action: Siren.Action) => void;
