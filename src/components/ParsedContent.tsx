import { Match, Show, Switch } from 'solid-js';

import { Entity } from '@siren-js/client';

import { ContentComponent } from '../types/ContentComponent';
import { CodeBlock } from './CodeBlock';
import { Message, MessageType } from './Message';

export const ParsedContent: ContentComponent = ({ state }) => {
  const { parseResult } = state;
  return (
    <Show when={parseResult} keyed>
      {(result) => (
        <Switch>
          <Match when={result instanceof Entity}>
            <CodeBlock value={result} />
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
