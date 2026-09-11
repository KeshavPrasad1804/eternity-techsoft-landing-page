'use client';

import React from 'react';
import { 
  TrendingUp, 
  Layers, 
  Activity, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  Server
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      badge: 'FINTECH & PAYMENT INFRASTRUCTURE',
      title: 'Zero Failed Payments Across $12M+ Daily Transaction Volume',
      metrics: [
        { label: 'P99 Latency', value: '< 78ms' },
        { label: 'Transaction Uptime', value: '99.999%' },
        { label: 'Daily Volume', value: '$12M+' },
      ],
      challenge:
        'A high-volume payments platform was freezing during customer traffic spikes, causing delayed orders, duplicate chargebacks, and lost revenue.',
      solution:
        'Rebuilt their transaction engine with idempotent Go microservices and event queues. Even when 10,000 customers check out simultaneously, payments clear in under 80ms with zero duplicate charges.',
      stack: ['Go (Golang)', 'Kafka CQRS', 'PostgreSQL', 'Redis', 'Docker'],
      accent: 'cyan',
    },
    {
      badge: 'CLOUD MIGRATION & SRE',
      title: '42% Monthly Cloud Bill Reduction with Zero-Downtime Scaling',
      metrics: [
        { label: 'Cost Reduction', value: '42%' },
        { label: 'Deployment Downtime', value: '0 sec' },
        { label: 'Auto-scale Speed', value: '< 45s' },
      ],
      challenge:
        'A growing B2B SaaS company had runaway cloud hosting bills and their app crashed whenever featured on major industry newsletters or marketing campaigns.',
      solution:
        'Containerized their infrastructure with Kubernetes auto-scaling. Slashed their monthly cloud bill by 42% while enabling servers to spin up automatically in under 45 seconds to absorb viral traffic.',
      stack: ['Kubernetes (EKS)', 'Terraform IaC', 'AWS Spot Pools', 'ArgoCD', 'Prometheus'],
      accent: 'emerald',
    },
    {
      badge: 'SPATIAL TELEMETRY & IOT',
      title: 'Live IoT Fleet Map Tracking 50,000+ Assets with Zero Lag',
      metrics: [
        { label: 'Ingestion Rate', value: '50k+ /s' },
        { label: 'UI Frame Rate', value: '60 FPS' },
        { label: 'Geofence SLA', value: '< 150ms' },
      ],
      challenge:
        'An industrial logistics company tracking 15,000 active delivery vehicles suffered from frozen browser tabs, lagging maps, and delayed delivery status updates.',
      solution:
        'Engineered a real-time streaming pipeline and custom WebGPU vector map. Smoothly displays 50,000+ moving vehicles at 60 FPS, triggering instant geofence alerts in under 150 milliseconds.',
      stack: ['Python', 'ClickHouse', 'PostGIS', 'WebSockets', 'WebGPU Vector'],
      accent: 'violet',
    },
  ];

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono">
            <Activity className="w-3.5 h-3.5" />
            Proven Engineering Impact
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Real Engineering Stories & <span className="text-gradient-cyan">Measurable Results</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We don't talk in vague promises. Here is how our software engineering solved critical business bottlenecks, reduced infrastructure overhead, and scaled without breaking.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => {
            const isCyan = study.accent === 'cyan';
            const isEmerald = study.accent === 'emerald';
            const isViolet = study.accent === 'violet';

            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-8 rounded-3xl bg-[#0c101b]/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/60 relative overflow-hidden"
              >
                {/* Top Border Accent Glow */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isCyan
                      ? 'from-cyan-500 to-blue-500'
                      : isEmerald
                      ? 'from-emerald-400 to-teal-500'
                      : 'from-violet-500 to-purple-500'
                  } opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isCyan
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                          : isEmerald
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                          : 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                      }`}
                    >
                      {study.badge}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-200 transition-colors">
                    {study.title}
                  </h3>

                  {/* Key Metrics Banner */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div
                          className={`text-base font-extrabold font-mono ${
                            isCyan
                              ? 'text-cyan-400'
                              : isEmerald
                              ? 'text-emerald-400'
                              : 'text-violet-400'
                          }`}
                        >
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                    <div>
                      <span className="font-semibold text-rose-400 font-mono text-[11px] block mb-1">
                        THE CHALLENGE:
                      </span>
                      <p className="text-slate-400">{study.challenge}</p>
                    </div>

                    <div>
                      <span className="font-semibold text-emerald-400 font-mono text-[11px] block mb-1">
                        ARCHITECTURAL SOLUTION:
                      </span>
                      <p className="text-slate-300">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {study.stack.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
