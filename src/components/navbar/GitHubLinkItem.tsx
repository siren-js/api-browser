import { Icon, IconSize, IconStyle } from '../util';

export default function GitHubLinkItem() {
  return (
    <a
      className="navbar-item"
      href="https://github.com/siren-js/api-browser"
      target="_blank"
      rel="noreferrer"
    >
      <Icon name="github" style={IconStyle.Brands} size={IconSize.Large} />
    </a>
  );
}
