import React from 'react';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';
import { DEVICES_MARKUP } from '@/components/BrandIcons';

// Five steps around the flywheel, evenly spaced (72° apart), clockwise from top.
const NODES = [
  { n: '01', icon: 'Store',        title: 'Your Business',             caption: 'Products, services & experience', x: 50, y: 16 },
  { n: '02', icon: 'Clapperboard', title: 'Premium Content',           caption: 'Short-form & long-form production', x: 82, y: 40 },
  { n: '03', icon: 'Megaphone',    title: 'Marketing & Growth',         caption: 'Attention, awareness & trust',     x: 70, y: 78 },
  { n: '04', icon: 'BarChart3',    title: 'Advanced Analytics',        caption: 'Targeted distribution',           x: 30, y: 78 },
  { n: '05', icon: 'TrendingUp',   title: 'Revenue & Growth',          caption: 'More traffic & sales',            x: 18, y: 40 },
];

function NodeCard({ node, idx }) {
  return (
    <Movable
      id={`ge.node.${idx}`}
      className="absolute w-[140px]"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="flex h-[150px] w-[140px] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card px-3 py-3 text-center shadow-[0_8px_24px_-12px_rgba(0,0,0,0.18)]">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Step {node.n}</span>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
          <EditableIcon id={`ge.node.${idx}.icon`} as={LUCIDE[node.icon]} iconClass="h-5 w-5" />
        </span>
        <EditableText id={`ge.node.${idx}.title`} as="strong" className="line-clamp-2 font-heading text-[13px] font-bold leading-tight text-primary" block>
          {node.title}
        </EditableText>
        <EditableText id={`ge.node.${idx}.cap`} as="span" className="line-clamp-2 text-[11px] leading-snug text-muted-foreground" block>
          {node.caption}
        </EditableText>
      </div>
    </Movable>
  );
}

export default function GrowthEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Circular diagram (sm+) */}
      <div className="relative hidden aspect-square w-full sm:block">
        {/* Soft center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <marker id="ge-arrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
              <path d="M0,0 L0,4 L4,2 Z" fill="hsl(var(--accent))" />
            </marker>
          </defs>
          <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(var(--border))" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.35" strokeDasharray="0.4 3.4" opacity="0.5" />
          <path d="M50,16 A34,34 0 0 1 82,40" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.7" />
          <path d="M82,40 A34,34 0 0 1 70,78" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.7" />
          <path d="M70,78 A34,34 0 0 1 30,78" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.7" />
          <path d="M30,78 A34,34 0 0 1 18,40" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.7" />
          <path d="M18,40 A34,34 0 0 1 50,16" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.7" />
        </svg>

        {/* Center hub */}
        <Movable id="ge.hub" className="absolute left-1/2 top-1/2 w-[128px] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-accent/50 bg-card px-4 py-5 text-center shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <EditableIcon id="ge.hub.icon" markup={DEVICES_MARKUP} iconClass="h-7 w-7" />
            </span>
            <EditableText id="ge.hub.title" as="strong" className="font-heading text-[13px] font-bold leading-tight text-primary" block>
              Your Integrated<br />Growth Engine
            </EditableText>
          </div>
        </Movable>

        {NODES.map((n, i) => <NodeCard key={n.n} node={n} idx={i} />)}
      </div>

      {/* Mobile linear flow */}
      <div className="grid gap-3 sm:hidden">
        {[
          { icon: 'Devices', title: 'Your Integrated Growth Engine', caption: 'Production + distribution + optimization, working together', markup: DEVICES_MARKUP },
          ...NODES.map(n => ({ ...n, markup: null })),
        ].map((n, i) => (
          <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              {n.markup
                ? <EditableIcon id={`ge.m.${i}.icon`} markup={n.markup} iconClass="h-6 w-6" />
                : <EditableIcon id={`ge.m.${i}.icon`} as={LUCIDE[n.icon]} iconClass="h-5 w-5" />}
            </span>
            <div className="min-w-0">
              <EditableText id={`ge.m.${i}.title`} as="strong" className="block font-heading text-sm font-bold text-primary" block>{n.title}</EditableText>
              <EditableText id={`ge.m.${i}.cap`} as="span" className="text-xs text-muted-foreground" block>{n.caption}</EditableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}