import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  FileCode2, 
  Atom, 
  Zap, 
  Palette, 
  Server, 
  Cpu, 
  Network, 
  Database, 
  GitBranch,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Skill } from '../data/types';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode2,
  Atom,
  Zap,
  Palette,
  Server,
  Cpu,
  Network,
  Database,
  GitBranch,
};

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  const IconComponent = iconMap[skill.iconName] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card p-5 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/10 hover:border-indigo-500/40"
    >
      {/* Background ambient glow on hover */}
      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-300 shadow-inner shrink-0">
          <IconComponent className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
              {skill.name}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 font-mono border border-white/10">
              {skill.category}
            </span>
          </div>

          {skill.description && (
            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
              {skill.description}
            </p>
          )}

          {skill.proficiency && (
            <div className="mt-3">
              <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                <span>Proficiency</span>
                <span className="font-mono text-cyan-400 font-semibold">{skill.proficiency}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
