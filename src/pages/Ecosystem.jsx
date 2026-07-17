import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sprout, Radio, Gauge, Play } from 'lucide-react';

const PHASES = [
  {
    no: '01', icon: Sprout, title: 'Growth',
    desc: 'Build a consistent vertical presence through premium short-form content and managed social distribution.',
    items: ['2–4 short-form videos per month', 'Instagram + TikTok distribution', 'Meta advertising support', 'One half-day shoot per month'],
  },
  {
    no: '02', icon: Radio, title: 'Reach',
    desc: 'Add cinematic medium- and long-form storytelling that builds authority, context, and trust.',
    items: ['2–4 medium-form videos or one long-form video', 'YouTube distribution and management', 'Google advertising and insights', 'One full-day shoot per month'],
  },
  {
    no: '03', icon: Gauge, title: 'Optimization',
    desc: 'Connect short-form discovery and long-form trust into one complete content engine.',
    items: ['2–4 short-form videos', '2–4 medium-form videos or one long-form video', 'All-platform distribution and management', 'Google + Meta advertising and insights', 'Two shoot days per month'],
  },
];

const EXAMPLES = [
  {
    phase: 'Growth',
    media: [
      { type: 'ig', src: 'https://www.instagram.com/p/DYjIuzFR-0-/embed', title: 'Cucina Moon Reel', vertical: true },
    ],
    links: [
      { label: 'Cucina Moon', href: 'https://www.instagram.com/p/DYjIuzFR-0-/' },
      { label: 'Supreme Dumplings', href: 'https://www.instagram.com/p/DaB-Pj2xpbx/' },
    ],
  },
  {
    phase: 'Reach',
    media: [
      { type: 'yt', thumb: 'https://img.youtube.com/vi/ld4I4f8DILA/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s', title: 'Farm Lovers Markets', horizontal: true },
    ],
    links: [
      { label: 'Farm Lovers Markets', href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s' },
    ],
  },
  {
    phase: 'Optimization',
    media: [
      { type: 'ig', src: 'https://www.instagram.com/p/DaB-Pj2xpbx/embed', title: 'Supreme Dumplings Reel', vertical: true },
      { type: 'yt', thumb: 'https://img.youtube.com/vi/Yyh1HHAIAQY/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s', title: 'Rigo', horizontal: true },
    ],
    links: [
      { label: 'Short-form example', href: 'https://www.instagram.com/p/DaB-Pj2xpbx/' },
      { label: 'Long-form example', href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s' },
    ],
  },
];

function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/30">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="container-wide py-16 text-center sm:py-24">
        <span className="eyebrow justify-center">{eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export default function Ecosystem() {
  return (
    <>
      <PageHero
        eyebrow="Smart Content Ecosystem"
        title={<>Growth. Reach.<br />Optimization.</>}
        sub="Three levels that connect content production, platform management, distribution, and performance."
      />

      {/* Phases */}
      <section className="py-16 sm:py-24">
        <div className="container-wide grid gap-6 lg:grid-cols-3">
          {PHASES.map((p, i) => {
            const Icon = p.icon;
            const featured = i === 2;
            return (
              <article key={p.no} className={`flex flex-col rounded-3xl border p-7 sm:p-8 ${featured ? 'border-accent/40 bg-accent/5' : 'border-border bg-card'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Phase {p.no}</span>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${featured ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'}`}><Icon className="h-6 w-6" /></span>
                </div>
                <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-primary">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3 border-t border-border pt-5">
                  {p.items.map(it => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-border bg-secondary/30 py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow">Examples</span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">See each level in action.</h2>
            </div>
            <p className="text-muted-foreground md:text-right">Short-form, long-form, and combined campaign examples from Slice of Hawaiʻi.</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {EXAMPLES.map(ex => (
              <div key={ex.phase} className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-primary">{ex.phase}</h3>
                <div className="mt-4 space-y-4">
                  {ex.media.map((m, idx) => {
                    if (m.type === 'yt') {
                      return (
                        <a key={idx} href={m.href} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-2xl border border-border bg-muted">
                          <div className="relative aspect-video">
                            <img src={m.thumb} alt={m.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                            <div className="absolute inset-0 grid place-items-center bg-primary/30 transition-colors group-hover:bg-primary/20">
                              <span className="grid h-12 w-12 place-items-center rounded-full bg-background/90 text-primary"><Play className="h-5 w-5 translate-x-0.5" fill="currentColor" /></span>
                            </div>
                          </div>
                          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-primary">{m.title}</span>
                        </a>
                      );
                    }
                    return (
                      <div key={idx} className="overflow-hidden rounded-2xl border border-border bg-card" style={{ aspectRatio: '9 / 16', maxHeight: 520 }}>
                        <iframe src={m.src} title={m.title} className="h-full w-full" loading="lazy" scrolling="no" frameBorder="0" />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex flex-col gap-1.5">
                  {ex.links.map(l => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-primary">
                      {l.label} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-primary sm:text-2xl">Ready to find your starting point?</h2>
              <p className="mt-1 text-sm text-muted-foreground">Share your goals and current presence — we’ll recommend the right phase.</p>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}