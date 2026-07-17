import React from 'react';
import { cn } from '@/lib/utils';
import { LUCIDE } from '@/components/edit/Editable';

/**
 * Deliberate corner-cluster collages — small, intentionally arranged groups of
 * faint icons placed in a section's corners to frame the content and reinforce
 * the brand story (Hawaii, small business, production, distribution, growth).
 * Static and low-opacity so they elevate the layout without competing with it.
 */
const ANCHORS = {
  tl: 'left-0 top-0',
  tr: 'right-0 top-0',
  bl: 'left-0 bottom-0',
  br: 'right-0 bottom-0',
};

const PRESETS = {
  hero: [
    { anchor: 'bl', items: [
      { icon: 'Palmtree', className: 'bottom-2 left-2 h-20 w-20' },
      { icon: 'Sun', className: 'bottom-16 left-20 h-10 w-10' },
      { icon: 'Waves', className: 'bottom-3 left-24 h-8 w-8' },
    ] },
  ],
  services: [
    { anchor: 'tl', items: [
      { icon: 'Clapperboard', className: 'top-3 left-3 h-20 w-20' },
      { icon: 'Camera', className: 'top-16 left-20 h-12 w-12' },
      { icon: 'Play', className: 'top-6 left-24 h-8 w-8' },
    ] },
    { anchor: 'br', items: [
      { icon: 'Share2', className: 'bottom-3 right-3 h-20 w-20' },
      { icon: 'Megaphone', className: 'bottom-16 right-20 h-12 w-12' },
      { icon: 'BarChart3', className: 'bottom-6 right-24 h-8 w-8' },
    ] },
  ],
  work: [
    { anchor: 'tr', items: [
      { icon: 'Play', className: 'top-3 right-3 h-20 w-20' },
      { icon: 'Music2', className: 'top-16 right-20 h-12 w-12' },
    ] },
    { anchor: 'bl', items: [
      { icon: 'Heart', className: 'bottom-3 left-3 h-16 w-16' },
      { icon: 'Star', className: 'bottom-14 left-16 h-10 w-10' },
    ] },
  ],
  about: [
    { anchor: 'tr', items: [
      { icon: 'Users', className: 'top-3 right-3 h-20 w-20' },
      { icon: 'Store', className: 'top-16 right-20 h-12 w-12' },
    ] },
    { anchor: 'bl', items: [
      { icon: 'Sprout', className: 'bottom-3 left-3 h-16 w-16' },
      { icon: 'Award', className: 'bottom-14 left-16 h-10 w-10' },
    ] },
  ],
};

function Cluster({ anchor, items }) {
  return (
    <div className={cn('pointer-events-none absolute h-52 w-52', ANCHORS[anchor])} aria-hidden="true">
      {items.map((it, i) => {
        const Ic = LUCIDE[it.icon];
        if (!Ic) return null;
        return (
          <Ic key={i} strokeWidth={1} className={cn('absolute text-primary/[0.05]', it.className)} />
        );
      })}
    </div>
  );
}

export default function BackgroundIcons({ preset, items, className }) {
  const clusters = items ?? (preset ? PRESETS[preset] : []);
  if (!clusters.length) return null;
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {clusters.map((c, i) => <Cluster key={i} anchor={c.anchor} items={c.items} />)}
    </div>
  );
}