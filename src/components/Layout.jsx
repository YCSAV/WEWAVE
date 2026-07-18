import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { EditProvider } from '@/components/edit/EditProvider';
import { EditableText } from '@/components/edit/Editable';
import EditToolbar from '@/components/edit/EditToolbar';
import AccountMenu from '@/components/layout/AccountMenu';
import MobileTabBar from '@/components/layout/MobileTabBar';

const BRAND_LOGO = 'https://media.base44.com/images/public/6a5a1601b834ac73c4093efe/1c120a191_WeWaveSocialsStorefrontLogo.png';

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Smart Ecosystem', to: '/ecosystem' },
  { label: 'Studio Services', to: '/studio-services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  const navigate = useNavigate();

  const isRoot = loc.pathname === '/';
  const current = NAV.find(n => n.to === loc.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <EditProvider>
      <div className="min-h-screen bg-background text-foreground" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <header className={`sticky top-0 z-50 safe-pt transition-all ${scrolled ? 'bg-background/85 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
          <div className="container-wide flex h-[68px] items-center justify-between gap-6 safe-px">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full ring-1 ring-border bg-card">
                <img src={BRAND_LOGO} alt="WeWave Socials" className="h-full w-full scale-110 object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <EditableText id="nav.brand.name" as="span" className="font-heading text-[17px] font-extrabold tracking-tight text-primary">WeWave Socials</EditableText>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map((n) => {
                const active = loc.pathname === n.to;
                return (
                  <Link key={n.to} to={n.to}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
                    style={{ minHeight: 44 }}>
                    {n.label}
                    {active && <span className="absolute inset-x-4 -bottom-px h-px bg-accent" />}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <AccountMenu />
              <Link to="/contact" className="btn-gold" style={{ minHeight: 44 }}>Start a project <ArrowUpRight className="h-4 w-4" /></Link>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <AccountMenu />
              <button onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-border" style={{ minHeight: 44, minWidth: 44 }} aria-label="Menu">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-border bg-background md:hidden">
              <div className="container-wide safe-px flex flex-col gap-1 py-4">
                {NAV.map((n) => (
                  <Link key={n.to} to={n.to}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${loc.pathname === n.to ? 'bg-secondary text-primary' : 'text-muted-foreground'}`}
                    style={{ minHeight: 44 }}>
                    {n.label}
                  </Link>
                ))}
                <Link to="/contact" className="btn-gold mt-2 w-full" style={{ minHeight: 44 }}>Start a project <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          )}

          {/* Mobile back bar for non-root sub-routes */}
          {!isRoot && (
            <div className="border-t border-border bg-background/85 backdrop-blur-xl md:hidden">
              <div className="container-wide safe-px flex items-center gap-2 py-2">
                <button onClick={() => navigate(-1)} className="grid h-11 w-11 place-items-center rounded-full border border-border" style={{ minHeight: 44, minWidth: 44 }} aria-label="Back">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <span className="font-heading text-base font-bold text-primary">{current?.label || 'Back'}</span>
              </div>
            </div>
          )}
        </header>

        <main>
          <div key={loc.pathname} className="page-transition">
            <Outlet />
          </div>
        </main>

        <footer className="relative mt-24 border-t border-border bg-secondary/40" style={{ paddingBottom: 'calc(5rem + env(safe-area-inset-bottom, 0px))' }}>
          <div className="container-wide py-14 safe-px">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
              <div className="max-w-sm">
                <Link to="/" className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full ring-1 ring-border bg-card">
                    <img src={BRAND_LOGO} alt="WeWave Socials" className="h-full w-full scale-110 object-cover" />
                  </span>
                  <EditableText id="footer.brand" as="span" className="font-heading text-[17px] font-extrabold tracking-tight text-primary">WeWave Socials</EditableText>
                </Link>
                <EditableText id="footer.tagline" as="p" className="mt-4 text-sm leading-relaxed text-muted-foreground" block>
                  Content built to convert — cinematic production and social media management under one roof, in Honolulu, Hawaiʻi.
                </EditableText>
              </div>

              <nav className="flex flex-wrap gap-x-10 gap-y-3 text-sm">
                {NAV.map(n => (
                  <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-primary" style={{ minHeight: 44 }}>{n.label}</Link>
                ))}
              </nav>

              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-primary">Honolulu, Hawaiʻi</p>
                <a href="mailto:sliceofhawaii@gmail.com" className="mt-2 inline-block text-muted-foreground hover:text-accent transition-colors" style={{ minHeight: 44 }}>sliceofhawaii@gmail.com</a>
                <a href="tel:+16179810000" className="mt-1 block text-muted-foreground hover:text-accent transition-colors" style={{ minHeight: 44 }}>617-981-0000</a>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
              <span>© {new Date().getFullYear()} WeWave Socials — temporary working brand</span>
              <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-full ring-1 ring-border bg-card">
                <img src={BRAND_LOGO} alt="WeWave Socials watermark" className="h-full w-full scale-110 object-cover opacity-80" />
              </span>
            </div>
          </div>
        </footer>

        <MobileTabBar />
        <EditToolbar />
      </div>
    </EditProvider>
  );
}