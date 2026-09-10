'use client';

import React from 'react';
import { 
  Rocket, 
  CloudLightning, 
  Brain, 
  Smartphone, 
  Palette, 
  ShieldAlert, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '@/data/services';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'CloudLightning':
        return <CloudLightning className="w-6 h-6 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-violet-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-rose-400" />;
      default:
        return <Rocket className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Subtle background grid & ambient light */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            Software Services & Engineering Matrix
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering Precision Across the Entire <span className="text-gradient-brand">Digital Lifecycle</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Beyond building our own proprietary platforms, we act as the high-velocity engineering partner 
            for forward-looking enterprises—shipping robust, scalable, and resilient software architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#0c101b]/90 border border-slate-800/90 p-7 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              {/* Card top subtle gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="space-y-5 relative z-10">
                {/* Icon & Title */}
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    {getIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block font-mono">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Bottom Badges */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 relative z-10 flex flex-wrap gap-1.5">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Estimator / Contact */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white">
              Have a complex software challenge or custom product vision?
            </h4>
            <p className="text-sm text-slate-400">
              Our principal architects are ready to evaluate your requirements and assemble an agile engineering team.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-200 shrink-0"
          >
            <span>Consult an Architect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
