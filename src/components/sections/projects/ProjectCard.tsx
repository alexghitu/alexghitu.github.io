import { memo } from 'react';
import { Project } from '../../../types';
import { Card, ExternalLink, GitHubIcon, ExternalLinkIcon } from '../../ui';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={`${project.id}-tech-${i}`} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <ExternalLink href={project.github} className="project-link">
            <GitHubIcon size={20} />
            View Code
          </ExternalLink>
        )}
        {project.link && (
          <ExternalLink href={project.link} className="project-link">
            <ExternalLinkIcon size={20} />
            Live Demo
          </ExternalLink>
        )}
      </div>
    </Card>
  );
}

export default memo(ProjectCard);
