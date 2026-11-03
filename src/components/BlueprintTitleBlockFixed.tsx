'use client';

import React from 'react';
import { useBlueprint } from '@/context/BlueprintContext';

export const BlueprintTitleBlockFixed: React.FC = () => {
  const { activeSheet, isBlueprintMode } = useBlueprint();

  const getSheetName = (id: string) => {
    switch (id) {
      case 'A-01': return 'COVER / HERO ELEVATION';
      case 'A-02': return 'ABOUT / PROJECT BRIEF';
      case 'A-03': return 'SELECTED WORKS (PROJECTS)';
      case 'A-04': return 'CONSTRUCTION LOG (EXPERIENCE)';
      case 'A-05': return 'MATERIALS & TOOLS (LEGEND)';
      case 'A-06': return 'EDUCATION & TITLE BLOCK (CONTACT)';
      default: return 'ARCHITECTURAL SHEET';
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-30 hidden sm:block pointer-events-auto">
      <div
        className="navy-panel p-2.5 sm:p-3 border-2 border-[var(--border-ink)] shadow-lg font-mono-spec text-[10px] tracking-wider transition-all duration-300 max-w-xs"
      >
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 border-b border-[var(--border-ink)] pb-1.5 mb-1.5">
          <div>
            <span className="text-[var(--text-muted)] font-semibold text-[8px] block">DRAWING TITLE:</span>
            <span className="font-bold text-xs truncate block text-[var(--accent-orange)]">
              {getSheetName(activeSheet)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[var(--text-muted)] font-semibold text-[8px] block">CURRENT SHEET:</span>
            <span className="font-bold text-xs text-[var(--accent-orange)]">
              SHEET {activeSheet} / 06
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[9px] text-[var(--text-secondary)] pt-0.5">
          <span>PROJECT: FIBIN PORTFOLIO</span>
          <span className="font-bold text-[var(--text-ink)]">SCALE 1:1</span>
          <span className="text-[var(--accent-orange)] font-bold">REV 2026</span>
        </div>
      </div>
    </div>
  );
};
