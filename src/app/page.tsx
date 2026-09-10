'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductKSign from '@/components/ProductKSign';
import ProductGeomeridian from '@/components/ProductGeomeridian';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import WhyUs from '@/components/WhyUs';
import ProjectEstimator from '@/components/ProjectEstimator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Sparkles, ShieldCheck, Globe2 } from 'lucide-react';

export default function Home() {
  const [inquiryInitialMessage, setInquiryInitialMessage] = useState<string>('');

  const handleScopeSelected = (summary: string) => {
    setInquiryInitialMessage(
      `Hello Eternity Techsoft team,\n\nI configured the following scope on your project estimator:\n${summary}\n\nWe would like to discuss feasibility, sprint kick-off, and technical architecture with your team.`
    );
  };

  return (
    <div className="relative min-h-screen bg-[#06080d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
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
                  <h3 className="text-lg font-bold text-white">
                    The Eternity Techsoft Proprietary Product Lab
                  </h3>
                  <p className="text-xs text-slate-400">
                    We turn complex engineering challenges into market-defining platforms. Explore our two active builds below.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#ksign"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-300 hover:border-cyan-500/40 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>K-Sign (Digital Trust)</span>
                </a>
                <a
                  href="#geomeridian"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-violet-300 hover:border-violet-500/40 transition-colors"
                >
                  <Globe2 className="w-4 h-4 text-violet-400" />
                  <span>Geomeridian (GIS Platform)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product Showcase 01: K-Sign */}
        <ProductKSign />

        {/* 4. Product Showcase 02: Geomeridian */}
        <ProductGeomeridian />

        {/* 5. Software Services Bento Grid */}
        <Services />

        {/* 6. Engineering Methodology / Process */}
        <Process />

        {/* 7. Technology Stack & Ecosystem */}
        <TechStack />

        {/* 8. Why Eternity Techsoft (Pillars of Rigor) */}
        <WhyUs />

        {/* 9. Interactive Scope & Architecture Estimator */}
        <ProjectEstimator onSelectScope={handleScopeSelected} />

        {/* 10. Direct Engineering Contact & Intake */}
        <ContactSection initialMessage={inquiryInitialMessage} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
