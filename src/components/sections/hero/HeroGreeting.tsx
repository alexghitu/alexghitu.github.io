import './HeroGreeting.css';

interface HeroGreetingProps {
  greeting: string;
}

export default function HeroGreeting({ greeting }: HeroGreetingProps) {
  return <div className="hero-greeting">{greeting}</div>;
}
