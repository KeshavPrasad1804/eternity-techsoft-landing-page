import React from 'react';
import { COMPANY_INFO } from '@/data/company';
import { FAQS } from '@/data/faqs';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://eternitytechsoft.com/#organization',
        name: COMPANY_INFO.name,
        legalName: 'Eternity Techsoft',
        url: 'https://eternitytechsoft.com',
        logo: 'https://eternitytechsoft.com/icon.svg',
        description: COMPANY_INFO.shortDescription,
        email: COMPANY_INFO.email,
        sameAs: [
          COMPANY_INFO.socials.github,
          COMPANY_INFO.socials.linkedin,
          COMPANY_INFO.socials.twitter,
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: COMPANY_INFO.email,
          contactType: 'technical sales and engineering intake',
          availableLanguage: ['English'],
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://eternitytechsoft.com/#service',
        name: 'Eternity Techsoft Software Engineering Services',
        url: 'https://eternitytechsoft.com/#services',
        priceRange: '$$$$',
        provider: {
          '@id': 'https://eternitytechsoft.com/#organization',
        },
        description:
          'High-impact software engineering services: full-cycle product engineering, distributed cloud architecture, AI automation, cross-platform mobile apps, and zero-trust cybersecurity.',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Engineering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full-Cycle Product Engineering',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cloud Architecture & DevOps SRE',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Systems & Intelligent Automation',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cross-Platform Mobile Development',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cybersecurity & Compliance Hardening',
              },
            },
          ],
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://eternitytechsoft.com/#ksign',
        name: 'K-Sign',
        operatingSystem: 'Web, Cloud, Docker, Kubernetes',
        applicationCategory: 'BusinessApplication',
        description:
          'Cryptographic digital trust and e-signature suite with SHA-256 tamper-evident seals, zero per-envelope surcharges, and on-premise air-gapped deployment.',
        url: 'https://eternitytechsoft.com/#ksign',
        author: {
          '@id': 'https://eternitytechsoft.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          description: 'Early Access & Private Beta Program',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://eternitytechsoft.com/#kcode',
        name: 'K-Code',
        operatingSystem: 'Node.js, Linux, macOS, Docker',
        applicationCategory: 'DeveloperApplication',
        description:
          'Autonomous coding-agent harness with isolated git worktrees, reproducible baseline failure evidence, SQLite crash recovery, and token spend budget metering.',
        url: 'https://eternitytechsoft.com/#kcode',
        author: {
          '@id': 'https://eternitytechsoft.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          description: 'Developer Preview & Open Architecture',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://eternitytechsoft.com/#geomeridian',
        name: 'Geomeridian',
        operatingSystem: 'Web, WebGPU, Cloud, Kubernetes',
        applicationCategory: 'GISApplication',
        description:
          'Real-time geospatial intelligence and vector tile engine rendering complex telemetry maps at 60 FPS with H3 spatial indexing.',
        url: 'https://eternitytechsoft.com/#geomeridian',
        author: {
          '@id': 'https://eternitytechsoft.com/#organization',
        },
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          description: 'Early Access & Private Beta Program',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://eternitytechsoft.com/#faq',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
