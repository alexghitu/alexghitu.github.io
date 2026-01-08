import './HeroButton.css';

interface HeroButtonProps {
  text: string;
  href: string;
}

export default function HeroButton({ text, href }: HeroButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} className="hero-button" onClick={handleClick}>
      {text}
    </a>
  );
}
