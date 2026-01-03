import { EducationItem } from '../../../types';
import { Card } from '../../ui';
import './EducationCard.css';

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps) {
  return (
    <Card className="education-item">
      <div className="education-degree">{item.degree}</div>
      <div className="education-institution">{item.institution}</div>
      <div className="education-period">{item.period}</div>
      <p className="education-description">{item.description}</p>
    </Card>
  );
}
