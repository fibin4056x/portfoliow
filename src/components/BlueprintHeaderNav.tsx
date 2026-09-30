'use client';

import React, { useState } from 'react';
import { useBlueprint } from '@/context/BlueprintContext';
import { Compass, Layers, Menu, X, Sun, Moon } from 'lucide-react';

export const BlueprintHeaderNav: React.FC = () => {
  const { isBlueprintMode, toggleBlueprintMode, activeSheet, setActiveSheet } = useBlueprint();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sheets = [
    { id: 'A-01', label: 'A-01 COVER', hash: '#sheet-a01' },
    { id: 'A-02', label: 'A-02 BRIEF', hash: '#sheet-a02' },
    { id: 'A-03', label: 'A-03 WORKS', hash: '#sheet-a03' },
    { id: 'A-04', label: 'A-04 LOG', hash: '#sheet-a04' },
    { id: 'A-05', label: 'A-05 LEGEND', hash: '#sheet-a05' },
    { id: 'A-06', label: 'A-06 TITLE', hash: '#sheet-a06' },
  ];

  const handleNavClick = (sheetId: string, hash: string) => {
    setActiveSheet(sheetId);
    setMobileMenuOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b border-[var(--border-ink)] bg-[var(--bg-paper)]/90 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        
        {/* Brand Stamp / Logo */}
        <div className="flex items-center space-x-3">
          <a
            href="#sheet-a01"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('A-01', '#sheet-a01');
            }}
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-[var(--accent-orange)]"
          >
            <div className="w-8 h-8 border border-current flex items-center justify-center bg-[var(--surface-sheet)] group-hover:border-[var(--accent-orange)] transition-colors">
              <Compass className="w-4 h-4 text-[var(--accent-orange)] animate-spin-slow" />
            </div>
            <div>
              <div className="font-heading font-bold text-sm tracking-wider flex items-center gap-1">
                FIBIN <span className="text-[var(--accent-orange)] text-xs font-mono-spec">DWG.SET</span>
              </div>
              <div className="font-mono-spec text-[9px] opacity-60 tracking-widest uppercase">
                MERN / NEXT.JS ARCHITECT
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 border-l border-r border-[var(--border-ink)] px-4 h-full">
          {sheets.map((sheet) => {
            const isActive = activeSheet === sheet.id;
            return (
              <a
                key={sheet.id}
                href={sheet.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(sheet.id, sheet.hash);
                }}
                className={`px-3 py-1.5 font-mono-spec text-xs tracking-wider border transition-all duration-200 ${
                  isActive
                    ? 'border-[var(--accent-orange)] text-[var(--accent-orange)] bg-[var(--badge-bg)] font-bold'
                    : 'border-transparent opacity-75 hover:opacity-100 hover:border-[var(--border-ink)]'
                }`}
              >
                <span className="mr-1 text-[10px] opacity-60">■</span>
                {sheet.label}
              </a>
            );
          })}
        </nav>

        {/* Blueprint Mode Toggle & Mobile Menu Trigger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleBlueprintMode}
            className="px-3 py-1.5 border border-[var(--border-ink)] font-mono-spec text-xs flex items-center space-x-2 hover:border-[var(--accent-orange)] transition-all bg-[var(--surface-sheet)] focus:ring-2 focus:ring-[var(--accent-orange)]"
            title="Toggle Blueprint Blue / Drafting Cream mode"
            aria-label="Toggle blueprint mode"
          >
            {isBlueprintMode ? (
              <>
                <Moon className="w-3.5 h-3.5 text-[var(--accent-orange)]" />
                <span className="hidden sm:inline font-bold">BLUEPRINT MODE</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 text-[var(--accent-orange)]" />
                <span className="hidden sm:inline font-bold">DRAFTING MODE</span>
              </>
            )}
          </button>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-[var(--border-ink)] text-[var(--text-ink)] hover:border-[var(--accent-orange)]"
            aria-label="Toggle navigation sheet drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Sheet Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-ink)] bg-[var(--surface-sheet)] px-4 py-3 space-y-2">
          <div className="font-mono-spec text-[10px] opacity-60 uppercase mb-1">
            SELECT DRAWING SHEET (INDEX):
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sheets.map((sheet) => (
              <a
                key={sheet.id}
                href={sheet.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(sheet.id, sheet.hash);
                }}
                className={`p-2 font-mono-spec text-xs border text-left flex items-center justify-between ${
                  activeSheet === sheet.id
                    ? 'border-[var(--accent-orange)] text-[var(--accent-orange)] bg-[var(--badge-bg)] font-bold'
                    : 'border-[var(--border-ink)] opacity-80'
                }`}
              >
                <span>{sheet.label}</span>
                <Layers className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
