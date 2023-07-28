import { Component } from 'solid-js';

import { selectedTab, setSelectedTab } from '../stores/tab';
import { TabName } from '../types/TabName';

export const Tab: Component<{ name: TabName; icon: string }> = ({ name, icon }) => (
  <li classList={{ 'is-active': selectedTab() === name }} onClick={() => setSelectedTab(name)}>
    <a>
      <span class="icon">
        <i class={`fas fa-${icon}`} aria-hidden="true"></i>
      </span>
      <span>{name}</span>
    </a>
  </li>
);
