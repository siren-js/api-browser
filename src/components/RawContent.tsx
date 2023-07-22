import { createResource, Show } from 'solid-js';

import { ContentComponent } from '../types/ContentComponent';
import { fileExtension } from '../utils/mime';
import { CodeBlock } from './CodeBlock';

export const RawContent: ContentComponent = ({ state }) => {
  const { responseBody } = state;
  const [rawContent] = createResource(() => responseBody.text());
  const language = fileExtension(responseBody.type);
  return (
    <Show when={rawContent()} fallback={<>Parsing...</>} keyed>
      {(content) => (
        //  TODO only show text-based content
        <CodeBlock language={language}>{content}</CodeBlock>
      )}
    </Show>
  );
};
