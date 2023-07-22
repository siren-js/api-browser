import { withEntity } from '../utils/with-entity';
import { CodeBlock } from './CodeBlock';

export const ParsedContent = withEntity((entity) => (
  <CodeBlock language="json">{JSON.stringify(entity, null, 2)}</CodeBlock>
));
