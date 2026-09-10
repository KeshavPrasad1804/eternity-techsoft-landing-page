'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Server, 
  Cloud, 
  Database, 
  ShieldCheck,
  Code2
} from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '@/data/company';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Frontend & UI':
        return <Layers className="w-4 h-4" />;
      case 'Backend & APIs':
        return <Server className="w-4 h-4" />;
      case 'Cloud & Infrastructure':
        return <Cloud className="w-4 h-4" />;
      case 'Data & Spatial Engines':
        return <Database className="w-4 h-4" />;
      case 'Security & Verification':
        return <ShieldCheck className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="techstack" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            Modern Engineering Stack
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Battle-Tested Technologies, <span className="text-gradient-cyan">Zero Compromises</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We avoid fragile hype-driven libraries in favor of high-throughput, type-safe, 
            and resilient technologies that scale to millions of concurrent users.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TECH_STACK_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === idx
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat.name)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid Display */}
        <div className="p-8 rounded-3xl bg-[#0c101b]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {TECH_STACK_CATEGORIES[selectedCategory].items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-200 flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-cyan-500/30 transition-all">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-1">
                  PRODUCTION READY
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Vercel & Edge Deployment Highlight */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Optimized for Global Vercel Edge Serverless Deployment</span>
            </div>
            <span className="text-slate-500">
              CI/CD Target: Automated Build & Preview On Every Push
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
