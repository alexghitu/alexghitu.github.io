import { memo } from 'react';
import { SectionHeader } from '../../ui';
import TrackCard from './TrackCard';
import PlatformLinks from './PlatformLinks';
import { tracks, platformLinks } from '../../../constants/data';
import './Music.css';

function Music() {
  return (
    <section className="music section" id="music">
      <div className="container">
        <SectionHeader
          title="Music Production"
        />

        <div className="music-grid">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>

        <PlatformLinks links={platformLinks} />
      </div>
    </section>
  );
}

export default memo(Music);
