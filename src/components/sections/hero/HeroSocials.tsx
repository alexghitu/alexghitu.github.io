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
          className="social-link-wrapper"
          aria-label="GitHub"
        >
          <div className="social-button">
            <GitHubIcon size={24} />
          </div>
          <span className="social-label">GitHub</span>
        </a>
      )}
      {linkedinLink && (
        <a
          href={linkedinLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link-wrapper"
          aria-label="LinkedIn"
        >
          <div className="social-button">
            <LinkedInIcon size={24} />
          </div>
          <span className="social-label">LinkedIn</span>
        </a>
      )}
    </div>
  );
}
