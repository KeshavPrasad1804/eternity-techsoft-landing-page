export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: 'In Active Development' | 'Beta' | 'Coming Soon' | 'Live';
  badgeColor: string;
  description: string;
  longDescription: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  techPills: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'k-sign',
    name: 'K-Sign',
    tagline: 'Military-Grade Digital Signature & Cryptographic Document Workflow Suite',
    category: 'Trust & Contract Infrastructure',
    status: 'In Active Development',
    badgeColor: 'cyan',
    description:
      'A legally binding, tamper-evident digital signature platform engineered for enterprises, legal teams, and high-velocity digital workflows.',
    longDescription:
      'K-Sign eliminates the friction of physical document execution while surpassing conventional e-signature security. Built on asynchronous cryptographic hashing, multi-party orchestration, and tamper-evident audit chains, K-Sign enables seamless contract execution with irrefutable legal verifiability.',
    features: [
      {
        title: 'Cryptographic Integrity',
        description: 'Every signature is bound with SHA-256 / Ed25519 hashing, guaranteeing zero-tampering detection and immutable audit logs.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Multi-Signer Orchestration',
        description: 'Sequential, parallel, and conditional signing routes with automatic reminders, escalation trees, and signer verification.',
        icon: 'Users',
      },
      {
        title: 'E-SIGN & eIDAS Compliance',
        description: 'Engineered in strict accordance with global legal frameworks for electronic signatures, certificates, and record retention.',
        icon: 'FileCheck2',
      },
      {
        title: 'Developer APIs & Webhooks',
        description: 'RESTful endpoints and embedded JavaScript SDKs to embed high-performance signing workflows directly inside your web or mobile apps.',
        icon: 'Code2',
      },
      {
        title: 'Biometric & Dynamic Capture',
        description: 'High-fidelity signature canvas capturing velocity, stroke pressure, and coordinate vector data alongside typed typography styles.',
        icon: 'PenTool',
      },
      {
        title: 'Enterprise Audit Trail',
        description: 'Comprehensive forensic certificate containing signer IP, geolocation metadata, timestamp tokens, and hardware fingerprint.',
        icon: 'ScrollText',
      },
    ],
    metrics: [
      { label: 'Signing Latency', value: '< 2.4s' },
      { label: 'Verification Standard', value: 'SHA-256' },
      { label: 'Legal Architecture', value: 'E-SIGN / UETA Design' },
      { label: 'Target Uptime SLA', value: '99.99%' },
    ],
    techPills: ['TypeScript', 'Node.js', 'Next.js', 'Web Crypto API', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'geomeridian',
    name: 'Geomeridian',
    tagline: 'High-Precision Geospatial Intelligence & Real-Time Spatial Analytics Engine',
    category: 'Spatial Computing & Location AI',
    status: 'In Active Development',
    badgeColor: 'violet',
    description:
      'A spatial data platform engineered for dynamic geofencing, real-time telemetry streaming, terrain modeling, and enterprise geospatial decision-making.',
    longDescription:
      'Geomeridian converts massive geospatial datasets into real-time operational insights. Whether orchestrating autonomous drone corridors, tracking supply chain fleets, calculating cadastral boundaries, or mapping environmental impact zones, Geomeridian delivers sub-meter accuracy with ultra-low vector rendering latency.',
    features: [
      {
        title: 'High-Throughput Vector Tile Engine',
        description: 'WebGL and GPU-accelerated spatial rendering capable of displaying millions of polygon coordinates at 60 FPS.',
        icon: 'Globe2',
      },
      {
        title: 'Dynamic Geofencing & Buffers',
        description: 'Real-time entry/exit event triggers, complex polygon spatial containment, and instantaneous distance-matrix calculations.',
        icon: 'Maximize2',
      },
      {
        title: 'Telemetry & IoT Streaming',
        description: 'Ingests live GPS, drone telemetry, and maritime/automotive sensor data with microsecond timestamp correlation.',
        icon: 'Radio',
      },
      {
        title: 'Multi-Layer Spatial Stack',
        description: 'Seamless blending of high-resolution satellite imagery, digital elevation models (DEM), thermal heatmaps, and infrastructure layers.',
        icon: 'Layers',
      },
      {
        title: 'GIS File Standard Ingestion',
        description: 'Zero-conversion native processing of GeoJSON, Shapefiles, KML, GeoTIFF, and PostGIS spatial queries.',
        icon: 'Database',
      },
      {
        title: 'Spatial Intelligence & Clustering',
        description: 'DBSCAN spatial clustering, Voronoi tessellations, and topological route optimizations for modern logistics and planning.',
        icon: 'Cpu',
      },
    ],
    metrics: [
      { label: 'Coordinate Precision', value: 'Sub-meter' },
      { label: 'Tile Render Latency', value: '< 16ms' },
      { label: 'Spatial Indexing', value: 'H3 / R-Tree' },
      { label: 'Data Ingestion Speed', value: '50k pts/sec' },
    ],
    techPills: ['WebGPU / WebGL', 'PostGIS', 'Golang', 'Next.js', 'Mapbox GL / Deck.gl', 'Kafka', 'Python'],
  },
  {
    id: 'k-code',
    name: 'K-Code',
    tagline: 'Deterministic Coding-Agent Harness with Isolated Worktrees & Verifiable Proof',
    category: 'Autonomous Agent Infrastructure & Verified Code Repair',
    status: 'In Active Development',
    badgeColor: 'emerald',
    description:
      'A resilient coding-agent harness engineered to inspect, patch, and test repositories with isolated git worktrees, reproducible baseline evidence, crash recovery, and token budget metering.',
    longDescription:
      'K-Code transforms generative coding from unverified guesswork into deterministic, auditable software engineering. Unlike black-box agent tools that corrupt working trees or hallucinate test passes, K-Code runs agents in isolated git worktrees, proves baseline failure reproduction before touching code, persists durable execution receipts in SQLite, and enforces hard token spend budgets.',
    features: [
      {
        title: 'Isolated Git Worktrees',
        description: 'Candidate patches develop and execute in disposable git worktrees. Your local branch and dirty working tree remain 100% untouched.',
        icon: 'GitBranch',
      },
      {
        title: 'Independent Baseline Evidence',
        description: 'Proves the target test genuinely fails on clean source code before any LLM intervention, permanently eliminating false-positive fixes.',
        icon: 'ShieldAlert',
      },
      {
        title: 'Crash-Resilient SQLite Journal',
        description: 'State machine persists streaming receipts to SQLite. Kill or resume agent processes mid-run without re-spending LLM tokens or re-applying patches.',
        icon: 'Database',
      },
      {
        title: 'Deterministic Cost Accounting',
        description: 'Token reservation ledgers with child descendant budget caps stop infinite agent loops and runaway cloud API billing spikes.',
        icon: 'Coins',
      },
      {
        title: 'Multi-Backend & Local Ollama',
        description: 'Run air-gapped on local Ollama models or supervise frontier reasoning models (Claude 3.7, GPT-4o) with strict tool boundaries.',
        icon: 'Terminal',
      },
      {
        title: 'Final Acceptance Gate',
        description: 'Patches are admitted only after automated independent re-execution against unmodified test suites with tamper-evident audit journals.',
        icon: 'CheckCircle2',
      },
    ],
    metrics: [
      { label: 'Baseline Verification', value: '100% Proven' },
      { label: 'Worktree Isolation', value: 'Zero Repo Pollution' },
      { label: 'Recovery Overhead', value: '< 50ms Resume' },
      { label: 'Budget Enforcement', value: 'Hard Ceiling' },
    ],
    techPills: ['Node.js', 'TypeScript', 'Git Worktrees', 'SQLite', 'Ollama', 'Model Context Protocol (MCP)', 'Agent Client Protocol (ACP)'],
  },
];
