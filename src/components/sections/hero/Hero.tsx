import HeroGreeting from './HeroGreeting';
import HeroName from './HeroName';
import HeroBio from './HeroBio';
import ScrollIndicator from './ScrollIndicator';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content fade-in-up">
          <HeroGreeting greeting="Hello, I'm" />
          <HeroName name="Alexandru Ghitu" />
          <HeroBio bio="Computer Science Student at Georgia Institute of Technology" />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
