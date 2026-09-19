import React from 'react';
import logoImg from '../assets/Logo.png';

export default function Logo({ size = 'medium', className = '' }) {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  // Responsive image dimensions
  const heightClass = isSmall ? 'h-9 sm:h-10' : isLarge ? 'h-16 sm:h-20' : 'h-11 sm:h-14';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="NAVADURGA ELECTRICALS"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
      />
    </div>
  );
}
