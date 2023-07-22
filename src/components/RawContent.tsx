import { createResource, Show } from 'solid-js';

import { ContentComponent } from '../types/ContentComponent';
import { CodeBlock } from './CodeBlock';

export const RawContent: ContentComponent = ({ state }) => {
  const { responseBody } = state;
  const [rawContent] = createResource(() => responseBody.text());
  return (
    <Show when={!rawContent.loading} fallback={<>Parsing...</>}>
      {/* TODO only show text-based content */}
      <CodeBlock>{rawContent()}</CodeBlock>
    </Show>
  );
};
