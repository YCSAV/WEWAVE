import React from 'react';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';
import { DEVICES_MARKUP } from '@/components/BrandIcons';

// Vibrant cyan used for the rotating ring + arrows (matches the reference image).
const CYAN = '#00e5ff';
const CARD_BG = '#152a34';
const CARD_BORDER = '#2a4b5d';
const TEXT_BODY = '#a0b1b9';

// WeWave Socials storefront logo — used as a faint watermark behind the wheel.
const BRAND_LOGO = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/0976eb1b7_image.png';

// Four steps around the flywheel — clockwise from top. Text kept exactly as original.
const NODES = [
  { n: '01', icon: 'Store',        title: 'Your Business',           caption: 'Products, services, and experience',           x: 50, y: 16 },
  { n: '02', icon: 'Clapperboard', title: 'Premium Content',         caption: 'Short-form and long-form production',        x: 84, y: 50 },
  { n: '03', icon: 'Megaphone',    title: 'Marketing + Brand Reach', caption: 'Build awareness and trust',                 x: 50, y: 84 },
  { n: '04', icon: 'TrendingUp',   title: 'Customer Growth',        caption: 'Increase engagement, foot traffic, and sales', x: 16, y: 50 },
];

// Arrowheads at the midpoints between consecutive nodes — clockwise tangent.
const ARROWS = [
  { x: 74, y: 26, r: 45 },
  { x: 74, y: 74, r: 135 },
  { x: 26, y: 74, r: 225 },
  { x: 26, y: 26, r: 315 },
];

function StepCard({ node, idx }) {
  return (
    <Movable
      id={`ge.node.${idx}`}
      className="absolute w-[150px] sm:w-[154px]"
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
          <EditableIcon id={`ge.node.${idx}.icon`} as={LUCIDE[node.icon]} iconClass="h-5 w-5" />
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
      className="relative mx-auto w-full max-w-[520px]"
      style={{ borderRadius: '2rem', padding: '1.5rem' }}
    >
      {/* Brand logo watermark behind the wheel */}
      <img
        src={BRAND_LOGO}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 z-0 mx-auto h-full w-full object-contain opacity-25"
      />
      {/* Circular flywheel (sm+) */}
      <div className="relative hidden aspect-square w-full sm:block">
        {/* Soft center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(0,229,255,0.10)' }} />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          {/* Faint static tracks */}
          <circle cx="50" cy="50" r="34" fill="none" stroke="#2a4b5d" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="#2a4b5d" strokeWidth="0.3" opacity="0.6" />

          {/* Moving wheel: dashed ring + clockwise arrowheads, slowly rotating */}
          <g className="flywheel-spin">
            <circle cx="50" cy="50" r="34" fill="none" stroke={CYAN} strokeWidth="0.6" strokeDasharray="1.6 4" opacity="0.85" />
            <g fill={CYAN}>
              {ARROWS.map((a, i) => (
                <path key={i} d="M-2,-2.6 L2.2,0 L-2,2.6 Z" transform={`translate(${a.x},${a.y}) rotate(${a.r})`} />
              ))}
            </g>
          </g>
        </svg>

        {/* Center hub */}
        <Movable id="ge.hub" className="absolute left-1/2 top-1/2 w-[150px] -translate-x-1/2 -translate-y-1/2">
          <div
            className="flex h-[150px] w-[150px] flex-col items-center justify-center gap-2 rounded-full text-center"
            style={{ border: `1px solid ${CARD_BORDER}`, backgroundColor: 'rgba(21,42,52,0.85)' }}
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: CYAN }}>
              <EditableIcon id="ge.hub.icon" markup={DEVICES_MARKUP} iconClass="h-7 w-7" />
            </span>
            <EditableText id="ge.hub.title" as="strong" className="font-heading text-[13px] font-bold leading-tight text-white" block>
              Your Integrated<br />Growth Engine
            </EditableText>
          </div>
        </Movable>

        {NODES.map((n, i) => <StepCard key={n.n} node={n} idx={i} />)}
      </div>

      {/* Mobile linear flow */}
      <div className="grid gap-3 sm:hidden">
        <div className="flex items-center gap-3 rounded-2xl p-4" style={{ backgroundColor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: 'rgba(0,229,255,0.12)', color: CYAN }}>
            <EditableIcon id="ge.m.0.icon" markup={DEVICES_MARKUP} iconClass="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <EditableText id="ge.m.0.title" as="strong" className="block font-heading text-sm font-bold text-white" block>Your Integrated Growth Engine</EditableText>
            <EditableText id="ge.m.0.cap" as="span" className="text-xs" style={{ color: TEXT_BODY }} block>Production + distribution + optimization, working together</EditableText>
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