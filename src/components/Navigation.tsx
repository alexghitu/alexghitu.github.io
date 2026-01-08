import { useState, useEffect, memo, useCallback } from 'react';
import { navigationLinks } from '../constants/data';
import { SCROLL_THRESHOLD } from '../utils/constants';
import { classNames } from '../utils/classNames';
import ThemeToggle from './ThemeToggle';
import './Navigation.css';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={classNames('navigation', isScrolled && 'scrolled')}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Alexandru Ghitu
        </a>
        <div className="nav-links">
          {navigationLinks.slice(0, 3).map((link) => (
            <a key={link.id} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default memo(Navigation);
