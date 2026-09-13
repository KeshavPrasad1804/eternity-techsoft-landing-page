import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert, Key, CheckCircle, Server, Bug } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Security Architecture & Standards | Eternity Techsoft',
  description:
    'Eternity Techsoft Security Architecture: Zero-trust protocols, SHA-256 and Ed25519 cryptographic seals, SOC2 compliance mapping, and vulnerability disclosure protocol.',
  alternates: {
    canonical: '/security',
  },
};

export default function SecurityPage() {
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

          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SECURITY AUDIT STATUS: GREEN</span>
          </span>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <ShieldAlert className="w-3.5 h-3.5" />
            Cryptographic Integrity & Defense-in-Depth
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Security Architecture & Compliance
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Eternity Techsoft designs software with defense-in-depth principles. From our proprietary cryptographic platform (K-Sign) 
            to custom enterprise client deployments, security is a foundational requirement, not a secondary layer.
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Key className="w-5 h-5 text-cyan-400" />
              <h2>1. Cryptographic Standards (SHA-256 & Ed25519)</h2>
            </div>
            <p>
              Our flagship digital trust platform, <strong className="text-cyan-300">K-Sign</strong>, implements immutable cryptographic hashing via Web Crypto API SHA-256 digests and asymmetric Ed25519 digital signatures. Every executed agreement produces an immutable cryptographic certificate containing deterministic timestamps, public key signatures, and document hashes that make tampering mathematically impossible to conceal.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Server className="w-5 h-5 text-violet-400" />
              <h2>2. Zero-Trust Architecture & Air-Gapped Deployment</h2>
            </div>
            <p>
              Both <strong className="text-cyan-300">K-Sign</strong> and <strong className="text-violet-300">Geomeridian</strong> can be deployed as containerized Kubernetes and Docker appliances within customer-controlled private VPCs (AWS, Google Cloud, Azure) or physical air-gapped data centers. This ensures sensitive geospatial intelligence data and proprietary legal contracts never transit external public networks.
            </p>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <h2>3. SOC2 Type II & Regulatory Mapping</h2>
            </div>
            <p>
              Our internal engineering practices and customer delivery architectures align directly with the Trust Services Criteria of SOC2 Type II:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-slate-300">
              <li><strong className="text-white">Access Control:</strong> Strict least-privilege RBAC, hardware security keys (FIDO2/WebAuthn), and ephemeral access tokens.</li>
              <li><strong className="text-white">Encryption in Transit & at Rest:</strong> TLS 1.3 with forward secrecy for all external/internal ingress, and AES-256 encryption for data at rest.</li>
              <li><strong className="text-white">Continuous CI/CD Scanning:</strong> Automated static application security testing (SAST), software composition analysis (SCA), and container vulnerability scans on every commit.</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#0c101b] border border-slate-800">
            <div className="flex items-center gap-3 text-white font-bold text-xl">
              <Bug className="w-5 h-5 text-amber-400" />
              <h2>4. Responsible Vulnerability Disclosure Protocol</h2>
            </div>
            <p>
              We welcome security researchers and technical audits. If you identify a potential security issue in any Eternity Techsoft web property, SDK, or platform build, please notify security response directly at:
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300">
              security@eternitytechsoft.com
            </div>
            <p className="text-xs text-slate-400">
              We pledge to acknowledge reports within 24 business hours and will not pursue legal action against researchers acting in good faith without compromising customer data.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
