'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 transition-all duration-300">
            {/* Custom Infinity Circuit Mark */}
            <svg
              className="w-6 h-6 text-cyan-400 group-hover:scale-105 transition-transform"
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
            <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Eternity <span className="text-cyan-400">Techsoft</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400 -mt-1">
              Services & Products
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
              aria-expanded={productsDropdownOpen}
            >
              <span>Products</span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-full">
                2 Lab Builds
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-80 mt-1 p-2 bg-[#0c101b] border border-slate-800 rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <a
                  href="#ksign"
                  onClick={() => setProductsDropdownOpen(false)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">K-Sign</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20 font-mono">ACTIVE DEV</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                      Cryptographic e-signature suite & tamper-evident contract automation.
                    </p>
                  </div>
                </a>

                <a
                  href="#geomeridian"
                  onClick={() => setProductsDropdownOpen(false)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-violet-500/30 transition-all group mt-1"
                >
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">Geomeridian</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-violet-500/10 text-violet-300 rounded border border-violet-500/20 font-mono">ACTIVE DEV</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
                      Geospatial intelligence, real-time spatial analytics & GIS engine.
                    </p>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a
            href="#services"
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            Services
          </a>

          <a
            href="#process"
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            Methodology
          </a>

          <a
            href="#techstack"
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors"
          >
            Tech Stack
          </a>

          <a
            href="#estimator"
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Scope Estimator</span>
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e19] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 py-1">
              Proprietary Products
            </div>
            <a
              href="#ksign"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-slate-200"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>K-Sign (Digital Signature)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded font-mono">LAB</span>
            </a>
            <a
              href="#geomeridian"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-sm font-medium text-slate-200"
            >
              <div className="flex items-center gap-2.5">
                <Globe2 className="w-4 h-4 text-violet-400" />
                <span>Geomeridian (GIS Intelligence)</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 bg-violet-500/20 text-violet-300 rounded font-mono">LAB</span>
            </a>
          </div>

          <div className="space-y-1 pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 py-1">
              Engineering Services
            </div>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              All Services & Solutions
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Engineering Methodology
            </a>
            <a
              href="#techstack"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Technology Stack
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-cyan-400 hover:bg-slate-900"
            >
              Project Scope Estimator
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
