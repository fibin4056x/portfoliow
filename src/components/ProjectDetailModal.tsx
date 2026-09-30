'use client';

import React, { useState } from 'react';
import { useBlueprint } from '@/context/BlueprintContext';
import { X, ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { StampBadge } from './StampBadge';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { RoleSwitcher } from './RoleSwitcher';
import { CoreJourneyStepper } from './CoreJourneyStepper';

export const ProjectDetailModal: React.FC = () => {
  const { activeProjectModal, setActiveProjectModal } = useBlueprint();
  const [selectedCallout, setSelectedCallout] = useState<string | null>(null);

  if (!activeProjectModal) return null;

  const project = activeProjectModal;
  const activeFeature = project.keyFeatures.find((f) => f.id === selectedCallout) || project.keyFeatures[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] border-2 border-[var(--border-ink)] bg-[var(--bg-paper)] shadow-2xl overflow-y-auto flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Detail Drawing Blueprint Top Header */}
        <div className="sticky top-0 z-20 p-4 border-b border-[var(--border-ink)] bg-[var(--surface-sheet)] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <StampBadge label={project.status} variant={project.status === 'LIVE' ? 'green' : 'orange'} />
            <div>
              <span className="font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold block uppercase">
                DETAIL DRAWING {project.sheetNumber}
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[var(--text-ink)] leading-none">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => setActiveProjectModal(null)}
            className="p-2 border border-[var(--border-ink)] hover:border-[var(--accent-orange)] text-[var(--text-ink)] focus:outline-none"
            aria-label="Close detail drawing modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 border border-[var(--border-ink)] bg-[var(--surface-sheet)] font-mono-spec text-xs">
            {project.team && (
              <div>
                <span className="opacity-60 text-[9px] block">TEAM SIZE:</span>
                <span className="font-bold">{project.team}</span>
              </div>
            )}
            {project.duration && (
              <div>
                <span className="opacity-60 text-[9px] block">DURATION:</span>
                <span className="font-bold">{project.duration}</span>
              </div>
            )}
            {project.role && (
              <div className="col-span-2">
                <span className="opacity-60 text-[9px] block">MY ROLE SPEC:</span>
                <span className="font-bold text-[var(--accent-orange)]">{project.role}</span>
              </div>
            )}
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold uppercase mb-1">
              SPECIFICATION SUMMARY:
            </h4>
            <p className="text-sm sm:text-base leading-relaxed opacity-90">
              {project.summary}
            </p>
          </div>

          {/* Interactive Core Journey Flow (if present) */}
          {project.coreJourney && <CoreJourneyStepper steps={project.coreJourney} />}

          {/* Interactive User Role Switcher (if present) */}
          {project.userRoles && <RoleSwitcher roles={project.userRoles} />}

          {/* Numbered Callout Schema (Detail Drawing Callouts) */}
          <div className="border border-[var(--border-ink)] bg-[var(--surface-sheet)] p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 border-b border-[var(--border-ink)] pb-2 font-mono-spec">
              <span className="font-bold text-xs text-[var(--accent-orange)]">
                [CALLOUT DRAWING SCHEMATIC]
              </span>
              <span className="text-[10px] opacity-60">CLICK CALLOUT CIRCLES BELOW</span>
            </div>

            {/* Feature Callouts Grid / List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {project.keyFeatures.map((feature, index) => {
                const isSelected = selectedCallout === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setSelectedCallout(feature.id)}
                    className={`p-3 border text-left flex items-start space-x-3 transition-all ${
                      isSelected
                        ? 'border-[var(--accent-orange)] bg-[var(--badge-bg)] font-bold'
                        : 'border-[var(--border-ink)] bg-[var(--bg-paper)] hover:border-[var(--accent-orange)]'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono-spec text-xs font-bold shrink-0 ${
                        isSelected
                          ? 'border-[var(--accent-orange)] bg-[var(--accent-orange)] text-white'
                          : 'border-[var(--border-ink)] text-[var(--text-ink)]'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-heading text-xs font-bold text-[var(--text-ink)]">
                        {feature.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Callout Detail Box */}
            {activeFeature && (
              <div className="p-4 border-2 border-dashed border-[var(--accent-orange)] bg-[var(--bg-paper)]">
                <div className="font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
                  CALLOUT DETAILED SPECIFICATION:
                </div>
                <h5 className="font-heading font-bold text-base text-[var(--text-ink)] mb-1">
                  {activeFeature.title}
                </h5>
                <p className="text-xs sm:text-sm opacity-85 leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>
            )}
          </div>

          {/* Architecture Topology */}
          <ArchitectureDiagram architecture={project.architecture} />

          {/* Stack Tags */}
          <div>
            <h4 className="font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold uppercase mb-2">
              MATERIALS & TECHNOLOGIES USED:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 font-mono-spec text-xs border border-[var(--border-ink)] bg-[var(--surface-sheet)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[var(--border-ink)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--accent-orange)] text-white font-mono-spec font-bold text-xs flex items-center space-x-2 shadow-xs hover:bg-[var(--accent-orange)]/90 transition-colors focus:ring-2 focus:ring-[var(--accent-orange)]"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[var(--border-ink)] text-[var(--text-ink)] font-mono-spec font-bold text-xs flex items-center space-x-2 hover:border-[var(--accent-orange)] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GITHUB REPO</span>
              </a>
            </div>

            <div className="font-mono-spec text-[10px] opacity-60">
              DRAWING STATUS: RELEASED FOR PRODUCTION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
