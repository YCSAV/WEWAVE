import React, { useRef, useLayoutEffect } from 'react';
import { cn } from '@/lib/utils';
import { useEdit } from './EditProvider';
import {
  Store, Building2, Clapperboard, Video, Megaphone, TrendingUp, LineChart,
  BarChart3, Users, User, Heart, Star, Sparkles, Zap, Globe, Mail, Phone,
  MapPin, Camera, Lightbulb, SlidersHorizontal, Share2, MessageCircle, Play,
  Layers, PenTool, Image, Music2, Search, Target, Rocket, Award, ShieldCheck,
  Leaf, Wifi, Radio, Gauge, Sprout, Briefcase, DollarSign, Activity, Eye,
  MousePointer2, HelpCircle,
} from 'lucide-react';

export const LUCIDE = {
  Store, Building2, Clapperboard, Video, Megaphone, TrendingUp, LineChart,
  BarChart3, Users, User, Heart, Star, Sparkles, Zap, Globe, Mail, Phone,
  MapPin, Camera, Lightbulb, SlidersHorizontal, Share2, MessageCircle, Play,
  Layers, PenTool, Image, Music2, Search, Target, Rocket, Award, ShieldCheck,
  Leaf, Wifi, Radio, Gauge, Sprout, Briefcase, DollarSign, Activity, Eye,
  MousePointer2,
};

/* Editable text — contentEditable in edit mode, persisted to localStorage by id */
export function EditableText({ id, as: Tag = 'span', className, children, block }) {
  const { editMode, store, setText, setSelectedText } = useEdit();
  const saved = store.text?.[id];
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current && saved !== undefined) ref.current.innerHTML = saved;
  }, [saved]);

  return (
    <Tag
      ref={ref}
      className={cn(className, editMode && 'edit-outline', block && 'block')}
      contentEditable={editMode}
      suppressContentEditableWarning
      spellCheck={false}
      data-edit-id={id}
      onFocus={() => { if (editMode) setSelectedText(id); }}
      onBlur={(e) => {
        const h = e.currentTarget.innerHTML;
        if (h !== saved) setText(id, h);
      }}
    >
      {saved === undefined ? children : null}
    </Tag>
  );
}

/* Draggable wrapper — moves via translate offset in layout mode */
export function Movable({ id, className, style, children }) {
  const { layoutMode, store, setPos } = useEdit();
  const pos = store.pos?.[id] || { x: 0, y: 0 };
  const ref = useRef(null);
  const drag = useRef(null);

  const onDown = (e) => {
    if (!layoutMode) return;
    if (e.target.closest('[data-icon-slot]')) return;
    e.preventDefault();
    ref.current?.setPointerCapture?.(e.pointerId);
    drag.current = { startX: e.clientX, startY: e.clientY, x: pos.x || 0, y: pos.y || 0 };
    ref.current?.classList.add('dragging');
  };
  const onMove = (e) => {
    if (!drag.current) return;
    const nx = drag.current.x + (e.clientX - drag.current.startX);
    const ny = drag.current.y + (e.clientY - drag.current.startY);
    drag.current.nx = nx; drag.current.ny = ny;
    if (ref.current) ref.current.style.translate = `${nx}px ${ny}px`;
  };
  const onUp = () => {
    if (!drag.current) return;
    setPos(id, drag.current.nx ?? pos.x, drag.current.ny ?? pos.y);
    ref.current?.classList.remove('dragging');
    drag.current = null;
  };

  return (
    <div
      ref={ref}
      data-move-id={id}
      className={cn(className, layoutMode && 'movable-outline cursor-move')}
      style={{ ...style, translate: `${pos.x || 0}px ${pos.y || 0}px` }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
    >
      {children}
    </div>
  );
}

/* Editable icon — default lucide or markup; swappable via picker/upload, copy/paste */
export function EditableIcon({ id, as, markup, className, iconClass = 'h-5 w-5', colorClass }) {
  const { layoutMode, store, setSelectedIcon, selectedIcon } = useEdit();
  const override = store.icons?.[id];
  const selected = selectedIcon === id;

  let inner;
  if (override) {
    if (override.t === 'lucide') {
      const Ic = LUCIDE[override.name] || HelpCircle;
      inner = <Ic className={iconClass} />;
    } else if (override.t === 'img') {
      inner = <img src={override.src} alt="" className={iconClass} />;
    } else {
      inner = <span className={cn('inline-flex', colorClass)} dangerouslySetInnerHTML={{ __html: override.html }} />;
    }
  } else if (markup) {
    inner = <span className={cn('inline-flex', colorClass)} dangerouslySetInnerHTML={{ __html: markup }} />;
  } else if (as) {
    const Ic = as;
    inner = <Ic className={cn(iconClass, colorClass)} />;
  }

  return (
    <span
      data-icon-slot={id}
      onClick={layoutMode ? (e) => { e.preventDefault(); e.stopPropagation(); setSelectedIcon(id); } : undefined}
      className={cn('inline-grid place-items-center rounded-lg transition', layoutMode && 'cursor-pointer', selected && 'ring-2 ring-accent')}
    >
      {inner}
    </span>
  );
}