import { GitHubIcon, LinkedInIcon } from '../../ui/Icon';
import { socialLinks } from '../../../constants/data';
import './HeroSocials.css';

export default function HeroSocials() {
  const githubLink = socialLinks.find(link => link.icon === 'github');
  const linkedinLink = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <div className="hero-socials">
      {githubLink && (
        <div className="social-link-wrapper">
          <a
            href={githubLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="GitHub"
          >
            <GitHubIcon size={24} />
          </a>
          <span className="social-label">GitHub</span>
        </div>
      )}
      {linkedinLink && (
        <div className="social-link-wrapper">
          <a
            href={linkedinLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={24} />
          </a>
          <span className="social-label">LinkedIn</span>
        </div>
      )}
    </div>
  );
}
