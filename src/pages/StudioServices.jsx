import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Camera, Music2, PenTool, Sparkles, Check, Building2 } from 'lucide-react';
import { EditableText, EditableIcon, Movable, LUCIDE } from '@/components/edit/Editable';

const SERVICES = [
  {
    icon: 'Camera',
    title: 'Photography',
    sub: 'Still images with a cinematic eye.',
    body:
      'Product, food, event, and brand photography shot on the same cameras and lighting we use for film — so your stills match your video.',
    included: [
      'Product & food',
      'Brand & headshots',
      'Event coverage',
      'Editing & retouching',
      'Same-day selects',
    ],
    tags: ['Product', 'Food', 'Headshots', 'Events'],
    img: null,
  },
  {
    icon: 'PenTool',
    title: 'Logo & Brand Design',
    sub: 'Identity that ties it all together.',
    body:
      'Logos, color, typography, and brand kits that make your video, web, and social feel like one brand across every touchpoint.',
    included: [
      'Logo design',
      'Brand identity',
      'Color & typography',
      'Brand kit & guidelines',
      'Social templates',
    ],
    tags: ['Logos', 'Identity', 'Guidelines', 'Templates'],
    img: null,
  },
  {
    icon: 'Music2',
    title: 'Custom Audio',
    sub: 'Recording, voiceover, and sound design.',
    body:
      'Voiceover, podcast recording, music beds, and sound design — recorded, mixed, and delivered ready for any platform.',
    included: [
      'Voiceover recording',
      'Podcast production',
      'Music & sound design',
      'Mixing & mastering',
      'Format delivery for every platform',
    ],
    tags: ['Voiceover', 'Podcasts', 'Sound design', 'Mixing'],
    img: null,
  },
  {
    icon: 'Globe',
    title: 'Web Design & Hosting',
    sub: 'Websites built, launched, and maintained.',
    body:
      'From a single landing page to a full site, we design, build, and host your web presence — and handle domains and custom email setup so everything lives under one roof.',
    included: [
      'Custom web design',
      'Responsive build',
      'Hosting & SSL',
      'Domain & custom email setup',
      'Ongoing updates and maintenance',
    ],
    tags: ['Landing pages', 'Business sites', 'Portfolio sites', 'Maintenance'],
    img: null,
  },
];

const MORE = [
  'Drone & aerial',
  'Live streaming',
  'Music videos',
  'Artist & label content',
  'Motion graphics',
  'Color grading',
  'Event coverage',
  'Voiceover casting',
  'Podcast launch',
  'Album & cover art',
  'Social templates',
  'Print & flyers',
];

const ICONS = { Globe, Camera, Music2, PenTool };

export default function StudioServices() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="container-wide py-16 text-center sm:py-24">
          <span className="eyebrow justify-center"><Sparkles className="h-3.5 w-3.5" />
            <EditableText id="studio.hero.eyebrow" as="span">Studio Services</EditableText>
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">
            <EditableText id="studio.hero.h1" as="span" block>Everything the studio<br />can do for you.</EditableText>
          </h1>
          <EditableText id="studio.hero.sub" as="p" className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground" block>
            Beyond content and social, our cameras, studio, and recording gear handle the rest — web design, photography, custom audio, branding, and more.
          </EditableText>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary"><Check className="h-4 w-4 text-accent" /> Corporate & commercial</span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary"><Check className="h-4 w-4 text-accent" /> Artists & music videos</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="mb-12 grid gap-8 border-b border-border pb-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <span className="eyebrow"><EditableText id="studio.svc.eyebrow" as="span">Ancillary Services</EditableText></span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                <EditableText id="studio.svc.h2" as="span" block>One studio, a full creative toolkit.</EditableText>
              </h2>
            </div>
            <EditableText id="studio.svc.intro" as="p" className="text-muted-foreground md:text-right" block>
              Each service is available on its own or as an add-on to any content package — so your brand stays consistent across video, web, audio, and design.
            </EditableText>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Movable key={i} id={`studio.svc.${i}`}>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary to-primary/70">
                      {s.img && <img src={s.img} alt="" className="absolute inset-0 h-full w-full object-cover ken-burns" loading="lazy" />}
                      {!s.img && <Icon className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-primary-foreground/10" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <span className="absolute left-6 top-6 grid h-14 w-14 place-items-center rounded-2xl bg-background/90 text-primary">
                        <EditableIcon id={`studio.svc.${i}.icon`} as={Icon} iconClass="h-7 w-7" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7 sm:p-9">
                      <h3 className="font-heading text-xl font-bold text-primary"><EditableText id={`studio.svc.${i}.t`} as="span">{s.title}</EditableText></h3>
                      <EditableText id={`studio.svc.${i}.sub`} as="p" className="text-sm text-muted-foreground">{s.sub}</EditableText>
                      <EditableText id={`studio.svc.${i}.body`} as="p" className="mt-5 min-h-[5rem] leading-relaxed text-muted-foreground" block>{s.body}</EditableText>

                      <EditableText id={`studio.svc.${i}.lbl`} as="span" className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>What’s included</EditableText>
                      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                        {s.included.map((it, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-foreground">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <EditableText id={`studio.svc.${i}.item.${j}`} as="span" block>{it}</EditableText>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {s.tags.map((t, j) => (
                          <EditableText key={j} id={`studio.svc.${i}.tag.${j}`} as="span" className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">{t}</EditableText>
                        ))}
                      </div>
                    </div>
                  </article>
                </Movable>
              );
            })}
          </div>

          {/* In-house studio + island network */}
          <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-accent/30 bg-accent/5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground"><Building2 className="h-6 w-6" /></span>
              <div>
                <h3 className="font-heading text-lg font-bold text-primary"><EditableText id="studio.net.t" as="span">An in-house studio — and an island-wide network.</EditableText></h3>
                <EditableText id="studio.net.d" as="p" className="mt-1 text-sm leading-relaxed text-muted-foreground" block>We own and operate our in-house studio, and we have great relationships with every other physical studio location and creator on the island — so whatever your project needs, we can make it happen.</EditableText>
              </div>
            </div>
          </div>

          {/* More from the studio */}
          <div className="mt-14 rounded-3xl border border-border bg-secondary/40 p-7 sm:p-9">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-heading text-xl font-bold text-primary"><EditableText id="studio.more.t" as="span">More from the studio</EditableText></h3>
              <EditableText id="studio.more.sub" as="p" className="text-sm text-muted-foreground" block>If a camera, mic, or computer can do it, we probably can too — just ask. And if we can’t do it, we’ll connect you to the right people at no cost.</EditableText>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {MORE.map((m, i) => (
                <EditableText key={i} id={`studio.more.${i}`} as="span" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {m}
                </EditableText>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-primary sm:text-2xl"><EditableText id="studio.cta.h2" as="span">Need something the studio can handle?</EditableText></h2>
              <EditableText id="studio.cta.p" as="p" className="mt-1 text-sm text-muted-foreground" block>Tell us what you have in mind — we’ll let you know if it’s a fit.</EditableText>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}