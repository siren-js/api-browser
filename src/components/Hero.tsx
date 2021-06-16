export default function Hero() {
  return (
    <section className="hero is-info">
      <HeroBody />
    </section>
  );
}

const HeroBody = () => (
  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title">Siren API Browser</p>
      <p className="subtitle">with Siren.js</p>
    </div>
  </div>
);
