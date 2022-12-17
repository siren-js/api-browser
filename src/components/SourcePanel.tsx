import hljs from 'highlight.js';
import { useEffect } from 'react';

import styles from './SourcePanel.module.css';

interface SourcePanelProps<T = any> {
  value: T;
}

export default function SourcePanel({ value }: SourcePanelProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, [value]);

  return (
    <pre className={styles['source-panel']}>
      <code className="language-json">{JSON.stringify(value, null, 2)}</code>
    </pre>
  );
}
