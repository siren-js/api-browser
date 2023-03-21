import './CodeBlock.css';

import hljs from 'highlight.js';
import { createEffect, ParentComponent } from 'solid-js';

export const CodeBlock: ParentComponent = ({ children }) => {
  createEffect(() => {
    hljs.highlightAll();
  });

  return (
    <pre class="code-block">
      <code class="language-json">{children}</code>
    </pre>
  );
};
