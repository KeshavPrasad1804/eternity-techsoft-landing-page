'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  GitBranch, 
  ShieldAlert, 
  Database, 
  Coins, 
  CheckCircle2, 
  Sparkles, 
  RotateCcw, 
  Play, 
  Cpu, 
  FileCode2, 
  ShieldCheck, 
  AlertTriangle,
  Zap,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface Scenario {
  id: string;
  name: string;
  file: string;
  testCmd: string;
  errorSnippet: string;
  patchDiff: string;
  tokens: number;
  cost: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'race-condition',
    name: 'Kafka Settlement Consumer Race Condition',
    file: 'src/services/settlement-consumer.ts',
    testCmd: 'npm test -- tests/settlement.spec.ts',
    errorSnippet: 'AssertionError: expected order status "SETTLED" but received "DOUBLE_CHARGE_DETECTED"\n    at OrderCoordinator.processBatch (src/services/settlement-consumer.ts:42:15)',
    patchDiff: `@@ -40,4 +40,7 @@
-  const lock = await acquireLock(orderId);
-  await executeSettlement(orderId);
+  const tx = await db.transaction();
+  const lock = await acquireDistributedLock(orderId, { ttl: 5000, tx });
+  if (!lock) throw new ConcurrentSettlementError(orderId);
+  await executeAtomicSettlement(orderId, tx);`,
    tokens: 1420,
    cost: '$0.00 (Local Ollama) / $0.042 (Cloud)',
  },
  {
    id: 'memory-leak',
    name: 'WebSocket Disconnect Token Memory Leak',
    file: 'src/gateway/ws-session.ts',
    testCmd: 'npm test -- tests/gateway-memory.spec.ts',
    errorSnippet: 'HeapGrowthError: heap usage grew by 48.2MB across 5,000 disconnect cycles\n    at SessionManager.trackLeak (tests/gateway-memory.spec.ts:88:11)',
    patchDiff: `@@ -86,3 +86,5 @@
-  socket.on('close', () => { this.activeSessions.delete(id); });
+  socket.on('close', () => {
+    this.activeSessions.delete(id);
+    this.heartbeatTimerMap.delete(id);
+    this.tokenRefresher.detach(id);
+  });`,
    tokens: 1180,
    cost: '$0.00 (Local Ollama) / $0.035 (Cloud)',
  },
  {
    id: 'pg-deadlock',
    name: 'PostgreSQL Row Deadlock on Concurrent Retry',
    file: 'src/db/inventory-allocator.ts',
    testCmd: 'npm test -- tests/allocation-concurrency.spec.ts',
    errorSnippet: 'DatabaseError: deadlock detected (Process 482 waits for ShareLock on transaction 88102)\n    at PostgresDriver.query (src/db/inventory-allocator.ts:67:9)',
    patchDiff: `@@ -65,3 +65,4 @@
-  SELECT * FROM inventory WHERE sku = $1 FOR UPDATE;
+  -- Sort SKU order consistently to prevent circular lock wait
+  SELECT * FROM inventory WHERE sku = ANY($1::text[]) ORDER BY sku FOR UPDATE;`,
    tokens: 960,
    cost: '$0.00 (Local Ollama) / $0.028 (Cloud)',
  }
];

