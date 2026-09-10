'use client';

import React from 'react';
import { 
  Users, 
  Rocket, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Layers,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface EngagementModelsProps {
  onSelectModel?: (modelTitle: string) => void;
}

export default function EngagementModels({ onSelectModel }: EngagementModelsProps) {
  const models = [
    {
      id: 'dedicated-pod',
      title: 'Dedicated Engineering Pod',
      tagline: 'Staff Architects, Senior Engineers & QA on Tap',
      badge: 'Most Popular for Scaling Startups',
      badgeColor: 'cyan',
      description:
        'A dedicated cross-functional engineering unit integrated seamlessly into your sprint workflows. Ramp up or scale down capacity with zero recruiting overhead.',
      deliverables: [
        '1 Principal Architect + 2-4 Staff Software Engineers + 1 QA',
        'Continuous 2-week agile delivery with sprint telemetry',
        'Direct Slack / Discord / Daily standup access',
        'Full IP ownership with automated CI/CD handovers',
      ],
      idealFor: 'Series A/B startups and enterprise product teams needing high velocity.',
      cta: 'Book an Engineering Pod',
    },
    {
      id: 'fixed-scope',
      title: 'Fixed-Scope Architecture & MVP',
      tagline: 'Guaranteed 6–8 Week Rapid Production Launch',
      badge: 'Zero Risk & Fixed Budget',
      badgeColor: 'emerald',
      description:
        'Turn your product specifications into a battle-tested, production-ready platform. We guarantee delivery on time, on budget, and adhering to strict acceptance criteria.',
      deliverables: [
        'Complete system architecture, schema & API blueprinting',
        'Pixel-perfect responsive frontend with design tokens',
        'Resilient cloud deployment on Vercel / AWS / GCP',
        '30-day post-launch warranty and bug-fix SLA',
      ],
      idealFor: 'Founders building greenfield MVPs or enterprises launching discrete tools.',
      cta: 'Plan Fixed-Scope Build',
    },
    {
      id: 'co-venture',
      title: 'Product Co-Venture Lab',
      tagline: 'Joint Technical Ownership & Innovation Incubator',
      badge: 'Selective Partnership',
      badgeColor: 'violet',
      description:
        'For high-conviction ideas matching our domain expertise in digital trust (like K-Sign) or spatial intelligence (like Geomeridian). We invest senior technical horsepower for shared upside.',
      deliverables: [
        'Fractional CTO guidance & architectural leadership',
        'Deep tech IP co-development (cryptography, GIS, AI)',
        'Shared risk & equity / revenue-share alignment',
        'Priority access to our internal R&D infrastructure',
      ],
      idealFor: 'Visionary industry insiders and spin-offs seeking an elite tech co-founder.',
      cta: 'Pitch Co-Venture Project',
    },
  ];

  const handleSelect = (title: string) => {
    if (onSelectModel) {
      onSelectModel(title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="models" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            Partnership Frameworks
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Flexible Engagement, <span className="text-gradient-cyan">Uncompromising Quality</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Choose the engagement model that fits your operational rhythm—from dedicated agile pods 
            to fixed-scope rapid sprints and joint venture incubation.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <div
              key={model.id}
              className={`rounded-3xl p-8 bg-[#0c101b]/95 border transition-all duration-300 flex flex-col justify-between relative group hover:shadow-2xl ${
                model.badgeColor === 'cyan'
                  ? 'border-cyan-500/40 hover:border-cyan-400 shadow-cyan-950/30'
                  : 'border-slate-800 hover:border-slate-700 shadow-black/40'
              }`}
            >
              {/* Top Details */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                      model.badgeColor === 'cyan'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : model.badgeColor === 'emerald'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                    }`}
                  >
                    {model.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    {model.id === 'dedicated-pod' && <Users className="w-4 h-4 text-cyan-400" />}
                    {model.id === 'fixed-scope' && <Rocket className="w-4 h-4 text-emerald-400" />}
                    {model.id === 'co-venture' && <Sparkles className="w-4 h-4 text-violet-400" />}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    {model.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {model.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {model.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-8 mt-8 border-t border-slate-800/80 space-y-3">
                <div className="text-[11px] text-slate-400 italic">
                  <strong>Ideal for:</strong> {model.idealFor}
                </div>
                <button
                  onClick={() => handleSelect(model.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    model.badgeColor === 'cyan'
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <span>{model.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
