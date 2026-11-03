'use client';

import React from 'react';
import { experience } from '@/data/portfolio';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const SheetExperience: React.FC = () => {
  return (
    <section
      id="sheet-a04"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-ink)]"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Sheet Title Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-ink)] pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              <span>[SHEET A-04]</span>
              <span>·</span>
              <span>SITE-LOG TIMELINE & WORK HISTORY</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-ink)]">
              Construction Log & Industry Experience
            </h2>
          </div>
          <StampBadge label="ACTIVE INTERNSHIP" variant="orange" rotate={1} />
        </div>

        {/* Vertical Site-Log Timeline Container */}
        <div className="relative border-l-2 border-[var(--accent-orange)] pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          
          {experience.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="navy-panel absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 border-[var(--accent-orange)] flex items-center justify-center font-mono-spec text-[10px] font-bold text-[var(--accent-orange)] shadow-xs">
                ▲
              </div>

              {/* Card Container */}
              <div className="navy-panel p-6 border border-[var(--border-ink)] space-y-4 shadow-xs">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-ink)] pb-3">
                  <div>
                    <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[var(--text-ink)] mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end font-mono-spec text-xs space-y-1">
                    <div className="flex items-center space-x-1.5 text-[var(--accent-orange)] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-[var(--text-muted)] text-[11px]">
                      <MapPin className="w-3 h-3 text-[var(--accent-orange)]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <DimensionLine label="INTERNSHIP LOG DELIVERABLES SPECIFICATION" />

                {/* Highlights List */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-orange)] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer Stamp */}
                <div className="pt-3 border-t border-[var(--border-ink)] flex items-center justify-between font-mono-spec text-[11px] text-[var(--text-muted)]">
                  <span>VERIFIED SUPERVISOR LOG: BRIDGEON IT SOLUTIONS</span>
                  <span className="font-bold text-[var(--accent-orange)]">[STATUS: ACTIVE]</span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
