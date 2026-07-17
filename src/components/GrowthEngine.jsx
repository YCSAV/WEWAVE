import React from 'react';
import { useEdit } from '@/components/edit/EditProvider';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';
import { DEVICES_MARKUP } from '@/components/BrandIcons';

// Five steps around the flywheel, evenly spaced (72° apart), clockwise from top.
// 01 Your Business → 02 Premium Content → 03 Marketing + Brand Growth
// → 04 Advanced Analytics (Targeted distribution) → 05 Revenue + Customer Growth
const NODES = [
  { n: '01', icon: 'Store',          title: 'Your Business',               caption: 'Products, services, people, and experience',      x: 50, y: 12 },
  { n: '02', icon: 'Clapperboard',   title: 'Premium Content',             caption: 'Short-form and long-form production',           x: 86, y: 38 },
  { n: '03', icon: 'Megaphone',      title: 'Marketing + Brand Growth',    caption: 'Attention, awareness, reach, and trust',         x: 72, y: 81 },
  { n: '04', icon: 'BarChart3',      title: 'Advanced Analytics',          caption: 'Targeted distribution',                          x: 28, y: 81 },
  { n: '05', icon: 'TrendingUp',     title: 'Revenue + Customer Growth',   caption: 'More traffic, engagement, and sales',            x: 14, y: 38 },
];

function NodeCard({ node, idx }) {
  return (
    <Movable
      id={`ge.node.${idx}`}
      className="absolute w-[30%] max-w-[185px]"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/95 px-4 py-4 text-center shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">{node.n}</span>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <EditableIcon id={`ge.node.${idx}.icon`} as={LUCIDE[node.icon]} iconClass="h-5 w-5" />
          </span>
        </div>
        <EditableText id={`ge.node.${idx}.title`} as="strong" className="font-heading text-[13px] font-bold leading-tight text-primary sm:text-sm" block>
          {node.title}
        </EditableText>
        <EditableText id={`ge.node.${idx}.cap`} as="span" className="hidden text-[11px] leading-snug text-muted-foreground sm:block" block>
          {node.caption}
        </EditableText>
      </div>
    </Movable>
  );
}

export default function GrowthEngine() {
  const { editMode } = useEdit();
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Circular diagram (sm+) */}
      <div className="relative hidden aspect-square w-full sm:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <marker id="ge-arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
              <path d="M0,0 L0,5 L5,2.5 Z" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--border))" strokeWidth="0.4" />
          <path d="M50,12 A38,38 0 0 1 86,38"  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.5" />
          <path d="M86,38 A38,38 0 0 1 72,81"  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.5" />
          <path d="M72,81 A38,38 0 0 1 28,81"  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.5" />
          <path d="M28,81 A38,38 0 0 1 14,38"  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.5" />
          <path d="M14,38 A38,38 0 0 1 50,12"  fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.5" />
        </svg>

        {/* Center hub */}
        <Movable id="ge.hub" className="absolute left-1/2 top-1/2 w-[30%] max-w-[176px] -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-5 text-center backdrop-blur-sm">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground">
              <EditableIcon id="ge.hub.icon" markup={DEVICES_MARKUP} iconClass="h-7 w-7" />
            </span>
            <EditableText id="ge.hub.title" as="strong" className="font-heading text-[13px] font-bold leading-tight text-primary sm:text-sm" block>
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
          <div key={i} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
              {n.markup
                ? <EditableIcon id={`ge.m.${i}.icon`} markup={n.markup} iconClass="h-6 w-6" />
                : <EditableIcon id={`ge.m.${i}.icon`} as={LUCIDE[n.icon]} iconClass="h-5 w-5" />}
            </span>
            <div>
              <EditableText id={`ge.m.${i}.title`} as="strong" className="block font-heading text-sm font-bold text-primary" block>{n.title}</EditableText>
              <EditableText id={`ge.m.${i}.cap`} as="span" className="text-xs text-muted-foreground" block>{n.caption}</EditableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}