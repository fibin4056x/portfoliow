'use client';

import React from 'react';

interface StampBadgeProps {
  label: string;
  variant?: 'orange' | 'green' | 'blue' | 'neutral';
  rotate?: number;
  className?: string;
}

export const StampBadge: React.FC<StampBadgeProps> = ({
  label,
  variant = 'orange',
  rotate = -3,
  className = '',
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'neutral':
        return 'border-[var(--border-ink)] text-[var(--text-secondary)] bg-transparent';
      case 'green':
      case 'blue':
      case 'orange':
      default:
        return 'border-[var(--accent-orange)] text-[var(--accent-orange)] bg-[var(--badge-bg)]';
    }
  };

  return (
    <div
      className={`inline-flex items-center px-2.5 py-0.5 font-mono-spec font-extrabold text-[11px] tracking-widest uppercase border-2 shadow-xs select-none transition-transform duration-200 ${getVariantStyles()} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="mr-1 text-[8px]">★</span>
      {label}
    </div>
  );
};
