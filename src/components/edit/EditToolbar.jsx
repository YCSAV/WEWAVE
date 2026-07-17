import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useEdit } from './EditProvider';
import { LUCIDE } from './Editable';
import { BRAND_MARKUP, BRAND_NAMES, DEVICES_MARKUP } from '@/components/BrandIcons';
import { Pencil, Move, ImagePlus, RotateCcw, X, Upload, Check } from 'lucide-react';

const DEVICES_KEY = 'Devices';

function IconPickerModal({ onClose }) {
  const { selectedIcon, setIcon, clearIcon } = useEdit();
  const [tab, setTab] = useState('platforms');
  const fileRef = useRef(null);

  const chooseLucide = (name) => setIcon(selectedIcon, { t: 'lucide', name });
  const chooseMarkup = (markup) => setIcon(selectedIcon, { t: 'svg', html: markup });

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const isSvg = file.type.includes('svg') || file.name.toLowerCase().endsWith('.svg');
    const reader = new FileReader();
    reader.onload = () => {
      if (isSvg) {
        const m = String(reader.result).match(/<svg[\s\S]*<\/svg>/i);
        if (m) setIcon(selectedIcon, { t: 'svg', html: m[0] });
      } else {
        setIcon(selectedIcon, { t: 'img', src: reader.result });
      }
    };
    if (isSvg) reader.readAsText(file); else reader.readAsDataURL(file);
    e.target.value = '';
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[80vh] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-heading text-base font-bold text-primary">Replace icon</h3>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"><X className="h-4 w-4" /></button>
        </div>

        <div className="flex gap-1 border-b border-border px-3 py-2">
          {[
            { k: 'platforms', label: 'Platforms' },
            { k: 'icons', label: 'Icons' },
          ].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)}
              className={cn('rounded-full px-4 py-1.5 text-sm font-medium transition', tab === t.k ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-secondary')}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-4">
          {tab === 'platforms' && (
            <div className="grid grid-cols-4 gap-2">
              <button onClick={() => chooseMarkup(DEVICES_MARKUP)}
                className="flex flex-col items-center gap-2 rounded-xl border border-border p-3 text-primary hover:border-accent hover:bg-accent/5">
                <span className="grid h-10 w-10 place-items-center" dangerouslySetInnerHTML={{ __html: DEVICES_MARKUP }} />
                <span className="text-[11px] font-medium">Devices</span>
              </button>
              {BRAND_NAMES.map(name => (
                <button key={name} onClick={() => chooseMarkup(BRAND_MARKUP[name])}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border p-3 hover:border-accent hover:bg-accent/5">
                  <span className="grid h-10 w-10 place-items-center" dangerouslySetInnerHTML={{ __html: BRAND_MARKUP[name] }} />
                  <span className="text-[11px] font-medium text-muted-foreground">{name}</span>
                </button>
              ))}
            </div>
          )}
          {tab === 'icons' && (
            <div className="grid grid-cols-6 gap-2">
              {Object.keys(LUCIDE).map(name => {
                const Ic = LUCIDE[name];
                return (
                  <button key={name} onClick={() => chooseLucide(name)} title={name}
                    className="flex aspect-square items-center justify-center rounded-xl border border-border text-primary hover:border-accent hover:bg-accent/5">
                    <Ic className="h-5 w-5" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
          <button onClick={() => fileRef.current?.click()} className="btn-ghost text-sm"><Upload className="h-4 w-4" /> Upload file</button>
          <div className="flex gap-2">
            <button onClick={() => clearIcon(selectedIcon)} className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary">Reset to default</button>
            <button onClick={onClose} className="btn-primary text-sm">Done</button>
          </div>
        </div>
        <input ref={fileRef} type="file" accept=".svg,image/svg+xml,image/png,image/jpeg,image/webp" hidden onChange={onFile} />
      </div>
    </div>
  );
}

export default function EditToolbar() {
  const { editMode, setEditMode, layoutMode, setLayoutMode, selectedIcon, setSelectedIcon, resetAll } = useEdit();
  const [picker, setPicker] = useState(false);
  const [flash, setFlash] = useState('');

  const hint = (msg) => { setFlash(msg); setTimeout(() => setFlash(''), 1600); };

  const onReplace = () => {
    if (!layoutMode) { hint('Turn on Layout first'); return; }
    if (!selectedIcon) { hint('Click an icon to select'); return; }
    setPicker(true);
  };

  return (
    <>
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-1 rounded-full border border-border bg-card/90 p-1.5 shadow-2xl backdrop-blur-xl">
          <button onClick={() => setEditMode(v => !v)}
            className={cn('flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition', editMode ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-secondary')}>
            <Pencil className="h-3.5 w-3.5" /> {editMode ? 'Editing' : 'Edit Text'}
          </button>
          <button onClick={() => setLayoutMode(v => !v)}
            className={cn('flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition', layoutMode ? 'bg-accent text-accent-foreground' : 'text-primary hover:bg-secondary')}>
            <Move className="h-3.5 w-3.5" /> {layoutMode ? 'Layout' : 'Move'}
          </button>
          <button onClick={onReplace}
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-primary transition hover:bg-secondary">
            <ImagePlus className="h-3.5 w-3.5" /> Icon
          </button>
          <span className="mx-1 h-5 w-px bg-border" />
          <button onClick={() => { if (confirm('Reset all text, positions, and icons?')) resetAll(); }}
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-secondary hover:text-destructive">
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
          {flash && <span className="px-2 text-xs font-medium text-accent">{flash}</span>}
        </div>
      </div>

      {picker && selectedIcon && <IconPickerModal onClose={() => setPicker(false)} />}
      {layoutMode && !selectedIcon && (
        <div className="pointer-events-none fixed bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-lg">
          Click an icon to select it, then press Icon
        </div>
      )}
    </>
  );
}