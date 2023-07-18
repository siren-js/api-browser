import { ContentComponent } from '../types/ContentComponent';
import { CodeBlock } from './CodeBlock';

export const RawContent: ContentComponent = ({ state }) => {
  const { rawContent } = state;
  return (
    <>
      {/* TODO only show text-based content */}
      <CodeBlock>{rawContent}</CodeBlock>
    </>
  );
};
