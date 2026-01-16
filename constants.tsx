
import React from 'react';

export const APP_NAME = "Daisy Service Booker";
export const BRAND_COLOR_PRIMARY = "text-[#003366]";
export const BRAND_BG_PRIMARY = "bg-[#003366]";
export const BRAND_BG_ACCENT = "bg-[#76bc21]";

export const NAV_LINKS = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'How It Works', href: '#/how-it-works' },
  { label: 'AI Disclaimer', href: '#/disclaimer' },
  { label: 'Privacy', href: '#/privacy' },
  { label: 'Support', href: '#/support' }
];

export const ICONS = {
  Print: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
  ),
  Connectivity: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  Energy: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  IT: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Apple: (className: string) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.066 11.34c-.012-2.43 2.016-3.595 2.103-3.647-1.144-1.65-2.915-1.87-3.543-1.896-1.503-.153-2.933.874-3.692.874-.76 0-1.944-.85-3.2-.826-1.644.024-3.16.953-4.008 2.42-1.711 2.97-.438 7.373 1.218 9.752.81 1.168 1.77 2.476 3.033 2.43 1.22-.05 1.68-.783 3.155-.783 1.476 0 1.9 1.05 3.195 1.026 1.316-.024 2.146-1.186 2.943-2.355.932-1.354 1.31-2.67 1.328-2.738-.028-.013-2.553-.967-2.576-3.854zm-2.44-7.252c.677-.82 1.133-1.96 1.01-3.088-1.01.04-2.227.674-2.95 1.516-.648.74-1.216 1.91-1.066 3.01.12.01.242.015.366.015.908 0 2.003-.51 2.64-1.453z"/>
    </svg>
  ),
  Supercomputer: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Check: (className: string) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
};
