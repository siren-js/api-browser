import './CodeBlock.css';

import hljs from 'highlight.js';
import { createEffect, ParentComponent } from 'solid-js';

export const CodeBlock: ParentComponent<{ value?: unknown }> = ({ children, value }) => {
  createEffect(() => {
    hljs.highlightAll();
  });

  const code = children ?? JSON.stringify(value, null, 2);

  return (
    <pre class="code-block">
      <code class="language-json">{code}</code>
    </pre>
  );
};
