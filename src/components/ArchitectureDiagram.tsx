'use client';

import React from 'react';
import { ArrowRight, Database, Server, Layout, ShieldCheck } from 'lucide-react';

interface ArchitectureDiagramProps {
  architecture?: {
    frontend: string;
    api: string;
    orm?: string;
    database: string;
    auth: string;
  };
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ architecture }) => {
  if (!architecture) return null;

  return (
    <div className="w-full my-6 p-4 sm:p-6 border border-[var(--border-ink)] bg-[var(--surface-sheet)]">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-ink)] pb-2 font-mono-spec">
        <div className="flex items-center space-x-2">
          <span className="text-[var(--accent-orange)] font-bold text-xs">[DWG DIAGRAM 03]</span>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider">
            System Topology & Data Flow Blueprint
          </h4>
        </div>
        <span className="text-[10px] opacity-60">END-TO-END STACK</span>
      </div>

      {/* Interactive Flow Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
        {/* Tier 1: Frontend */}
        <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] relative group hover:border-[var(--accent-orange)] transition-colors">
          <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
            <Layout className="w-3.5 h-3.5" />
            <span>01. FRONTEND TIER</span>
          </div>
          <div className="font-heading font-bold text-xs text-[var(--text-ink)] mb-1">
            Client Application
          </div>
          <p className="font-mono-spec text-[11px] opacity-80">
            {architecture.frontend}
          </p>
        </div>

        {/* Tier 2: Express API */}
        <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] relative group hover:border-[var(--accent-orange)] transition-colors">
          <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
            <Server className="w-3.5 h-3.5" />
            <span>02. API LOGIC TIER</span>
          </div>
          <div className="font-heading font-bold text-xs text-[var(--text-ink)] mb-1">
            REST API & Auth Server
          </div>
          <p className="font-mono-spec text-[11px] opacity-80">
            {architecture.api}
          </p>
        </div>

        {/* Tier 3: ORM / Data Layer */}
        {architecture.orm ? (
          <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] relative group hover:border-[var(--accent-orange)] transition-colors">
            <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>03. ORM ABSTRACTION</span>
            </div>
            <div className="font-heading font-bold text-xs text-[var(--text-ink)] mb-1">
              Type-Safe Data Access
            </div>
            <p className="font-mono-spec text-[11px] opacity-80">
              {architecture.orm}
            </p>
          </div>
        ) : (
          <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] relative group hover:border-[var(--accent-orange)] transition-colors">
            <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>03. AUTH / SECURITY</span>
            </div>
            <div className="font-heading font-bold text-xs text-[var(--text-ink)] mb-1">
              JWT & Permissions
            </div>
            <p className="font-mono-spec text-[11px] opacity-80">
              {architecture.auth}
            </p>
          </div>
        )}

        {/* Tier 4: Database */}
        <div className="p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] relative group hover:border-[var(--accent-orange)] transition-colors">
          <div className="flex items-center space-x-2 font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold mb-1">
            <Database className="w-3.5 h-3.5" />
            <span>04. PERSISTENCE TIER</span>
          </div>
          <div className="font-heading font-bold text-xs text-[var(--text-ink)] mb-1">
            Database Engine
          </div>
          <p className="font-mono-spec text-[11px] opacity-80">
            {architecture.database}
          </p>
        </div>
      </div>
    </div>
  );
};
