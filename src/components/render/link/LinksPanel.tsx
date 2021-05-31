import { Link } from '@siren-js/core';
import LinkPanelBlock from './LinkPanelBlock';

export default function LinksPanel({ links, onClick }: LinksProps) {
  return (
    <article className="panel is-info">
      <p className="panel-heading">Links</p>
      {links.map((link, index) => (
        <LinkPanelBlock key={index} link={link} onClick={onClick} />
      ))}
    </article>
  );
}

export interface LinksProps {
  links: readonly Link[];
  onClick: (link: Link) => void;
}
