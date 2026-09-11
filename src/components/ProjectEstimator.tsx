'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Users, 
  Zap,
  Cpu
} from 'lucide-react';

interface ProjectEstimatorProps {
  onSelectScope?: (summary: string) => void;
}

export default function ProjectEstimator({ onSelectScope }: ProjectEstimatorProps) {
  const [projectType, setProjectType] = useState<string>('saas');
  const [timeline, setTimeline] = useState<string>('standard');
  const [scale, setScale] = useState<string>('growth');

  // Recommendation engine logic
  const getRecommendation = () => {
    let team = '1 Principal Architect, 2 Full-Stack Engineers, 1 QA Engineer';
    let stack = 'Next.js 15, TypeScript, Node.js/Go, PostgreSQL, Redis, Vercel';
    let sprints = '4 - 6 Agile Sprints (8-12 weeks)';
    let focus = 'High-availability architecture, strict type-safety, and seamless user experience.';

    if (projectType === 'cloud') {
      team = '1 Cloud/DevOps Architect, 1 Security Specialist, 1 Systems Engineer';
      stack = 'Kubernetes, Terraform, AWS/GCP, Docker, GitHub Actions, Vault';
      sprints = '3 - 5 Infrastructure Sprints';
      focus = 'Zero-downtime CI/CD, auto-scaling, disaster recovery, and infrastructure as code.';
    } else if (projectType === 'ai') {
      team = '1 AI/ML Systems Lead, 1 Data Engineer, 1 Full-Stack Engineer';
      stack = 'Python, FastAPI, LangChain/LlamaIndex, Vector DB (Pinecone), OpenAI/Gemini';
      sprints = '4 - 6 Innovation Sprints';
      focus = 'Contextual retrieval accuracy (RAG), sub-second inference, and secure document embeddings.';
    } else if (projectType === 'mobile') {
      team = '1 Mobile Tech Lead, 2 Flutter/React Native Engineers, 1 Backend Specialist';
      stack = 'Flutter / React Native, TypeScript, GraphQL, SQLite, Push Telemetry';
      sprints = '5 - 7 Cross-Platform Sprints';
      focus = 'Fluid 120Hz gesture interactions, offline-first data sync, and multi-store release automation.';
    } else if (projectType === 'product') {
      team = '1 Product Architect, 3 Full-Stack Engineers, 1 DevOps Engineer, 1 Designer';
      stack = 'Next.js, Go/Node.js, PostgreSQL/PostGIS, WebCrypto, Redis, Microservices';
      sprints = '6+ Strategic Co-Build Sprints';
      focus = 'Proprietary IP development matching the engineering rigor of K-Sign and Geomeridian.';
    }

    if (timeline === 'urgent') {
      team = team + ' (Accelerated Pod)';
    }

    return { team, stack, sprints, focus };
  };

  const recommendation = getRecommendation();

  const handleApplyToContact = () => {
    const summary = `Selected Project Scope: [Type: ${projectType.toUpperCase()} | Timeline: ${timeline.toUpperCase()} | Scale: ${scale.toUpperCase()}]. Team: ${recommendation.team}.`;
    if (onSelectScope) {
      onSelectScope(summary);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Scope & Architecture Estimator
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Plan Your Next <span className="text-gradient-cyan">Engineering Sprint</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Select your project parameters below to get instant architectural recommendations, 
            recommended team composition, and delivery cadence.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0c101b]/90 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-8">
            
            {/* 1. Project Type Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                1. Select Core Focus Area
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'saas', label: 'Full SaaS / Enterprise Platform', icon: <Layers className="w-4 h-4" /> },
                  { id: 'cloud', label: 'Cloud Architecture & DevOps', icon: <Zap className="w-4 h-4" /> },
                  { id: 'ai', label: 'AI & Intelligent Automation', icon: <Cpu className="w-4 h-4" /> },
                  { id: 'mobile', label: 'Cross-Platform Mobile App', icon: <Users className="w-4 h-4" /> },
                  { id: 'product', label: 'Proprietary Product Co-Build', icon: <Sparkles className="w-4 h-4" /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl text-left text-sm font-semibold transition-all duration-200 border ${
                      projectType === item.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className={projectType === item.id ? 'text-cyan-400' : 'text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Timeline Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                2. Target Timeline
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'urgent', label: 'Accelerated', sub: '4 - 6 Weeks' },
                  { id: 'standard', label: 'Standard', sub: '2 - 4 Months' },
                  { id: 'enterprise', label: 'Multi-Phase', sub: '6+ Months' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimeline(item.id)}
                    className={`p-3 rounded-xl text-center text-xs font-semibold transition-all border ${
                      timeline === item.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-white font-bold">{item.label}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Scale / Complexity Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                3. Deployment Scale
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'mvp', label: 'Early-Stage / MVP', desc: 'Proof of Market' },
                  { id: 'growth', label: 'Growth Scale', desc: 'Active Revenue' },
                  { id: 'enterprise', label: 'Enterprise Global', desc: 'High Concurrency' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setScale(item.id)}
                    className={`p-3 rounded-xl text-center text-xs font-semibold transition-all border ${
                      scale === item.id
                        ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-white font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Output / Recommendation Card (5 cols) */}
          <div className="estimator-recommendation-card lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0c101b] to-slate-950 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Recommended Architecture</h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                AGILE POD
              </span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Recommended Team Pod:
                </span>
                <span className="text-sm font-semibold text-white leading-snug block">
                  {recommendation.team}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Target Technology Stack:
                </span>
                <span className="text-xs font-mono text-cyan-300 block">
                  {recommendation.stack}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Estimated Cadence:
                </span>
                <span className="text-sm font-semibold text-white block">
                  {recommendation.sprints}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Core Engineering Focus:
                </span>
                <span className="text-xs text-slate-300 leading-relaxed block">
                  {recommendation.focus}
                </span>
              </div>
            </div>

            {/* Action Button: Apply Scope to Contact Form */}
            <div className="pt-2">
              <button
                onClick={handleApplyToContact}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Transfer Scope to Inquiry Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2 font-mono">
                Direct route to Eternity Techsoft Principal Architects
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
