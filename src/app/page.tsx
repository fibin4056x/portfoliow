'use client';

import React, { useEffect } from 'react';
import { useBlueprint } from '@/context/BlueprintContext';
import { BlueprintHeaderNav } from '@/components/BlueprintHeaderNav';
import { CADCrosshair } from '@/components/CADCrosshair';
import { BlueprintTitleBlockFixed } from '@/components/BlueprintTitleBlockFixed';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { SheetHero } from '@/components/sheets/SheetHero';
import { SheetAbout } from '@/components/sheets/SheetAbout';
import { SheetProjects } from '@/components/sheets/SheetProjects';
import { SheetExperience } from '@/components/sheets/SheetExperience';
import { SheetSkills } from '@/components/sheets/SheetSkills';
import { SheetContactEducation } from '@/components/sheets/SheetContactEducation';

export default function Home() {
  const { setActiveSheet } = useBlueprint();

  useEffect(() => {
    // IntersectionObserver to dynamically update active sheet title block as user scrolls
    const sheetSections = [
      { id: 'sheet-a01', sheet: 'A-01' },
      { id: 'sheet-a02', sheet: 'A-02' },
      { id: 'sheet-a03', sheet: 'A-03' },
      { id: 'sheet-a04', sheet: 'A-04' },
      { id: 'sheet-a05', sheet: 'A-05' },
      { id: 'sheet-a06', sheet: 'A-06' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sheetSections.find((s) => s.id === entry.target.id);
            if (match) {
              setActiveSheet(match.sheet);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sheetSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSheet]);

  return (
    <main className="blueprint-grid-bg cad-cursor-active relative min-h-screen">
      {/* Desktop CAD Crosshair Cursor Overlay */}
      <CADCrosshair />

      {/* Sticky Blueprint Navigation */}
      <BlueprintHeaderNav />

      {/* Sheet A-01: Cover / Hero Elevation */}
      <SheetHero />

      {/* Sheet A-02: About / Project Brief */}
      <SheetAbout />

      {/* Sheet A-03: Selected Works (Projects) */}
      <SheetProjects />

      {/* Sheet A-04: Experience / Construction Log */}
      <SheetExperience />

      {/* Sheet A-05: Materials & Tools (Skills Legend) */}
      <SheetSkills />

      {/* Sheet A-06: Education & Master Contact Title Block */}
      <SheetContactEducation />

      {/* Detail Drawing Modal for Annotated Project Callouts */}
      <ProjectDetailModal />

      {/* Fixed Bottom-Right Drafting Title Block */}
      <BlueprintTitleBlockFixed />
    </main>
  );
}
