import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sprout, Radio, Gauge, Play, Smartphone, Tv } from 'lucide-react';
import { EditableText, Movable } from '@/components/edit/Editable';
import { BRAND_MARKUP } from '@/components/BrandIcons';

const PHASES = [
  { no: '01', icon: Sprout, devices: [Smartphone], title: 'Growth', desc: 'Build a consistent vertical presence through premium short-form content and managed social distribution.', items: ['2–4 short-form videos per month', 'Instagram + TikTok distribution', 'Meta advertising support', 'One half-day shoot per month'] },
  { no: '02', icon: Radio, devices: [Tv], title: 'Reach', desc: 'Add cinematic medium- and long-form storytelling that builds authority, context, and trust.', items: ['2–4 medium-form videos or one long-form video', 'YouTube distribution and management', 'Google advertising and insights', 'One full-day shoot per month'] },
  { no: '03', icon: Gauge, devices: [Smartphone, Tv], title: 'Optimization', desc: 'Connect short-form discovery and long-form trust into one complete content engine.', items: ['2–4 short-form videos', '2–4 medium-form videos or one long-form video', 'All-platform distribution and management', 'Google + Meta advertising and insights', 'Two shoot days per month'] },
];

const EXAMPLES = [
  { phase: 'Growth', media: [{ type: 'ig', src: 'https://www.instagram.com/p/DWU9mESD_s_/embed', title: 'Slice of Hawaiʻi Reel' }, { type: 'ig', src: 'https://www.instagram.com/p/DagVxgcydms/embed', title: 'Slice of Hawaiʻi Reel' }], links: [{ label: 'Slice of Hawaiʻi', href: 'https://www.instagram.com/p/DWU9mESD_s_/' }, { label: 'Slice of Hawaiʻi', href: 'https://www.instagram.com/p/DagVxgcydms/' }] },
  { phase: 'Reach', media: [{ type: 'yt', thumb: 'https://img.youtube.com/vi/ld4I4f8DILA/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s', title: 'Farm Lovers Markets' }, { type: 'yt', thumb: 'https://img.youtube.com/vi/Yyh1HHAIAQY/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s', title: 'Rigo' }, { type: 'yt', thumb: 'https://img.youtube.com/vi/A7YNhwUK1ds/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=A7YNhwUK1ds&t=230s', title: "Carl's OG3 Burger Shop" }, { type: 'yt', thumb: 'https://img.youtube.com/vi/N1z8_66Gvh4/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=N1z8_66Gvh4', title: 'Yung Chow — Red Light' }], links: [{ label: 'Farm Lovers Markets', href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s' }, { label: 'Rigo', href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s' }, { label: "Carl's OG3", href: 'https://www.youtube.com/watch?v=A7YNhwUK1ds&t=230s' }, { label: 'Yung Chow — Red Light', href: 'https://www.youtube.com/watch?v=N1z8_66Gvh4' }] },
  { phase: 'Optimization', media: [{ type: 'ig', src: 'https://www.instagram.com/p/DaB-Pj2xpbx/embed', title: 'Supreme Dumplings Reel' }, { type: 'yt', thumb: 'https://img.youtube.com/vi/8rJSaUwmXxE/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=8rJSaUwmXxE&t=26s', title: 'MW Restaurant' }], links: [{ label: 'Short-form example', href: 'https://www.instagram.com/p/DaB-Pj2xpbx/' }, { label: 'Long-form example', href: 'https://www.youtube.com/watch?v=8rJSaUwmXxE&t=26s' }] },
];

