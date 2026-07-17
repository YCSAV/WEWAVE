import React, { createContext, useContext, useState, useCallback } from 'react';

const STORAGE_KEY = 'wewave-edits:v1';

const load = () => {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
};

const EditContext = createContext(null);

export function EditProvider({ children }) {
  const [editMode, setEditMode] = useState(false);
  const [layoutMode, setLayoutMode] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedText, setSelectedText] = useState(null);
  const [clipboard, setClipboard] = useState(null);
  const [store, setStore] = useState(load);

  const persist = (updater) => {
    setStore(prev => {
      const next = updater(prev);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const setText = useCallback((id, html) =>
    persist(p => ({ ...p, text: { ...(p.text || {}), [id]: html } })), []);

  const setPos = useCallback((id, x, y) =>
    persist(p => ({ ...p, pos: { ...(p.pos || {}), [id]: { x, y } } })), []);

  const setIcon = useCallback((id, value) =>
    persist(p => ({ ...p, icons: { ...(p.icons || {}), [id]: value } })), []);

  const clearIcon = useCallback((id) =>
    persist(p => {
      const icons = { ...(p.icons || {}) };
      delete icons[id];
      return { ...p, icons };
    }), []);

  // Copy / paste — works on editable text (edit mode) and icons (layout mode).
  const copyText = useCallback((id) =>
    setClipboard({ kind: 'text', value: store.text?.[id] ?? null }), [store.text]);

  const pasteText = useCallback((id) => {
    if (clipboard?.kind !== 'text') return false;
    if (clipboard.value == null) return false;
    setText(id, clipboard.value);
    return true;
  }, [clipboard, setText]);

  const copyIcon = useCallback((id) =>
    setClipboard({ kind: 'icon', value: store.icons?.[id] ?? null }), [store.icons]);

  const pasteIcon = useCallback((id) => {
    if (clipboard?.kind !== 'icon') return false;
    if (clipboard.value == null) return false;
    setIcon(id, clipboard.value);
    return true;
  }, [clipboard, setIcon]);

  const resetText = useCallback(() =>
    persist(p => ({ ...p, text: {} })), []);

  const resetLayout = useCallback(() =>
    persist(p => ({ ...p, pos: {}, icons: {} })), []);

  const resetAll = useCallback(() => {
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    setStore({});
    setEditMode(false);
    setLayoutMode(false);
    setSelectedIcon(null);
    setSelectedText(null);
    setClipboard(null);
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