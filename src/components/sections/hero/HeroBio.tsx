import './HeroBio.css';

interface HeroBioProps {
  bio: string;
}

export default function HeroBio({ bio }: HeroBioProps) {
  return <p className="hero-bio">{bio}</p>;
}
