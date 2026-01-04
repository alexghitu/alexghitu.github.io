import HeroGreeting from './HeroGreeting';
import HeroName from './HeroName';
import HeroBio from './HeroBio';
import HeroSocials from './HeroSocials';
import ScrollIndicator from './ScrollIndicator';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content fade-in-up">
          <HeroGreeting greeting="Hello, I'm" />
          <HeroName name="Alexandru Ghitu" />
          <HeroBio bio="Machine Learning Student at Georgia Tech" />
          <HeroSocials />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
