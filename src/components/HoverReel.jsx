import React from 'react';

export default function HoverReel({ src, title, className }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-muted ${className || ''}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-x-0 -top-[8%] h-[108%] w-full"
        style={{ pointerEvents: 'none' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32px] bg-white" />
    </div>
  );
}