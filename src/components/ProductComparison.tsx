'use client';

import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Globe2, 
  Terminal,
  Scale, 
  Sparkles, 
  ArrowRight,
  Zap
} from 'lucide-react';

export default function ProductComparison() {
  const [activeTab, setActiveTab] = useState<'ksign' | 'kcode' | 'geomeridian'>('ksign');

  const kSignRows = [
    {
      feature: 'Pricing Model',
      ksign: 'Predictable flat rate & API volume — zero per-envelope gouging',
      legacy: 'Aggressive tiers + per-envelope fees that surge at scale',
      highlight: true,
    },
    {
      feature: 'Cryptographic Integrity',
      ksign: 'Native SHA-256 / Ed25519 tamper seals verifiable offline',
      legacy: 'Basic image paste on PDF backed only by vendor database',
      highlight: true,
    },
    {
      feature: 'Self-Hosted / Private Cloud',
      ksign: 'Engineered for Docker/Kubernetes private container deployment (Private Alpha)',
      legacy: 'SaaS-only vendor lock-in with mandatory data hosting',
      highlight: true,
    },
    {
      feature: 'Signing Speed & UX',
      ksign: 'Sub-2.4 second instantaneous in-browser signing',
      legacy: 'Multi-step redirects, heavy vendor branding, slow load',
      highlight: false,
    },
    {
      feature: 'Developer API & Webhooks',
      ksign: 'Modern TypeScript SDKs, instant webhooks, clear docs',
      legacy: 'Complex legacy XML/SOAP APIs with enterprise paywalls',
      highlight: false,
    },
    {
      feature: 'Legal Compliance',
      ksign: 'Engineered for strict E-SIGN, UETA & eIDAS standards',
      legacy: 'E-SIGN & eIDAS compliant',
      highlight: false,
    },
  ];

  const kCodeRows = [
    {
      feature: 'Working Tree Safety',
      ksign: 'Isolated Git worktrees; local developer working directory stays 100% clean',
      legacy: 'Directly edits files in place, risking uncommitted work and broken state',
      highlight: true,
    },
    {
      feature: 'Verification Guarantee',
      ksign: 'Requires independent baseline test failure proof before accepting fixes',
      legacy: 'Prone to hallucinated passes; agents frequently delete or modify tests',
      highlight: true,
    },
    {
      feature: 'Crash Recovery',
      ksign: 'SQLite state journal persists receipts; instant mid-run resume in < 50ms',
      legacy: 'Process death loses full context; requires restarting from scratch',
      highlight: true,
    },
    {
      feature: 'Cost Accountability',
      ksign: 'Strict token reservation ledgers with child descendant budget ceilings',
      legacy: 'Uncapped loops resulting in surprise $50–$500 cloud billing charges',
      highlight: true,
    },
    {
      feature: 'Local & Air-Gapped Models',
      ksign: 'Native Ollama support for 100% local, zero-leak private code repair',
      legacy: 'Mandatory cloud vendor lock-in sending proprietary source to third parties',
      highlight: false,
    },
    {
      feature: 'Protocol Standards',
      ksign: 'Full support for Model Context Protocol (MCP) and Agent Client Protocol (ACP)',
      legacy: 'Proprietary vendor APIs with no open protocol extensibility',
      highlight: false,
    },
  ];

  const geoRows = [
    {
      feature: 'Rendering Performance',
      ksign: 'Hardware-accelerated WebGPU/WebGL running at 60 FPS',
      legacy: 'Desktop-heavy software or sluggish web tile rendering',
      highlight: true,
    },
    {
      feature: 'Streaming Ingestion',
      ksign: '50,000+ real-time GPS & drone telemetry points / sec',
      legacy: 'Batch imports with static map regenerations',
      highlight: true,
    },
    {
      feature: 'Spatial Indexing Architecture',
      ksign: 'Modern H3 hexagonal grids & dynamic topological buffers',
      legacy: 'Traditional flat raster bounding boxes with heavy latency',
      highlight: true,
    },
    {
      feature: 'Deployment Footprint',
      ksign: 'Zero-install browser platform + edge serverless workers',
      legacy: 'Gigabyte desktop installers requiring dedicated workstations',
      highlight: true,
    },
    {
      feature: 'Format Agility',
      ksign: 'Native GeoJSON, Shapefile, KML, and PostGIS live queries',
      legacy: 'Proprietary spatial formats requiring manual conversions',
      highlight: false,
    },
  ];

  const currentRows = activeTab === 'ksign' ? kSignRows : activeTab === 'kcode' ? kCodeRows : geoRows;

  return (
    <section id="comparison" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Scale className="w-3.5 h-3.5" />
            Competitive Architectural Advantage
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Our Products <span className="text-gradient-brand">Outperform Legacy Tools</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We built K-Sign, K-Code, and Geomeridian because we were frustrated by predatory pricing, 
            sluggish rendering, and brittle black-box AI tools that lack verifiable proof.
          </p>

          {/* Toggle Tabs */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 gap-1">
              <button
                onClick={() => setActiveTab('ksign')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'ksign'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>K-Sign vs. Legacy E-Sign</span>
              </button>
              <button
                onClick={() => setActiveTab('kcode')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'kcode'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>K-Code vs. AI Wrappers</span>
              </button>
              <button
                onClick={() => setActiveTab('geomeridian')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'geomeridian'
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span>Geomeridian vs. Desktop GIS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-[#0c101b]/95 border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-12 bg-slate-950/80 px-6 py-4 border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-slate-400">
            <div className="col-span-4 sm:col-span-3">Capability Matrix</div>
            <div className={`col-span-4 sm:col-span-5 font-bold flex items-center gap-1.5 ${
              activeTab === 'ksign' ? 'text-cyan-400' : activeTab === 'kcode' ? 'text-emerald-400' : 'text-violet-400'
            }`}>
              {activeTab === 'ksign' ? (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>K-Sign (Eternity Techsoft)</span>
                </>
              ) : activeTab === 'kcode' ? (
                <>
                  <Terminal className="w-4 h-4" />
                  <span>K-Code (Eternity Techsoft)</span>
                </>
              ) : (
                <>
                  <Globe2 className="w-4 h-4" />
                  <span>Geomeridian (Eternity Techsoft)</span>
                </>
              )}
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500">
              {activeTab === 'ksign' ? 'Legacy E-Signature Vendors' : activeTab === 'kcode' ? 'Uncontrolled AI Coding Tools' : 'Traditional GIS Software'}
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {currentRows.map((row, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-12 px-6 py-4 items-center text-xs sm:text-sm transition-colors ${
                  row.highlight ? 'bg-cyan-950/10' : 'hover:bg-slate-900/40'
                }`}
              >
                <div className="col-span-4 sm:col-span-3 font-semibold text-white">
                  {row.feature}
                </div>
                <div className="col-span-4 sm:col-span-5 flex items-start gap-2 pr-4">
                  <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-200 font-medium leading-relaxed">
                    {row.ksign}
                  </span>
                </div>
                <div className="col-span-4 sm:col-span-4 flex items-start gap-2 text-slate-400">
                  <div className="p-0.5 rounded-full bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">
                    {row.legacy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Want to see real benchmarks or run an in-depth security comparison with your legal team?
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0"
            >
              <span>Request Technical Whitepaper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
