'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { SVGBuildingDrawing } from '../SVGBuildingDrawing';
import { FileText, ArrowDown, MapPin } from 'lucide-react';

export const SheetHero: React.FC = () => {
  return (
    <section
      id="sheet-a01"
      className="relative min-h-[90vh] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center border-b border-[var(--border-ink)]"
    >
      {/* Corner Crop Marks */}
      <div className="absolute top-2 left-2 font-mono-spec text-[10px] text-[var(--text-muted)] select-none">+ L-01</div>
      <div className="absolute top-2 right-2 font-mono-spec text-[10px] text-[var(--text-muted)] select-none">+ R-01</div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Hero Copy & Specification */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Specification Header */}
          <div className="flex flex-wrap items-center gap-3">
            <StampBadge label="ARCHITECTURAL COVER" variant="orange" rotate={-2} />
            <div className="font-mono-spec text-xs tracking-widest text-[var(--text-muted)] font-semibold">
              SHEET A-01 // REVISION 2026
            </div>
          </div>

          {/* Name & Title */}
          <div>
            <div className="font-mono-spec text-xs text-[var(--accent-orange)] font-bold tracking-widest uppercase mb-1">
              SPECIFICATION ARCHITECT
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl font-extrabold tracking-tight text-[var(--text-ink)] leading-none">
              {personalInfo.name}
            </h1>
            <h2 className="font-mono-spec text-lg sm:text-2xl font-bold mt-2 text-[var(--accent-orange)] tracking-wide">
              {personalInfo.title}
            </h2>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--text-secondary)] mt-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent-orange)]" />
              <span>{personalInfo.location}</span>
              <span>·</span>
              <span className="text-[var(--accent-orange)] font-bold">● {personalInfo.status}</span>
            </div>
          </div>

          <DimensionLine label="CORE VALUE PITCH SPECIFICATION" />

          {/* Pitch Text Box */}
          <div className="navy-panel p-4 sm:p-6 border-l-4 border-l-[var(--accent-orange)] border-y border-r border-[var(--border-ink)]">
            <p className="font-heading text-xl sm:text-2xl font-semibold leading-snug text-[var(--text-ink)]">
              &ldquo;{personalInfo.pitch}&rdquo;
            </p>
            <p className="font-mono-spec text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
              Specialized in scalable MERN stack architectures, Next.js App Router, TypeScript type systems, RESTful API design, PostgreSQL/MongoDB database engineering, and production deployments.
            </p>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#sheet-a03"
              className="px-6 py-3 bg-[var(--accent-orange)] text-white font-mono-spec font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-xs hover:bg-[var(--accent-orange-hover)] transition-all focus:ring-2 focus:ring-[var(--accent-orange)]"
            >
              <span>VIEW THE DRAWINGS</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[var(--text-ink)] bg-[var(--surface-cream)] text-[var(--text-ink)] font-mono-spec font-bold text-xs uppercase tracking-wider flex items-center space-x-2 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors focus:ring-2 focus:ring-[var(--accent-orange)]"
            >
              <FileText className="w-4 h-4 text-[var(--accent-orange)]" />
              <span>DOWNLOAD RÉSUMÉ (PDF)</span>
            </a>
          </div>

          {/* Micro Specs Footer */}
          <div className="pt-4 grid grid-cols-3 gap-2 font-mono-spec text-[10px] border-t border-[var(--border-ink)]">
            <div>
              <span className="block text-[var(--text-muted)] font-semibold">CONTRACTOR:</span>
              <span className="font-bold text-[var(--text-ink)]">FIBIN</span>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] font-semibold">STACK:</span>
              <span className="font-bold text-[var(--text-ink)]">MERN / NEXT.JS</span>
            </div>
            <div>
              <span className="block text-[var(--text-muted)] font-semibold">AVAILABILITY:</span>
              <span className="font-bold text-[var(--accent-orange)]">OPEN FOR HIRE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Elevation Drawing */}
        <div className="lg:col-span-5 flex justify-center">
          <SVGBuildingDrawing />
        </div>

      </div>
    </section>
  );
};
