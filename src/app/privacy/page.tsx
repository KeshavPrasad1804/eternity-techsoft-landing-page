import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy | Eternity Techsoft',
  description:
    'Eternity Techsoft Enterprise Privacy Policy: Transparent data governance, GDPR compliance, zero-data-selling principles, and cryptographic integrity standards.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation */}
        <div className="flex items-center justify-between pb-8 border-b border-slate-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Eternity Techsoft</span>
          </Link>

          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Effective Date: January 1, 2026
          </span>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Shield className="w-3.5 h-3.5" />
            Data Protection & Privacy
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Enterprise Privacy Policy
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            At Eternity Techsoft, data privacy and algorithmic transparency are core engineering tenets. 
            This policy outlines how we collect, safeguard, and govern technical and organizational information.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Lock className="w-5 h-5 text-cyan-400" />
              <h2>1. Zero-Data-Selling Commitment</h2>
            </div>
            <p>
              Eternity Techsoft does not sell, rent, monetize, or broker personal or corporate information under any circumstance. We are an engineering services and enterprise product development company, not an ad-tech platform. Data shared with us is utilized strictly for executing authorized engineering agreements, providing customer support, and servicing platform infrastructure.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Eye className="w-5 h-5 text-violet-400" />
              <h2>2. Information We Process</h2>
            </div>
            <ul className="space-y-3 list-disc pl-5 text-slate-300">
              <li>
                <strong className="text-white">Direct Communications:</strong> When you submit inquiry forms or engage our discovery team, we collect your name, business email address, organization name, and technical project specifications.
              </li>
              <li>
                <strong className="text-white">Proprietary Platforms (K-Sign & Geomeridian):</strong> For users engaging our private preview or API tiers, telemetry logs (such as request latencies, IP addresses for rate limiting, and cryptographic audit hash records) are collected solely to ensure platform security and SLA uptime.
              </li>
              <li>
                <strong className="text-white">Cookies & Local Storage:</strong> We use local storage strictly for maintaining your theme preferences (<code className="text-cyan-300">eternity-theme</code>) and session authentication tokens. We do not embed invasive cross-site tracking cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <h2>3. GDPR, CCPA & Global Regulatory Alignment</h2>
            </div>
            <p>
              In accordance with the EU General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you maintain the right to:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-300">
              <li>Request full disclosure of data records associated with your organization.</li>
              <li>Request immediate data rectification or complete cryptographic erasure.</li>
              <li>Restrict processing or withdraw consent at any time without punitive penalty.</li>
            </ul>
            <p className="text-xs text-slate-400 pt-2 font-mono">
              Requests can be submitted directly to our Data Governance Officer at <a href={`mailto:${COMPANY_INFO.email}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.email}</a>.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <FileText className="w-5 h-5 text-amber-400" />
              <h2>4. Sub-Processors & Infrastructure Hosting</h2>
            </div>
            <p>
              To deliver global edge acceleration and low latency, Eternity Techsoft utilizes vetted enterprise cloud infrastructure providers, including Vercel (Edge Functions & Hosting) and resilient container infrastructure. Each provider undergoes strict third-party SOC2 Type II and ISO 27001 audit verification.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Engagement</Link>
            <Link href="/security" className="hover:text-cyan-400 transition-colors">Security Architecture</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
