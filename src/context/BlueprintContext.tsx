'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '@/data/portfolio';

interface BlueprintContextType {
  isBlueprintMode: boolean;
  toggleBlueprintMode: () => void;
  activeSheet: string;
  setActiveSheet: (sheet: string) => void;
  hoveredSkillId: string | null;
  setHoveredSkillId: (id: string | null) => void;
  hoveredProjectId: string | null;
  setHoveredProjectId: (id: string | null) => void;
  activeProjectModal: Project | null;
  setActiveProjectModal: (project: Project | null) => void;
}

const BlueprintContext = createContext<BlueprintContextType | undefined>(undefined);

export const BlueprintProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBlueprintMode, setIsBlueprintMode] = useState<boolean>(false);
  const [activeSheet, setActiveSheet] = useState<string>('A-01');
  const [hoveredSkillId, setHoveredSkillId] = useState<string | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Load saved preference or default
  useEffect(() => {
    const savedMode = localStorage.getItem('blueprint_mode');
    if (savedMode === 'true') {
      setIsBlueprintMode(true);
    }
  }, []);

  const toggleBlueprintMode = () => {
    setIsBlueprintMode((prev) => {
      const next = !prev;
      localStorage.setItem('blueprint_mode', String(next));
      return next;
    });
  };

  return (
    <BlueprintContext.Provider
      value={{
        isBlueprintMode,
        toggleBlueprintMode,
        activeSheet,
        setActiveSheet,
        hoveredSkillId,
        setHoveredSkillId,
        hoveredProjectId,
        setHoveredProjectId,
        activeProjectModal,
        setActiveProjectModal,
      }}
    >
      <div className={isBlueprintMode ? 'blueprint-inverted' : 'drafting-cream'}>
        {children}
      </div>
    </BlueprintContext.Provider>
  );
};

export const useBlueprint = () => {
  const context = useContext(BlueprintContext);
  if (!context) {
    throw new Error('useBlueprint must be used within a BlueprintProvider');
  }
  return context;
};
