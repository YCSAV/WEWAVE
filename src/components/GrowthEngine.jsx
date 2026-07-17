import React from 'react';
import { Store, Clapperboard, Megaphone, TrendingUp, Layers } from 'lucide-react';

const NODES = [
  { n: '01', icon: Store, title: 'Your Business', caption: 'Products, services, people, and experience', pos: 'top' },
  { n: '02', icon: Clapperboard, title: 'Premium Content', caption: 'Short-form and long-form production', pos: 'right' },
  { n: '03', icon: Megaphone, title: 'Marketing + Brand Growth', caption: 'Attention, awareness, reach, and trust', pos: 'bottom' },
  { n: '04', icon: TrendingUp, title: 'Revenue + Customer Growth', caption: 'More traffic, engagement, and sales', pos: 'left' },
];

const POS_CLASS = {
  top: 'top-0 left-1/2 -translate-x-1/2',
  right: 'right-0 top-1/2 -translate-y-1/2',
  bottom: 'bottom-0 left-1/2 -translate-x-1/2',
  left: 'left-0 top-1/2 -translate-y-1/2',
};

function NodeCard({ node }) {
  const Icon = node.icon;
  return (
    <div className={`absolute w-[34%] max-w-[200px] ${POS_CLASS[node.pos]}`}>
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/90 px-3 py-4 text-center shadow-sm backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">{node.n}</span>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Icon className="h-5 w-5" />
          </span>
        </div>
        <strong className="font-heading text-[13px] font-bold leading-tight text-primary sm:text-sm">{node.title}</strong>
        <span className="hidden text-[11px] leading-snug text-muted-foreground sm:block">{node.caption}</span>
      </div>
    </div>
  );
}

export default function GrowthEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      {/* Desktop / tablet circular diagram */}
      <div className="relative hidden aspect-square w-full sm:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <defs>
            <marker id="ge-arrow" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
              <path d="M0,0 L0,5 L5,2.5 Z" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(var(--border))" strokeWidth="0.4" />
          <path d="M50,12 A38,38 0 0 1 88,50" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.55" />
          <path d="M88,50 A38,38 0 0 1 50,88" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.55" />
          <path d="M50,88 A38,38 0 0 1 12,50" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.55" />
          <path d="M12,50 A38,38 0 0 1 50,12" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.6" className="flow-dash" markerEnd="url(#ge-arrow)" opacity="0.55" />
        </svg>

        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 flex w-[30%] max-w-[180px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-4 py-5 text-center backdrop-blur-sm">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Layers className="h-6 w-6" />
          </span>
          <strong className="font-heading text-[13px] font-bold leading-tight text-primary sm:text-sm">Your Integrated<br />Growth Engine</strong>
        </div>

        {NODES.map(n => <NodeCard key={n.n} node={n} />)}
      </div>

      {/* Mobile linear flow */}
      <div className="grid gap-3 sm:hidden">
        {[{ n: '00', icon: Layers, title: 'Your Integrated Growth Engine', caption: 'Production + distribution + optimization, working together' }, ...NODES].map(n => {
          const Icon = n.icon;
          return (
            <div key={n.n} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <div>
                <strong className="block font-heading text-sm font-bold text-primary">{n.title}</strong>
                <span className="text-xs text-muted-foreground">{n.caption}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}