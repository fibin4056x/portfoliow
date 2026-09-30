'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SVGBuildingDrawing: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const drawVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.15, type: 'spring' as const, duration: 1.8, bounce: 0 },
        opacity: { delay: i * 0.15, duration: 0.3 },
      },
    }),
  };

  const layersInfo = [
    {
      id: 'deploy',
      title: 'ROOF: PRODUCTION LAUNCHPAD',
      tech: 'Vercel · Render · Git / GitHub',
      detail: 'Continuous Integration & Production Cloud Hosting',
      color: 'var(--accent-orange)',
    },
    {
      id: 'frontend',
      title: 'LAYER 03: FRONTEND INTERFACE STUDIO',
      tech: 'Next.js (App Router) · React.js · TypeScript · Tailwind CSS',
      detail: 'Client-Side Rendering, UX State, & Fluid Animations',
      color: 'var(--accent-orange)',
    },
    {
      id: 'api',
      title: 'LAYER 02: REST API & SECURITY CORE',
      tech: 'Node.js · Express.js · JWT Auth · RBAC · bcrypt',
      detail: 'Stateless Controllers, Middleware, & Business Logic',
      color: 'var(--accent-orange)',
    },
    {
      id: 'db',
      title: 'GROUND FLOOR: PERSISTENCE & DATA STORAGE',
      tech: 'PostgreSQL · Prisma ORM · MongoDB · Mongoose',
      detail: 'ACID Transactions, Schema Models, & Indexing',
      color: 'var(--accent-orange)',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
      {/* CAD Schematic Header */}
      <div className="w-full flex justify-between items-center mb-2 px-2 font-mono-spec text-[10px] opacity-70">
        <span>ELEVATION: FULL-STACK ARCHITECTURE</span>
        <span>SCALE 1:50</span>
      </div>

      {/* Main SVG Blueprint Building */}
      <div className="relative w-full aspect-[4/5] border border-[var(--border-ink)] p-4 bg-[var(--surface-sheet)] shadow-xs">
        {/* Background Grid Ticks */}
        <div className="absolute inset-0 pointer-events-none hatch-pattern opacity-10" />

        <svg
          viewBox="0 0 400 500"
          className="w-full h-full text-[var(--text-ink)] overflow-visible"
          style={{ stroke: 'currentColor', strokeWidth: 1.5, fill: 'none' }}
        >
          {/* Ground Line */}
          <motion.line
            x1="20"
            y1="460"
            x2="380"
            y2="460"
            custom={0}
            variants={drawVariant}
            initial="hidden"
            animate="visible"
            strokeDasharray="6 3"
          />
          <motion.text
            x="25"
            y="475"
            fill="currentColor"
            stroke="none"
            className="font-mono-spec text-[9px] opacity-60"
          >
            DATUM: GROUND DATUM ±0.00 (DATABASE)
          </motion.text>

          {/* Roof Antenna / Deployment Mast */}
          <g
            className="cursor-pointer transition-opacity duration-200"
            onMouseEnter={() => setActiveLayer('deploy')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            <motion.path
              d="M 200 80 L 200 30 M 190 45 L 210 45 M 180 60 L 220 60"
              custom={1}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
              stroke={activeLayer === 'deploy' ? 'var(--accent-orange)' : 'currentColor'}
              strokeWidth={activeLayer === 'deploy' ? 2.5 : 1.5}
            />
            <motion.circle
              cx="200"
              cy="30"
              r="4"
              fill={activeLayer === 'deploy' ? 'var(--accent-orange)' : 'none'}
              stroke="var(--accent-orange)"
              custom={1.2}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
            />
          </g>

          {/* Layer 3: Roof / Frontend Studio Structure */}
          <g
            className="cursor-pointer group"
            onMouseEnter={() => setActiveLayer('frontend')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            {/* Triangular Roof Gable */}
            <motion.path
              d="M 120 140 L 200 80 L 280 140 Z"
              custom={2}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
              fill={activeLayer === 'frontend' ? 'rgba(255, 90, 31, 0.08)' : 'none'}
              stroke={activeLayer === 'frontend' ? 'var(--accent-orange)' : 'currentColor'}
              strokeWidth={activeLayer === 'frontend' ? 2.5 : 1.5}
            />
            {/* Frontend Floor Box */}
            <motion.rect
              x="120"
              y="140"
              width="160"
              height="90"
              custom={2.5}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
              fill={activeLayer === 'frontend' ? 'rgba(255, 90, 31, 0.12)' : 'none'}
              stroke={activeLayer === 'frontend' ? 'var(--accent-orange)' : 'currentColor'}
              strokeWidth={activeLayer === 'frontend' ? 2.5 : 1.5}
            />
            {/* Windows for Frontend Room */}
            <motion.rect x="140" y="160" width="35" height="50" custom={2.8} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="185" y="160" width="30" height="50" custom={3.0} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="225" y="160" width="35" height="50" custom={3.2} variants={drawVariant} initial="hidden" animate="visible" />
            
            {/* Text Annotation inside SVG */}
            <text x="135" y="130" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              [L3] FRONTEND UI
            </text>
          </g>

          {/* Layer 2: API & Logic Chamber */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setActiveLayer('api')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            <motion.rect
              x="90"
              y="230"
              width="220"
              height="110"
              custom={3.5}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
              fill={activeLayer === 'api' ? 'rgba(255, 90, 31, 0.12)' : 'none'}
              stroke={activeLayer === 'api' ? 'var(--accent-orange)' : 'currentColor'}
              strokeWidth={activeLayer === 'api' ? 2.5 : 1.5}
            />
            {/* Structural Columns */}
            <motion.line x1="145" y1="230" x2="145" y2="340" custom={3.8} variants={drawVariant} initial="hidden" animate="visible" strokeDasharray="3 3" />
            <motion.line x1="255" y1="230" x2="255" y2="340" custom={4.0} variants={drawVariant} initial="hidden" animate="visible" strokeDasharray="3 3" />
            
            {/* API Room Windows */}
            <motion.rect x="105" y="255" width="28" height="60" custom={4.1} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="160" y="255" width="80" height="60" custom={4.3} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="267" y="255" width="28" height="60" custom={4.5} variants={drawVariant} initial="hidden" animate="visible" />

            <text x="165" y="290" stroke="none" fill="currentColor" className="font-mono-spec text-[10px] font-bold tracking-wider">
              EXPRESS / REST
            </text>
            <text x="105" y="245" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              [L2] API & AUTH CORE
            </text>
          </g>

          {/* Layer 1: Ground Database Foundation */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setActiveLayer('db')}
            onMouseLeave={() => setActiveLayer(null)}
          >
            <motion.rect
              x="60"
              y="340"
              width="280"
              height="120"
              custom={4.8}
              variants={drawVariant}
              initial="hidden"
              animate="visible"
              fill={activeLayer === 'db' ? 'rgba(255, 90, 31, 0.12)' : 'none'}
              stroke={activeLayer === 'db' ? 'var(--accent-orange)' : 'currentColor'}
              strokeWidth={activeLayer === 'db' ? 2.5 : 1.5}
            />
            {/* Heavy Base Footing Pillars */}
            <motion.rect x="80" y="360" width="60" height="80" custom={5.0} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="170" y="360" width="60" height="80" custom={5.2} variants={drawVariant} initial="hidden" animate="visible" />
            <motion.rect x="260" y="360" width="60" height="80" custom={5.4} variants={drawVariant} initial="hidden" animate="visible" />

            <text x="88" y="405" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              POSTGRES
            </text>
            <text x="180" y="405" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              PRISMA
            </text>
            <text x="268" y="405" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              MONGODB
            </text>
            <text x="75" y="355" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] font-bold">
              [L1] DATABASE FOUNDATION
            </text>
          </g>

          {/* Side Dimension Callouts */}
          <motion.line x1="335" y1="80" x2="365" y2="80" custom={5.6} variants={drawVariant} initial="hidden" animate="visible" />
          <motion.line x1="335" y1="460" x2="365" y2="460" custom={5.7} variants={drawVariant} initial="hidden" animate="visible" />
          <motion.line x1="355" y1="80" x2="355" y2="460" custom={5.8} variants={drawVariant} initial="hidden" animate="visible" strokeDasharray="4 2" />
          <text x="360" y="270" stroke="none" fill="currentColor" className="font-mono-spec text-[9px] rotate-90 origin-left">
            HEIGHT: 100% FULL-STACK
          </text>
        </svg>

        {/* Hover Layer Specification Box */}
        <div className="mt-3 p-2.5 border border-[var(--border-ink)] bg-[var(--bg-paper)] min-h-[64px] transition-all duration-200">
          {activeLayer ? (
            <div>
              <div className="font-mono-spec text-[10px] font-bold text-[var(--accent-orange)] tracking-wider">
                {layersInfo.find((l) => l.id === activeLayer)?.title}
              </div>
              <div className="font-mono-spec text-xs font-semibold text-[var(--text-ink)] mt-0.5">
                {layersInfo.find((l) => l.id === activeLayer)?.tech}
              </div>
              <div className="text-[11px] opacity-80 mt-0.5">
                {layersInfo.find((l) => l.id === activeLayer)?.detail}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between h-full font-mono-spec text-[11px] opacity-60">
              <span>✦ Hover over building rooms to inspect architectural stack specs</span>
              <span className="text-[var(--accent-orange)] font-bold">[CAD DWG: 01-HERO]</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
