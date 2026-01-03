import './HeroName.css';

interface HeroNameProps {
  name: string;
}

export default function HeroName({ name }: HeroNameProps) {
  return <h1 className="hero-name">{name}</h1>;
}
