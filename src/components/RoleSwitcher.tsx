'use client';

import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Search, Home, Check } from 'lucide-react';

interface UserRole {
  role: 'Admin' | 'Owner' | 'Customer' | 'Tenant';
  title: string;
  description: string;
  features: string[];
}

export const RoleSwitcher: React.FC<{ roles: UserRole[] }> = ({ roles }) => {
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Owner' | 'Customer' | 'Tenant'>('Owner');

  const activeRoleData = roles.find((r) => r.role === selectedRole) || roles[0];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Admin': return <ShieldCheck className="w-4 h-4" />;
      case 'Owner': return <Home className="w-4 h-4" />;
      case 'Customer': return <Search className="w-4 h-4" />;
      case 'Tenant': return <UserCheck className="w-4 h-4" />;
      default: return <UserCheck className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full my-6 p-4 sm:p-6 border border-[var(--border-ink)] bg-[var(--surface-sheet)]">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-ink)] pb-2 font-mono-spec">
        <div className="flex items-center space-x-2">
          <span className="text-[var(--accent-orange)] font-bold text-xs">[DWG SPEC 02]</span>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[var(--text-ink)]">
            Role-Based Permission Matrix & Feature Switcher
          </h4>
        </div>
        <span className="text-[10px] text-[var(--text-muted)] hidden sm:inline">4 RBAC TIERS</span>
      </div>

      {/* Role Tab Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {roles.map((r) => {
          const isSelected = selectedRole === r.role;
          return (
            <button
              key={r.role}
              onClick={() => setSelectedRole(r.role)}
              className={`p-2.5 font-mono-spec text-xs font-bold border flex items-center justify-center space-x-2 transition-all ${
                isSelected
                  ? 'border-[var(--accent-orange)] text-[var(--accent-orange)] bg-[var(--badge-bg)] shadow-xs'
                  : 'border-[var(--border-ink)] text-[var(--text-secondary)] hover:text-[var(--text-ink)] hover:border-[var(--accent-orange)] bg-[var(--bg-paper)]'
              }`}
            >
              {getRoleIcon(r.role)}
              <span>{r.role.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Role Specifications Box */}
      <div className="p-4 border border-[var(--border-ink)] bg-[var(--bg-paper)]">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[var(--border-ink)]">
          <div>
            <span className="font-mono-spec text-[10px] text-[var(--accent-orange)] font-bold block uppercase">
              ACTIVE RBAC SPECIFICATION:
            </span>
            <h5 className="font-heading font-bold text-base text-[var(--text-ink)]">
              {activeRoleData.title}
            </h5>
          </div>
          {selectedRole === 'Tenant' && (
            <span className="px-2 py-1 font-mono-spec text-[10px] bg-[var(--badge-bg)] border border-[var(--accent-orange)] text-[var(--accent-orange)] font-bold">
              ★ Customer becomes Tenant upon Owner acceptance
            </span>
          )}
        </div>

        <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">{activeRoleData.description}</p>

        <div className="space-y-2">
          <span className="font-mono-spec text-[10px] font-bold text-[var(--text-muted)] uppercase block">
            GRANTED CAPABILITIES & FEATURES:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeRoleData.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2 font-mono-spec text-xs p-2 border border-[var(--border-ink)] bg-[var(--surface-sheet)] text-[var(--text-ink)]"
              >
                <Check className="w-3.5 h-3.5 text-[var(--accent-orange)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
