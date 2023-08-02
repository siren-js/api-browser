import { createResource, JSX, Match, Switch } from 'solid-js';

import { Entity, parse } from '@siren-js/client';

import { Message, MessageType } from '../components/Message';
import { settings } from '../stores/settings';
import { ContentComponent } from '../types/ContentComponent';

const jsonMediaTypeRegExp = /^application\/(.*\+)?json(;|$)/i;
const sirenMediaTypeRegExp = /^application\/vnd\.siren\+json(;|$)/i;

function isParsable(contentType: string) {
  const regex = settings.relaxed ? jsonMediaTypeRegExp : sirenMediaTypeRegExp;
  return regex.test(contentType);
}

export const createSirenResource = (content: Blob) =>
  createResource(async () => {
    if (!isParsable(content.type)) {
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
