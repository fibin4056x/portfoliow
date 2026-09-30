'use client';

import React from 'react';
import { projects, Project } from '@/data/portfolio';
import { useBlueprint } from '@/context/BlueprintContext';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { CoreJourneyStepper } from '../CoreJourneyStepper';
import { RoleSwitcher } from '../RoleSwitcher';
import { ArchitectureDiagram } from '../ArchitectureDiagram';
import { ExternalLink, Eye, Layers, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export const SheetProjects: React.FC = () => {
  const { setActiveProjectModal, hoveredProjectId, setHoveredProjectId, hoveredSkillId } = useBlueprint();

  const featuredProject = projects[0];
  const minorProjects = projects.slice(1);

  return (
    <section
      id="sheet-a03"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-ink)]"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Sheet Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-ink)] pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              <span>[SHEET A-03]</span>
              <span>·</span>
              <span>SELECTED WORKS & ARCHITECTURAL BLUEPRINTS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-ink)]">
              Production Project Portfolio
            </h2>
          </div>
          <StampBadge label="3 SYSTEM BLUEPRINTS" variant="orange" rotate={-1} />
        </div>

        {/* 1. FEATURED PROJECT — RENTAL PROPERTY MARKETPLACE & MANAGEMENT SYSTEM */}
        <div
          onMouseEnter={() => setHoveredProjectId(featuredProject.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
          className={`p-6 sm:p-8 border-2 transition-all duration-300 ${
            hoveredProjectId === featuredProject.id || (hoveredSkillId && featuredProject.stack.some(s => s.toLowerCase().includes(hoveredSkillId)))
              ? 'border-[var(--accent-orange)] shadow-xl bg-[var(--surface-sheet)]'
              : 'border-[var(--border-ink)] bg-[var(--surface-sheet)]'
          }`}
        >
          {/* Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[var(--border-ink)]">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 bg-[var(--accent-orange)] text-white font-mono-spec text-xs font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                FEATURED BLUEPRINT (LATEST)
              </span>
              <StampBadge label={featuredProject.status} variant="orange" rotate={0} />
            </div>
            <span className="font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              {featuredProject.sheetNumber}
            </span>
          </div>

          {/* Title & Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--text-ink)]">
                {featuredProject.title}
              </h3>
              <p className="font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
                {featuredProject.subtitle}
              </p>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                {featuredProject.summary}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 font-mono-spec text-xs border border-[var(--border-ink)] bg-[var(--bg-paper)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metadata Box & CTAs */}
            <div className="lg:col-span-4 p-4 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-3 font-mono-spec text-xs">
              <div>
                <span className="opacity-60 text-[9px] block">TEAM & TIMELINE:</span>
                <span className="font-bold">{featuredProject.team} · {featuredProject.duration}</span>
              </div>
              <div>
                <span className="opacity-60 text-[9px] block">MY ROLE SPEC:</span>
                <span className="font-bold text-[var(--accent-orange)]">{featuredProject.role}</span>
              </div>

              <div className="pt-2 border-t border-[var(--border-ink)] space-y-2">
                <button
                  onClick={() => setActiveProjectModal(featuredProject)}
                  className="w-full py-2.5 bg-[var(--accent-orange)] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs hover:bg-[var(--accent-orange)]/90 transition-colors focus:ring-2 focus:ring-[var(--accent-orange)]"
                >
                  <Eye className="w-4 h-4" />
                  <span>OPEN ANNOTATED DETAIL DRAWING</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[var(--border-ink)] font-bold text-center flex items-center justify-center space-x-1 hover:border-[var(--accent-orange)]"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3 text-[var(--accent-orange)]" />
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[var(--border-ink)] font-bold text-center flex items-center justify-center space-x-1 hover:border-[var(--accent-orange)]"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GITHUB</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stepper Workflow Flow */}
          {featuredProject.coreJourney && <CoreJourneyStepper steps={featuredProject.coreJourney} />}

          {/* Interactive Role Switcher */}
          {featuredProject.userRoles && <RoleSwitcher roles={featuredProject.userRoles} />}

          {/* Architecture Diagram */}
          <ArchitectureDiagram architecture={featuredProject.architecture} />
        </div>

        <DimensionLine label="OTHER PRODUCTION BLUEPRINTS" />

        {/* 2 & 3. SECONDARY PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minorProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className={`p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                hoveredProjectId === project.id || (hoveredSkillId && project.stack.some(s => s.toLowerCase().includes(hoveredSkillId)))
                  ? 'border-[var(--accent-orange)] shadow-lg bg-[var(--surface-sheet)]'
                  : 'border-[var(--border-ink)] bg-[var(--surface-sheet)]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[var(--border-ink)] pb-2 font-mono-spec text-xs">
                  <span className="text-[var(--accent-orange)] font-bold">{project.sheetNumber}</span>
                  <StampBadge label={project.status} variant="green" rotate={0} />
                </div>

                <h3 className="font-heading text-xl font-extrabold text-[var(--text-ink)]">
                  {project.title}
                </h3>
                <p className="font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 font-mono-spec text-[10px] border border-[var(--border-ink)] bg-[var(--bg-paper)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-ink)] mt-4 space-y-2 font-mono-spec text-xs">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="w-full py-2 border border-[var(--accent-orange)] text-[var(--accent-orange)] font-bold flex items-center justify-center space-x-2 hover:bg-[var(--badge-bg)] transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW ANNOTATED DRAWING</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-[var(--border-ink)] font-bold text-center flex items-center justify-center space-x-1 hover:border-[var(--accent-orange)]"
                  >
                    <span>DEMO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-[var(--border-ink)] font-bold text-center flex items-center justify-center space-x-1 hover:border-[var(--accent-orange)]"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>GITHUB</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
