'use client';

import React from 'react';

interface DimensionLineProps {
  label: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const DimensionLine: React.FC<DimensionLineProps> = ({
  label,
  orientation = 'horizontal',
  className = '',
}) => {
  if (orientation === 'vertical') {
    return (
      <div className={`flex flex-col items-center justify-between h-full font-mono-spec text-[10px] text-[var(--text-muted)] select-none ${className}`}>
        <div className="w-2 h-[1px] bg-current transform -rotate-45" />
        <div className="w-[1px] flex-1 bg-[var(--border-ink)] my-1" />
        <span className="transform -rotate-90 whitespace-nowrap my-2 tracking-widest text-[9px] text-[var(--text-secondary)] uppercase font-semibold">
          {label}
        </span>
        <div className="w-[1px] flex-1 bg-[var(--border-ink)] my-1" />
        <div className="w-2 h-[1px] bg-current transform -rotate-45" />
      </div>
    );
  }

  return (
    <div className={`flex items-center w-full font-mono-spec text-[10px] text-[var(--text-muted)] select-none ${className}`}>
      {/* Left tick arrow */}
      <div className="flex items-center">
        <div className="w-1.5 h-1.5 border-t border-l border-current transform rotate-45 -mr-0.5" />
        <div className="w-3 h-[1px] bg-current" />
      </div>

      <div className="h-[1px] flex-1 bg-[var(--border-ink)]" />

      {/* Label */}
      <span className="px-2 font-mono-spec tracking-widest text-[9px] text-[var(--text-secondary)] uppercase font-semibold whitespace-nowrap">
        {label}
      </span>

      <div className="h-[1px] flex-1 bg-[var(--border-ink)]" />

      {/* Right tick arrow */}
      <div className="flex items-center">
        <div className="w-3 h-[1px] bg-current" />
        <div className="w-1.5 h-1.5 border-t border-r border-current transform -rotate-45 -ml-0.5" />
      </div>
    </div>
  );
};
