import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { Project } from '../data/types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group border border-white/10 hover:border-cyan-500/40 relative shadow-xl"
    >
      {/* Project Image Container */}
      <div 
        onClick={() => onSelect(project)}
        className="relative h-56 sm:h-64 w-full overflow-hidden cursor-pointer group-hover:opacity-95 transition-opacity"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
            {project.category}
          </span>
        </div>

        {/* Hover View Action */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-xs">
          <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/40 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            View Case Study <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 
              onClick={() => onSelect(project)}
              className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
                title="View Source Code"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-gray-400 transition-colors"
                title="View Live Demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-xs font-semibold text-cyan-400/90 mb-3 font-mono">
            {project.subtitle}
          </p>

          <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2 font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Stack Highlights
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-500/10 text-cyan-300 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
