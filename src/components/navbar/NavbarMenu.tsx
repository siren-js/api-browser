import { version } from '../../../package.json';
import GitHubLinkItem from './GitHubLinkItem';
import SettingsItem from './SettingsItem';

export interface NavbarMenuProps {
  id: string;
  active: boolean;
}

export default function NavbarMenu(props: NavbarMenuProps) {
  return (
    <div
      id={props.id}
      className={`navbar-menu${props.active ? ' is-active' : ''}`}
    >
      <div className="navbar-end">
        <div className="navbar-item has-text-weight-bold">v{version}</div>
        <GitHubLinkItem />
        <SettingsItem />
      </div>
    </div>
  );
}
