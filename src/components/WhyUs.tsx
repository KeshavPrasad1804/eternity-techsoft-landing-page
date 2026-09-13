'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Gauge, 
  CheckCircle, 
  Lock, 
  Zap, 
  Code2,
  HeartHandshake
} from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: 'Proprietary Product DNA',
      description:
        'I don’t just consult—I architect and actively build proprietary deep-tech platforms (K-Sign, K-Code & Geomeridian). I treat your codebase with true founder ownership, high-conviction UX, and scalable architecture rather than just closing tickets.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: 'Predictable 2-Week Sprints & Zero Debt',
      description:
        'You receive tested, working software deployed to staging every two weeks. No endless delays, no surprise invoices, and no messy spaghetti code that requires an expensive rewrite later.',
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: '100% IP Ownership & Mutual NDAs',
      description:
        'You own every line of code, design file, and cloud credential from day one. I sign mutual enterprise NDAs before reviewing your specs, and provide clean automated CI/CD handovers with complete documentation.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-violet-400" />,
      title: '100% Founder-Led Engineering',
      description:
        'You work directly 1-on-1 with me—an experienced principal full-stack engineer who architects, codes, and deploys your system end-to-end. Zero junior developer handoffs, zero account managers, and zero agency bloat.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Gauge className="w-3.5 h-3.5" />
            The Eternity Techsoft Standard
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Enterprise Leaders & Founders <span className="text-gradient-cyan">Trust Us</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The software industry is flooded with low-accountability agencies and bloated consultancies. 
            Here is how Eternity Techsoft delivers a fundamentally different engineering experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0c101b]/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 space-y-4 group hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
