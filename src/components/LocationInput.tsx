import React from 'react';
import { Button, Form, Icon } from 'react-bulma-components';

import { useSirenClient } from '../hooks/useSirenClient';

export default function LocationInput() {
  const { fetch, loading, location, setLocation } = useSirenClient();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(location);
  };

  return (
    <form className="pb-5" onSubmit={handleSubmit}>
      <Form.Field className="has-addons">
        {/* <Form.Control>
          <Button disabled>
            <Icon>
              <i className="fas fa-arrow-left" />
            </Icon>
          </Button>
        </Form.Control>
        <Form.Control>
          <Button disabled>
            <Icon>
              <i className="fas fa-arrow-right" />
            </Icon>
          </Button>
        </Form.Control> */}
        <Form.Control className="is-expanded">
          <Form.Input
            required
            name="location"
            type="url"
            placeholder="Enter Siren API URL"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Control>
        <Form.Control>
          <Button color="info" loading={loading}>
            <Icon>
              <i className="fas fa-search" />
            </Icon>
          </Button>
        </Form.Control>
      </Form.Field>
    </form>
  );
}
