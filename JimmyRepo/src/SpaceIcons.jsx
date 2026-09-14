import React from 'react';

/*
 * Custom icon set for My Space / More Features.
 * Drawn to match lucide's stroke weight and rounded joins so they sit
 * comfortably next to library icons elsewhere in the app, but each shape
 * is original and, where it makes sense, carries a small badminton-specific
 * detail (a shuttlecock skirt, a strung racket face, a court line) instead
 * of a generic library glyph.
 */

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function WalletIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H17a1 1 0 0 1 1 1v1" />
      <path d="M4 7.5v9A2.5 2.5 0 0 0 6.5 19H18a1 1 0 0 0 1-1v-3.5" />
      <rect x="13" y="10.5" width="7.5" height="5" rx="1.6" />
      <circle cx="16.4" cy="13" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function OrdersIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 4.5h11.5a1 1 0 0 1 1 1V18l-2.3-1.4L13 18l-2.3-1.4L8.5 18l-2.3-1.4L4 18V6.5a2 2 0 0 1 1-1.7Z" />
      <path d="M8 9h6.5M8 12.2h4.5" />
    </svg>
  );
}

export function PromotionIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 11.5 15 7v10L4 12.5Z" />
      <path d="M4 11.5v3.6a1.4 1.4 0 0 0 1.4 1.4h.3a1.4 1.4 0 0 0 1.4-1.6l-.4-2.3" />
      <path d="M15 7v10a2.5 2.5 0 0 0 3.6-3.1M18.6 13.9A2.5 2.5 0 0 0 15 10.8" />
    </svg>
  );
}

export function RecommendIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="17.5" cy="6" r="2.2" />
      <circle cx="17.5" cy="18" r="2.2" />
      <path d="m8.1 10.9 7.4-3.6M8.1 13.1l7.4 3.6" />
    </svg>
  );
}

export function MoreGridIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="4" y="4" width="7" height="7" rx="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.8" />
      <path d="M15 14.5v5M16.6 16.1l-1.6-1.6-1.6 1.6M13.4 17.9l1.6 1.6 1.6-1.6" />
    </svg>
  );
}

export function ShopBagIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6.5 8.5h11l.9 10a1.6 1.6 0 0 1-1.6 1.7H7.2a1.6 1.6 0 0 1-1.6-1.7Z" />
      <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
      <path d="M9 11.2v1.3M15 11.2v1.3" />
    </svg>
  );
}

export function RankPodiumIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M3.5 19.5h17" />
      <rect x="4.5" y="13" width="4.5" height="6.3" rx="1" />
      <rect x="9.8" y="9" width="4.5" height="10.3" rx="1" />
      <rect x="15.1" y="15.2" width="4.5" height="4.1" rx="1" />
      <path d="M12.05 6.2 12.9 8l1.9.3-1.4 1.4.3 1.9-1.65-.9-1.65.9.3-1.9L9.25 8.3 11.15 8Z" />
    </svg>
  );
}

export function ActivityPulseIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.2" />
      <path d="M6.3 13.2h2.1l1.3-3 1.9 6 1.4-4.6 1 1.6h2.7" />
    </svg>
  );
}

export function PreferencesIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 6.5h9M16.5 6.5H20M4 17.5h5.5M12.5 17.5H20" />
      <circle cx="12.5" cy="6.5" r="2.1" />
      <circle cx="7.5" cy="17.5" r="2.1" />
    </svg>
  );
}

export function PolicyShieldIcon({ size = 24, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3.5 19 6v5.2c0 4.2-2.9 7.1-7 9.3-4.1-2.2-7-5.1-7-9.3V6Z" />
      <path d="M9.2 12.1h5.6M12 9.3v5.6" />
    </svg>
  );
}
