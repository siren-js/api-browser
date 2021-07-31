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

export enum IconContainerSize {
  Small = 'is-small',
  Normal = '',
  Medium = 'is-medium',
  Large = 'is-large'
}

export interface IconProps {
  name: string;
  style?: IconStyle;
  size?: IconSize;
  type?: IconType;
  containerSize?: IconContainerSize;
  left?: boolean;
}

export const Icon = ({
  name,
  style = IconStyle.Solid,
  size = IconSize.Normal,
  type = IconType.Icon,
  containerSize = IconContainerSize.Normal,
  left = false
}: IconProps) => (
  <span className={`${type} ${containerSize} ${left ? 'is-left' : ''}`}>
    <i className={`${style} fa-${name} ${size}`}></i>
  </span>
);
