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
        'We don’t just consult—we build and ship our own flagship platforms (K-Sign & Geomeridian). That means our engineers bring true product-owner instincts, high-conviction UX, and scalable architecture to your project.',
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: 'Zero-Bloat Velocity',
      description:
        'We ruthlessly optimize for developer productivity and low runtime overhead. Fast iteration cycles backed by automated CI/CD allow our partners to beat competitors to market without accruing crippling technical debt.',
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: 'Cryptographic & Zero-Trust Security',
      description:
        'Security isn’t an afterthought tacked on at the end. We architect systems with defense-in-depth, cryptographic verification, role-based access control, and strict compliance alignment from sprint zero.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-violet-400" />,
      title: 'Direct Senior Access',
      description:
        'You work directly with principal architects and seasoned staff engineers who own the problem. No junior handoffs, no bureaucratic layers, and no game of telephone between business and code.',
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
