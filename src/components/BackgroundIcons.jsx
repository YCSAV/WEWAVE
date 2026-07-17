import React from 'react';
import { cn } from '@/lib/utils';
import { LUCIDE } from '@/components/edit/Editable';

/**
 * Faint, decorative lucide icons layered behind a section to add depth and
 * tell the brand story (cameras, screens, crowds, distribution). Non-interactive.
 */
export default function BackgroundIcons({ items, className }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {items.map((it, i) => {
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