import React from 'react';

const VideoLoop = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        onContextMenu={(e) => e.preventDefault()}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      >
        <source
          src="https://cdn.pixabay.com/video/2022/10/31/137246-766338223_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoLoop;
