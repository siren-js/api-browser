import { Component, Match, Show, Switch } from 'solid-js';

import { appState } from '../stores/browser';
import { selectedTab } from '../stores/tab';
import { ErrorState, isNormal, NormalState } from '../types/AppState';
import { TabName } from '../types/TabName';
import { Message, MessageType } from './Message';
import { ParsedContent } from './ParsedContent';
import { PrettyContent } from './PrettyContent';
import { RawContent } from './RawContent';
import { Tab } from './Tab';

export const Main: Component = () => {
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
    <Show when={appState()} fallback={gettingStartedMessage} keyed>
      {(state) => (
        <Show when={isNormal(state)} fallback={ErrorMessage(state as ErrorState)} keyed>
          <div class="tabs">
            <ul>
              <Tab name={TabName.Pretty} icon={'star'} />
              <Tab name={TabName.Parsed} icon={'code'} />
              <Tab name={TabName.Raw} icon={'stream'} />
            </ul>
          </div>
          <Switch>
            <Match when={selectedTab() === TabName.Pretty}>
              <PrettyContent state={state as NormalState} />
            </Match>
            <Match when={selectedTab() === TabName.Parsed}>
              <ParsedContent state={state as NormalState} />
            </Match>
            <Match when={selectedTab() === TabName.Raw}>
              <RawContent state={state as NormalState} />
            </Match>
          </Switch>
        </Show>
      )}
    </Show>
  );
};
