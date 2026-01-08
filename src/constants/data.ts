import { Project, Track, EducationItem, SocialLink, PlatformLink } from '../types';

export const projects: Project[] = [];

export const tracks: Track[] = [];

export const education: EducationItem[] = [];


export const socialLinks: SocialLink[] = [
  {
    id: 'social-1',
    name: 'GitHub',
    url: 'https://github.com/alexghitu',
    icon: 'github'
  },
  {
    id: 'social-2',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexandru-ghitu-108676226/',
    icon: 'linkedin'
  },
  {
    id: 'social-3',
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'email'
  }
];

export const platformLinks: PlatformLink[] = [
  {
    id: 'platform-1',
    platform: 'spotify',
    url: '#'
  },
  {
    id: 'platform-2',
    platform: 'soundcloud',
    url: '#'
  },
  {
    id: 'platform-3',
    platform: 'youtube',
    url: '#'
  }
];

export const navigationLinks = [
  { id: 'nav-1', label: 'Home', href: '#home' },
  { id: 'nav-2', label: 'About', href: '#about' },
  { id: 'nav-3', label: 'Projects', href: '#projects' },
  { id: 'nav-4', label: 'Music', href: '#music' },
];
