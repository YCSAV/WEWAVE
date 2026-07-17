import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clapperboard, Share2, Lightbulb, Camera, SlidersHorizontal, ArrowUpRight, Sparkles, Play, ArrowRight, Phone,
} from 'lucide-react';
import GrowthEngine from '@/components/GrowthEngine';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';
import { BRAND_MARKUP } from '@/components/BrandIcons';

const TRUST = [
  { icon: 'Target', label: 'Strategy' },
  { icon: 'Clapperboard', label: 'Production' },
  { icon: 'Share2', label: 'Social Management' },
  { icon: 'Radio', label: 'Distribution' },
  { icon: 'BarChart3', label: 'Optimization' },
];

const PLAN_STEPS = [
  { icon: 'PenTool', title: 'Creative Direction', desc: 'Concepts shaped around your brand.' },
  { icon: 'MessageCircle', title: 'Customer Feedback', desc: 'Insights from your audience.' },
  { icon: 'Layers', title: 'Storyboarding', desc: 'Shots planned before we roll.' },
];

const PROD_STEPS = [
  { icon: 'Camera', title: 'Filming', desc: 'On-location capture.' },
  { icon: 'SlidersHorizontal', title: 'Editing', desc: 'Color, sound & polish.' },
  { icon: 'Users', title: 'Feedback', desc: 'Revisions from review.' },
  { icon: 'Rocket', title: 'Delivery', desc: 'Assets for every platform.' },
];

const DISTRIBUTION = [
  { name: 'Instagram', note: 'Feed, Reels', brand: 'Instagram' },
  { name: 'TikTok', note: 'Short-form', brand: 'TikTok' },
  { name: 'YouTube', note: 'Channel', brand: 'YouTube' },
  { name: 'Facebook', note: 'Posts, DMs', brand: 'Facebook' },
  { name: 'X', note: 'Updates', brand: 'X' },
  { name: 'Paid Media', note: 'Paid ads', icon: 'Megaphone' },
];

const OPTIMIZATION = [
  { name: 'Google Ads', note: 'Search, Display, YouTube ads and optimization', brand: 'Google' },
  { name: 'Meta Ads', note: 'Facebook & Instagram ads and optimization', brand: 'Meta' },
];

const WORK = [
  { title: 'Farm Lovers Markets', tag: 'Long-form brand story', desc: 'Food, vendors, community, and culture shaped into a watchable market experience.', thumb: 'https://img.youtube.com/vi/ld4I4f8DILA/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=ld4I4f8DILA&t=16s' },
  { title: 'Rigo', tag: 'Restaurant feature', desc: 'A cinematic restaurant story built around atmosphere, food, and personality.', thumb: 'https://img.youtube.com/vi/Yyh1HHAIAQY/maxresdefault.jpg', href: 'https://www.youtube.com/watch?v=Yyh1HHAIAQY&t=642s' },
];

const TEAM = [
  { name: 'Jay Ham', role: 'Founder & Creative Director', desc: 'Creative direction, strategy, client relationships, and social media management.' },
  { name: 'Drake Dela Cruz', role: 'Partner & Head Videographer', desc: 'Cinematography, production, visual execution, and lead camera direction.' },
  { name: 'Nikko Monticello', role: 'Admin & Communications', desc: 'Operations, scheduling, client communications, and keeping every project moving forward.' },
];

const SVC_VIDEO_IMG = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/ff95a23da_generated_image.png';
const SVC_SOCIAL_IMG = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/dd1cc73e6_generated_image.png';
const ABOUT_IMG = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/58acc856a_generated_image.png';
const STATS_BG = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/58acc856a_generated_image.png';
const HERO_BG = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/52b4cb76a_generated_image.png';
const BRAND_LOGO = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/1c120a191_WeWaveSocialsStorefrontLogo.png';

