import { createSignal } from 'solid-js';

import { TabName } from '../types/TabName';

export const [selectedTab, setSelectedTab] = createSignal(TabName.Pretty);
