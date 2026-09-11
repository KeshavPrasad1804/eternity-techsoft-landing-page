'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Users, 
  Code2, 
  PenTool, 
  ScrollText, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Lock, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS } from '@/data/products';

export default function ProductKSign() {
  const kSignData = PRODUCTS.find((p) => p.id === 'k-sign')!;
  
  // Interactive Simulator State
  const [signingMode, setSigningMode] = useState<'draw' | 'type'>('draw');
  const [typedName, setTypedName] = useState('Alexander Vance');
  const [selectedFont, setSelectedFont] = useState<'script' | 'modern' | 'formal'>('script');
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isSealed, setIsSealed] = useState(false);
  const [cryptoHash, setCryptoHash] = useState('');
  const [copiedHash, setCopiedHash] = useState(false);
  const [timestamp, setTimestamp] = useState('');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, [signingMode]);

  // Canvas drawing handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);
    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setIsSealed(false);
  };

  // Generate real cryptographic hash via Web Crypto API
  const handleSealContract = async () => {
    const timeNow = new Date().toISOString();
    setTimestamp(timeNow);

    const rawData = `K-SIGN:DOCUMENT-NDA-7029:${signingMode === 'draw' ? 'DRAWN_VECTOR_CANVAS' : typedName}:${timeNow}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(rawData);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    setCryptoHash(hashHex);
    setIsSealed(true);

    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#06b6d4', '#818cf8', '#34d399'],
      });
    } catch {
      // safe fallback if confetti is unavailable
    }
  };

  const copyToClipboard = () => {
    if (!cryptoHash) return;
    navigator.clipboard.writeText(cryptoHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="ksign" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Flagship Product Lab 01
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              K-Sign: <span className="text-gradient-cyan">Cryptographic Trust & E-Sign Suite</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We are actively developing <strong className="text-cyan-300">K-Sign</strong> to redefine digital agreement security. 
              Eliminate paper friction with tamper-evident cryptographic hashes, legally binding e-Sign compliance, 
              and multi-party signer automation.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 rounded-lg">
              E-SIGN & eIDAS Standard
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg">
              In Active Development
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Features on Left, Interactive Simulator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Features Column (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0c101b]/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-cyan-400" />
                Why K-Sign Replaces Conventional E-Signature Tools
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most electronic signature tools rely on simple image pastes and centralized database rows. 
                K-Sign binds each stroke, timestamp, and identity to cryptographic hashes—making document fraud mathematically impossible to conceal.
              </p>

              {/* Metric Callouts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
                {kSignData.metrics.map((metric, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-base font-bold font-mono text-cyan-400">{metric.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Cards Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kSignData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-2.5 group-hover:bg-cyan-500/20 transition-colors">
                    {feature.icon === 'ShieldCheck' && <ShieldCheck className="w-4 h-4" />}
                    {feature.icon === 'Users' && <Users className="w-4 h-4" />}
                    {feature.icon === 'FileCheck2' && <FileCheck2 className="w-4 h-4" />}
                    {feature.icon === 'Code2' && <Code2 className="w-4 h-4" />}
                    {feature.icon === 'PenTool' && <PenTool className="w-4 h-4" />}
                    {feature.icon === 'ScrollText' && <ScrollText className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Built With Tech Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-mono">Architecture Stack:</span>
              {kSignData.techPills.map((tech, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive In-Browser Signing Simulator (6 cols) */}
          <div className="lg:col-span-6">
            <div className="ksign-preview-card rounded-2xl bg-[#0c101b] border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden relative">
              
              {/* Header Badge */}
              <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-400">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Interactive K-Sign Experience</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-300 font-mono">TRY LIVE</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Simulate cryptographic contract execution</div>
                  </div>
                </div>

                {/* Signing Mode Toggle */}
                <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => { setSigningMode('draw'); setIsSealed(false); }}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      signingMode === 'draw'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Draw
                  </button>
                  <button
                    onClick={() => { setSigningMode('type'); setIsSealed(false); }}
                    className={`px-3 py-1 rounded-md transition-colors ${
                      signingMode === 'type'
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Type
                  </button>
                </div>
              </div>

              {/* Simulated Contract Document Preview */}
              <div className="p-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                  <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-slate-800/80 font-mono">
                    <span>DOCUMENT: MASTER_SERVICES_AGREEMENT.PDF</span>
                    <span className="text-cyan-400">PAGE 1 OF 1</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    By signing below, the parties agree to deliver enterprise software architecture, high-availability SLA guarantees, and confidential intellectual property compliance under Eternity Techsoft standard terms.
                  </p>
                </div>

                {/* Signature Capture Area */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-medium text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Signer Signature Box
                    </span>
                    {signingMode === 'draw' && (
                      <button
                        onClick={clearCanvas}
                        className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Clear Pad
                      </button>
                    )}
                  </div>

                  {/* Draw Mode: Canvas */}
                  {signingMode === 'draw' ? (
                    <div className="relative rounded-xl border-2 border-dashed border-slate-700 hover:border-cyan-500/50 bg-[#090d16] overflow-hidden transition-colors cursor-crosshair">
                      <canvas
                        ref={canvasRef}
                        width={500}
                        height={140}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="w-full h-[140px] touch-none block"
                      />
                      {!hasDrawn && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-500 text-xs italic">
                          ✍️ Click & draw your signature here
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Type Mode: Custom typography simulator */
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={typedName}
                        onChange={(e) => {
                          setTypedName(e.target.value);
                          setIsSealed(false);
                        }}
                        placeholder="Type full legal name"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <div className="p-4 rounded-xl border border-slate-800 bg-[#090d16] flex items-center justify-center">
                        <span className="text-3xl text-cyan-400 tracking-wider font-serif italic">
                          {typedName || 'Your Signature'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Primary Seal Action Button */}
                <div className="pt-2">
                  <button
                    onClick={handleSealContract}
                    className="w-full py-3 px-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Cryptographically Sign & Seal Document</span>
                  </button>
                </div>

                {/* Cryptographic Verification Seal Modal / Card */}
                {isSealed && (
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/40 animate-in fade-in zoom-in-95 duration-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
                        <CheckCircle2 className="w-4 h-4" />
                        CRYPTOGRAPHIC CERTIFICATE ISSUED
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
                        LEGAL INTEGRITY: VERIFIED
                      </span>
                    </div>

                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="text-slate-400 flex justify-between">
                        <span>TIMESTAMP:</span>
                        <span className="text-slate-200">{timestamp}</span>
                      </div>
                      <div className="text-slate-400 flex justify-between">
                        <span>COMPLIANCE REGIME:</span>
                        <span className="text-cyan-300 font-semibold">UETA / E-SIGN ACT 2000</span>
                      </div>
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center justify-between text-slate-400">
                          <span>SHA-256 DOCUMENT DIGEST:</span>
                          <button
                            onClick={copyToClipboard}
                            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[10px]"
                          >
                            {copiedHash ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            {copiedHash ? 'Copied' : 'Copy'}
                          </button>
                        </div>
                        <div className="p-2 rounded bg-black/60 border border-slate-800 text-cyan-300 text-[10px] break-all select-all font-mono">
                          {cryptoHash}
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-400 italic text-center pt-1">
                      🛡️ Tamper-evident seal generated in real time using browser Web Crypto API.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