export default function ProductKCode() {
  const kCodeData = PRODUCTS.find((p) => p.id === 'k-code')!;

  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SCENARIOS[0]);
  const [harnessStep, setHarnessStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isCrashed, setIsCrashed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'log' | 'diff' | 'journal'>('log');

  const runSimulation = () => {
    setIsRunning(true);
    setIsCrashed(false);
    setHarnessStep(1); // Step 1: Baseline failure check

    setTimeout(() => {
      setHarnessStep(2); // Step 2: Isolated worktree creation
      setTimeout(() => {
        setHarnessStep(3); // Step 3: Agent patch generation & receipts
        setTimeout(() => {
          setHarnessStep(4); // Step 4: Acceptance verification pass
          setIsRunning(false);
        }, 1200);
      }, 1100);
    }, 1100);
  };

  const simulateCrashAndRecover = () => {
    if (harnessStep < 3) {
      setHarnessStep(3);
    }
    setIsCrashed(true);
    setIsRunning(false);

    // Auto resume after 1.5 seconds from SQLite
    setTimeout(() => {
      setIsCrashed(false);
      setHarnessStep(4);
    }, 1600);
  };

  const resetSimulator = () => {
    setHarnessStep(0);
    setIsRunning(false);
    setIsCrashed(false);
  };

  return (
    <section id="kcode" className="py-24 relative overflow-hidden bg-slate-950/70 border-b border-slate-900">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>ETERNITY PRODUCT LAB // 03</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-semibold">AUTONOMOUS AGENT HARNESS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            K-Code: Deterministic Coding-Agent Harness with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Verifiable Proof
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Stop rogue AI agents from polluting developer git trees and hallucinating false passes. 
            <strong className="text-white font-medium"> K-Code</strong> executes coding models inside disposable git worktrees, requires baseline failure reproduction evidence before editing code, persists durable SQLite journals for crash recovery, and meters token budgets to zero surprise bills.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono">
            {kCodeData.techPills.map((tech) => (
              <span 
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Verification Console Simulator */}
        <div className="mb-16 rounded-3xl bg-[#070b12] border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden">
          
          {/* Top Bar with Status and Scenario Selector */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between border-b border-slate-800/80 bg-slate-950/70 p-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-[1px] bg-slate-800 mx-1" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold text-white">k-code</span>
                <span className="text-slate-500">v0.4.1 (daemon: local-sqlite)</span>
              </div>
            </div>

            {/* Scenario Picker */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Target Scenario:</span>
              {SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedScenario(sc);
                    setHarnessStep(0);
                    setIsCrashed(false);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    selectedScenario.id === sc.id
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {sc.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold shadow-lg shadow-emerald-500/20 transition-all disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Verifying Harness...' : 'Run Harness'}</span>
              </button>

              <button
                onClick={simulateCrashAndRecover}
                title="Simulate process kill mid-run to test SQLite resumption without losing work or re-spending tokens"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-mono transition-all"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Simulate Crash</span>
              </button>

              <button
                onClick={resetSimulator}
                className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Reset Harness"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Stepper Pipeline Visualizer */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800/80 bg-slate-950/40 text-xs font-mono">
            {/* Step 1 */}
            <div className={`p-3.5 border-r border-slate-800/60 transition-colors ${harnessStep >= 1 ? 'bg-emerald-500/5' : ''}`}>
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  harnessStep >= 1 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  1
                </div>
                <span className={`font-semibold ${harnessStep >= 1 ? 'text-white' : 'text-slate-500'}`}>
                  Baseline Failure Check
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-7">
                {harnessStep >= 1 ? 'FAIL (exit 1) captured on clean source' : 'Prove failure exists first'}
              </p>
            </div>

            {/* Step 2 */}
            <div className={`p-3.5 border-r border-slate-800/60 transition-colors ${harnessStep >= 2 ? 'bg-emerald-500/5' : ''}`}>
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  harnessStep >= 2 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  2
                </div>
                <span className={`font-semibold ${harnessStep >= 2 ? 'text-white' : 'text-slate-500'}`}>
                  Isolated Git Worktree
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-7">
                {harnessStep >= 2 ? '.kcode/worktrees/run-482 sandbox active' : 'Zero dirty repo pollution'}
              </p>
            </div>

            {/* Step 3 */}
            <div className={`p-3.5 border-r border-slate-800/60 transition-colors ${harnessStep >= 3 ? 'bg-emerald-500/5' : ''}`}>
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  harnessStep >= 3 ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  3
                </div>
                <span className={`font-semibold ${harnessStep >= 3 ? 'text-white' : 'text-slate-500'}`}>
                  Candidate Patch & Receipts
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-7">
                {harnessStep >= 3 ? `${selectedScenario.tokens} tok / SQLite receipt logged` : 'Durable token accounting'}
              </p>
            </div>

            {/* Step 4 */}
            <div className={`p-3.5 transition-colors ${harnessStep >= 4 ? 'bg-emerald-500/10' : ''}`}>
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  harnessStep >= 4 ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  4
                </div>
                <span className={`font-semibold ${harnessStep >= 4 ? 'text-emerald-300' : 'text-slate-500'}`}>
                  Candidate Acceptance
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-7">
                {harnessStep >= 4 ? 'VERIFIED PASS (exit 0) signed' : 'Strict unmodified test pass'}
              </p>
            </div>
          </div>

          {/* Crash Banner if triggered */}
          {isCrashed && (
            <div className="bg-amber-500/15 border-b border-amber-500/30 p-3 px-6 flex items-center justify-between text-xs font-mono text-amber-300 animate-pulse">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>PROCESS KILLED (SIGKILL simulation). Reading state machine from SQLite (.kcode/journal.db)...</span>
              </div>
              <span className="text-amber-400 font-bold">RESUMING WITHOUT RE-SPENDING TOKENS</span>
            </div>
          )}

          {/* Console Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            
            {/* Left Column: Live Terminal View (8 cols) */}
            <div className="lg:col-span-8 p-5 font-mono text-xs text-slate-300 bg-[#05080f] overflow-x-auto space-y-3 border-b lg:border-b-0 lg:border-r border-slate-800/80">
              
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80">
                <button
                  onClick={() => setActiveTab('log')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'log' ? 'bg-slate-800 text-emerald-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Execution Log
                </button>
                <button
                  onClick={() => setActiveTab('diff')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'diff' ? 'bg-slate-800 text-emerald-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Candidate Patch Diff
                </button>
                <button
                  onClick={() => setActiveTab('journal')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    activeTab === 'journal' ? 'bg-slate-800 text-emerald-300' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SQLite Journal State
                </button>
              </div>

              {activeTab === 'log' && (
                <div className="space-y-2 leading-relaxed">
                  <div className="text-slate-500">
                    $ k-code run --target ./repo --test &quot;{selectedScenario.testCmd}&quot; --worktree-isolated
                  </div>

                  {harnessStep === 0 && (
                    <div className="text-slate-400 italic py-8 text-center">
                      [Harness Idle] Click <span className="text-emerald-400 font-semibold">&quot;Run Harness&quot;</span> above to inspect how K-Code proves the failure before modifying code.
                    </div>
                  )}

                  {harnessStep >= 1 && (
                    <div className="space-y-1">
                      <div className="text-cyan-400">&gt; [Phase 1: Baseline Check] Executing test suite against clean HEAD...</div>
                      <div className="p-2.5 rounded bg-red-950/20 border border-red-500/20 text-red-300 text-[11px] whitespace-pre-wrap">
                        {selectedScenario.errorSnippet}
                      </div>
                      <div className="text-emerald-400 font-semibold">
                        ✓ Baseline Failure Verified. (Evidence: exit code 1 recorded in receipt #rec_001)
                      </div>
                    </div>
                  )}

                  {harnessStep >= 2 && (
                    <div className="space-y-1 pt-2">
                      <div className="text-cyan-400">&gt; [Phase 2: Isolation] Spawning throwaway git worktree...</div>
                      <div className="text-slate-400 text-[11px]">
                        $ git worktree add --detach .kcode/worktrees/run-01j8m482 HEAD
                      </div>
                      <div className="text-emerald-400 font-semibold">
                        ✓ Isolated sandbox mounted at .kcode/worktrees/run-01j8m482 (Main working directory untouched)
                      </div>
                    </div>
                  )}

                  {harnessStep >= 3 && (
                    <div className="space-y-1 pt-2">
                      <div className="text-cyan-400">&gt; [Phase 3: Agent Patching] Model: local-ollama (qwen2.5-coder:14b)</div>
                      <div className="text-slate-400 text-[11px]">
                        Analyzing AST and editing {selectedScenario.file}...
                      </div>
                      <div className="text-slate-300 text-[11px]">
                        Receipt #rec_002 committed: {selectedScenario.tokens} tokens reserved | $0.00 spend.
                      </div>
                    </div>
                  )}

                  {harnessStep >= 4 && (
                    <div className="space-y-1 pt-2">
                      <div className="text-cyan-400">&gt; [Phase 4: Acceptance Verification] Re-running unmodified test in sandbox...</div>
                      <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-[11px]">
                        ✓ {selectedScenario.testCmd} returned exit code 0
                        <br />
                        ✓ 18 tests passed, 0 failed, 0 regressions. All assertions verified.
                      </div>
                      <div className="text-emerald-300 font-bold pt-1">
                        ★ ACCEPTED: Candidate patch verified and safe for upstream merge.
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'diff' && (
                <div className="space-y-2">
                  <div className="text-slate-400 text-xs">
                    Target File: <span className="text-white">{selectedScenario.file}</span>
                  </div>
                  <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-emerald-300 overflow-x-auto whitespace-pre font-mono">
                    {selectedScenario.patchDiff}
                  </pre>
                  <div className="text-[11px] text-slate-500">
                    * Patch generated and validated inside worktree sandbox. Local repository working tree remains clean.
                  </div>
                </div>
              )}

              {activeTab === 'journal' && (
                <div className="space-y-2">
                  <div className="text-slate-400 text-xs">
                    SQLite Database: <span className="text-cyan-400 font-mono">.kcode/journal.db</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">TABLE: run_state</span>
                      <span className="text-emerald-400 font-bold">{harnessStep >= 4 ? 'STATE: ACCEPTED' : 'STATE: RUNNING'}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">TABLE: baseline_evidence</span>
                      <span className="text-white">reproduced_exit_code = 1 (verified)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">TABLE: receipts</span>
                      <span className="text-cyan-300">{harnessStep >= 3 ? '3 durable receipts logged' : '1 receipt logged'}</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/80 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">TABLE: cost_ledger</span>
                      <span className="text-white">{selectedScenario.tokens} tokens confirmed</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Live Telemetry & Metering (4 cols) */}
            <div className="lg:col-span-4 p-5 bg-slate-950/90 font-mono text-xs text-slate-300 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>Harness Telemetry</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Status Pill */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Execution State</span>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  {harnessStep === 0 && <span className="text-slate-400">AWAITING TASK</span>}
                  {harnessStep === 1 && <span className="text-yellow-400">BASELINE REPRODUCING</span>}
                  {harnessStep === 2 && <span className="text-cyan-400">WORKTREE MOUNTED</span>}
                  {harnessStep === 3 && <span className="text-emerald-400">PATCHING IN SANDBOX</span>}
                  {harnessStep === 4 && <span className="text-emerald-300">VERIFIED ACCEPTED</span>}
                </div>
              </div>

              {/* Token Ledger Gauge */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Token Budget Cap:</span>
                  <span className="text-white font-bold">50,000 max</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-500" 
                    style={{ width: `${(selectedScenario.tokens / 50000) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>Used: {selectedScenario.tokens} tok</span>
                  <span>Remaining: {50000 - selectedScenario.tokens} tok</span>
                </div>
              </div>

              {/* Cost Meter */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">Spend Accountability</span>
                <div className="text-sm font-bold text-emerald-400">
                  {selectedScenario.cost}
                </div>
                <div className="text-[10px] text-slate-500">
                  Hard reservation ledger with child descendant budget caps.
                </div>
              </div>

              {/* Key Assurance */}
              <div className="pt-2 text-[11px] text-slate-400 space-y-1 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Main Working Tree: 100% CLEAN</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Test Rewrites Prevented: ENFORCED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Engineering Teams Choose K-Code (Founder & CTO Value Card) */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-[#070e17] to-slate-900/90 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="max-w-4xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE ENTERPRISE AGENT PROBLEM SOLVED</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Why Engineering Teams Switch from Uncontrolled AI Coding Tools to K-Code
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mainstream AI coding assistants operate directly on developer working directories, risk infinite token spend loops, and frequently hallucinate passing tests by silently rewriting the test file itself. 
              <strong className="text-white font-medium"> K-Code</strong> treats AI agent execution with the same strict safety and isolation standards as enterprise CI/CD pipelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="text-emerald-400 font-bold text-sm mb-1">
                  1. Zero Git Pollution
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every candidate patch runs in an isolated git worktree. If an agent fails, your local branch and uncommitted work remain pristine.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="text-cyan-400 font-bold text-sm mb-1">
                  2. Independent Baseline Proof
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  K-Code executes tests on unmodified code first. If the test doesn&apos;t fail initially, the task is rejected—stopping hallucinated passes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="text-teal-400 font-bold text-sm mb-1">
                  3. Crash-Proof SQLite Journal
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Kill or restart any session mid-run. The SQLite durable receipt state machine resumes immediately without re-spending LLM tokens.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {kCodeData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1 hover:border-emerald-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {m.value}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* 6 Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kCodeData.features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 group text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                {idx === 0 && <GitBranch className="w-5 h-5" />}
                {idx === 1 && <ShieldAlert className="w-5 h-5" />}
                {idx === 2 && <Database className="w-5 h-5" />}
                {idx === 3 && <Coins className="w-5 h-5" />}
                {idx === 4 && <Terminal className="w-5 h-5" />}
                {idx === 5 && <CheckCircle2 className="w-5 h-5" />}
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {feat.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
