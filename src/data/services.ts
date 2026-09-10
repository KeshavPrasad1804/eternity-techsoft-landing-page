export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  icon: string;
  gradient: string;
}

export const SERVICES: Service[] = [
  {
    id: 'product-engineering',
    title: 'Full-Cycle Product Engineering',
    tagline: 'From Concept to Hyper-Scale SaaS Architecture',
    description:
      'We partner with ambitious founders and enterprise leaders to design, build, and deploy production-grade software platforms with zero technical debt.',
    deliverables: [
      'Greenfield MVP & enterprise platform development',
      'Microservices & distributed system architecture',
      'High-throughput backend systems & GraphQL/REST APIs',
      'Real-time WebSocket & event-driven processing',
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Go', 'Python'],
    icon: 'Rocket',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    tagline: 'Resilient, Cost-Optimized & Auto-Scaling Infrastructure',
    description:
      'Automate your deployment lifecycle with bulletproof CI/CD pipelines, container orchestration, multi-cloud resilience, and automated telemetry.',
    deliverables: [
      'Kubernetes cluster orchestration & Helm templating',
      'Infrastructure as Code (Terraform & Pulumi)',
      'Automated zero-downtime CI/CD deployment pipelines',
      'Cloud cost optimization & multi-region failover design',
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Terraform', 'GitHub Actions'],
    icon: 'CloudLightning',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
  },
  {
    id: 'ai-automation',
    title: 'AI Systems & Intelligent Automation',
    tagline: 'Autonomous Agents, Custom Models & RAG Architectures',
    description:
      'Supercharge your operational workflows by embedding generative AI, autonomous agent networks, contextual vector databases, and predictive analytics.',
    deliverables: [
      'Custom LLM fine-tuning & domain-specific agents',
      'High-accuracy Retrieval-Augmented Generation (RAG)',
      'Intelligent document extraction & OCR workflows',
      'Predictive analytics & automated decision pipelines',
    ],
    technologies: ['OpenAI / Gemini', 'LangChain', 'LlamaIndex', 'Pinecone', 'Python', 'FastAPI'],
    icon: 'Brain',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Development',
    tagline: 'Native Performance with Fluid 120Hz User Experiences',
    description:
      'Craft beautiful, buttery-smooth mobile applications for iOS and Android with shared business logic, offline-first sync, and native sensor integration.',
    deliverables: [
      'High-performance Flutter & React Native development',
      'Offline-first synchronization & local encrypted caching',
      'Biometric authentication & native hardware interop',
      'App Store & Google Play automated release pipelines',
    ],
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'SQLite'],
    icon: 'Smartphone',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'ui-ux-design-systems',
    title: 'Enterprise UI/UX & Design Systems',
    tagline: 'World-Class Interfaces Engineered for Conversion & Usability',
    description:
      'Bridge the gap between vision and production code with pixel-perfect design systems, accessible interaction patterns, and conversion-focused UX.',
    deliverables: [
      'Design tokens & reusable component library creation',
      'Complex enterprise dashboard & data visualization UX',
      'WCAG 2.1 AA accessibility auditing & compliance',
      'Interactive prototyping & usability user-testing',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Framer'],
    icon: 'Palette',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'security-compliance',
    title: 'Cybersecurity & Compliance Engineering',
    tagline: 'Zero-Trust Security, Cryptographic Guardrails & Audit Readiness',
    description:
      'Defend your digital assets and customer data with defense-in-depth architecture, automated penetration safeguards, and enterprise regulatory compliance.',
    deliverables: [
      'Zero-Trust network architecture & mTLS configuration',
      'Cryptographic data protection at rest & in transit',
      'SOC2, HIPAA, and GDPR technical compliance mapping',
      'Static & dynamic application security testing (SAST/DAST)',
    ],
    technologies: ['Vault', 'OpenID Connect', 'WireGuard', 'SonarQube', 'KMS'],
    icon: 'ShieldAlert',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
  },
];
