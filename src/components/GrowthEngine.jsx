import React from 'react';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';

// Vibrant cyan used for the rotating ring + arrows (matches the reference image).
const CYAN = '#00e5ff';
const CARD_BG = '#152a34';
const CARD_BORDER = '#2a4b5d';
const TEXT_BODY = '#a0b1b9';

// Four steps around the flywheel — clockwise from top.
const NODES = [
  { n: '01', icon: 'Store',        title: 'Your Business',           caption: 'Products, services & experience',           x: 50, y: 13 },
  { n: '02', icon: 'Clapperboard', title: 'Premium Content',         caption: 'Short-form and long-form production',        x: 87, y: 50 },
  { n: '03', icon: 'Megaphone',    title: 'Marketing + Brand Reach', caption: 'Build awareness and trust',                 x: 50, y: 87 },
  { n: '04', icon: 'TrendingUp',   title: 'Customer Growth',        caption: 'Increase engagement, foot traffic & sales', x: 13, y: 50 },
];

// Arrowheads at the midpoints between consecutive nodes — clockwise tangent.
const ARROWS = [
  { x: 74, y: 26, r: 45 },
  { x: 74, y: 74, r: 135 },
  { x: 26, y: 74, r: 225 },
  { x: 26, y: 26, r: 315 },
];

// Satellite icons around the central storefront (bag top, dollar left, video right, chart bottom).
const SATELLITES = [
  { icon: 'ShoppingBag', x: 50, y: 27 },
  { icon: 'DollarSign',  x: 31, y: 50 },
  { icon: 'Video',       x: 69, y: 50 },
  { icon: 'BarChart3',   x: 50, y: 73 },
];

function StepCard({ node, idx }) {
  return (
    <Movable
      id={`ge.node.${idx}`}
      className="absolute w-[150px] sm:w-[156px]"
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="flex h-[150px] w-full flex-col items-center justify-center gap-1.5 rounded-2xl px-3 py-3.5 text-center shadow-[0_12px_30px_-14px_rgba(0,0,0,0.55)]"
        style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: CYAN }}>
          <EditableText id={`ge.node.${idx}.n`} as="span">Step {node.n}</EditableText>
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: CYAN }}>
          <EditableIcon id={`ge.node.${idx}.icon`} as={LUCIDE[node.icon]} iconClass="h-5 w-5" colorClass={undefined} />
        </span>
        <EditableText id={`ge.node.${idx}.title`} as="strong" className="font-heading text-xs font-bold leading-tight text-white" block>
          {node.title}
        </EditableText>
        <EditableText id={`ge.node.${idx}.cap`} as="span" className="text-[11px] leading-snug" style={{ color: TEXT_BODY }} block>
          {node.caption}
        </EditableText>
      </div>
    </Movable>
  );
}

export default function GrowthEngine() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] p-4 sm:p-6"
      style={{ background: 'linear-gradient(160deg, #0b1c24 0%, #162d38 100%)' }}
    >
      {/* Circular flywheel (sm+) */}
      <div className="relative hidden aspect-square w-full sm:block">
        {/* Soft center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(0,229,255,0.10)' }} />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {/* Faint static tracks */}
          <circle cx="50" cy="50" r="36" fill="none" stroke="#2a4b5d" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#2a4b5d" strokeWidth="0.3" opacity="0.6" />

          {/* Moving wheel: dashed ring + clockwise arrowheads, slowly rotating */}
          <g className="flywheel-spin">
            <circle cx="50" cy="50" r="36" fill="none" stroke={CYAN} strokeWidth="0.6" strokeDasharray="1.6 4" opacity="0.85" />
            <g fill={CYAN}>
              {ARROWS.map((a, i) => (
                <path key={i} d="M-2,-2.6 L2.2,0 L-2,2.6 Z" transform={`translate(${a.x},${a.y}) rotate(${a.r})`} />
              ))}
            </g>
          </g>
        </svg>

        {/* Center hub: storefront with satellites */}
        <Movable id="ge.hub" className="absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[150px] w-[150px] flex-col items-center justify-center gap-1 rounded-full text-center"
            style={{ border: `1px solid ${CARD_BORDER}`, backgroundColor: 'rgba(21,42,52,0.85)' }}>
            {/* Storefront centerpiece */}
            <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: '#ffffff' }}>
              <EditableIcon id="ge.hub.store" as={LUCIDE.Store} iconClass="h-6 w-6" />
            </span>
            <EditableText id="ge.hub.title" as="strong" className="font-heading text-[12px] font-bold leading-tight text-white" block>
              Your Integrated<br />Growth Engine
            </EditableText>
            <EditableText id="ge.hub.sub" as="span" className="text-[11px] font-semibold" style={{ color: CYAN }} block>
              Content That Converts.
            </EditableText>

            {/* Satellite icons */}
            {SATELLITES.map((s, i) => (
              <span
                key={i}
                className="absolute grid h-8 w-8 place-items-center rounded-full"
                style={{
                  left: `${s.x}%`, top: `${s.y}%`, transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(11,28,36,0.9)', border: `1px solid ${CARD_BORDER}`, color: CYAN,
                }}
              >
                <EditableIcon id={`ge.sat.${i}.icon`} as={LUCIDE[s.icon]} iconClass="h-4 w-4" />
              </span>
            ))}
          </div>
        </Movable>

        {NODES.map((n, i) => <StepCard key={n.n} node={n} idx={i} />)}
      </div>

      {/* Mobile linear flow */}
      <div className="grid gap-3 sm:hidden">
        <div className="flex items-center gap-3 rounded-2xl p-4" style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: CYAN }}>
            <EditableIcon id="ge.m.0.icon" as={LUCIDE.Store} iconClass="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <EditableText id="ge.m.0.title" as="strong" className="block font-heading text-sm font-bold text-white" block>Your Integrated Growth Engine</EditableText>
            <EditableText id="ge.m.0.cap" as="span" className="text-xs" style={{ color: CYAN }} block>Content That Converts.</EditableText>
          </div>
        </div>
        {NODES.map((n, i) => (
          <div key={n.n} className="flex items-center gap-3 rounded-2xl p-4" style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: CYAN }}>
              <EditableIcon id={`ge.m.${i + 1}.icon`} as={LUCIDE[n.icon]} iconClass="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: CYAN }}>
                <EditableText id={`ge.m.${i + 1}.n`} as="span">Step {n.n}</EditableText>
              </span>
              <EditableText id={`ge.m.${i + 1}.title`} as="strong" className="block font-heading text-sm font-bold text-white" block>{n.title}</EditableText>
              <EditableText id={`ge.m.${i + 1}.cap`} as="span" className="text-xs leading-snug" style={{ color: TEXT_BODY }} block>{n.caption}</EditableText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}