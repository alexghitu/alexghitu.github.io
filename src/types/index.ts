export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  platform: 'spotify' | 'soundcloud' | 'youtube';
  url: string;
  releaseDate?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
}

export interface PlatformLink {
  id: string;
  platform: 'spotify' | 'soundcloud' | 'youtube';
  url: string;
}

export type Theme = 'light' | 'dark';

export type Platform = 'spotify' | 'soundcloud' | 'youtube';
