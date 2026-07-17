import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clapperboard, Share2, Lightbulb, Camera, SlidersHorizontal, ArrowUpRight,
  Instagram, Youtube, Facebook, Twitter, Music2, Search, Sparkles, Play,
} from 'lucide-react';
import GrowthEngine from '@/components/GrowthEngine';

const TRUST = ['Strategy', 'Production', 'Social Management', 'Distribution', 'Optimization'];

const PRODUCTION_STEPS = [
  { icon: Lightbulb, title: 'Strategy', desc: 'We plan every project around your brand, audience, and goals.' },
  { icon: Camera, title: 'Production', desc: 'Video and audio production with cinematic quality.' },
  { icon: SlidersHorizontal, title: 'Editing', desc: 'Professional editing, color, audio, and polished delivery.' },
];

const DISTRIBUTION = [
  { icon: Instagram, name: 'Instagram', note: 'Feed, Stories, Reels', color: 'text-[#D62976]' },
  { icon: Music2, name: 'TikTok', note: 'Short-form content', color: 'text-primary' },
  { icon: Youtube, name: 'YouTube', note: 'Channel management', color: 'text-[#FF0000]' },
  { icon: Facebook, name: 'Facebook', note: 'Posts, engagement', color: 'text-[#1877F2]' },
  { icon: Twitter, name: 'X', note: 'Updates, engagement', color: 'text-primary' },
];

const OPTIMIZATION = [
  { icon: Search, name: 'Google Ads', note: 'Search, Display, YouTube ads and optimization', color: 'text-[#4285F4]' },
  { icon: Share2, name: 'Meta Ads', note: 'Facebook & Instagram ads and optimization', color: 'text-[#0082FB]' },
];

const WORK = [
  {
    title: 'Farm Lovers Markets',
    tag: 'Long-form brand story',
    desc: 'Food, vendors, community, and culture shaped into a watchable market experience.',
    thumb: 'https://img.youtube.com/vi/ld4I4f8DILA/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s',
  },
  {
    title: 'Rigo',
    tag: 'Restaurant feature',
    desc: 'A cinematic restaurant story built around atmosphere, food, and personality.',
    thumb: 'https://img.youtube.com/vi/Yyh1HHAIAQY/maxresdefault.jpg',
    href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s',
  },
];

