'use client';

import React from 'react';
import { personalInfo, education } from '@/data/portfolio';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { ContactForm } from '../ContactForm';
import { GraduationCap, Mail, Phone, MapPin, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export const SheetContactEducation: React.FC = () => {
  return (
    <section
      id="sheet-a06"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-paper)]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Sheet Title Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-ink)] pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              <span>[SHEET A-06]</span>
              <span>·</span>
              <span>EDUCATION LOG & MASTER TITLE BLOCK</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-ink)]">
              Academic Background & Contact Specification
            </h2>
          </div>
          <StampBadge label="FINAL DRAFT SHEET" variant="orange" rotate={1} />
        </div>

        {/* 1. EDUCATION SECTION */}
        <div>
          <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold mb-3 uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC OPERATIONS & QUALIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-5 border border-[var(--border-ink)] bg-[var(--surface-sheet)] space-y-2 font-mono-spec text-xs"
              >
                <div className="flex items-center justify-between border-b border-[var(--border-ink)] pb-2">
                  <span className="font-bold text-sm text-[var(--text-ink)]">{edu.institution}</span>
                  <span className="text-[var(--accent-orange)] font-bold">{edu.period}</span>
                </div>
                <div className="font-heading text-base font-bold text-[var(--text-ink)] mt-1">
                  {edu.degree}
                </div>
                <div className="opacity-80">
                  Stream: <span className="font-bold text-[var(--accent-orange)]">{edu.field}</span>
                </div>
                <div className="opacity-60 text-[10px]">
                  Location: {edu.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        <DimensionLine label="TRANSMISSION & DRAFTING TITLE BLOCK" />

        {/* 2. MAIN DRAFTING TITLE BLOCK & CONTACT FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Transmission Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Master Architectural Drafting Title Block */}
          <div className="lg:col-span-5 p-6 border-4 border-[var(--border-ink)] bg-[var(--surface-sheet)] space-y-6 font-mono-spec shadow-xl">
            
            {/* Title Block Header */}
            <div className="border-b-2 border-[var(--border-ink)] pb-4 text-center space-y-1">
              <div className="flex justify-center mb-1">
                <div className="w-10 h-10 border border-current flex items-center justify-center bg-[var(--bg-paper)]">
                  <Compass className="w-6 h-6 text-[var(--accent-orange)]" />
                </div>
              </div>
              <div className="text-[10px] opacity-60 uppercase tracking-widest">
                ARCHITECTURAL DRAWING TITLE BLOCK
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[var(--text-ink)]">
                FIBIN PORTFOLIO
              </h3>
              <p className="text-xs text-[var(--accent-orange)] font-bold uppercase tracking-wider">
                MERN STACK & NEXT.JS DEVELOPER
              </p>
            </div>

            {/* Direct Contact Specifications Matrix */}
            <div className="space-y-4 text-xs">
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] flex items-center space-x-3 hover:border-[var(--accent-orange)] transition-colors group block"
              >
                <div className="w-8 h-8 border border-[var(--border-ink)] flex items-center justify-center group-hover:border-[var(--accent-orange)] bg-[var(--surface-sheet)]">
                  <Mail className="w-4 h-4 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <span className="opacity-60 text-[9px] block uppercase">EMAIL ADDRESS:</span>
                  <span className="font-bold text-sm text-[var(--text-ink)] group-hover:text-[var(--accent-orange)]">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] flex items-center space-x-3 hover:border-[var(--accent-orange)] transition-colors group block"
              >
                <div className="w-8 h-8 border border-[var(--border-ink)] flex items-center justify-center group-hover:border-[var(--accent-orange)] bg-[var(--surface-sheet)]">
                  <Phone className="w-4 h-4 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <span className="opacity-60 text-[9px] block uppercase">PHONE / WHATSAPP:</span>
                  <span className="font-bold text-sm text-[var(--text-ink)] group-hover:text-[var(--accent-orange)]">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] flex items-center space-x-3">
                <div className="w-8 h-8 border border-[var(--border-ink)] flex items-center justify-center bg-[var(--surface-sheet)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-orange)]" />
                </div>
                <div>
                  <span className="opacity-60 text-[9px] block uppercase">PRIMARY LOCATION:</span>
                  <span className="font-bold text-sm text-[var(--text-ink)]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] font-bold text-center flex items-center justify-center space-x-2 hover:border-[var(--accent-orange)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] font-bold text-center flex items-center justify-center space-x-2 hover:border-[var(--accent-orange)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>
              </div>

            </div>

            {/* Drawing Metadata Stamp Grid */}
            <div className="pt-4 border-t-2 border-[var(--border-ink)] grid grid-cols-2 gap-2 text-[9px] opacity-80">
              <div>
                <span className="block opacity-50">SHEET NUMBER:</span>
                <span className="font-bold text-[var(--accent-orange)]">SHEET A-06 / 06</span>
              </div>
              <div className="text-right">
                <span className="block opacity-50">PROJECT SCALE:</span>
                <span className="font-bold">SCALE 1:1</span>
              </div>
              <div>
                <span className="block opacity-50">REVISION DATE:</span>
                <span className="font-bold">FEB 2026</span>
              </div>
              <div className="text-right">
                <span className="block opacity-50">APPROVAL STATUS:</span>
                <span className="font-bold text-emerald-600">APPROVED</span>
              </div>
            </div>

            <div className="text-center pt-2">
              <StampBadge label="FINAL RELEASE APPROVED" variant="green" rotate={-1} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
