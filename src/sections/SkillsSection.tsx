import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SkillBadge } from '../components/SkillBadge';
import { skillsData } from '../data/portfolioData';
import type { SkillCategory } from '../data/types';

const categories: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-orb w-[450px] h-[450px] bg-cyan-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Tech Stack & Skills"
          title="Tools & Technologies"
          titleGradient="I Master"
          description="A comprehensive overview of my core skills in JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, REST APIs, Git, GitHub, and Tailwind CSS."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg shadow-cyan-500/20'
                    : 'text-gray-400 glass-button hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillBadge key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-card border border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h4 className="text-xl font-bold text-white mb-2">Constantly Evolving Technical Breadth</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              I stay at the forefront of modern web standards, adopting React Server Components, Tailwind CSS v4, dynamic animation patterns, and secure RESTful architectures.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-300 font-mono text-xs font-semibold border border-cyan-500/20">
              Frontend + Backend + DB
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
