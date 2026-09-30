'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export const CoreJourneyStepper: React.FC<{ steps: JourneyStep[] }> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="w-full my-6 p-4 sm:p-6 border border-[var(--border-ink)] bg-[var(--surface-sheet)]">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border-ink)] pb-2 font-mono-spec">
        <div className="flex items-center space-x-2">
          <span className="text-[var(--accent-orange)] font-bold text-xs">[DWG FLOW 01]</span>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider">
            Rental Platform Core User Journey Workflow
          </h4>
        </div>
        <span className="text-[10px] opacity-60 hidden sm:inline">7-STAGE SEQUENTIAL PIPELINE</span>
      </div>

      {/* Stepper Buttons Horizon */}
      <div className="relative flex items-center justify-between overflow-x-auto pb-4 pt-2 no-scrollbar">
        {/* Horizontal connector line */}
        <div className="absolute top-7 left-4 right-4 h-[1px] bg-[var(--border-ink)] -z-0" />

        {steps.map((s) => {
          const isSelected = activeStep === s.step;
          const isPassed = activeStep > s.step;

          return (
            <button
              key={s.step}
              onClick={() => setActiveStep(s.step)}
              className="relative z-10 flex flex-col items-center group min-w-[70px] focus:outline-none"
            >
              <div
                className={`w-9 h-9 border-2 flex items-center justify-center font-mono-spec text-xs font-bold transition-all duration-200 ${
                  isSelected
                    ? 'border-[var(--accent-orange)] bg-[var(--accent-orange)] text-white scale-110 shadow-md'
                    : isPassed
                    ? 'border-[var(--accent-orange)] bg-[var(--surface-sheet)] text-[var(--accent-orange)]'
                    : 'border-[var(--border-ink)] bg-[var(--bg-paper)] text-[var(--text-ink)] opacity-70 group-hover:border-[var(--accent-orange)]'
                }`}
              >
                {isPassed ? <CheckCircle2 className="w-4 h-4" /> : s.step}
              </div>
              <span
                className={`mt-2 font-mono-spec text-[10px] uppercase font-bold tracking-wider transition-colors ${
                  isSelected ? 'text-[var(--accent-orange)] font-extrabold' : 'opacity-70'
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Description Spec Box */}
      {steps.find((s) => s.step === activeStep) && (
        <div className="mt-2 p-3 border border-[var(--border-ink)] bg-[var(--bg-paper)] font-mono-spec text-xs flex items-start space-x-3">
          <div className="px-2 py-0.5 border border-[var(--accent-orange)] text-[var(--accent-orange)] font-bold text-[10px]">
            STAGE 0{activeStep} SPEC
          </div>
          <div className="flex-1">
            <div className="font-bold text-sm text-[var(--text-ink)]">
              {steps.find((s) => s.step === activeStep)?.title}:
            </div>
            <p className="text-[12px] opacity-80 mt-0.5">
              {steps.find((s) => s.step === activeStep)?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
