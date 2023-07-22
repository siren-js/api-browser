import { CodeBlock } from './CodeBlock';
import { withEntity } from './utils/with-entity';

export const ParsedContent = withEntity((entity) => <CodeBlock value={entity} />);
