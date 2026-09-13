'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Command, 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  Layers, 
  Calculator, 
  Mail, 
  FileCode2, 
  GitBranch, 
  HelpCircle, 
  X,
  ArrowRight,
  Activity,
  Scale,
  Shield,
  Terminal
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener (Cmd+K / Ctrl+K / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'ksign',
      title: 'K-Sign: Interactive Signing Simulator',
      category: 'Flagship Product',
      icon: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
      target: '#ksign',
    },
    {
      id: 'kcode',
      title: 'K-Code: Agent Harness & Worktree Verification Console',
      category: 'Flagship Product',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      target: '#kcode',
    },
    {
      id: 'geomeridian',
      title: 'Geomeridian: Spatial Radar & GIS Inspector',
      category: 'Flagship Product',
      icon: <Globe2 className="w-4 h-4 text-violet-400" />,
      target: '#geomeridian',
    },
    {
      id: 'comparison',
      title: 'K-Sign vs Legacy E-Sign Battlecard',
      category: 'Product Analysis',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      target: '#comparison',
    },
    {
      id: 'developer',
      title: 'Developer SDK & API Playground',
      category: 'Documentation & Code',
      icon: <FileCode2 className="w-4 h-4 text-amber-400" />,
      target: '#developer',
    },
    {
      id: 'services',
      title: 'Full-Cycle Engineering Services Matrix',
      category: 'Software Services',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      target: '#services',
    },
    {
      id: 'models',
      title: 'Client Engagement & Partnership Models',
      category: 'Pricing & Sprints',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      target: '#models',
    },
    {
      id: 'estimator',
      title: 'Interactive Project Scope & Budget Estimator',
      category: 'Tools & Planning',
      icon: <Calculator className="w-4 h-4 text-cyan-400" />,
      target: '#estimator',
    },
    {
      id: 'roadmap',
      title: 'Product Roadmap & Engineering Changelog',
      category: 'R&D Pipeline',
      icon: <GitBranch className="w-4 h-4 text-purple-400" />,
      target: '#roadmap',
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions (IP, Security, SLA)',
      category: 'Support',
      icon: <HelpCircle className="w-4 h-4 text-slate-400" />,
      target: '#faq',
    },
    {
      id: 'contact',
      title: 'Book Technical Consultation with Principal Architect',
      category: 'Direct Intake',
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      target: '#contact',
    },
    {
      id: 'privacy',
      title: 'Enterprise Privacy Policy & Data Governance',
      category: 'Legal & Compliance',
      icon: <Shield className="w-4 h-4 text-cyan-400" />,
      target: '/privacy',
    },
    {
      id: 'security',
      title: 'Security Architecture, SOC2 & Cryptographic Standards',
      category: 'Legal & Compliance',
      icon: <Shield className="w-4 h-4 text-emerald-400" />,
      target: '/security',
    },
    {
      id: 'terms',
      title: 'Terms of Engagement & 100% IP Ownership',
      category: 'Legal & Compliance',
      icon: <Scale className="w-4 h-4 text-violet-400" />,
      target: '/terms',
    },
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (target: string) => {
    onClose();
    if (target.startsWith('#')) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = target;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-[#0c101b] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section (e.g. K-Sign, Estimator, API)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.target)}
                className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {item.category}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              No matching actions found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Bottom Keyboard Legend */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">ESC</kbd> to exit</span>
            <span><kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">&uarr;&darr;</kbd> to navigate</span>
          </div>
          <span className="text-cyan-400 font-medium">Eternity Quick Navigator</span>
        </div>
      </div>
    </div>
  );
}
