'use client';

import React, { useState } from 'react';
import { 
  GitBranch, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Globe2,
  Terminal,
  Calendar
} from 'lucide-react';

export default function Roadmap() {
  const [selectedProduct, setSelectedProduct] = useState<'ksign' | 'kcode' | 'geomeridian'>('ksign');

  const kSignMilestones = [
    {
      quarter: 'Phase 1: Foundation',
      status: 'Shipped',
      title: 'Cryptographic Engine & Dual-Mode Canvas',
      items: [
        'Browser-native Web Crypto SHA-256 and Ed25519 hashing core',
        'Pressure-sensitive vector drawing canvas with touch & stylus support',
        'Dynamic legal cursive typography generator',
        'Instant forensic tamper-evident seal generation',
      ],
    },
    {
      quarter: 'Phase 2: Current Sprint (Q1/Q2 2026)',
      status: 'In Progress',
      title: 'Enterprise Workflow & Developer SDKs',
      items: [
        'Multi-signer sequential & conditional routing pipelines',
        'Official TypeScript/Node.js & Python embedded SDKs',
        'Automated audit certificate PDF compilation engine',
        'E-SIGN Act and eIDAS compliance audit certification',
      ],
    },
    {
      quarter: 'Phase 3: Future Horizons (Q3/Q4 2026)',
      status: 'Planned',
      title: 'Decentralized Identity & Air-Gapped Appliance',
      items: [
        'Self-sovereign identity (SSI) & W3C Verifiable Credentials',
        'Air-gapped on-premise Docker & Kubernetes appliance',
        'Automated smart contract notarization bridge',
        'Native iOS & Android biometric signing SDKs',
      ],
    },
  ];

  const kCodeMilestones = [
    {
      quarter: 'M0 & M1: Foundation & Local Runner',
      status: 'Shipped',
      title: 'Isolated Worktrees & Baseline Evidence',
      items: [
        'Deterministic git worktree sandbox isolation with clean working tree guarantee',
        'Independent baseline test reproduction gate (verifies exit 1 on clean HEAD)',
        'Local model streaming runtime with durable token receipts',
        'SQLite transaction state machine with SIGKILL crash recovery',
      ],
    },
    {
      quarter: 'M2: Current Sprint (Q1/Q2 2026)',
      status: 'In Progress',
      title: 'Multi-Backend Orchestration & Protocols',
      items: [
        'Local Ollama backend adapter with zero cloud data transmission',
        'Hierarchical token reservation ledgers with child descendant budget caps',
        'Model Context Protocol (MCP) tool integration & resource discovery',
        'Agent Client Protocol (ACP) for mid-run interactive human steering',
      ],
    },
    {
      quarter: 'M3: Future Horizons (Q3/Q4 2026)',
      status: 'Planned',
      title: 'Enterprise Pilot & Multi-Repo Benchmark',
      items: [
        'Autonomous multi-agent coordinator with parallel inspector/writer roles',
        'Enterprise GitHub/GitLab CI/CD pull-request verification actions',
        'Self-hosted air-gapped container appliance with custom fine-tuned weights',
        'SWE-bench verified reproducibility scorecard & token ROI analytics',
      ],
    },
  ];

  const geoMilestones = [
    {
      quarter: 'Phase 1: Foundation',
      status: 'Shipped',
      title: 'WebGPU Spatial Canvas & Radar Telemetry',
      items: [
        'Hardware-accelerated 60 FPS vector tile rendering engine',
        'Real-time coordinate tracking with elevation telemetry',
        'Geodesic distance calculation & point-in-polygon containment',
        'Multi-layer GeoJSON and spatial vector streaming',
      ],
    },
    {
      quarter: 'Phase 2: Current Sprint (Q1/Q2 2026)',
      status: 'In Progress',
      title: 'H3 Spatial Indexing & Fleet Telemetry Ingestion',
      items: [
        'Uber H3 hexagonal grid indexing for high-density spatial clustering',
        'High-throughput Kafka and MQTT telemetry ingestion pipeline',
        'Automated geofence entry, dwell-time, and exit trigger engine',
        'Python & Golang microservices spatial computation SDK',
      ],
    },
    {
      quarter: 'Phase 3: Future Horizons (Q3/Q4 2026)',
      status: 'Planned',
      title: '3D Elevation & Autonomous Spatial AI Corridors',
      items: [
        '3D LiDAR terrain rendering with real-time solar shadowing',
        'Autonomous drone delivery corridor route optimization',
        'Predictive supply chain dwell-time AI models',
        'Offline-capable spatial mapping edge appliance',
      ],
    },
  ];

  const milestones = selectedProduct === 'ksign' ? kSignMilestones : selectedProduct === 'kcode' ? kCodeMilestones : geoMilestones;

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <GitBranch className="w-3.5 h-3.5" />
            Product Pipeline & Milestones
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Engineering <span className="text-gradient-violet">Roadmap & Changelog</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Transparent development velocity. Track our shipped innovations, active sprints, 
            and upcoming enterprise releases for our flagship platforms.
          </p>

          {/* Product Toggle */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 gap-1">
              <button
                onClick={() => setSelectedProduct('ksign')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedProduct === 'ksign'
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>K-Sign Roadmap</span>
              </button>
              <button
                onClick={() => setSelectedProduct('kcode')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedProduct === 'kcode'
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>K-Code Roadmap</span>
              </button>
              <button
                onClick={() => setSelectedProduct('geomeridian')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedProduct === 'geomeridian'
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span>Geomeridian Roadmap</span>
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {milestones.map((milestone, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-[#0c101b]/95 border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                milestone.status === 'In Progress'
                  ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                  : 'border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {milestone.quarter}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      milestone.status === 'Shipped'
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : milestone.status === 'In Progress'
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 animate-pulse'
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {milestone.status === 'Shipped' && '✓ SHIPPED'}
                    {milestone.status === 'In Progress' && '● IN ACTIVE SPRINT'}
                    {milestone.status === 'Planned' && '○ UPCOMING'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">
                  {milestone.title}
                </h3>

                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  {milestone.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono mt-0.5">&gt;</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>R&D SPRINT LOG</span>
                <span className="text-cyan-400">Eternity Techsoft Lab</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
