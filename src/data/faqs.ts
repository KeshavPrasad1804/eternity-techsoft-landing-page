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
