import { EntityDisplay } from './EntityDisplay';
import { withEntity } from './utils/with-entity';

export const PrettyContent = withEntity((entity) => <EntityDisplay entity={() => entity} />);
