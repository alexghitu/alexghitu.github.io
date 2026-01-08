import { memo } from 'react';
import { SectionHeader } from '../../ui';
import AboutContent from './AboutContent';
import './About.css';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <SectionHeader title="About Me" />
        <AboutContent />
      </div>
    </section>
  );
}

export default memo(About);
