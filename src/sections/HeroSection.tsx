import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Mail, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';
import avatarImg from '../assets/images/avatar.svg';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-500 top-1/4 -left-48 animate-pulse-slow" />
      <div className="glow-orb w-[600px] h-[600px] bg-indigo-600 top-1/3 -right-60 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="glow-orb w-[400px] h-[400px] bg-purple-600 bottom-10 left-1/3 animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-gradient">{personalInfo.name}</span> 👋
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Building</span>
                <span className="px-3 py-1 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 font-mono text-xl sm:text-2xl">
                  {personalInfo.role}
                </span>
                <span>Applications</span>
              </h2>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-2xl glass-card text-gray-200 hover:text-white font-bold text-sm sm:text-base flex items-center gap-2 hover:border-cyan-500/40"
              >
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#contact"
                className="p-3.5 rounded-2xl glass-button text-gray-300 hover:text-cyan-400 transition-colors"
                title="Download CV / Resume"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-400 text-xs">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-button text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-button text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl glass-button text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="h-6 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-4 font-mono">
                <div className="flex items-center gap-1.5 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>React / Next.js</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Node / MongoDB</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Column: Visual Avatar & Interactive Badge Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin" style={{ animationDuration: '30s' }} />
              
              {/* Glowing Glass Card Backplate */}
              <div className="absolute inset-4 rounded-3xl glass-card p-4 flex items-center justify-center overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src={avatarImg}
                  alt="Fibin Avatar"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 1: React */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 px-4 py-2.5 rounded-2xl glass-panel border border-cyan-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-cyan-300"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>React &amp; TypeScript</span>
              </motion.div>

              {/* Floating Badge 2: Full-Stack */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl glass-panel border border-indigo-500/40 shadow-xl flex items-center gap-2 text-xs font-bold text-indigo-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                <span>Node.js &amp; Express</span>
              </motion.div>

              {/* Floating Badge 3: MongoDB */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-8 px-3.5 py-2 rounded-2xl glass-panel border border-emerald-500/40 shadow-xl flex items-center gap-2 text-xs font-mono text-emerald-300"
              >
                <span>🍃 MongoDB</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
