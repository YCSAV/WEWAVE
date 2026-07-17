// Solid, brand-accurate SVG markup strings for social platforms.
// Each renders fully colored (no currentColor) so they look like the real logos.

export const BRAND_MARKUP = {
  Instagram: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FEDA75"/><stop offset="25%" stop-color="#FA7E1E"/><stop offset="50%" stop-color="#D62976"/><stop offset="75%" stop-color="#962FBF"/><stop offset="100%" stop-color="#4F5BD5"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGrad)"/><rect x="6.4" y="6.4" width="11.2" height="11.2" rx="3.4" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="12" cy="12" r="3" fill="#fff"/><circle cx="16.9" cy="7.1" r="1.15" fill="#fff"/></svg>`,

  TikTok: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="#000" d="M16.5 3c.32 2.05 1.55 3.6 3.5 3.95v2.85c-1.25 0-2.45-.38-3.5-1.02v6.47a6.1 6.1 0 1 1-6.1-6.1c.33 0 .66.03.98.08v2.93a3.22 3.22 0 1 0 2.24 3.06V3h2.88z"/></svg>`,

  YouTube: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="#FF0000"/><path d="M10.2 8.6v6.8l5.8-3.4z" fill="#fff"/></svg>`,

  Facebook: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path d="M13.9 12.6h2.05l.32-2.4h-2.37V8.67c0-.69.2-1.17 1.2-1.17h1.27V5.34c-.22-.03-.97-.09-1.84-.09-1.82 0-3.07 1.11-3.07 3.15v1.8H9.35v2.4h2.11V19h2.44z" fill="#fff"/></svg>`,

  X: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" fill="#000"/><path fill="#fff" d="M17.5 5.5h2.2l-4.8 5.5L20.6 18.9h-4.3l-3.4-4.45L9 18.9H6.8l5.15-5.9L6.2 5.5h4.4l3.08 4.07L17.5 5.5zm-.77 12.05h1.22L8.46 6.68H7.16l9.57 10.87z"/></svg>`,

  Google: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285F4" d="M22.5 12.2c0-.7-.06-1.38-.18-2.04H12v3.87h5.9a5.05 5.05 0 0 1-2.18 3.31v2.76h3.53c2.06-1.9 3.25-4.7 3.25-7.9z"/><path fill="#34A853" d="M12 23c2.95 0 5.42-.98 7.23-2.65l-3.53-2.74c-.98.66-2.23 1.05-3.7 1.05-2.85 0-5.27-1.92-6.13-4.5H2.23v2.83A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.87 14.16a6.6 6.6 0 0 1 0-4.32V7.01H2.23a11 11 0 0 0 0 9.98l3.64-2.83z"/><path fill="#EA4335" d="M12 5.38c1.6 0 3.04.55 4.18 1.63l3.13-3.13A11 11 0 0 0 2.23 7.01l3.64 2.83C6.73 7.3 9.15 5.38 12 5.38z"/></svg>`,

  Meta: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="#0082FB" d="M6.5 4C3.2 4 1 7.4 1 12s2.2 8 5.5 8c2.2 0 3.9-1.6 5.5-4 1.6 2.4 3.3 4 5.5 4 3.3 0 5.5-3.4 5.5-8s-2.2-8-5.5-8c-2.2 0-3.9 1.6-5.5 4-1.6-2.4-3.3-4-5.5-4zm0 3c1 0 2 .9 3.1 2.7-1 1.9-2 3.3-3.1 3.3-1.3 0-2.3-1.8-2.3-4S5.2 7 6.5 7zm11 0c1.3 0 2.3 1.8 2.3 4s-1 4-2.3 4c-1 0-2.1-.9-3.1-2.7 1-1.9 2-3.3 3.1-3.3z"/></svg>`,

  LinkedIn: `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2"/><path fill="#fff" d="M8 9.5H5.6V18H8zM6.8 5.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM18.4 18v-4.7c0-2.5-1.34-3.66-3.13-3.66-1.44 0-2.08.79-2.44 1.35V9.5H10.5V18h2.37v-4.55c0-1.2.22-2.36 1.72-2.36 1.47 0 1.5 1.37 1.5 2.44V18z"/></svg>`,
};

// Custom monitor + smartphone icon for the Growth Engine hub (mono-line).
export const DEVICES_MARKUP = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3.5" width="14" height="10" rx="1.4"/><path d="M6 17h6"/><rect x="16.5" y="8" width="5.5" height="12" rx="1.2"/><path d="M19.25 18h.01"/></svg>`;

export const BRAND_NAMES = Object.keys(BRAND_MARKUP);