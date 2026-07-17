import React from 'react';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';
import { DEVICES_MARKUP } from '@/components/BrandIcons';

// Four steps around the flywheel, evenly spaced (90° apart), clockwise from top.
const NODES = [
  { n: '01', icon: 'Store',        title: 'Your Business',      caption: 'Products, services & experience', x: 50, y: 16 },
  { n: '02', icon: 'Clapperboard', title: 'Premium Content',    caption: 'Short-form & long-form production', x: 84, y: 50 },
  { n: '03', icon: 'Megaphone',    title: 'Marketing & Growth',  caption: 'Attention, awareness & trust',     x: 50, y: 84 },
  { n: '04', icon: 'TrendingUp',   title: 'Revenue & Growth',   caption: 'More traffic & sales',             x: 16, y: 50 },
];

// Arrowheads at the midpoints between consecutive nodes — each rotated to point
// along the clockwise tangent so the wheel reads as turning.
const ARROWS = [
  { x: 74, y: 26, r: 45 },
  { x: 74, y: 74, r: 135 },
  { x: 26, y: 74, r: 225 },
  { x: 26, y: 26, r: 315 },
];

function NodeCard({ node, idx }) {
  return (
    <Movable
      id={`ge.node.${idx}`}
      className="absolute w-[154px]"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="flex h-[156px] w-[154px] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card/95 px-3 py-3.5 text-center shadow-[0_12px_32px_-14px_rgba(0,0,0,0.25)] backdrop-blur-sm">
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">Step {node.n}</span>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
          <EditableIcon id={`ge.node.${idx}.icon`} as={LUCIDE[node.icon]} iconClass="h-5 w-5" />
        </span>
        <EditableText id={`ge.node.${idx}.title`} as="strong" className="font-heading text-xs font-bold leading-tight text-primary" block>
          {node.title}
        </EditableText>
        <EditableText id={`ge.node.${idx}.cap`} as="span" className="text-[11px] leading-snug text-muted-foreground" block>
          {node.caption}
        </EditableText>
      </div>
    </Movable>
  );
}

export default function GrowthEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[500px]">
      {/* Circular flywheel (sm+) */}
      <div className="relative hidden aspect-square w-full sm:block">
        {/* Soft center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-2xl" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {/* Faint static tracks */}
          <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(var(--border))" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" opacity="0.6" />

          {/* Moving wheel: dashed ring + clockwise arrowheads, slowly rotating */}
          <g className="flywheel-spin">
            <circle cx="50" cy="50" r="34" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.6" strokeDasharray="1.6 4" opacity="0.8" />
            <g fill="hsl(var(--accent))">
              {ARROWS.map((a, i) => (
                <path key={i} d="M-2,-2.6 L2.2,0 L-2,2.6 Z" transform={`translate(${a.x},${a.y}) rotate(${a.r})`} />
              ))}
            </g>
          </g>
        </svg>

        {/* Center hub */}
        <Movable id="ge.hub" className="absolute left-1/2 top-1/2 w-[156px] -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-[156px] w-[156px] flex-col items-center justify-center gap-2 rounded-full border border-accent/40 bg-card px-4 py-5 text-center shadow-[0_14px_38px_-14px_rgba(0,0,0,0.3)]">
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