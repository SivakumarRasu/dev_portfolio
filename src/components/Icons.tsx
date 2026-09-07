import React from 'react';

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const PlayStoreIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.61-1.655V3.469c0-.628.225-1.22.609-1.655zM15.206 13.414l2.58 2.58-12.723 7.346 10.143-9.926zm0-2.828L5.063.66 17.786 8.006l-2.58 2.58zm1.414 1.414l3.774 2.179c.928.536.928 1.414 0 1.95l-3.774 2.179-2.274-2.274 2.274-2.034z" />
  </svg>
);

export const ColorfulPlayStoreIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M325.8 243.7L73.9 3.5C67.4-2.8 56.4-0.6 52.8 8.1C50.9 12.4 50 17.1 50 22.1V489.9C50 494.9 50.9 499.6 52.8 503.9C56.4 512.6 67.4 514.8 73.9 508.5L325.8 268.3C332.6 261.5 332.6 250.5 325.8 243.7Z" fill="#00E676"/>
    <path d="M418.7 232.2L349.5 192.3L282.8 256L349.5 319.7L418.7 279.8C436.4 269.6 436.4 242.4 418.7 232.2Z" fill="#FFD54F"/>
    <path d="M73.9 3.5L282.8 256L349.5 192.3L73.9 3.5Z" fill="#00B0FF"/>
    <path d="M73.9 508.5L349.5 319.7L282.8 256L73.9 508.5Z" fill="#FF3D00"/>
  </svg>
);
