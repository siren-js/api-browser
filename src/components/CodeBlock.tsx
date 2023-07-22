import './CodeBlock.css';

import Prism from 'prismjs';
import { Component, createEffect } from 'solid-js';

export const CodeBlock: Component<{ language: string; children: string }> = ({ language, children }) => {
  createEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre class="code-block">
      <code class={`language-${language}`}>{children}</code>
    </pre>
  );
};
