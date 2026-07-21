import React from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import HoverVideo from '@/components/HoverVideo';
import HoverInsta from '@/components/HoverInsta';
import { EditableText, Movable } from '@/components/edit/Editable';

export default function WorkCard({ work, index, ytStats }) {
  const w = work;
  return (
    <Movable id={`home.work.${index}`}>
      <a href={w.href} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-3xl border border-border">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {w.type === 'ig' ? <HoverInsta src={w.src} title={w.title} /> : <HoverVideo videoId={w.videoId} title={w.title} />}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
          <span className="pointer-events-none absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-background/90 text-primary backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 text-background">
          <EditableText id={`home.work.${index}.tag`} as="span" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80">{w.tag}</EditableText>
          <h3 className="mt-1 font-heading text-2xl font-bold"><EditableText id={`home.work.${index}.t`} as="span">{w.title}</EditableText></h3>
          <EditableText id={`home.work.${index}.d`} as="p" className="mt-1 max-w-md text-sm text-background/85" block>{w.desc}</EditableText>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">{w.type === 'ig' ? 'Watch on Instagram' : 'Watch on YouTube'} <ArrowUpRight className="h-4 w-4" /></span>
            {ytStats[w.videoId]?.viewCount != null && (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-background/70">
                <Eye className="h-3.5 w-3.5" />
                {ytStats[w.videoId].viewCount.toLocaleString()} views
              </span>
            )}
          </div>
        </div>
      </a>
    </Movable>
  );
}