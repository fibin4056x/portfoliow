'use client';

import React from 'react';
import { skillsCategories } from '@/data/portfolio';
import { useBlueprint } from '@/context/BlueprintContext';
import { StampBadge } from '../StampBadge';
import { DimensionLine } from '../DimensionLine';
import { Wrench, Code, Cpu, Database, Key, Sparkles, Layers } from 'lucide-react';

export const SheetSkills: React.FC = () => {
  const { hoveredSkillId, setHoveredSkillId, hoveredProjectId, setHoveredProjectId } = useBlueprint();

  const getCategoryIcon = (code: string) => {
    switch (code) {
      case 'MAT-01': return <Code className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-02': return <Layers className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-03': return <Cpu className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-04': return <Database className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-05': return <Key className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-06': return <Wrench className="w-4 h-4 text-[var(--accent-orange)]" />;
      case 'MAT-07': return <Sparkles className="w-4 h-4 text-[var(--accent-orange)]" />;
      default: return <Wrench className="w-4 h-4 text-[var(--accent-orange)]" />;
    }
  };

  return (
    <section
      id="sheet-a05"
      className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--border-ink)]"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Sheet Title Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--border-ink)] pb-4 gap-4">
          <div>
            <div className="flex items-center space-x-2 font-mono-spec text-xs text-[var(--accent-orange)] font-bold">
              <span>[SHEET A-05]</span>
              <span>·</span>
              <span>MATERIALS & SPECIFICATION LEGEND</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-ink)]">
              Technical Stack & Drawing Legend
            </h2>
          </div>
          <StampBadge label="MATERIAL LEGEND" variant="orange" rotate={-2} />
        </div>

        {/* CAD Legend Instruction Bar */}
        <div className="p-3 border border-[var(--border-ink)] bg-[var(--surface-sheet)] font-mono-spec text-xs flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-[var(--accent-orange)] font-bold">✦ CAD INTERACTION:</span>
            <span>Hovering any material skill highlights connected projects in Sheet A-03</span>
          </div>
          <span className="text-[10px] opacity-60">DWG NO: LEGEND-2026</span>
        </div>

        {/* Legend Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 border border-[var(--border-ink)] bg-[var(--surface-sheet)] space-y-3"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-[var(--border-ink)] pb-2 font-mono-spec">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(cat.code)}
                  <h3 className="font-heading font-bold text-sm text-[var(--text-ink)] uppercase">
                    {cat.category}
                  </h3>
                </div>
                <span className="text-[10px] text-[var(--accent-orange)] font-bold">
                  [{cat.code}]
                </span>
              </div>

              {/* Skills List */}
              <div className="space-y-1.5 font-mono-spec text-xs">
                {cat.skills.map((skill) => {
                  const skillIdLower = skill.name.toLowerCase();
                  const isHovered = hoveredSkillId === skillIdLower;
                  const isRelatedToHoveredProject = hoveredProjectId && skill.relatedProjects.includes(hoveredProjectId);

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkillId(skillIdLower)}
                      onMouseLeave={() => setHoveredSkillId(null)}
                      className={`p-2 border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isHovered || isRelatedToHoveredProject
                          ? 'border-[var(--accent-orange)] bg-[var(--accent-orange)] text-white font-bold scale-[1.02] shadow-xs'
                          : 'border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] hover:border-[var(--accent-orange)]'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] opacity-60">■</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-[9px] opacity-70 uppercase tracking-widest">
                        {skill.relatedProjects.length} DWG
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
