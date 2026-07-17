import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Layers, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-wide py-16 text-center sm:py-24">
          <span className="eyebrow justify-center">Contact Us</span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">
            Let’s build content<br />that converts.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us where your brand needs more attention, stronger storytelling, better social management, or more customer action.
          </p>
        </div>
      </section>

      {/* Contact card */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-tropical/10 blur-3xl" />
              <span className="eyebrow">Start a Conversation</span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">One project. One system. One team.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Share your business, goals, current social presence, and what you want the content to accomplish. We’ll recommend the right starting point.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:hello@bizcatcreative.com?subject=Content%20Project%20Inquiry" className="btn-gold">Email us <ArrowUpRight className="h-4 w-4" /></a>
                <Link to="/ecosystem" className="btn-ghost">Review the Smart Ecosystem</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></span>
                <small className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Location</small>
                <strong className="mt-1 block font-heading text-lg font-bold text-primary">Honolulu, Hawaiʻi</strong>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground"><Layers className="h-5 w-5" /></span>
                <small className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Services</small>
                <strong className="mt-1 block font-heading text-lg font-bold text-primary">Production + Social Media Management</strong>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tropical text-tropical-foreground"><Mail className="h-5 w-5" /></span>
                <small className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Email</small>
                <a href="mailto:hello@bizcatcreative.com" className="mt-1 block font-heading text-lg font-bold text-primary hover:text-accent">hello@bizcatcreative.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}