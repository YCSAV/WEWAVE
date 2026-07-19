import React, { useState } from 'react';

export default function HoverReel({ src, title, className }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-primary to-primary/70 ${className || ''}`}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
    >
      {playing && (
        <iframe
          src={src}
          title={title}
          className="absolute inset-x-0 -top-[9%] h-[122%] w-full"
          style={{ pointerEvents: 'none' }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          loading="lazy"
        />
      )}
    </div>
  );
}