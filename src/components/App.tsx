import { Container, Heading, Hero, Section } from 'react-bulma-components';

import LocationInput from './LocationInput';
import MainPanel from './MainPanel';
import Navbar from './Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero color="info">
        <Hero.Body>
          <Container textAlign="center">
            <Heading>Siren API Browser</Heading>
            <Heading subtitle>with Siren.js</Heading>
          </Container>
        </Hero.Body>
      </Hero>
      <Section>
        <Container>
          <LocationInput />
          <MainPanel />
        </Container>
      </Section>
    </>
  );
}
