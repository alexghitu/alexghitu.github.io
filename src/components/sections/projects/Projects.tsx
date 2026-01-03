import { memo } from 'react';
import { SectionHeader } from '../../ui';
import ProjectCard from './ProjectCard';
import { projects } from '../../../constants/data';
import './Projects.css';

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <SectionHeader
          title="Machine Learning Projects"
        />

        <div className="grid grid-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
