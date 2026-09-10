'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  ArrowUp, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12c-2-2.67-4-4-6.5-4a4.5 4.5 0 1 0 0 9c2.5 0 4.5-1.33 6.5-4z" />
                  <path d="M12 12c2 2.67 4 4 6.5 4a4.5 4.5 0 1 0 0-9c-2.5 0-4.5 1.33-6.5 4z" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white tracking-tight">
                  Eternity <span className="text-cyan-400">Techsoft</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono">
                  Software Services & Products
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Architecting mission-critical software services while incubating breakthrough proprietary platforms. 
              Creators of <strong className="text-cyan-300">K-Sign</strong> (Cryptographic Trust) and <strong className="text-violet-300">Geomeridian</strong> (Spatial Intelligence).
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL LAB & CORE SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Proprietary Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Proprietary Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#ksign" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>K-Sign (Digital Signature Suite)</span>
                </a>
              </li>
              <li>
                <a href="#geomeridian" className="text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Geomeridian (GIS Intelligence)</span>
                </a>
              </li>
              <li>
                <span className="text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <span>R&D Incubator Pipeline</span>
                </span>
              </li>
              <li>
                <a href="#estimator" className="text-slate-400 hover:text-white transition-colors">
                  Product Co-Development Program
                </a>
              </li>
            </ul>
          </div>

          {/* Software Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Full-Cycle Product Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Cloud Architecture & DevOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  AI Systems & Intelligent Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Cross-Platform Mobile Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Cybersecurity & Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top & Quick Contact (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-2 text-xs font-mono group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="text-left md:text-right space-y-1">
              <span className="text-[11px] font-mono text-slate-500 block">HOSTED ON VERCEL</span>
              <span className="text-xs text-slate-400 font-mono block">Zero-Downtime Edge</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Standards</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Engagement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
