import { ParentComponent } from 'solid-js';

export const ExternalLink: ParentComponent<{ href: string }> = ({ children, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
