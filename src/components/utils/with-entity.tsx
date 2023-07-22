import { createResource, JSX, Match, Switch } from 'solid-js';

import { Entity, parse } from '@siren-js/client';

import { ContentComponent } from '../../types/ContentComponent';
import { Message, MessageType } from '../Message';

const sirenMediaTypeRegExp = /^application\/vnd\.siren\+json(;|$)/i;

export const createSirenResource = (content: Blob) =>
  createResource(async () => {
    if (!sirenMediaTypeRegExp.test(content.type)) {
      throw new Error(`Unable to parse "${content.type}" as Siren`);
    }
    const text = await content.text();
    return parse(text);
  });

export const withEntity =
  (childFn: (entity: Entity) => JSX.Element): ContentComponent =>
  ({ state }) => {
    const { responseBody } = state;
    const [result] = createSirenResource(responseBody);
    return (
      <Switch>
        <Match when={result.error}>
          <Message type={MessageType.Warning} title="Cannot Parse Content">
            {(result.error as Error).message}
          </Message>
        </Match>
        <Match when={result()} keyed>
          {childFn}
        </Match>
      </Switch>
    );
  };
