'use client';

import React from 'react';
import { projects } from '@/data/portfolio';
import { useBlueprint } from '@/context/BlueprintContext';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { CoreJourneyStepper } from '../CoreJourneyStepper';
import { RoleSwitcher } from '../RoleSwitcher';
import { ArchitectureDiagram } from '../ArchitectureDiagram';
import { ExternalLink, Eye, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

export const SheetProjects: React.FC = () => {
  const {
    setActiveProjectModal,
    hoveredProjectId,
    setHoveredProjectId,
    hoveredSkillId,
  } = useBlueprint();

  const featuredProject = projects[0];
  const minorProjects = projects.slice(1);

  return (
    <section
      id="sheet-a03"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-ink)]"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* =========================
            SHEET HEADER
        ========================== */}
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

          <StampBadge
            label={`${projects.length} SYSTEM BLUEPRINTS`}
            variant="orange"
            rotate={-1}
          />
        </div>

        {/* =========================
            FEATURED PROJECT
        ========================== */}
        <div
          onMouseEnter={() => setHoveredProjectId(featuredProject.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
          className={`navy-panel p-6 sm:p-8 border-2 transition-all duration-300 ${
            hoveredProjectId === featuredProject.id ||
            (hoveredSkillId &&
              featuredProject.stack.some((s) =>
                s.toLowerCase().includes(hoveredSkillId)
              ))
              ? 'border-[var(--accent-orange)] shadow-xl'
              : 'border-[var(--border-ink)]'
          }`}
        >
          {/* Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[var(--border-ink)]">
            <div className="flex items-center space-x-3">
              <span className="px-2.5 py-1 bg-[var(--accent-orange)] text-white font-mono-spec text-xs font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                FEATURED BLUEPRINT (LATEST)
              </span>

              <StampBadge
                label={featuredProject.status}
                variant="orange"
                rotate={0}
              />
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

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {featuredProject.summary}
              </p>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featuredProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 font-mono-spec text-xs font-medium text-[var(--text-ink)] border border-[var(--border-ink)] bg-[var(--bg-paper)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metadata + CTAs */}
            <div className="lg:col-span-4 p-4 border border-[var(--border-ink)] bg-[var(--bg-paper)] space-y-3 font-mono-spec text-xs">
              {featuredProject.team && (
                <div>
                  <span className="text-[var(--text-muted)] font-semibold text-[9px] block">
                    TEAM & TIMELINE:
                  </span>
                  <span className="font-bold text-[var(--text-ink)]">
                    {featuredProject.team}
                    {featuredProject.duration
                      ? ` · ${featuredProject.duration}`
                      : ''}
                  </span>
                </div>
              )}

              {featuredProject.role && (
                <div>
                  <span className="text-[var(--text-muted)] font-semibold text-[9px] block">
                    MY ROLE SPEC:
                  </span>
                  <span className="font-bold text-[var(--accent-orange)]">
                    {featuredProject.role}
                  </span>
                </div>
              )}

              <div className="pt-2 border-t border-[var(--border-ink)] space-y-2">

                {/* Detail Button */}
                <button
                  onClick={() => setActiveProjectModal(featuredProject)}
                  className="w-full py-2.5 bg-[var(--accent-orange)] text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-xs hover:bg-[var(--accent-orange-hover)] transition-colors focus:ring-2 focus:ring-[var(--accent-orange)]"
                >
                  <Eye className="w-4 h-4" />
                  <span>OPEN ANNOTATED DETAIL DRAWING</span>
                </button>

                {/* Live Demo */}
                {featuredProject.liveUrl && (
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-2 border border-[var(--border-ink)] bg-[var(--surface-sheet)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3 text-[var(--accent-orange)]" />
                  </a>
                )}

                {/* Frontend / Backend */}
                <div
                  className={`grid gap-2 ${
                    featuredProject.backendGithubUrl
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-[var(--border-ink)] bg-[var(--surface-sheet)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                  >
                    <GithubIcon className="w-3 h-3 text-[var(--accent-orange)]" />
                    <span>FRONTEND</span>
                  </a>

                  {featuredProject.backendGithubUrl && (
                    <a
                      href={featuredProject.backendGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-[var(--border-ink)] bg-[var(--surface-sheet)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                    >
                      <GithubIcon className="w-3 h-3 text-[var(--accent-orange)]" />
                      <span>BACKEND</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Core Journey */}
          {featuredProject.coreJourney && (
            <CoreJourneyStepper steps={featuredProject.coreJourney} />
          )}

          {/* User Roles */}
          {featuredProject.userRoles && (
            <RoleSwitcher roles={featuredProject.userRoles} />
          )}

          {/* Architecture */}
          <ArchitectureDiagram
            architecture={featuredProject.architecture}
          />
        </div>

        {/* =========================
            OTHER PROJECTS
        ========================== */}
        <DimensionLine label="OTHER PRODUCTION BLUEPRINTS" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minorProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className={`navy-panel p-6 border-2 transition-all duration-300 flex flex-col justify-between ${
                hoveredProjectId === project.id ||
                (hoveredSkillId &&
                  project.stack.some((s) =>
                    s.toLowerCase().includes(hoveredSkillId)
                  ))
                  ? 'border-[var(--accent-orange)] shadow-lg'
                  : 'border-[var(--border-ink)]'
              }`}
            >
              <div className="space-y-3">
                {/* Project Header */}
                <div className="flex items-center justify-between border-b border-[var(--border-ink)] pb-2 font-mono-spec text-xs">
                  <span className="text-[var(--accent-orange)] font-bold">
                    {project.sheetNumber}
                  </span>

                  <StampBadge
                    label={project.status}
                    variant="orange"
                    rotate={0}
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-extrabold text-[var(--text-ink)]">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.summary}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 font-mono-spec text-[10px] font-medium text-[var(--text-ink)] border border-[var(--border-ink)] bg-[var(--bg-paper)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* =========================
                  PROJECT ACTIONS
              ========================== */}
              <div className="pt-6 border-t border-[var(--border-ink)] mt-4 space-y-2 font-mono-spec text-xs">

                {/* Detail */}
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="w-full py-2 border-2 border-[var(--accent-orange)] bg-[var(--badge-bg)] text-[var(--accent-orange)] font-bold flex items-center justify-center space-x-2 hover:bg-[var(--accent-orange)] hover:text-white transition-colors focus:ring-2 focus:ring-[var(--accent-orange)]"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW ANNOTATED DRAWING</span>
                </button>

                {/* Live Demo */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-1.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3 text-[var(--accent-orange)]" />
                  </a>
                )}

                {/* Frontend / Backend */}
                <div
                  className={`grid gap-2 ${
                    project.backendGithubUrl
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  }`}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                  >
                    <GithubIcon className="w-3 h-3 text-[var(--accent-orange)]" />
                    <span>
                      {project.backendGithubUrl ? 'FRONTEND' : 'SOURCE'}
                    </span>
                  </a>

                  {project.backendGithubUrl && (
                    <a
                      href={project.backendGithubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] font-bold text-center flex items-center justify-center space-x-1.5 hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] transition-colors"
                    >
                      <GithubIcon className="w-3 h-3 text-[var(--accent-orange)]" />
                      <span>BACKEND</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};