import { Component, createSignal, Match, Show, Switch } from 'solid-js';

import { useBrowserContext } from '../stores/browser';
import { CodeBlock } from './CodeBlock';
import { EntityDisplay } from './EntityDisplay';
import { Message, MessageType } from './Message';

enum Tab {
  Pretty,
  Parsed,
  Raw,
}

export const Main: Component = () => {
  const { entity, error, rawContent } = useBrowserContext();
  const [tab, setTab] = createSignal(Tab.Pretty);

  const gettingStartedMessage = (
    <Message title="Getting Started">
      Enter a Siren API URL above to get started. Requests are made directly from your browser, meaning you can even hit
      localhost.
    </Message>
  );

  return (
    <>
      <div class="tabs">
        <ul>
          <li classList={{ 'is-active': tab() === Tab.Pretty }} onClick={() => setTab(Tab.Pretty)}>
            <a>Pretty</a>
          </li>
          <li classList={{ 'is-active': tab() === Tab.Parsed }} onClick={() => setTab(Tab.Parsed)}>
            <a>Parsed</a>
          </li>
          <li classList={{ 'is-active': tab() === Tab.Raw }} onClick={() => setTab(Tab.Raw)}>
            <a>Raw</a>
          </li>
        </ul>
      </div>
      <Switch>
        <Match when={tab() === Tab.Pretty}>
          <Switch fallback={gettingStartedMessage}>
            <Match when={error()}>
              <Message type={MessageType.Danger} title="Error">
                {error()!.message}
              </Message>
            </Match>
            <Match when={entity()}>
              <EntityDisplay entity={() => entity()!} />
            </Match>
          </Switch>
        </Match>
        <Match when={tab() === Tab.Parsed}>
          <Switch fallback={gettingStartedMessage}>
            <Match when={error()}>
              <Message type={MessageType.Danger} title="Error">
                {error()!.message}
              </Message>
            </Match>
            <Match when={entity()} keyed>
              {(entity) => <CodeBlock value={entity} />}
            </Match>
          </Switch>
        </Match>
        <Match when={tab() === Tab.Raw}>
          <Show when={rawContent()} fallback={gettingStartedMessage} keyed>
            {(content) => <CodeBlock>{content}</CodeBlock>}
          </Show>
        </Match>
      </Switch>
    </>
  );
};
