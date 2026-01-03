import { memo } from 'react';
import { SectionHeader } from '../../ui';
import EducationCard from './EducationCard';
import { education } from '../../../constants/data';
import './Education.css';

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <SectionHeader
          title="Education"
        />

        <div className="education-content">
          <div className="education-timeline">
            {education.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Education);
