// src/plugins/youtube-custom-field/admin/src/components/ThumbnailDisplay.tsx
import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

interface ThumbnailDisplayProps {
  url: string | undefined | null;
}

const ThumbnailDisplay: React.FC<ThumbnailDisplayProps> = ({ url }) => {
  const videoId = url ? new URL(url).searchParams.get('v') : null;
  const thumbnailUrl = videoId ? `http://i.ytimg.com/vi/${videoId}/0.jpg` : null; // Using i.ytimg.com for thumbnails

  return (
    <div>
      {thumbnailUrl && (
        <Thumbnail
          src={thumbnailUrl}
          alt="YouTube Video Thumbnail"
        />
      )}
    </div>
  );
};

export default ThumbnailDisplay;