'use client';

import React from 'react';
import { 
  Compass, 
  Layers, 
  Code, 
  ShieldCheck, 
  Rocket, 
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '@/data/company';

export default function Process() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case '02':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case '03':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case '04':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case '05':
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <GitBranch className="w-3.5 h-3.5" />
            Execution Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            From Raw Architecture to <span className="text-gradient-violet">Production Scale</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don’t believe in black boxes. Every milestone in our development cycle is engineered 
            with transparency, measurable sprint velocity, and enterprise-grade rigor.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {METHODOLOGY_STEPS.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-[#0c101b]/80 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-indigo-400 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(item.step)}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 inline-block">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress indicator bottom bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1">
                <div className="h-1 flex-1 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500" 
                    style={{ width: `${((index + 1) / 5) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {Math.round(((index + 1) / 5) * 100)}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
