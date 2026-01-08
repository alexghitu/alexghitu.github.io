import HeroGreeting from './HeroGreeting';
import HeroName from './HeroName';
import HeroBio from './HeroBio';
import HeroSocials from './HeroSocials';
import HeroButton from './HeroButton';
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
          <HeroButton text="Learn More About Me" href="#about" />
        </div>
      </div>
    </section>
  );
}
