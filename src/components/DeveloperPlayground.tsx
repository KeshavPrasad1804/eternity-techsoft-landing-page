'use client';

import React, { useState } from 'react';
import { 
  FileCode2, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Code2,
  Cpu,
  Layers
} from 'lucide-react';

export default function DeveloperPlayground() {
  const [selectedSnippet, setSelectedSnippet] = useState<'ksign' | 'geomeridian' | 'webhook'>('ksign');
  const [copied, setCopied] = useState(false);

  const snippets = {
    ksign: {
      lang: 'TypeScript',
      fileName: 'sign-contract.ts',
      install: 'npm install @eternity/ksign-sdk',
      code: `import { KSignClient } from '@eternity/ksign-sdk';

const ksign = new KSignClient({
  apiKey: process.env.ETERNITY_KSIGN_API_KEY,
  environment: 'production'
});

// Create and cryptographically seal an agreement
const agreement = await ksign.documents.createAndSign({
  title: 'Enterprise Master Services Agreement',
  fileUrl: 'https://cdn.enterprise.com/contracts/msa-2026.pdf',
  signers: [
    { email: 'elena@enterprise.com', role: 'Signer', sequence: 1 },
    { email: 'legal@eternitytechsoft.com', role: 'CounterSigner', sequence: 2 }
  ],
  cryptography: {
    algorithm: 'Ed25519-SHA256',
    generateTamperAuditCert: true
  }
});

console.log('Contract Sealed:', agreement.sha256Hash);`,
      response: `{
  "status": "SEALED",
  "documentId": "ksign_doc_8941bc87",
  "sha256Hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "auditCertificateUrl": "https://vault.eternitytechsoft.com/cert/8941bc87.pdf",
  "signers": 2,
  "executionTimeMs": 48.2
}`,
    },
    geomeridian: {
      lang: 'Python',
      fileName: 'spatial_stream.py',
      install: 'pip install geomeridian-engine',
      code: `from geomeridian import SpatialEngine, GeofencePolygon

engine = SpatialEngine(api_key="gm_live_secret_key")

# Define dynamic metropolitan geofence corridor
corridor = GeofencePolygon.from_geojson({
    "type": "Polygon",
    "coordinates": [[
        [-122.4194, 37.7749],
        [-122.4089, 37.7858],
        [-122.3951, 37.7650],
        [-122.4194, 37.7749]
    ]]
})

# Stream live drone/telemetry coordinate ping
telemetry = engine.telemetry.ingest(
    vehicle_id="DRONE-ALPHA-09",
    latitude=37.7758,
    longitude=-122.4140,
    altitude_m=42.5,
    h3_resolution=9
)

is_inside = corridor.contains(telemetry.coordinates)
print(f"Containment verified: {is_inside}")`,
      response: `{
  "vehicleId": "DRONE-ALPHA-09",
  "status": "CONTAINED_IN_CORRIDOR",
  "h3Index": "8828308281fffff",
  "spatialDistanceToBoundaryM": 114.6,
  "telemetryIngestionLatencyMs": 14.1,
  "polygonZone": "ZONE-7A METROPOLITAN"
}`,
    },
    webhook: {
      lang: 'JSON & cURL',
      fileName: 'webhook-verify.sh',
      install: 'curl -X POST https://api.eternitytechsoft.com/v1/webhooks',
      code: `curl -X POST https://api.eternitytechsoft.com/v1/webhooks \\
  -H "Authorization: Bearer et_live_94827103" \\
  -H "Content-Type: application/json" \\
  -d '{
    "endpoint": "https://api.yourcompany.com/webhooks/eternity",
    "events": [
      "ksign.document.sealed",
      "geomeridian.geofence.breach",
      "sprint.telemetry.ping"
    ],
    "secret": "whsec_live_92048592"
  }'`,
      response: `{
  "webhookId": "whk_09841284",
  "endpoint": "https://api.yourcompany.com/webhooks/eternity",
  "activeEvents": [
    "ksign.document.sealed",
    "geomeridian.geofence.breach",
    "sprint.telemetry.ping"
  ],
  "verifiedHmac": true,
  "healthy": true
}`,
    },
  };

  const current = snippets[selectedSnippet];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="developer" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-amber-400">
            <FileCode2 className="w-3.5 h-3.5" />
            Developer-First Architecture
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Built for Engineers, by <span className="text-gradient-cyan">Engineers</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Clean APIs, type-safe SDKs, and zero-compromise documentation. 
            Integrate our platforms into your tech stack in minutes, not months.
          </p>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedSnippet('ksign')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedSnippet === 'ksign'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>TypeScript (K-Sign SDK)</span>
            </button>
            <button
              onClick={() => setSelectedSnippet('geomeridian')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedSnippet === 'geomeridian'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>Python (Geomeridian GIS)</span>
            </button>
            <button
              onClick={() => setSelectedSnippet('webhook')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                selectedSnippet === 'webhook'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>cURL (Webhook Stream)</span>
            </button>
          </div>
        </div>

        {/* Code Terminal Box */}
        <div className="developer-terminal-box rounded-3xl bg-[#0c101b] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Code Editor (7 cols) */}
          <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    {current.fileName}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Snippet'}</span>
                </button>
              </div>

              {/* Install Command Banner */}
              <div className="px-5 py-2.5 bg-slate-900/50 border-b border-slate-800/80 font-mono text-xs text-slate-400 flex items-center justify-between">
                <span>$ {current.install}</span>
                <span className="text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">SDK READY</span>
              </div>

              {/* Code Contents */}
              <div className="p-6 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed whitespace-pre selection:bg-cyan-500/30">
                {current.code}
              </div>
            </div>

            <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>SDK: v1.4.0 (Latest Release)</span>
              <span>100% Type-Safe TypeScript Definitions</span>
            </div>
          </div>

          {/* Right Column: Live Simulated Response Payload (5 cols) */}
          <div className="lg:col-span-5 bg-black/50 flex flex-col justify-between">
            <div>
              {/* Output Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  Live API Telemetry Response
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  HTTP 200 OK
                </span>
              </div>

              {/* Response JSON */}
              <div className="p-6 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed whitespace-pre">
                {current.response}
              </div>
            </div>

            <div className="p-6 bg-slate-950/80 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>EXECUTION LATENCY:</span>
                <span className="text-emerald-400 font-bold">&lt; 50ms</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                All API endpoints are served via globally distributed edge workers with automated rate limiting and enterprise encryption.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
