import { Component, createSignal, For, Match, Show, Switch } from 'solid-js';

import { appState } from '../stores/browser';
import { ErrorState, isNormal, NormalState } from '../types/AppState';
import { Message, MessageType } from './Message';
import { ParsedContent } from './ParsedContent';
import { PrettyContent } from './PrettyContent';
import { RawContent } from './RawContent';

enum Tab {
  Pretty = 'Pretty',
  Parsed = 'Parsed',
  Raw = 'Raw',
}

export const Main: Component = () => {
  const [tab, setTab] = createSignal(Tab.Pretty);

  const gettingStartedMessage = (
    <Message title="Getting Started">
      Enter a Siren API URL above to get started. Requests are made directly from your browser, meaning you can even
      ping &nbsp;<code>localhost</code>.
    </Message>
  );

  const ErrorMessage = (state: ErrorState) => (
    <Message title="Error" type={MessageType.Danger}>
      {(state as ErrorState).error.message}
    </Message>
  );

  return (
    <>
      <div class="tabs">
        <ul>
          <For each={Object.values(Tab)}>
            {(t) => (
              <li classList={{ 'is-active': t === tab() }} onClick={() => setTab(t)}>
                <a>{t}</a>
              </li>
            )}
          </For>
        </ul>
      </div>
      <Show when={appState()} fallback={gettingStartedMessage} keyed>
        {(state) => (
          <Show when={isNormal(state)} fallback={ErrorMessage(state as ErrorState)} keyed>
            <Switch>
              <Match when={tab() === Tab.Pretty}>
                <PrettyContent state={state as NormalState} />
              </Match>
              <Match when={tab() === Tab.Parsed}>
                <ParsedContent state={state as NormalState} />
              </Match>
              <Match when={tab() === Tab.Raw}>
                <RawContent state={state as NormalState} />
              </Match>
            </Switch>
          </Show>
        )}
      </Show>
    </>
  );
};
