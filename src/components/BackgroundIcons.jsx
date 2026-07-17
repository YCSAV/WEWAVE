import React from 'react';
import { cn } from '@/lib/utils';
import { LUCIDE } from '@/components/edit/Editable';

/**
 * Faint, decorative lucide icons layered behind a section to add depth and
 * tell the brand story — Hawaii, small businesses, production, distribution.
 * Non-interactive; kept very low-opacity so it never competes with content.
 */
const PRESETS = {
  // Hawaii + small-business variety with a hint of production.
  hero: [
    { icon: 'Palmtree', className: 'left-[4%] top-[15%] h-28 w-28', float: 'bg-float' },
    { icon: 'Sun', className: 'left-[2%] top-[47%] h-16 w-16', float: 'bg-float-slow' },
    { icon: 'Waves', className: 'right-[2%] top-[9%] h-20 w-20' },
    { icon: 'Store', className: 'left-[13%] bottom-[15%] h-16 w-16' },
    { icon: 'Coffee', className: 'right-[44%] top-[7%] h-14 w-14', float: 'bg-float' },
    { icon: 'Utensils', className: 'left-[8%] bottom-[40%] h-14 w-14' },
    { icon: 'Users', className: 'right-[3%] top-[62%] h-20 w-20', float: 'bg-float' },
    { icon: 'Sparkles', className: 'left-[23%] top-[27%] h-12 w-12' },
    { icon: 'Heart', className: 'right-[40%] bottom-[7%] h-14 w-14', float: 'bg-float-slow' },
  ],
  // Production + distribution + optimization (camera appears once here).
  services: [
    { icon: 'Clapperboard', className: 'left-[3%] top-[11%] h-28 w-28', float: 'bg-float-slow' },
    { icon: 'Camera', className: 'left-[5%] top-[45%] h-16 w-16' },
    { icon: 'Share2', className: 'right-[4%] top-[26%] h-24 w-24', float: 'bg-float' },
    { icon: 'Megaphone', className: 'right-[3%] bottom-[15%] h-20 w-20', float: 'bg-float-slow' },
    { icon: 'BarChart3', className: 'left-[7%] bottom-[12%] h-20 w-20', float: 'bg-float' },
    { icon: 'Video', className: 'right-[6%] top-[52%] h-16 w-16' },
    { icon: 'Target', className: 'left-[18%] top-[5%] h-14 w-14' },
    { icon: 'TrendingUp', className: 'right-[16%] bottom-[7%] h-16 w-16', float: 'bg-float' },
    { icon: 'Wifi', className: 'left-[2%] bottom-[32%] h-14 w-14', float: 'bg-float-slow' },
    { icon: 'Eye', className: 'right-[11%] top-[9%] h-14 w-14' },
  ],
  // Film / storytelling (kept lighter on the tinted band).
  work: [
    { icon: 'Play', className: 'left-[3%] top-[20%] h-24 w-24', float: 'bg-float' },
    { icon: 'Music2', className: 'right-[6%] top-[16%] h-16 w-16' },
    { icon: 'Heart', className: 'left-[9%] bottom-[24%] h-16 w-16', float: 'bg-float-slow' },
    { icon: 'Star', className: 'right-[4%] bottom-[20%] h-16 w-16' },
    { icon: 'Sparkles', className: 'left-[23%] top-[8%] h-12 w-12', float: 'bg-float' },
    { icon: 'Mic', className: 'right-[19%] bottom-[12%] h-16 w-16' },
  ],
  // Community + business + growth.
  about: [
    { icon: 'Users', className: 'left-[3%] top-[22%] h-24 w-24', float: 'bg-float' },
    { icon: 'Store', className: 'right-[6%] top-[16%] h-16 w-16' },
    { icon: 'Sprout', className: 'left-[6%] bottom-[20%] h-20 w-20', float: 'bg-float-slow' },
    { icon: 'Award', className: 'right-[4%] bottom-[18%] h-16 w-16' },
    { icon: 'Heart', className: 'left-[16%] top-[10%] h-14 w-14', float: 'bg-float' },
    { icon: 'Briefcase', className: 'right-[16%] bottom-[10%] h-16 w-16', float: 'bg-float-slow' },
    { icon: 'Rocket', className: 'left-[2%] top-[54%] h-16 w-16' },
  ],
};

export default function BackgroundIcons({ preset, items, className }) {
  const list = items ?? (preset ? PRESETS[preset] : []);
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {list.map((it, i) => {
        const Ic = LUCIDE[it.icon];
        if (!Ic) return null;
        return (
          <Ic
            key={i}
            strokeWidth={1}
            className={cn('absolute text-primary/[0.05]', it.className, it.float)}
          />
        );
      })}
    </div>
  );
}