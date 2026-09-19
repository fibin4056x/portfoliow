import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo, experienceData } from '../data/portfolioData';
import { Code2, Cpu, Layout, Layers, ShieldCheck, Briefcase, Calendar } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Layout,
      title: 'Pixel-Perfect Frontend',
      description: 'Translating Figma designs into responsive, accessible, and high-performance React & Next.js user interfaces.',
    },
    {
      icon: Cpu,
      title: 'Robust Backend APIs',
      description: 'Designing RESTful APIs with Node.js and Express.js, secured with JWT and optimized with MongoDB aggregation.',
    },
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      description: 'Building end-to-end applications with clean separation of concerns, strict TypeScript types, and scalable state.',
    },
    {
      icon: ShieldCheck,
      title: 'Clean Code & Testing',
      description: 'Writing maintainable, modular code adhering to modern JavaScript & TypeScript best practices.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Engineered for Performance,"
          titleGradient="Designed for Scale"
          description="A look into my background, technical philosophy, and experience as a Full-Stack Developer."
        />

        {/* Bio & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between border border-white/10"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Full-Stack Capability</h3>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Whether creating intricate school management portals like <span className="text-cyan-300 font-semibold">EduTrack</span>, high-converting e-commerce experiences like <span className="text-cyan-300 font-semibold">Sole Society</span>, or feature-rich rental platforms like <span className="text-cyan-300 font-semibold">Spotnest</span>, I focus on code purity, responsiveness, and user happiness.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-6 border-t border-white/10">
              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                  {personalInfo.stats.experienceYears}
                </span>
                <span className="text-xs text-gray-400 font-medium">Years Experience</span>
              </div>

              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-indigo-400 font-mono">
                  {personalInfo.stats.projectsCompleted}
                </span>
                <span className="text-xs text-gray-400 font-medium">Projects Built</span>
              </div>

              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-purple-400 font-mono">
                  {personalInfo.stats.technologiesMastered}
                </span>
                <span className="text-xs text-gray-400 font-medium">Tech Stack Items</span>
              </div>

              <div className="text-center p-3 rounded-2xl bg-white/5 border border-white/5">
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  {personalInfo.stats.codeQualityRating}
                </span>
                <span className="text-xs text-gray-400 font-medium">Code Quality</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-cyan-400 border border-indigo-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-extrabold text-white">Professional Journey</h3>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-gray-300 border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-indigo-500/10 text-cyan-300 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
