import React from 'react';

export interface PanelProps {
  children: React.ReactNode;
  title: string;
}

export default function Panel(props: PanelProps) {
  return (
    <article className="panel is-info">
      <p className="panel-heading">{props.title}</p>
      {props.children}
    </article>
  );
}