const STATS = [
  { value: '2', label: 'Core services — Production + Social', icon: 'Clapperboard' },
  { value: '6', label: 'Platforms distributed & managed', icon: 'Share2' },
  { value: '1', label: 'Integrated team, no silos', icon: 'Users' },
  { value: '808', label: 'Honolulu, Hawaiʻi based', icon: 'MapPin' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={HERO_BG} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="relative container-wide grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div>
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" />
              <EditableText id="home.hero.kicker" as="span">A Modern Digital Agency</EditableText>
            </span>
            <h1 className="mt-5 font-heading text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[1.04] tracking-tight text-primary">
              <EditableText id="home.hero.h1" as="span" block>Content Built<br />to <span className="text-accent">Convert.</span></EditableText>
            </h1>
            <EditableText id="home.hero.copy" as="p" className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground" block>
              Boost your brand awareness and increase customer traffic with premium content, cinematic storytelling, and strategic social media management.
            </EditableText>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-gold">
                <EditableText id="home.hero.cta1" as="span">Start a project</EditableText> <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href="#services" className="btn-ghost">
                <EditableText id="home.hero.cta2" as="span">See what we do</EditableText>
              </a>
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
            <React.Fragment key={i}>
              <span className="inline-flex items-center gap-2">
                <EditableIcon id={`home.trust.${i}.icon`} as={LUCIDE[t.icon]} iconClass="h-4 w-4" colorClass="text-accent" />
                <EditableText id={`home.trust.${i}`} as="span" className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{t.label}</EditableText>
              </span>
              {i < TRUST.length - 1 && (
                <ArrowRight className="h-4 w-4 text-accent/70 arrow-move" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow"><EditableText id="home.svc.eyebrow" as="span">What We Do</EditableText></span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                <EditableText id="home.svc.h2" as="span" block>Content and social media, working together.</EditableText>
              </h2>
            </div>
            <EditableText id="home.svc.intro.v2" as="p" className="text-muted-foreground md:text-right" block>
              We’re a one-stop shop where content and social media work together — we create premium media and manage how it’s distributed, published, and optimized across the platforms that shape discovery and customer action.
            </EditableText>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Video Production */}
            <Movable id="home.svc.video" className="lg:transform-none">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative h-44 overflow-hidden">
                  <img src={SVC_VIDEO_IMG} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <EditableIcon id="home.svc.video.icon" as={Clapperboard} iconClass="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary"><EditableText id="home.svc.video.title" as="span">Video Production</EditableText></h3>
                    <EditableText id="home.svc.video.sub" as="p" className="text-sm text-muted-foreground">Story-driven content that connects.</EditableText>
                  </div>
                </div>
                <EditableText id="home.svc.video.body" as="p" className="mt-5 min-h-[5rem] leading-relaxed text-muted-foreground" block>
                  From fast-moving vertical content to cinematic long-form storytelling, we create media that makes the brand look as strong online as it is in real life.
                </EditableText>

                <EditableText id="home.svc.video.plan.lbl" as="span" className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Planning</EditableText>
                <div className="mt-3 grid gap-4 sm:grid-cols-3">
                  {PLAN_STEPS.map((s, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-background/60 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                        <EditableIcon id={`home.svc.video.plan.${i}.icon`} as={LUCIDE[s.icon]} iconClass="h-5 w-5" />
                      </span>
                      <EditableText id={`home.svc.video.plan.${i}.t`} as="strong" className="mt-3 block text-sm font-bold text-primary" block>{s.title}</EditableText>
                      <EditableText id={`home.svc.video.plan.${i}.d`} as="p" className="mt-1 text-xs leading-snug text-muted-foreground" block>{s.desc}</EditableText>
                    </div>
                  ))}
                </div>

                <EditableText id="home.svc.video.prod.lbl" as="span" className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Production</EditableText>
                <div className="mt-3 grid gap-4 sm:grid-cols-4">
                  {PROD_STEPS.map((s, i) => (
                    <div key={i} className="rounded-2xl border border-border bg-background/60 p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                        <EditableIcon id={`home.svc.video.prod.${i}.icon`} as={LUCIDE[s.icon]} iconClass="h-5 w-5" />
                      </span>
                      <EditableText id={`home.svc.video.prod.${i}.t`} as="strong" className="mt-3 block text-sm font-bold text-primary" block>{s.title}</EditableText>
                      <EditableText id={`home.svc.video.prod.${i}.d`} as="p" className="mt-1 text-xs leading-snug text-muted-foreground" block>{s.desc}</EditableText>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {['Short-form video', 'YouTube production', 'Brand films', 'Commercial content', 'Campaign creative'].map((t, i) => (
                    <EditableText key={i} id={`home.svc.video.tag.${i}`} as="span" className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</EditableText>
                  ))}
                </div>
                </div>
              </article>
            </Movable>

            {/* Social Media Management */}
            <Movable id="home.svc.social">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative h-44 overflow-hidden">
                  <img src={SVC_SOCIAL_IMG} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                    <EditableIcon id="home.svc.social.icon" as={Share2} iconClass="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary"><EditableText id="home.svc.social.title" as="span">Social Media Management</EditableText></h3>
                    <EditableText id="home.svc.social.sub" as="p" className="text-sm text-muted-foreground">Content that performs. Communities that grow.</EditableText>
                  </div>
                </div>
                <EditableText id="home.svc.social.body" as="p" className="mt-5 min-h-[5rem] leading-relaxed text-muted-foreground" block>
                  We distribute, schedule, manage, and optimize content across the platforms that shape awareness, engagement, and customer growth.
                </EditableText>

                <EditableText id="home.svc.social.lbl1" as="span" className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Content Distribution</EditableText>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {DISTRIBUTION.map((p, i) => (
                    <div key={i} className="group flex h-[74px] items-center gap-2 overflow-hidden rounded-xl border border-border bg-background/60 p-3 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm">
                      <span className="dist-icon grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card ring-1 ring-border transition-colors group-hover:bg-accent/5">
                        <EditableIcon id={`home.svc.social.dist.${i}.icon`} markup={p.brand ? BRAND_MARKUP[p.brand] : undefined} as={p.icon ? LUCIDE[p.icon] : undefined} iconClass="h-5 w-5" colorClass={p.icon ? 'text-accent' : undefined} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <EditableText id={`home.svc.social.dist.${i}.n`} as="strong" className="block truncate text-sm font-semibold text-primary" block>{p.name}</EditableText>
                        <EditableText id={`home.svc.social.dist.${i}.note`} as="span" className="block truncate text-xs text-muted-foreground" block>{p.note}</EditableText>
                      </div>
                    </div>
                  ))}
                </div>

                <EditableText id="home.svc.social.lbl2" as="span" className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Performance Optimization</EditableText>
                <div className="mt-3 grid gap-3">
                  {OPTIMIZATION.map((p, i) => (
                    <div key={i} className="group flex items-center gap-3 rounded-xl border border-border bg-background/60 p-3 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm">
                      <span className="dist-icon grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-card ring-1 ring-border transition-colors group-hover:bg-accent/5">
                        <EditableIcon id={`home.svc.social.opt.${i}.icon`} markup={BRAND_MARKUP[p.brand]} iconClass="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <EditableText id={`home.svc.social.opt.${i}.n`} as="strong" className="block text-sm font-semibold text-primary" block>{p.name}</EditableText>
                        <EditableText id={`home.svc.social.opt.${i}.note`} as="span" className="text-xs leading-snug text-muted-foreground" block>{p.note}</EditableText>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {['Publishing', 'Scheduling', 'Community management', 'Paid distribution', 'Analytics'].map((t, i) => (
                    <EditableText key={i} id={`home.svc.social.tag.${i}`} as="span" className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</EditableText>
                  ))}
                </div>
                </div>
              </article>
            </Movable>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-secondary/50 px-6 py-5 text-center text-sm font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <EditableIcon id="home.rel.1.icon" as={LUCIDE.Clapperboard} iconClass="h-4 w-4" colorClass="text-accent" />
              <EditableText id="home.rel.1" as="span">Production creates the asset</EditableText>
            </span>
            <span className="text-accent">→</span>
            <span className="inline-flex items-center gap-2">
              <EditableIcon id="home.rel.2.icon" as={LUCIDE.Share2} iconClass="h-4 w-4" colorClass="text-accent" />
              <EditableText id="home.rel.2" as="span">Distribution creates the audience</EditableText>
            </span>
            <span className="text-accent">→</span>
            <span className="inline-flex items-center gap-2">
              <EditableIcon id="home.rel.3.icon" as={LUCIDE.BarChart3} iconClass="h-4 w-4" colorClass="text-accent" />
              <EditableText id="home.rel.3" as="span">Optimization creates growth</EditableText>
            </span>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <EditableText id="home.svc.footnote" as="span">Services are available either separately or as a package.</EditableText>
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/30 py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow"><EditableText id="home.work.eyebrow" as="span">Featured Work</EditableText></span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                <EditableText id="home.work.h2" as="span" block>Stories That Build Brands.</EditableText>
              </h2>
            </div>
            <EditableText id="home.work.intro" as="p" className="text-muted-foreground md:text-right" block>
              Featured projects from our in-house media brand, Slice of Hawaiʻi, where cinematic production and strategic storytelling come together to help local businesses reach larger audiences.
            </EditableText>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {WORK.map((w, i) => (
              <Movable key={i} id={`home.work.${i}`}>
                <a href={w.href} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-3xl border border-border">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={w.thumb} alt={w.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
                    <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-background/90 text-primary backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-background">
                    <EditableText id={`home.work.${i}.tag`} as="span" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background/80">{w.tag}</EditableText>
                    <h3 className="mt-1 font-heading text-2xl font-bold"><EditableText id={`home.work.${i}.t`} as="span">{w.title}</EditableText></h3>
                    <EditableText id={`home.work.${i}.d`} as="p" className="mt-1 max-w-md text-sm text-background/85" block>{w.desc}</EditableText>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">Watch on YouTube <ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                </a>
              </Movable>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-primary">
        <div className="container-wide py-6 sm:py-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-background/15">
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-3 lg:px-5 lg:first:pl-0 lg:last:pr-0">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <EditableIcon id={`home.stat.${i}.icon`} as={LUCIDE[s.icon]} iconClass="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="font-heading text-2xl font-extrabold leading-none text-background">
                    <EditableText id={`home.stat.${i}.v`} as="span">{s.value}</EditableText>
                  </div>
                  <EditableText id={`home.stat.${i}.l`} as="p" className="mt-1 text-xs leading-snug text-background/70" block>{s.label}</EditableText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section id="about" className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src={ABOUT_IMG} alt="On-location production in Honolulu, Hawaiʻi" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-primary/15" />
            <div className="relative flex min-h-[440px] flex-col justify-end p-8 sm:p-10">
              <img src={BRAND_LOGO} alt="WeWave Socials" className="pointer-events-none absolute left-8 top-8 h-14 w-14 rounded-full object-cover opacity-90 ring-1 ring-background/30 sm:left-10 sm:top-10" />
              <span className="eyebrow text-background/80"><EditableText id="home.about.eyebrow" as="span">About Us</EditableText></span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-background sm:text-4xl">
                <EditableText id="home.about.h2" as="span" block>Creative production with a clear business purpose.</EditableText>
              </h2>
              <div className="mt-5 rounded-2xl border border-background/20 bg-background/10 p-4 backdrop-blur-sm">
                <EditableText id="home.about.badge.t" as="strong" className="block font-heading font-bold text-background" block>One integrated team.</EditableText>
                <EditableText id="home.about.badge.s" as="span" className="text-sm text-background/80" block>Strategy. Production. Distribution. Optimization.</EditableText>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-background/80">
                <svg viewBox="0 0 64 20" className="h-5 w-16 shrink-0 text-accent" fill="currentColor" aria-hidden="true">
                  <circle cx="4" cy="10" r="1.2" />
                  <circle cx="11" cy="9.5" r="2.6" />
                  <path d="M20 8.4q3.6-3 6.6.9 1 3-3.6 3-4 0-3-3.9z" />
                  <circle cx="33" cy="11" r="1.7" />
                  <circle cx="38" cy="10.5" r="1.4" />
                  <path d="M43.5 9q3.2-4.6 6.6-.1.8 3-3 2.6-4 0-3.6-2.5z" />
                  <ellipse cx="57" cy="11" rx="6.5" ry="5.4" />
                </svg>
                <EditableText id="home.about.loc" as="span">Based in Honolulu, Hawaiʻi</EditableText>
              </div>
            </div>
          </div>

          <div>
            <EditableText id="home.about.p1" as="p" className="text-lg leading-relaxed text-muted-foreground" block>
              We combine cinematic production, social media management, and business strategy so clients do not need separate vendors working in silos.
            </EditableText>
            <EditableText id="home.about.p2" as="p" className="mt-4 text-lg leading-relaxed text-muted-foreground" block>
              Every idea, shoot, edit, and distribution decision is built around awareness, trust, customer action, and long-term growth.
            </EditableText>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {TEAM.map((m, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5">
                  <EditableText id={`home.about.team.${i}.n`} as="strong" className="block font-heading text-base font-bold text-primary" block>{m.name}</EditableText>
                  <EditableText id={`home.about.team.${i}.r`} as="span" className="text-xs font-semibold uppercase tracking-wide text-accent" block>{m.role}</EditableText>
                  <EditableText id={`home.about.team.${i}.d`} as="p" className="mt-2 text-sm leading-snug text-muted-foreground" block>{m.desc}</EditableText>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
              Learn more about the team <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
              <div className="min-w-0">
                <a href="tel:+16179810000" className="font-heading text-lg font-bold text-primary hover:text-accent">617-981-0000</a>
                <EditableText id="home.about.phone.note" as="p" className="text-xs leading-snug text-muted-foreground" block>617 area code — proudly serving the 808 across Honolulu and all of Hawaiʻi.</EditableText>
              </div>
            </div>
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
              <EditableText id="home.cta.kicker" as="small" className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/70">Contact Us</EditableText>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-background sm:text-5xl">
                <EditableText id="home.cta.h2" as="span" block>Let’s build content that converts.</EditableText>
              </h2>
              <EditableText id="home.cta.copy" as="p" className="mt-5 text-background/80 sm:text-lg" block>
                Tell us where your brand needs more attention, stronger storytelling, better social management, or more customer action.
              </EditableText>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="mailto:hello@wewavesocials.com?subject=Content%20Project%20Inquiry" className="btn-gold">
                  <EditableText id="home.cta.btn1" as="span">Start a conversation</EditableText> <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link to="/ecosystem" className="btn-ghost border-background/20 bg-background/10 text-background hover:border-background/40">
                  <EditableText id="home.cta.btn2" as="span">Review the Smart Ecosystem</EditableText>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}