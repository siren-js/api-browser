import { createResource, Match, Switch } from 'solid-js';

import { ContentComponent } from '../types/ContentComponent';
import { fileExtension } from '../utils/mime';
import { CodeBlock } from './CodeBlock';
import { Message, MessageType } from './Message';

const textualTypes = [/^text\//, /^application\/(.*\+)?(html|json|xml)/];

const isTextual = (type: string) => textualTypes.some((regex) => regex.test(type));

export const RawContent: ContentComponent = ({ state }) => {
  const { responseBody } = state;
  const { type } = responseBody;
  const language = fileExtension(type);
  const [rawContent] = createResource(async () => {
    if (isTextual(type)) return responseBody.text();
    else throw new Error(`Unable to display "${type}"`);
  });
  return (
    <Switch>
      <Match when={rawContent.error}>
        <Message type={MessageType.Warning} title="Cannot Display Content">
          {rawContent.error.message}
        </Message>
      </Match>
      <Match when={rawContent()} keyed>
        {(content) => <CodeBlock language={language}>{content}</CodeBlock>}
      </Match>
    </Switch>
  );
};
