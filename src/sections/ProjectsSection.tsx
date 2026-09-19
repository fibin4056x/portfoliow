import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/types';

type ProjectFilter = 'All' | 'Full-Stack' | 'E-commerce';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(
    (proj) => filter === 'All' || proj.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/70">
      {/* Ambient Lighting */}
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600/10 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Portfolio Work"
          title="Crafted Projects &"
          titleGradient="Case Studies"
          description="Detailed implementations showcasing EduTrack (School Management), Sole Society (E-commerce), and Spotnest (Rental Management)."
        />

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {(['All', 'Full-Stack', 'E-commerce'] as ProjectFilter[]).map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white shadow-lg shadow-cyan-500/20'
                    : 'text-gray-400 glass-button hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
