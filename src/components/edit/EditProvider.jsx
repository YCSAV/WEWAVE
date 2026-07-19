import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';

const STORAGE_KEY = 'wewave-edits:v1';
const EMPTY = { text: {}, pos: {}, icons: {} };

const applyRecord = (store, r) => {
  if (r.kind === 'text') store.text[r.key] = r.text;
  else if (r.kind === 'pos') store.pos[r.key] = { x: r.pos_x, y: r.pos_y };
  else if (r.kind === 'icon' && r.icon) {
    try { store.icons[r.key] = JSON.parse(r.icon); } catch {}
  }
};

const EditContext = createContext(null);

export function EditProvider({ children }) {
  const [editMode, setEditMode] = useState(false);
  const [layoutMode, setLayoutMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [clipboard, setClipboard] = useState(null);
  const [store, setStore] = useState(EMPTY);
  // key -> { id, kind }
  const idMap = useRef({});

  // The saved source is the single canonical version. On load, drop any leftover
  // per-browser overrides, then read shared overrides from the DB — that's where
  // edits persist and sync across every device and every login.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      try {
        const records = await base44.entities.SiteContent.list('-created_date', 1000);
        if (cancelled) return;
        const next = { text: {}, pos: {}, icons: {} };
        const map = {};
        for (const r of records) {
          if (!r || !r.key) continue;
          map[r.key] = { id: r.id, kind: r.kind };
          applyRecord(next, r);
        }
        idMap.current = map;
        if (!cancelled) setStore(next);
      } catch {
        if (!cancelled) setStore(EMPTY);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const upsert = useCallback(async (key, kind, fields) => {
    const entry = idMap.current[key];
    try {
      if (entry?.id) {
        await base44.entities.SiteContent.update(entry.id, fields);
      } else {
        const r = await base44.entities.SiteContent.create({ key, kind, ...fields });
        if (r && r.id) idMap.current[key] = { id: r.id, kind };
      }
    } catch {}
  }, []);

  const setText = useCallback((id, html) => {
    setStore(p => ({ ...p, text: { ...(p.text || {}), [id]: html } }));
    upsert(id, 'text', { text: html });
  }, [upsert]);

  const setPos = useCallback((id, x, y) => {
    setStore(p => ({ ...p, pos: { ...(p.pos || {}), [id]: { x, y } } }));
    upsert(id, 'pos', { pos_x: x, pos_y: y });
  }, [upsert]);

  const setIcon = useCallback((id, value) => {
    setStore(p => ({ ...p, icons: { ...(p.icons || {}), [id]: value } }));
    upsert(id, 'icon', { icon: JSON.stringify(value) });
  }, [upsert]);

  const clearIcon = useCallback((id) => {
    setStore(p => {
      const icons = { ...(p.icons || {}) };
      delete icons[id];
      return { ...p, icons };
    });
    const entry = idMap.current[id];
    if (entry?.id) {
      base44.entities.SiteContent.delete(entry.id).catch(() => {});
      delete idMap.current[id];
    }
  }, []);

  // Copy / paste — session-local only (transient, not persisted).
  const copyText = useCallback((id) =>
    setClipboard({ kind: 'text', value: store.text?.[id] ?? null }), [store.text]);

  const pasteText = useCallback((id) => {
    if (clipboard?.kind !== 'text' || clipboard.value == null) return false;
    setText(id, clipboard.value);
    return true;
  }, [clipboard, setText]);

  const copyIcon = useCallback((id) =>
    setClipboard({ kind: 'icon', value: store.icons?.[id] ?? null }), [store.icons]);

  const pasteIcon = useCallback((id) => {
    if (clipboard?.kind !== 'icon' || clipboard.value == null) return false;
    setIcon(id, clipboard.value);
    return true;
  }, [clipboard, setIcon]);

  const dropFromMap = (predicate) => {
    const m = {};
    for (const [k, v] of Object.entries(idMap.current)) if (!predicate(v)) m[k] = v;
    idMap.current = m;
  };

  const resetText = useCallback(async () => {
    setStore(p => ({ ...p, text: {} }));
    try {
      await base44.entities.SiteContent.deleteMany({ kind: 'text' });
      dropFromMap((v) => v.kind === 'text');
    } catch {}
  }, []);

  const resetLayout = useCallback(async () => {
    setStore(p => ({ ...p, pos: {}, icons: {} }));
    try {
      await base44.entities.SiteContent.deleteMany({ kind: { $in: ['pos', 'icon'] } });
      dropFromMap((v) => v.kind === 'pos' || v.kind === 'icon');
    } catch {}
  }, []);

  const resetAll = useCallback(async () => {
    const ids = Object.values(idMap.current).map((v) => v.id).filter(Boolean);
    setStore(EMPTY);
    setEditMode(false);
    setLayoutMode(false);
    setSelectedIcon(null);
    setSelectedText(null);
    setClipboard(null);
    idMap.current = {};
    if (ids.length) {
      try { await base44.entities.SiteContent.deleteMany({ id: { $in: ids } }); } catch {}
    }
  }, []);

  const value = {
    editMode, setEditMode,
    layoutMode, setLayoutMode,
    selectedIcon, setSelectedIcon,
    selectedText, setSelectedText,
    clipboard,
    store,
    setText, setPos, setIcon, clearIcon,
    copyText, pasteText, copyIcon, pasteIcon,
    resetText, resetLayout, resetAll,
  };

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>;
}

export const useEdit = () => {
  const ctx = useContext(EditContext);
  if (!ctx) throw new Error('useEdit must be used within EditProvider');
  return ctx;
};