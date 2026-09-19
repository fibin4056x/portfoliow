import React from 'react';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-16 pb-12 overflow-hidden text-gray-400">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-bold">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                FIBIN<span className="text-cyan-400">.DEV</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Full-Stack Developer crafting high-performance, responsive web applications with React, Next.js, Node.js, and MongoDB.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-9 h-9 rounded-xl glass-button flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Projects */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Featured Work</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">EduTrack System</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Sole Society E-commerce</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Spotnest Property App</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1 text-gray-400">
            © {new Date().getFullYear()} Fibin. Built with React, TypeScript, Tailwind &amp; Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl glass-button text-gray-300 hover:text-white flex items-center gap-2 group transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