const TEAM = [
  { name: 'Jay Ham', role: 'Founder & Creative Director', desc: 'Creative direction, strategy, client relationships, and social media management.' },
  { name: 'Drake Dela Cruz', role: 'Partner & Head Videographer', desc: 'Cinematography, production, visual execution, and lead camera direction.' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="container-wide grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> A Modern Digital Agency</span>
            <h1 className="mt-5 font-heading text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight text-primary">
              Content Built<br />to <span className="text-accent">Convert.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Boost your brand awareness and increase customer traffic with premium content, cinematic storytelling, and strategic social media management.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-gold">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
              <a href="#services" className="btn-ghost">See what we do</a>
            </div>
          </div>

          <div className="lg:pl-6">
            <GrowthEngine />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-border bg-secondary/40">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 sm:justify-between">
          {TRUST.map((t, i) => (
            <React.Fragment key={t}>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t}</span>
              {i < TRUST.length - 1 && <span className="hidden text-accent/40 sm:inline">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                Content and social media, working together.
              </h2>
            </div>
            <p className="text-muted-foreground md:text-right">
              We create premium media and manage how it is distributed, published, and optimized across the platforms that shape discovery and customer action.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Video Production */}
            <article className="flex flex-col rounded-3xl border border-border bg-card p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Clapperboard className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary">Video Production</h3>
                  <p className="text-sm text-muted-foreground">Story-driven content that connects.</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                From fast-moving vertical content to cinematic long-form storytelling, we create media that makes the brand look as strong online as it is in real life.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {PRODUCTION_STEPS.map(s => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="rounded-2xl border border-border bg-background/60 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent"><Icon className="h-5 w-5" /></span>
                      <strong className="mt-3 block text-sm font-bold text-primary">{s.title}</strong>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Short-form video', 'YouTube production', 'Brand films', 'Commercial content', 'Campaign creative'].map(t => (
                  <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>

            {/* Social Media Management */}
            <article className="flex flex-col rounded-3xl border border-border bg-card p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <Share2 className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary">Social Media Management</h3>
                  <p className="text-sm text-muted-foreground">Content that performs. Communities that grow.</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We distribute, schedule, manage, and optimize content across the platforms that shape awareness, engagement, and customer growth.
              </p>

              <span className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Content Distribution</span>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {DISTRIBUTION.map(p => {
                  const Icon = p.icon;
                  return (
                    <div key={p.name} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card ring-1 ring-border ${p.color}`}><Icon className="h-5 w-5" /></span>
                      <div className="min-w-0">
                        <strong className="block text-sm font-semibold text-primary">{p.name}</strong>
                        <span className="truncate text-xs text-muted-foreground">{p.note}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Performance Optimization</span>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {OPTIMIZATION.map(p => {
                  const Icon = p.icon;
                  return (
                    <div key={p.name} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card ring-1 ring-border ${p.color}`}><Icon className="h-5 w-5" /></span>
                      <div className="min-w-0">
                        <strong className="block text-sm font-semibold text-primary">{p.name}</strong>
                        <span className="text-xs leading-snug text-muted-foreground">{p.note}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Publishing', 'Scheduling', 'Community management', 'Paid distribution', 'Analytics'].map(t => (
                  <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-secondary/50 px-6 py-5 text-center text-sm font-medium text-muted-foreground">
            <span>Production creates the asset</span>
            <span className="text-accent">→</span>
            <span>Distribution creates the audience</span>
            <span className="text-accent">→</span>
            <span>Optimization creates growth</span>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-y border-border bg-secondary/30 py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow">Featured Work</span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">Stories That Build Brands.</h2>
            </div>
            <p className="text-muted-foreground md:text-right">
              Featured projects from our in-house media brand, Slice of Hawaiʻi, where cinematic production and strategic storytelling come together to help local businesses reach larger audiences.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {WORK.map(w => (
              <a key={w.title} href={w.href} target="_blank" rel="noopener" className="group relative overflow-hidden rounded-3xl border border-border">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img src={w.thumb} alt={w.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-background/90 text-primary backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80">{w.tag}</span>
                  <h3 className="mt-1 font-heading text-2xl font-bold">{w.title}</h3>
                  <p className="mt-1 max-w-md text-sm text-background/85">{w.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Watch on YouTube <ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section id="about" className="py-20 sm:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/50 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
            <span className="eyebrow">About Us</span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
              Creative production with a clear business purpose.
            </h2>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <strong className="block font-heading font-bold text-primary">One integrated team.</strong>
              <span className="text-sm text-muted-foreground">Strategy. Production. Distribution. Optimization.</span>
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We combine cinematic production, social media management, and business strategy so clients do not need separate vendors working in silos.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Every idea, shoot, edit, and distribution decision is built around awareness, trust, customer action, and long-term growth.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TEAM.map(m => (
                <div key={m.name} className="rounded-2xl border border-border bg-card p-5">
                  <strong className="block font-heading text-base font-bold text-primary">{m.name}</strong>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">{m.role}</span>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">Learn more about the team <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="pb-10">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-tropical/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <small className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/70">Contact Us</small>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-background sm:text-5xl">Let’s build content that converts.</h2>
              <p className="mt-5 text-background/80 sm:text-lg">
                Tell us where your brand needs more attention, stronger storytelling, better social management, or more customer action.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="mailto:hello@bizcatcreative.com?subject=Content%20Project%20Inquiry" className="btn-gold">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
                <Link to="/ecosystem" className="btn-ghost bg-background/10 border-background/20 text-background hover:border-background/40">Review the Smart Ecosystem</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}