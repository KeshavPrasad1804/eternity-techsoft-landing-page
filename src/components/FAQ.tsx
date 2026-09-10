'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who owns the Intellectual Property (IP) and source code for custom projects?',
      answer:
        'You own 100% of the Intellectual Property from day one. All repositories, commit histories, infrastructure definitions, design assets, and credentials belong entirely to your organization upon milestone completion. We provide automated CI/CD handovers with clean documentation.',
    },
    {
      question: 'Can K-Sign and Geomeridian be self-hosted in our own private cloud?',
      answer:
        'Yes. In addition to our multi-tenant SaaS cloud, both K-Sign and Geomeridian are packaged into containerized Docker and Helm/Kubernetes appliances. You can deploy them directly within your air-gapped AWS, Google Cloud, Azure, or on-premise infrastructure to satisfy strict banking, medical, or government data residency mandates.',
    },
    {
      question: 'How do you protect confidentiality and sensitive business logic?',
      answer:
        'We execute mutual enterprise Non-Disclosure Agreements (NDAs) before discussing project specifics. All code is stored in enterprise-grade private repositories, and our engineering environments adhere to strict zero-trust security access controls, encrypted keystores, and compartmentalized databases.',
    },
    {
      question: 'How quickly can an Eternity Techsoft engineering pod spin up?',
      answer:
        'Typically within 5 to 10 business days. Following initial architectural discovery and blueprint alignment, our principal architects assign vetted staff engineers with proven domain mastery in your target stack, allowing sprint delivery to kick off immediately.',
    },
    {
      question: 'What happens after our software is deployed to production?',
      answer:
        'We don’t abandon you at launch. Every custom delivery includes a 30-day comprehensive warranty covering zero-cost bug resolution, production telemetry monitoring, and optional long-term 24/7 SLA maintenance agreements.',
    },
    {
      question: 'How do you prevent the technical debt common in agency work?',
      answer:
        'We treat client codebases with the exact same engineering rigor as our proprietary flagship platforms. That means 100% TypeScript type-safety, automated linting pipelines, strict unit and integration testing gates, modular microservices architecture, and clean decoupled components.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            Clarity & Transparency
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Everything you need to know about our engineering standards, intellectual property rights, 
            and flagship product deployment options.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0c101b] border-cyan-500/40 shadow-xl shadow-cyan-950/20'
                    : 'bg-[#0c101b]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-cyan-500/10 border-cyan-500/30' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a specific question not listed here?</h4>
              <p className="text-xs text-slate-400">Our engineering leads are available to talk through your exact requirements.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0"
          >
            <span>Ask an Architect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
