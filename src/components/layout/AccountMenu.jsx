import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { base44 } from '@/api/base44Client';
import { UserCircle, LogOut, Trash2, ChevronDown, X } from 'lucide-react';

export default function AccountMenu() {
  const { user, isAuthenticated, logout, navigateToLogin } = useAuth();
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  if (!isAuthenticated) {
    return (
      <button onClick={() => navigateToLogin()} className="btn-ghost text-sm" style={{ minHeight: 44 }}>
        <UserCircle className="h-4 w-4" /> Sign in
      </button>
    );
  }

  const initial = (user?.full_name?.[0] || user?.email?.[0] || 'U').toUpperCase();

  const doDelete = async () => {
    setBusy(true);
    try {
      await base44.functions.invoke('deleteAccount', {});
    } catch (e) { /* best-effort; proceed to sign-out */ }
    setBusy(false);
    setConfirming(false);
    logout(false);
    window.location.href = '/';
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 rounded-full border border-border bg-card px-2.5"
        style={{ minHeight: 44 }}
        aria-label="Account"
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">{initial}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-border bg-card p-2 shadow-lg z-50">
          <div className="px-3 py-2">
            <p className="truncate text-sm font-semibold text-primary">{user?.full_name || 'Account'}</p>
            <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
          </div>
          <div className="my-1 h-px bg-border" />
          <button
            onClick={() => logout(true)}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
            style={{ minHeight: 44 }}
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
          <button
            onClick={() => { setOpen(false); setConfirming(true); }}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10"
            style={{ minHeight: 44 }}
          >
            <Trash2 className="h-4 w-4" /> Delete account
          </button>
        </div>
      )}

      {confirming && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-primary/40 p-5" onClick={() => !busy && setConfirming(false)}>
          <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-primary">Delete account</h3>
              <button onClick={() => setConfirming(false)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary" aria-label="Close"><X className="h-4 w-4" /></button>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This permanently deletes your account and removes your data from WeWave Socials. This action cannot be undone.
            </p>
            <div className="mt-5 flex gap-2">
              <button onClick={() => setConfirming(false)} disabled={busy} className="btn-ghost flex-1" style={{ minHeight: 44 }}>Cancel</button>
              <button
                onClick={doDelete}
                disabled={busy}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-destructive px-5 py-3 text-sm font-semibold text-destructive-foreground disabled:opacity-60"
                style={{ minHeight: 44 }}
              >
                {busy ? 'Deleting…' : 'Delete permanently'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}