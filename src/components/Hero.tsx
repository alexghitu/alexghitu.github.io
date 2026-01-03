import { Button } from './ui';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">Alexandru Ghitu</h1>
          <p className="hero-bio">
            Machine learning student exploring the intersection of artificial intelligence and creativity.
            <br />
            Building intelligent systems by day, crafting music by night.
          </p>
          <div className="hero-tags">
            <span className="tag">Machine Learning</span>
            <span className="tag">Music Production</span>
          </div>
          <div className="hero-cta">
            <Button href="#projects">View Projects</Button>
            <Button href="#education" variant="secondary">Education</Button>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
