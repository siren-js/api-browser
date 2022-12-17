import { Box, Button, Form, Heading, Modal } from 'react-bulma-components';

import { useSettings } from '../hooks/useSettings';
import ModalProps from './util/ModalProps';

export default function SettingsModal({ active, onClose }: ModalProps) {
  const { titleCasePropertyNames, toggleTitleCasePropertyNames } = useSettings();
  return (
    <Modal show={active} onClose={onClose} closeOnBlur closeOnEsc>
      <Modal.Content>
        <Box>
          <Heading renderAs="h3">Settings</Heading>
          <Form.Field>
            <Form.Control>
              <Form.Checkbox checked={titleCasePropertyNames} onChange={() => toggleTitleCasePropertyNames()}>
                Convert property names to title case
              </Form.Checkbox>
            </Form.Control>
          </Form.Field>
          <Button color="info" outlined onClick={onClose}>
            Close
          </Button>
        </Box>
      </Modal.Content>
    </Modal>
  );
}
