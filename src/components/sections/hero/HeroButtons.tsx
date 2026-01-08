import HeroButton from './HeroButton';
import './HeroButtons.css';

export default function HeroButtons() {
  return (
    <div className="hero-buttons">
      <HeroButton text="Learn More About Me" href="#about" />
      <HeroButton text="Projects" href="#projects" />
      <HeroButton text="Music Production" href="#music" />
    </div>
  );
}
