import { memo } from 'react';
import { PlatformLink } from '../../../types';
import { PlatformIcon, ExternalLink } from '../../ui';
import './PlatformLinks.css';

interface PlatformLinksProps {
  links: PlatformLink[];
}

function PlatformLinks({ links }: PlatformLinksProps) {
  return (
    <div className="music-platforms">
      <p className="platforms-label">Find me on:</p>
      <div className="platform-links">
        {links.map((link) => (
          <ExternalLink
            key={link.id}
            href={link.url}
            className="platform-link"
            ariaLabel={link.platform}
          >
            <PlatformIcon platform={link.platform} />
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}

export default memo(PlatformLinks);
