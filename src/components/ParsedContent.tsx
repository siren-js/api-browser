import { withEntity } from '../utils/with-entity';
import { CodeBlock } from './CodeBlock';

export const ParsedContent = withEntity((entity) => <CodeBlock value={entity} />);
