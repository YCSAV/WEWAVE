import React, { useState } from 'react';

export default function HoverVideo({ videoId, title, className }) {
  const [playing, setPlaying] = useState(false);
  const embed = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`;

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className || ''}`}
      onMouseEnter={() => setPlaying(true)}
      onMouseLeave={() => setPlaying(false)}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {playing && (
        <iframe
          src={embed}
          title={title}
          className="absolute inset-0 h-full w-full"
          style={{ pointerEvents: 'none' }}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      )}
    </div>
  );
}