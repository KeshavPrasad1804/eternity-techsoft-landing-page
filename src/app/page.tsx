'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductKSign from '@/components/ProductKSign';
import ProductGeomeridian from '@/components/ProductGeomeridian';
import ProductKCode from '@/components/ProductKCode';
import ProductComparison from '@/components/ProductComparison';
import DeveloperPlayground from '@/components/DeveloperPlayground';
import Services from '@/components/Services';
import EngagementModels from '@/components/EngagementModels';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Roadmap from '@/components/Roadmap';
import WhyUs from '@/components/WhyUs';
import ProjectEstimator from '@/components/ProjectEstimator';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import { Sparkles, ShieldCheck, Globe2, Terminal } from 'lucide-react';

export default function Home() {
  const [inquiryInitialMessage, setInquiryInitialMessage] = useState<string>('');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  const handleScopeSelected = (summary: string) => {
    setInquiryInitialMessage(
      `Hello Eternity Techsoft,\n\nI configured the following scope on your project estimator:\n${summary}\n\nI would like to discuss feasibility, sprint kick-off, and technical architecture directly with you.`
    );
  };

  const handleModelSelected = (modelTitle: string) => {
    setInquiryInitialMessage(
      `Hello Eternity Techsoft,\n\nI am interested in engaging under your [${modelTitle}] framework.\n\nI have upcoming software requirements and would like to schedule an introductory architectural discussion.`
    );
  };

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Global Cmd+K Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Live Telemetry Console */}
        <Hero />

        {/* 2. Flagship Products Lab Section Divider */}
        <section id="products" className="py-12 border-y border-slate-900 bg-slate-950/40 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    The Eternity Techsoft Proprietary Product Lab
                  </h2>
                  <p className="text-xs text-slate-400">
                    We turn complex engineering challenges into market-defining platforms. Explore our three flagship builds below.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#ksign"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>K-Sign (Digital Trust)</span>
                </a>
                <a
                  href="#kcode"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-300 hover:border-emerald-500/40 transition-colors"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>K-Code (Agent Harness)</span>
                </a>
                <a
                  href="#geomeridian"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-violet-300 hover:border-violet-500/40 transition-colors"
                >
                  <Globe2 className="w-4 h-4 text-violet-400" />
                  <span>Geomeridian (GIS Platform)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product Showcase 01: K-Sign with In-Browser Signing Simulator */}
        <ProductKSign />

        {/* 4. Product Showcase 02: K-Code with Interactive Worktree & Verification Harness */}
        <ProductKCode />

        {/* 5. Product Showcase 03: Geomeridian with Interactive Geospatial Radar */}
        <ProductGeomeridian />

        {/* 5. Competitive Battlecard Comparison (K-Sign & Geomeridian vs Legacy) */}
        <ProductComparison />

        {/* 6. Developer SDK & API Playground */}
        <DeveloperPlayground />

        {/* 7. Software Services Bento Grid */}
        <Services />

        {/* 8. Client Engagement & Partnership Models */}
        <EngagementModels onSelectModel={handleModelSelected} />

        {/* 9. Engineering Methodology / 5-Stage Blueprint */}
        <Process />

        {/* 10. Technology Stack & Ecosystem */}
        <TechStack />

        {/* 11. Transparent Product Roadmap & Sprint Changelog */}
        <Roadmap />

        {/* 12. Why Eternity Techsoft (Pillars of Rigor) */}
        <WhyUs />

        {/* 13. Interactive Scope & Architecture Estimator */}
        <ProjectEstimator onSelectScope={handleScopeSelected} />

        {/* 14. Frequently Asked Questions (IP, NDAs, SLA, Onboarding) */}
        <FAQ />

        {/* 15. Direct Engineering Contact & Intake Channel */}
        <ContactSection initialMessage={inquiryInitialMessage} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
