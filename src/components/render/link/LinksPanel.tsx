import { Link } from '@siren-js/core';
import { Panel } from '../../util';
import LinkPanelBlock from './LinkPanelBlock';

export default function LinksPanel({ links, onClick }: LinksProps) {
  return (
    <Panel title="Links">
      {links.map((link, index) => (
        <LinkPanelBlock key={index} link={link} onClick={onClick} />
      ))}
    </Panel>
  );
}

export interface LinksProps {
  links: readonly Link[];
  onClick: (link: Link) => void;
}
