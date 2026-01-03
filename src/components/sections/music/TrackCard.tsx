import { memo } from 'react';
import { Track } from '../../../types';
import { Card, Button, PlatformIcon } from '../../ui';
import './TrackCard.css';

interface TrackCardProps {
  track: Track;
}

function TrackCard({ track }: TrackCardProps) {
  return (
    <Card className="track-card">
      <div className="track-platform-icon">
        <PlatformIcon platform={track.platform} />
      </div>
      <h3 className="track-title">{track.title}</h3>
      {track.releaseDate && (
        <div className="track-date">{track.releaseDate}</div>
      )}
      <p className="track-description">{track.description}</p>
      <Button
        variant="secondary"
        href={track.url}
        target="_blank"
        rel="noopener noreferrer"
        className="track-link"
      >
        Listen Now
      </Button>
    </Card>
  );
}

export default memo(TrackCard);
