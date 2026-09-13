'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Terminal, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Activity,
  Code2,
  Calendar
} from 'lucide-react';
import { STATS, COMPANY_INFO } from '@/data/company';

export default function Hero() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'overview' | 'ksign' | 'kcode' | 'geomeridian'>('overview');
  const [pulseCounter, setPulseCounter] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCounter((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting and grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Pill Banner */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Software Services & Product Engineering
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-medium text-cyan-400">
                Vercel Cloud Optimized
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Software That Scales.{' '}
              <span className="text-gradient-cyan">Engineered to Never Break</span>{' '}
              under Pressure.
            </h1>

            {/* Subhead with explicit mentions */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              I partner directly with founders and ambitious product leaders to take complex software from concept to production in rapid 2-week sprints. 
              Direct full-stack execution backed by the same deep-tech engineering behind my proprietary lab platforms: <span className="text-cyan-300 underline underline-offset-4 decoration-cyan-500/40 font-medium">K-Sign</span> (tamper-proof digital contracts), <span className="text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 font-medium">K-Code</span> (verified coding-agent harness), and <span className="text-violet-300 underline underline-offset-4 decoration-violet-500/40 font-medium">Geomeridian</span> (real-time live maps & fleet tracking).
            </p>

            {/* Founder Reassurance & Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% IP Ownership from Day 1</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mutual NDA Protected</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>Zero Junior Dev Handoffs</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm"
              >
                <span>Explore Products (K-Sign, K-Code & Geomeridian)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Schedule%2015-Min%20Architectural%20Discovery`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400/80 transition-all duration-300 shadow-lg shadow-black/40 text-sm group"
              >
                <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Schedule 15-Min Discovery</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors text-sm"
              >
                <span>Services & Sprints</span>
              </a>
            </div>

            {/* Live Highlights / Proof Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Architecture Telemetry Console */}
          <div className="lg:col-span-5">
            <div className="hero-telemetry-box relative rounded-2xl bg-[#0c101b]/95 border border-slate-700/70 shadow-2xl shadow-cyan-950/40 overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    eternity-lab-telemetry.sys
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  ARCHITECTURE TELEMETRY
                </div>
              </div>

              {/* Console Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-950/60 border-b border-slate-800 text-[11px] font-medium">
                <button
                  onClick={() => setActiveConsoleTab('overview')}
                  className={`py-2 px-2 text-center transition-colors border-b-2 ${
                    activeConsoleTab === 'overview'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  System Nodes
                </button>
                <button
                  onClick={() => setActiveConsoleTab('ksign')}
                  className={`py-2 px-2 text-center transition-colors border-b-2 ${
                    activeConsoleTab === 'ksign'
                      ? 'border-cyan-400 text-cyan-300 bg-cyan-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  K-Sign Engine
                </button>
                <button
                  onClick={() => setActiveConsoleTab('kcode')}
                  className={`py-2 px-2 text-center transition-colors border-b-2 ${
                    activeConsoleTab === 'kcode'
                      ? 'border-emerald-400 text-emerald-300 bg-emerald-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  K-Code Harness
                </button>
                <button
                  onClick={() => setActiveConsoleTab('geomeridian')}
                  className={`py-2 px-2 text-center transition-colors border-b-2 ${
                    activeConsoleTab === 'geomeridian'
                      ? 'border-violet-400 text-violet-300 bg-violet-500/5'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Geomeridian GIS
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-4 min-h-[300px]">
                {activeConsoleTab === 'overview' && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-slate-800">
                      <span>CLUSTER ID:</span>
                      <span className="text-white">ET-ALPHA-PROD-01</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-200">K-Sign Crypto Vault</span>
                        </div>
                        <span className="text-cyan-400 font-bold">ACTIVE (v0.9.4)</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-200">K-Code Verification Harness</span>
                        </div>
                        <span className="text-emerald-400 font-bold">VERIFYING (v0.4.1)</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-200">Geomeridian Spatial Engine</span>
                        </div>
                        <span className="text-violet-400 font-bold">STREAMING</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-blue-400" />
                          <span className="text-slate-200">Client Engineering Pipelines</span>
                        </div>
                        <span className="text-slate-400">100% HEALTH</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                      <div>&gt; requests_processed: <span className="text-cyan-400">{pulseCounter.toLocaleString()} tx/sec</span></div>
                      <div>&gt; latency_p99: <span className="text-emerald-400">32.4ms</span></div>
                      <div>&gt; edge_routing: <span className="text-slate-300">Vercel Edge Network (Global)</span></div>
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'kcode' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-emerald-400 font-semibold pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" />
                        K-CODE AGENT HARNESS
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        Isolated Worktree
                      </span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 space-y-1 text-[11px]">
                      <div className="text-slate-400">BASELINE REPRODUCTION EVIDENCE:</div>
                      <div className="text-emerald-300 truncate font-mono">
                        EXIT_1_VERIFIED: tests/settlement.spec.ts (unmodified HEAD)
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">Worktree Sandbox:</span>
                        <span className="text-emerald-400 font-bold">.kcode/worktrees/482</span>
                      </div>
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">SQLite State Ledger:</span>
                        <span className="text-cyan-400 font-bold">7 durable receipts</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      &gt; kcode_status: Candidate patch verified. Zero test rewrites permitted.
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'ksign' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-cyan-400 font-semibold pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        K-SIGN CRYPTOGRAPHIC VAULT
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                        Ed25519 / SHA-256
                      </span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 space-y-1 text-[11px]">
                      <div className="text-slate-400">LAST HASH STAMP:</div>
                      <div className="text-cyan-300 truncate">
                        e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">Signer Latency:</span>
                        <span className="text-emerald-400 font-bold">1.8s avg</span>
                      </div>
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">Legal Compliance:</span>
                        <span className="text-cyan-400 font-bold">E-SIGN / eIDAS</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      &gt; ksign_status: Ready for in-browser interactive signing test.
                    </div>
                  </div>
                )}

                {activeConsoleTab === 'geomeridian' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-violet-400 font-semibold pb-1 border-b border-slate-800">
                      <span className="flex items-center gap-1.5">
                        <Globe2 className="w-4 h-4" />
                        GEOMERIDIAN SPATIAL STREAM
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
                        WebGPU / H3
                      </span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/80 border border-slate-800/80 space-y-1 text-[11px]">
                      <div className="text-slate-400">ACTIVE GEODESIC BOUND:</div>
                      <div className="text-violet-300 font-mono">
                        POLYGON((-122.4194 37.7749, -122.4089 37.7858, -122.3951 37.7650))
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">Vector Frame Rate:</span>
                        <span className="text-emerald-400 font-bold">60.0 FPS</span>
                      </div>
                      <div className="p-2 bg-slate-900/60 border border-slate-800 rounded">
                        <span className="text-slate-400 block">Stream Ingestion:</span>
                        <span className="text-violet-400 font-bold">48,200 pts/s</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      &gt; geomeridian_status: High-resolution GIS vector tiles streaming.
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Console Footer */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Eternity Techsoft Core Engine
                </span>
                <a href="#ksign" className="text-cyan-400 hover:underline flex items-center gap-1">
                  Run Live Simulator &darr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
