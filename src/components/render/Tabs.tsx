import { withPreventDefault } from '../../with';

export enum View {
  Rendering,
  Source
}

export interface TabsProps {
  activeTab: View;
  onChange: (tab: View) => void;
}

export const Tabs = (props: TabsProps) => (
  <div className="tabs">
    <ul>
      <Tab
        view={View.Rendering}
        isActive={props.activeTab === View.Rendering}
        onClick={props.onChange}
      />
      <Tab
        view={View.Source}
        isActive={props.activeTab === View.Source}
        onClick={props.onChange}
      />
    </ul>
  </div>
);

interface TabProps {
  view: View;
  isActive: boolean;
  onClick: (tab: View) => void;
}

const Tab = (props: TabProps) => (
  <li className={props.isActive ? 'is-active' : ''}>
    <a href="/#" onClick={withPreventDefault(() => props.onClick(props.view))}>
      {View[props.view]}
    </a>
  </li>
);
