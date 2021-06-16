export interface NavbarBrandProps {
  targetElementId: string;
  active: boolean;
  onBurgerClick: () => void;
}

export default function NavbarBrand(props: NavbarBrandProps) {
  return (
    <div className="navbar-brand">
      <a
        className={`navbar-burger${props.active ? ' is-active' : ''}`}
        href="/#"
        onClick={(event) => {
          event.preventDefault();
          props.onBurgerClick();
        }}
        role="button"
        aria-label="menu"
        aria-expanded={props.active}
        data-target={props.targetElementId}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
}
