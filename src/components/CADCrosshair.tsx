'use client';

import React, { useEffect, useState } from 'react';
import { useBlueprint } from '@/context/BlueprintContext';

export const CADCrosshair: React.FC = () => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { activeSheet, isBlueprintMode } = useBlueprint();

  useEffect(() => {
    // Only activate on fine pointers (desktop mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!coords || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Horizontal hair line */}
      <div
        className="absolute left-0 right-0 h-[1px] opacity-30 transition-colors duration-200"
        style={{
          top: `${coords.y}px`,
          backgroundColor: isBlueprintMode ? '#FFFFFF' : '#FF5A1F',
        }}
      />
      {/* Vertical hair line */}
      <div
        className="absolute top-0 bottom-0 w-[1px] opacity-30 transition-colors duration-200"
        style={{
          left: `${coords.x}px`,
          backgroundColor: isBlueprintMode ? '#FFFFFF' : '#FF5A1F',
        }}
      />

      {/* Coordinate Badge near cursor */}
      <div
        className="absolute transform translate-x-3 translate-y-3 px-2 py-1 font-mono-spec text-[10px] uppercase tracking-wider shadow-sm backdrop-blur-xs transition-colors duration-200"
        style={{
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          backgroundColor: isBlueprintMode ? 'rgba(11, 61, 145, 0.9)' : 'rgba(244, 239, 227, 0.95)',
          color: isBlueprintMode ? '#FFFFFF' : '#14213D',
          border: `1px solid ${isBlueprintMode ? '#FF7A45' : '#FF5A1F'}`,
        }}
      >
        <span className="text-[#FF5A1F] font-bold mr-1">CAD-2026</span>
        X:{String(Math.round(coords.x)).padStart(4, '0')} Y:{String(Math.round(coords.y)).padStart(4, '0')} · {activeSheet}
      </div>
    </div>
  );
};
