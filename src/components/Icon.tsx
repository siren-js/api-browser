export enum IconStyle {
  Solid = 'fas',
  Brands = 'fab'
}

export enum IconSize {
  Normal = '',
  Large = 'fa-lg',
  ExtraLarge = 'fa-2x'
}

export enum IconType {
  FileIcon = 'file-icon',
  Icon = 'icon',
  PanelIcon = 'panel-icon'
}

export interface IconProps {
  name: string;
  style: IconStyle;
  color?: IconColor;
  size?: IconSize;
  type?: IconType;
}

export enum IconColor {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger'
}

export const Icon = ({
  name,
  style,
  color,
  size = IconSize.Normal,
  type = IconType.Icon
}: IconProps) => (
  <span className={type + (color ? ` has-text-${color}` : '')}>
    <i className={`${style} fa-${name} ${size}`}></i>
  </span>
);