export default function Ecosystem() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="container-wide py-16 text-center sm:py-24">
          <span className="eyebrow justify-center"><EditableText id="eco.hero.eyebrow" as="span">Smart Content Ecosystem</EditableText></span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">
            <EditableText id="eco.hero.h1" as="span" block>Growth. Reach.<br />Optimization.</EditableText>
          </h1>
          <EditableText id="eco.hero.sub" as="p" className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground" block>
            Three levels that connect content production, platform management, distribution, and performance.
          </EditableText>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="mb-10 max-w-2xl">
            <span className="eyebrow"><EditableText id="eco.pkg.eyebrow" as="span">Service Packages</EditableText></span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
              <EditableText id="eco.pkg.h2" as="span" block>Three packages, ready to choose from.</EditableText>
            </h2>
            <EditableText id="eco.pkg.sub" as="p" className="mt-4 text-muted-foreground" block>
              Each phase is a standalone package with its own scope and pricing — pick the one that fits your goals, or combine them as your needs grow.
            </EditableText>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PHASES.map((p, i) => {
              const Icon = p.icon;
              const featured = i === 2;
              return (
                <Movable key={p.no} id={`eco.phase.${i}`}>
                  <article className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 sm:p-8 ${featured ? 'border-accent/40 bg-accent/5' : 'border-border bg-card'}`}>
                    <Icon className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-44 text-primary opacity-[0.06]" />
                    <div className="relative flex items-center justify-between">
                      <EditableText id={`eco.phase.${i}.no`} as="span" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Phase {p.no}</EditableText>
                      <div className="flex items-center gap-2">
                        {p.devices.map((D, k) => (
                          <span key={k} title={D === Smartphone ? 'Short-form (vertical)' : 'Long-form (horizontal)'} className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><D className="h-6 w-6" /></span>
                        ))}
                      </div>
                    </div>
                    <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-primary"><EditableText id={`eco.phase.${i}.t`} as="span">{p.title}</EditableText></h2>
                    <EditableText id={`eco.phase.${i}.d`} as="p" className="mt-3 text-sm leading-relaxed text-muted-foreground" block>{p.desc}</EditableText>
                    <ul className="relative mt-6 space-y-3 border-t border-border pt-5">
                      {p.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <EditableText id={`eco.phase.${i}.item.${j}`} as="span" block>{it}</EditableText>
                        </li>
                      ))}
                    </ul>
                    {i === 0 && (
                      <div className="relative mt-6 flex items-center gap-2">
                        <span className="dist-icon" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP.Instagram }} />
                        <span className="dist-icon" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP.TikTok }} />
                        <span className="dist-icon" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP.Meta }} />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="relative mt-6 flex items-center gap-2">
                        <span className="dist-icon" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP.YouTube }} />
                        <span className="dist-icon" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP.Google }} />
                      </div>
                    )}
                  </article>
                </Movable>
              );
            })}
          </div>

          <p className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <EditableText id="eco.phases.footnote" as="span" block>Pricing available upon request — and custom packages are available for clients whose needs fall between or beyond these phases.</EditableText>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow"><EditableText id="eco.ex.eyebrow" as="span">Examples</EditableText></span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                <EditableText id="eco.ex.h2" as="span" block>See each level in action.</EditableText>
              </h2>
            </div>
            <EditableText id="eco.ex.intro" as="p" className="text-muted-foreground md:text-right" block>Short-form, long-form, and combined campaign examples from Slice of Hawaiʻi.</EditableText>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {EXAMPLES.map((ex, i) => (
              <div key={i} className="flex flex-col">
                <h3 className="font-heading text-xl font-bold text-primary"><EditableText id={`eco.ex.${i}.t`} as="span">{ex.phase}</EditableText></h3>
                <div className="mt-4 space-y-4">
                  {ex.media.map((m, j) => {
                    if (m.type === 'yt') {
                      return (
                        <a key={j} href={m.href} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-2xl border border-border bg-muted">
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
                      <div key={j} className="overflow-hidden rounded-2xl border border-border bg-card" style={{ aspectRatio: '9 / 16', maxHeight: 520 }}>
                        <iframe src={m.src} title={m.title} className="h-full w-full" loading="lazy" scrolling="no" frameBorder="0" />
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 flex flex-col gap-1.5">
                  {ex.links.map((l, j) => (
                    <a key={j} href={l.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-primary">
                      <EditableText id={`eco.ex.${i}.link.${j}`} as="span">{l.label}</EditableText> <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-primary sm:text-2xl"><EditableText id="eco.cta.h2" as="span">Ready to find your starting point?</EditableText></h2>
              <EditableText id="eco.cta.p" as="p" className="mt-1 text-sm text-muted-foreground" block>Share your goals and current presence — we’ll recommend the right phase.</EditableText>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}