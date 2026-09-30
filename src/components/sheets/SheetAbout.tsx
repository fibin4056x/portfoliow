'use client';

import React from 'react';
import { personalInfo } from '@/data/portfolio';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { UserCheck, CheckCircle2, Award } from 'lucide-react';

export const SheetAbout: React.FC = () => {
  return (
    <section
      id="sheet-a02"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-ink)]"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Sheet Title Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-ink)] pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              <span>[SHEET A-02]</span>
              <span>·</span>
              <span>PROJECT BRIEF & CONTRACTOR OVERVIEW</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-ink)]">
              Developer Brief & Executive Summary
            </h2>
          </div>
          <StampBadge label="VERIFIED CREDENTIALS" variant="orange" rotate={2} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Brief Document Body */}
          <div className="lg:col-span-8 p-6 sm:p-8 border border-[var(--border-ink)] bg-[var(--surface-sheet)] space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-ink)] pb-3 font-mono-spec text-xs">
              <span className="font-bold text-[var(--accent-orange)]">
                SPECIFICATION DOC: DB-2026-SUMMARY
              </span>
              <span className="opacity-60">FORMAL PROJECT BRIEF</span>
            </div>

            {/* Official Brief Text from prompt */}
            <p className="font-heading text-base sm:text-lg leading-relaxed text-[var(--text-ink)]">
              {personalInfo.aboutBrief}
            </p>

            <DimensionLine label="CORE TECHNICAL COMPETENCIES HIGHLIGHT" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono-spec text-xs">
              <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-1">
                <div className="font-bold text-[var(--accent-orange)] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>FULL-STACK ARCHITECTURE</span>
                </div>
                <p className="text-[11px] opacity-80">
                  End-to-end web engineering covering database design, server APIs, and responsive frontends.
                </p>
              </div>

              <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-1">
                <div className="font-bold text-[var(--accent-orange)] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>REST API & AUTH SECURITY</span>
                </div>
                <p className="text-[11px] opacity-80">
                  Stateless controllers, JWT session authorization, password hashing with bcrypt, and RBAC models.
                </p>
              </div>

              <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-1">
                <div className="font-bold text-[var(--accent-orange)] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>DATA & INTEGRATIONS</span>
                </div>
                <p className="text-[11px] opacity-80">
                  Brevo transactional email APIs, Excel bulk import/export parsing, and PDF document generation.
                </p>
              </div>

              <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-1">
                <div className="font-bold text-[var(--accent-orange)] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>PRODUCTION DEPLOYMENT</span>
                </div>
                <p className="text-[11px] opacity-80">
                  Frontend hosting on Vercel, backend servers on Render, environment config, and live bug troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Client Details / Contractor Specification Box */}
          <div className="lg:col-span-4 p-6 border-2 border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-4 font-mono-spec text-xs">
            <div className="flex items-center space-x-2 border-b border-[var(--border-ink)] pb-2">
              <UserCheck className="w-4 h-4 text-[var(--accent-orange)]" />
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider">
                CONTRACTOR SPECIFICATION
              </h3>
            </div>

            <div className="space-y-3">
              <div>
                <span className="opacity-60 text-[10px] block uppercase">DEVELOPER NAME:</span>
                <span className="font-bold text-sm text-[var(--text-ink)]">{personalInfo.clientSpec.contractor}</span>
              </div>

              <div>
                <span className="opacity-60 text-[10px] block uppercase">PRIMARY ROLE:</span>
                <span className="font-bold text-[var(--accent-orange)]">{personalInfo.clientSpec.primaryRole}</span>
              </div>

              <div>
                <span className="opacity-60 text-[10px] block uppercase">LOCATION & BASE:</span>
                <span className="font-bold">{personalInfo.clientSpec.location}</span>
              </div>

              <div>
                <span className="opacity-60 text-[10px] block uppercase">AVAILABILITY STATUS:</span>
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500 text-emerald-600 font-bold inline-block mt-0.5">
                  ● {personalInfo.clientSpec.availability}
                </span>
              </div>

              <div className="pt-2 border-t border-[var(--border-ink)]">
                <span className="opacity-60 text-[10px] block uppercase">CURRENT EXPANSION VECTOR:</span>
                <p className="font-bold text-xs mt-1 text-[var(--text-ink)]">
                  {personalInfo.clientSpec.currentFocus}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-dashed border-[var(--border-ink)] text-center">
              <StampBadge label="APPROVED FOR PRODUCTION" variant="green" rotate={0} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
