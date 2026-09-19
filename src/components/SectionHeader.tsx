import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge?: string;
  eyebrow?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  eyebrow,
  title,
  titleGradient,
  description,
  centered = true,
}) => {
  const badgeText = badge || eyebrow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badgeText && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-button text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4 shadow-sm border border-cyan-500/20`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          {badgeText}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient font-extrabold">{titleGradient}</span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
