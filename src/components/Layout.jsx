import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const SLICE_LOGO = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/040f619ea_slice-logo-watermark.png';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Smart Ecosystem', to: '/ecosystem' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
        <div className="container-wide flex h-[68px] items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full ring-1 ring-border bg-card">
              <img src={SLICE_LOGO} alt="Slice of Hawaiʻi" className="h-full w-full object-cover" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Content & Social</span>
              <span className="font-heading text-[17px] font-extrabold tracking-tight text-primary">BizCat Creative</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => {
              const active = loc.pathname === n.to;
              return (
                <Link key={n.to} to={n.to}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
                  {n.label}
                  {active && <span className="absolute inset-x-4 -bottom-px h-px bg-accent" />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-gold">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <button onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container-wide flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${loc.pathname === n.to ? 'bg-secondary text-primary' : 'text-muted-foreground'}`}>
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-gold mt-2 w-full">Start a project <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="relative mt-24 border-t border-border bg-secondary/40">
        <div className="container-wide py-14">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Link to="/" className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full ring-1 ring-border bg-card">
                  <img src={SLICE_LOGO} alt="Slice of Hawaiʻi" className="h-full w-full object-cover" />
                </span>
                <span className="font-heading text-[17px] font-extrabold tracking-tight text-primary">BizCat Creative</span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Content built to convert — cinematic production and social media management under one roof, in Honolulu, Hawaiʻi.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
              {NAV.map(n => (
                <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-primary">{n.label}</Link>
              ))}
            </nav>

            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-primary">Honolulu, Hawaiʻi</p>
              <a href="mailto:hello@bizcatcreative.com" className="mt-2 inline-block text-muted-foreground hover:text-accent transition-colors">hello@bizcatcreative.com</a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} BizCat Creative — temporary working brand</span>
            <img src={SLICE_LOGO} alt="Slice of Hawaiʻi watermark" className="h-9 w-9 rounded-full opacity-80 ring-1 ring-border" />
          </div>
        </div>
      </footer>
    </div>
  );
}