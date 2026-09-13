export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Who owns the Intellectual Property (IP) and source code for custom projects?',
    answer:
      'You own 100% of the Intellectual Property from day one. All repositories, commit histories, infrastructure definitions, design assets, and credentials belong entirely to your organization upon milestone completion. We provide automated CI/CD handovers with clean documentation.',
  },
  {
    question: 'Can K-Sign, K-Code, and Geomeridian be self-hosted in our own private cloud?',
    answer:
      'All proprietary platforms (K-Sign, K-Code, Geomeridian) are architected from day one for containerized Docker and Kubernetes deployment. As they are currently in active laboratory development, I am piloting containerized prototypes with select enterprise design partners. Contact me directly for private alpha access.',
  },
  {
    question: 'How do you protect confidentiality and sensitive business logic?',
    answer:
      'We execute mutual enterprise Non-Disclosure Agreements (NDAs) before discussing project specifics. All code is stored in enterprise-grade private repositories, and our engineering environments adhere to strict zero-trust security access controls, encrypted keystores, and compartmentalized databases.',
  },
  {
    question: 'Who will actually work on my project? Are there junior developer handoffs?',
    answer:
      'Zero junior handoffs. Eternity Techsoft is a founder-led engineering studio. When you engage Eternity Techsoft, you work directly 1-on-1 with me—an experienced principal full-stack architect who personally designs the architecture, writes the code, and manages production deployments. There are no account managers, no layers of bureaucracy, and no outsourced junior developers learning on your dime.',
  },
  {
    question: 'What happens after our software is deployed to production?',
    answer:
      'We don’t abandon you at launch. Every custom delivery includes a 30-day comprehensive warranty covering zero-cost bug resolution, production telemetry monitoring, and optional long-term 24/7 SLA maintenance agreements.',
  },
  {
    question: 'How do you prevent the technical debt common in agency work?',
    answer:
      'I treat client codebases with the exact same engineering rigor as my proprietary lab platforms. That means 100% TypeScript type-safety, automated linting pipelines, strict unit and integration testing gates, modular microservices architecture, and clean decoupled components.',
  },
  {
    question: 'How does K-Code differ from mainstream AI coding tools like Cursor or Devin?',
    answer:
      'Mainstream coding assistants edit code directly in the developer’s active workspace, risk runaway token spend loops, and frequently hallucinate passing tests by rewriting test assertions. K-Code is an enterprise verification harness: it isolates all candidate patches in disposable git worktrees, requires independent baseline proof that a bug genuinely failed before touching code, meters tokens via hard reservation ledgers, and logs durable receipts in SQLite to survive crashes.',
  },
];
