import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Sprout, Info, Mail } from 'lucide-react';

const TABS = [
  { to: '/', label: 'Home', icon: HomeIcon, exact: true },
  { to: '/ecosystem', label: 'Ecosystem', icon: Sprout },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Mail },
];

export default function MobileTabBar() {
  const loc = useLocation();
  return (
    <nav className="mobile-tab fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
      <div className="safe-px" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
        <div className="mx-auto grid max-w-md grid-cols-4 gap-1 pt-2">
          {TABS.map((t) => {
            const active = t.exact ? loc.pathname === t.to : loc.pathname.startsWith(t.to);
            const Icon = t.icon;
            return (
              <NavLink
                key={t.to}
                to={t.to}
                className={`flex flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10px] font-medium transition-colors ${active ? 'text-accent' : 'text-muted-foreground'}`}
                style={{ minHeight: 48 }}
              >
                <Icon className="h-5 w-5" />
                {t.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}