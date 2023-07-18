import { Match, Show, Switch } from 'solid-js';

import { Entity } from '@siren-js/client';

import { ContentComponent } from '../types/ContentComponent';
import { EntityDisplay } from './EntityDisplay';
import { Message, MessageType } from './Message';

export const PrettyContent: ContentComponent = ({ state }) => {
  const { parseResult } = state;
  return (
    <Show when={parseResult} keyed>
      {(result) => (
        <Switch>
          <Match when={result instanceof Entity}>
            <EntityDisplay entity={() => parseResult as Entity} />
          </Match>
          <Match when={result instanceof Error}>
            <Message type={MessageType.Danger} title="Error">
              {(result as Error).message}
            </Message>
          </Match>
        </Switch>
      )}
    </Show>
  );
};
