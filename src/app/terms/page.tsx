import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Scale, ShieldCheck, Cpu, Code2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms of Engagement | Eternity Techsoft',
  description:
    'Eternity Techsoft Terms of Engagement: 100% Client IP ownership, mutual NDA covenants, sprint milestones, SLA commitments, and engineering deliverables.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
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
            Last Updated: January 1, 2026
          </span>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Scale className="w-3.5 h-3.5" />
            Client Legal & Operational Framework
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Terms of Engagement
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            These Terms govern custom software development, engineering pod engagements, architectural consulting, 
            and proprietary software evaluations provided by Eternity Techsoft.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h2>1. 100% Intellectual Property (IP) Ownership</h2>
            </div>
            <p>
              Unlike legacy consultancies that retain proprietary vendor-lock hooks, Eternity Techsoft ensures that <strong className="text-white">you own 100% of all custom deliverables from day one</strong>. Upon milestone completion, all repository code, schemas, infrastructure-as-code (Terraform/Kubernetes), CI/CD pipelines, and design assets transfer entirely to your organization without residual royalty obligations.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
              <h2>2. Mutual Non-Disclosure & Confidentiality</h2>
            </div>
            <p>
              We enforce strict confidentiality covenants. Prior to analyzing your proprietary data or technical specifications, I execute mutual enterprise Non-Disclosure Agreements (NDAs). All developer workstations employ hardware-level encryption, multi-factor authentication, and zero-trust compartmentalization.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Clock className="w-5 h-5 text-emerald-400" />
              <h2>3. Sprint Deliverables & Transparent Governance</h2>
            </div>
            <p>
              Engineering projects operate under two-week agile sprint cadences. Each sprint concludes with:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-300">
              <li>A working staging deployment with verified acceptance tests.</li>
              <li>A transparent sprint changelog detailing merged pull requests.</li>
              <li>Burn-down metrics and next sprint backlog alignment with your technical stakeholders.</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Cpu className="w-5 h-5 text-amber-400" />
              <h2>4. 30-Day Post-Launch Warranty & 24/7 SLA</h2>
            </div>
            <p>
              All production rollouts are backed by a complimentary 30-day warranty covering zero-cost resolution of functional bugs and regressions. Ongoing tier-1 support, 99.99% uptime guarantees, and dedicated on-call incident response are available under tailored Service Level Agreements (SLAs).
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/security" className="hover:text-cyan-400 transition-colors">Security Architecture</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
