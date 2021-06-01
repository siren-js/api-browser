import { Link } from '@siren-js/core';

export default function LinkPanelBlock({ link, onClick }: LinkProps) {
  const isActive = link.rel.includes('self');
  return (
    <a
      href="/#"
      className={`panel-block${isActive ? ' is-active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(link);
      }}
    >
      <span className="panel-icon">
        <i className="fas fa-link" aria-hidden="true"></i>
      </span>
      {link.title ?? link.rel.join(', ')}
    </a>
  );
}

export interface LinkProps {
  link: Link;
  onClick: (link: Link) => void;
}
