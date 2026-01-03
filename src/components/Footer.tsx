import { useMemo } from 'react';
import { Icon } from './ui';
import { socialLinks, navigationLinks } from '../constants/data';
import './Footer.css';

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link) => {
              const isEmail = link.name === 'Email';
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="social-link"
                  target={!isEmail ? '_blank' : undefined}
                  rel={!isEmail ? 'noopener noreferrer' : undefined}
                  aria-label={link.name}
                  title={link.name}
                >
                  <Icon type={link.icon} size={20} />
                </a>
              );
            })}
          </div>

          <div className="footer-divider"></div>

          <div className="footer-info">
            <p className="footer-text">
              Built with React & TypeScript
            </p>
            <p className="footer-copyright">
              © {currentYear} Alexandru Ghitu. All rights reserved.
            </p>
          </div>

          <div className="footer-links">
            {navigationLinks.map((link, index) => (
              <>
                <a key={link.id} href={link.href} className="footer-link">
                  {link.label}
                </a>
                {index < navigationLinks.length - 1 && (
                  <span key={`dot-${link.id}`} className="footer-dot">•</span>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
