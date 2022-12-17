import { FormEvent } from 'react';
import { Box, Button, Heading, Modal } from 'react-bulma-components';

import { Action } from '@siren-js/core';

import { useSirenClient } from '../../hooks/useSirenClient';
import ModalProps from '../util/ModalProps';
import InputField from './InputField';

type ActionModalProps = ModalProps & {
  action: Action;
};

export default function ActionModal({ action, active, onClose }: ActionModalProps) {
  const { submit } = useSirenClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(action);
  };

  return (
    <Modal show={active} onClose={onClose} closeOnBlur closeOnEsc>
      <Modal.Content>
        <Box>
          <Heading renderAs="h3">{action.title ?? action.name}</Heading>
          <form onSubmit={handleSubmit}>
            {action.fields?.map((field) => (
              <InputField key={field.name} id={field.name} field={field} />
            ))}
            <Button.Group>
              <Button type="submit" color="info">
                Submit
              </Button>
              <Button type="button" color="info" outlined onClick={onClose}>
                Cancel
              </Button>
            </Button.Group>
          </form>
        </Box>
      </Modal.Content>
    </Modal>
  );
}
