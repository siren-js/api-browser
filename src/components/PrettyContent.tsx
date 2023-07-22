import { withEntity } from '../utils/with-entity';
import { EntityDisplay } from './entity/EntityDisplay';

export const PrettyContent = withEntity((entity) => <EntityDisplay entity={() => entity} />);
