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
  size?: IconSize;
  type?: IconType;
}

export const Icon = ({
  name,
  style,
  size = IconSize.Normal,
  type = IconType.Icon
}: IconProps) => (
  <span className={type}>
    <i className={`${style} fa-${name} ${size}`}></i>
  </span>
);
