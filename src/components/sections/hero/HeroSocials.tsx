import { GitHubIcon, LinkedInIcon } from '../../ui/Icon';
import { socialLinks } from '../../../constants/data';
import './HeroSocials.css';

export default function HeroSocials() {
  const githubLink = socialLinks.find(link => link.icon === 'github');
  const linkedinLink = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <div className="hero-socials">
      {githubLink && (
        <a
          href={githubLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          aria-label="GitHub"
        >
          <GitHubIcon size={24} />
        </a>
      )}
      {linkedinLink && (
        <a
          href={linkedinLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={24} />
        </a>
      )}
    </div>
  );
}
