import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Camera, Sparkles } from 'lucide-react';
import { EditableText } from '@/components/edit/Editable';

const SLICE_LOGO = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/040f619ea_slice-logo-watermark.png';

const PEOPLE = [
  { name: 'Jay Ham', role: 'Founder & Creative Director', desc: 'Creative direction, strategy, client relationships, social media management, and campaign development.', icon: Sparkles },
  { name: 'Drake Dela Cruz', role: 'Partner & Head Videographer', desc: 'Cinematography, production, visual execution, lighting, and lead camera direction.', icon: Camera },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-tropical/15 blur-3xl" />
        <div className="container-wide py-16 text-center sm:py-24">
          <span className="eyebrow justify-center"><EditableText id="about.hero.eyebrow" as="span">About Us</EditableText></span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">
            <EditableText id="about.hero.h1" as="span" block>Production and growth<br />under one roof.</EditableText>
          </h1>
          <EditableText id="about.hero.sub" as="p" className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground" block>
            We combine creator instincts, cinematic production, social media management, and business strategy into one integrated team.
          </EditableText>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/40 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground"><Users className="h-7 w-7" /></span>
              <div>
                <EditableText id="about.badge.t" as="strong" className="block font-heading text-lg font-bold text-primary" block>One integrated team.</EditableText>
                <EditableText id="about.badge.s" as="span" className="text-sm text-muted-foreground" block>Strategy. Production. Distribution. Optimization.</EditableText>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl ring-1 ring-border">
                  <img src={SLICE_LOGO} alt="" className="h-full w-full object-cover opacity-90" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow"><EditableText id="about.body.eyebrow" as="span">The Team</EditableText></span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
              <EditableText id="about.body.h2" as="span" block>Creators who understand the business objective.</EditableText>
            </h2>
            <EditableText id="about.body.p1" as="p" className="mt-5 text-lg leading-relaxed text-muted-foreground" block>
              We do not make disconnected videos. Every idea, shoot, edit, and distribution decision is designed around awareness, trust, customer action, and long-term brand growth.
            </EditableText>
            <EditableText id="about.body.p2" as="p" className="mt-4 text-lg leading-relaxed text-muted-foreground" block>
              Clients get one coordinated partner instead of separate production, social media, and advertising vendors working in silos.
            </EditableText>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 py-16 sm:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="eyebrow"><EditableText id="about.team.eyebrow" as="span">Who You Work With</EditableText></span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
              <EditableText id="about.team.h2" as="span" block>Two operators. One standard.</EditableText>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PEOPLE.map((p, i) => {
              const Icon = p.icon;
              return (
                <article key={i} className="flex flex-col rounded-3xl border border-border bg-card p-7 sm:p-8">
                  <div className="flex items-start gap-5">
                    <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-tropical text-primary-foreground">
                      <Icon className="h-9 w-9" />
                    </div>
                    <div>
                      <EditableText id={`about.team.${i}.r`} as="small" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent" block>{p.role}</EditableText>
                      <h3 className="mt-1 font-heading text-2xl font-extrabold tracking-tight text-primary"><EditableText id={`about.team.${i}.n`} as="span">{p.name}</EditableText></h3>
                    </div>
                  </div>
                  <EditableText id={`about.team.${i}.d`} as="p" className="mt-5 leading-relaxed text-muted-foreground" block>{p.desc}</EditableText>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card px-6 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-primary sm:text-2xl"><EditableText id="about.cta.h2" as="span">Want to see how we’d work together?</EditableText></h2>
              <EditableText id="about.cta.p" as="p" className="mt-1 text-sm text-muted-foreground" block>Tell us about your brand — we’ll show you where content and social can move the needle.</EditableText>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}