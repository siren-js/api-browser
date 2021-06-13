import Navbar from './Navbar';

export default function Hero() {
  return (
    <section className="hero is-info">
      <HeroHead />
      <HeroBody />
    </section>
  );
}

const HeroHead = () => (
  <div className="hero-head">
    <Navbar />
  </div>
);

const HeroBody = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">Siren API Browser</p>
      <p className="subtitle">with Siren.js</p>
    </div>
  </div>
);
