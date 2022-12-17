import { useState } from 'react';
import { Tabs } from 'react-bulma-components';

import { useSirenClient } from '../hooks/useSirenClient';
import EntityPanel from './entity/EntityPanel';
import SourcePanel from './SourcePanel';

enum Tab {
  Entity,
  Source
}

export default function MainPanel() {
  const [tab, setTab] = useState(Tab.Entity);
  const { entity } = useSirenClient();
  if (!entity) return null;
  return (
    <>
      <Tabs>
        <Tabs.Tab active={tab === Tab.Entity} onClick={() => setTab(Tab.Entity)}>
          Entity
        </Tabs.Tab>
        <Tabs.Tab active={tab === Tab.Source} onClick={() => setTab(Tab.Source)}>
          Source
        </Tabs.Tab>
      </Tabs>
      {tab === Tab.Entity ? <EntityPanel entity={entity} /> : <SourcePanel value={entity} />}
    </>
  );
}
