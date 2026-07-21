import React from 'react';

// Horizontal (16:9) Instagram post embed preview — fills its parent aspect box.
// Crops the embed's author bar (top) and caption (bottom) to show the video band.
export default function HoverInsta({ src, title, className }) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-muted ${className || ''}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-x-0 -top-[12%] h-[124%] w-full"
        style={{ pointerEvents: 'none' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}