import './CodeBlock.css';

import { createEffect, ParentComponent } from 'solid-js';
import Prism from 'prismjs';

export const CodeBlock: ParentComponent<{ value?: unknown }> = ({ children, value }) => {
  createEffect(() => {
    Prism.highlightAll();
  });

  const code = children ?? JSON.stringify(value, null, 2);

  return (
    <pre class="code-block">
      <code class="language-json">{code}</code>
    </pre>
  );
};
