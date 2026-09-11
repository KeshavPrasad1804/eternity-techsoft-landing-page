'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  Search,
  FileCode2,
  GitBranch,
  Scale
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { COMPANY_INFO } from '@/data/company';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/60 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg shrink-0 whitespace-nowrap"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 transition-all duration-300 shrink-0">
            {/* Custom Infinity Circuit Mark */}
            <svg
              className="w-5 h-5 text-cyan-400 group-hover:scale-105 transition-transform"
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
            <span className="text-base font-bold tracking-tight text-white flex items-center gap-1 leading-none">
              Eternity <span className="text-cyan-400">Techsoft</span>
            </span>
            <span className="text-[9px] font-medium tracking-widest uppercase text-slate-400 mt-1 leading-none font-mono">
              Services & Products
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links - Pixel Perfect Single Line */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0">
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className="h-9 inline-flex items-center gap-1.5 px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
              aria-expanded={productsDropdownOpen}
            >
              <span>Products</span>
              <span className="px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 rounded-full font-mono">
                2 Builds
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
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors shrink-0">
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
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors shrink-0">
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

                <div className="mt-2 pt-2 border-t border-slate-800/80 px-2 flex justify-between text-[10px] font-mono text-slate-500">
                  <a href="#comparison" className="hover:text-cyan-400 flex items-center gap-1">
                    <Scale className="w-3 h-3" /> Battlecard
                  </a>
                  <a href="#roadmap" className="hover:text-purple-400 flex items-center gap-1">
                    <GitBranch className="w-3 h-3" /> Roadmap
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#services"
            className="h-9 inline-flex items-center px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            Services
          </a>

          <a
            href="#comparison"
            className="h-9 inline-flex items-center px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            Battlecards
          </a>

          <a
            href="#developer"
            className="h-9 inline-flex items-center gap-1.5 px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            <FileCode2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Developers</span>
          </a>

          <a
            href="#models"
            className="h-9 inline-flex items-center px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            Pricing
          </a>

          <a
            href="#roadmap"
            className="h-9 inline-flex items-center px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            Roadmap
          </a>

          <a
            href="#estimator"
            className="h-9 inline-flex items-center gap-1.5 px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Estimator</span>
          </a>

          <a
            href="#faq"
            className="h-9 inline-flex items-center px-2.5 xl:px-3 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors whitespace-nowrap"
          >
            FAQ
          </a>
        </nav>

        {/* Right Action Items: ThemeToggle, GitHub, Cmd+K and CTA Button - Equal Height & Strict Alignment */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <ThemeToggle />

          <a
            href={COMPANY_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eternity Techsoft on GitHub"
            className="h-9 w-9 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors shrink-0"
            title="GitHub Repository"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="h-9 inline-flex items-center gap-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all text-xs font-mono whitespace-nowrap shrink-0 cursor-pointer"
              title="Search & Quick Actions (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-[11px] whitespace-nowrap font-sans">Quick Jump</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-500 font-mono leading-none">
                ⌘K
              </kbd>
            </button>
          )}

          <a
            href="#contact"
            className="h-9 px-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu, ThemeToggle & Search Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              aria-label="Open command search"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e19] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto">
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
              Platform & Services
            </div>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Product Battlecards
            </a>
            <a
              href="#developer"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-amber-400 hover:bg-slate-900"
            >
              Developer SDK & APIs
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Engineering Services
            </a>
            <a
              href="#models"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Pricing & Sprints
            </a>
            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-purple-400 hover:bg-slate-900"
            >
              Roadmap & Changelog
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-cyan-400 hover:bg-slate-900"
            >
              Scope Estimator
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900"
            >
              Frequently Asked Questions
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

          <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eternity Techsoft on GitHub"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eternity Techsoft on LinkedIn"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eternity Techsoft on X (formerly Twitter)"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
