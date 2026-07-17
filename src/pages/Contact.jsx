import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Layers, Mail, Phone } from 'lucide-react';
import { EditableText } from '@/components/edit/Editable';

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/30">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-wide py-16 text-center sm:py-24">
          <span className="eyebrow justify-center"><EditableText id="contact.hero.eyebrow" as="span">Contact Us</EditableText></span>
          <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-primary">
            <EditableText id="contact.hero.h1" as="span" block>Let’s build content<br />that converts.</EditableText>
          </h1>
          <EditableText id="contact.hero.sub" as="p" className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground" block>
            Tell us where your brand needs more attention, stronger storytelling, better social management, or more customer action.
          </EditableText>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-tropical/10 blur-3xl" />
              <span className="eyebrow"><EditableText id="contact.card.eyebrow" as="span">Start a Conversation</EditableText></span>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                <EditableText id="contact.card.h2" as="span" block>One project. One system. One team.</EditableText>
              </h2>
              <EditableText id="contact.card.p" as="p" className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground" block>
                Share your business, goals, current social presence, and what you want the content to accomplish. We’ll recommend the right starting point.
              </EditableText>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:sliceofhawaii@email.com?subject=Content%20Project%20Inquiry" className="btn-gold">
                  <EditableText id="contact.card.btn1" as="span">Email us</EditableText> <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link to="/ecosystem" className="btn-ghost"><EditableText id="contact.card.btn2" as="span">Review the Smart Ecosystem</EditableText></Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></span>
                <EditableText id="contact.info.loc.lbl" as="small" className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Location</EditableText>
                <EditableText id="contact.info.loc.val" as="strong" className="mt-1 block font-heading text-lg font-bold text-primary" block>Honolulu, Hawaiʻi</EditableText>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-accent-foreground"><Layers className="h-5 w-5" /></span>
                <EditableText id="contact.info.svc.lbl" as="small" className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Services</EditableText>
                <EditableText id="contact.info.svc.val" as="strong" className="mt-1 block font-heading text-lg font-bold text-primary" block>Production + Social Media Management</EditableText>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-tropical text-tropical-foreground"><Mail className="h-5 w-5" /></span>
                <EditableText id="contact.info.email.lbl" as="small" className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Email</EditableText>
                <a href="mailto:sliceofhawaii@email.com" className="mt-1 block font-heading text-lg font-bold text-primary hover:text-accent">sliceofhawaii@email.com</a>
              </div>
              <div className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
                <EditableText id="contact.info.phone.lbl" as="small" className="mt-4 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground" block>Phone</EditableText>
                <a href="tel:+16179810000" className="mt-1 block font-heading text-lg font-bold text-primary hover:text-accent">617-981-0000</a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            <EditableText id="contact.footnote" as="span">Our phone number shows a 617 area code, but we proudly serve businesses across the 808 — Honolulu and all of Hawaiʻi.</EditableText>
          </p>
        </div>
      </section>
    </>
  );
}