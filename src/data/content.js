// All visible copy for 1404 Technologies landing page.
// Source of truth: docs/brochure.md
// Rule: every claim/metric/quote here must be backed by the brochure.

export const nav = {
  brand: "1404 Technologies",
  // Order matches the page's actual scroll order so the active link tracks correctly.
  links: [
    { label: "Services", href: "#services" },
    { label: "OmniServe", href: "#omniserve" },
    { label: "Why us", href: "#why-us" },
    { label: "Case studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  tag: "Global BPO & Digital Operations",
  // Specific value prop pulled to the front, not generic "scale".
  headline: "Cut operations costs up to 70%",
  headlineAccent: "without cutting standards.",
  subheadline:
    "Managed IT, cybersecurity, call centre, and software services for U.S. and UK enterprises — delivered from London, the U.S., and Nigeria. HIPAA, GDPR, ISO 27001, and SOC 2 Type II compliant.",
  cta: "Book a free consultation",
  ctaSecondary: "See our services",
  // Compliance badges live in hero only — the single home for these credentials.
  badges: [
    { label: "HIPAA", accent: "#10b981" },
    { label: "GDPR", accent: "#3b82f6" },
    { label: "ISO 27001", accent: "#f59e0b" },
    { label: "SOC 2 Type II", accent: "#6366f1" },
  ],
};

// Trust strip beneath the hero — slim band, light bg.
// Logos are placeholders; user will provide real assets.
export const trust = {
  clientsLabel: "Trusted by businesses across the U.S., UK & Africa",
  // Keep empty until real client logos are provided. Component shows a tasteful skeleton.
  clientLogos: [],
  partnersLabel: "Built on the platforms you already trust",
  // Names are real (from brochure); image paths are placeholders the user will fill in.
  partners: [
    { name: "Microsoft", src: "/logos/partners/microsoft.svg" },
    { name: "AWS", src: "/logos/partners/aws.svg" },
    { name: "Cisco", src: "/logos/partners/cisco.svg" },
    { name: "Palo Alto Networks", src: "/logos/partners/palo-alto.svg" },
    { name: "Salesforce", src: "/logos/partners/salesforce.svg" },
    { name: "Xero", src: "/logos/partners/xero.svg" },
    { name: "QuickBooks", src: "/logos/partners/quickbooks.svg" },
  ],
};

// Capabilities — what makes 1404 different. Replaces the old Features + WhyChooseUs duplication.
// No raw stat numbers (60%, 70%, 99.5%, 24/7) live here — those have a single home in Services.
export const whatSetsUsApart = {
  tag: "Why 1404 Technologies",
  title: "An operating model built for global, regulated work",
  subtitle:
    "Six principles behind every engagement — from kickoff to scale.",
  items: [
    {
      iconName: "building",
      title: "Global delivery model",
      description:
        "HQ in London with subsidiaries in the U.S. and Nigeria. U.S./UK client liaisons backed by globally-trained, locally-operating teams.",
    },
    {
      iconName: "shield",
      title: "Zero Trust security",
      description:
        "Zero Trust architecture across every engagement — embedded into delivery, not bolted on at audit time.",
    },
    {
      iconName: "bolt",
      title: "AI-powered monitoring",
      description:
        "Proactive, AI-driven IT monitoring that resolves issues before they reach your end users.",
    },
    {
      iconName: "card",
      title: "Compliance, embedded",
      description:
        "HIPAA, GDPR, ISO 27001, and SOC 2 Type II controls live in our delivery process — not bolted on at audit time.",
    },
    {
      iconName: "link",
      title: "Certified expertise",
      description:
        "Microsoft & AWS certified engineers. Compatible with Cisco, Palo Alto, and the rest of your enterprise stack.",
    },
    {
      iconName: "chart",
      title: "Follow-the-sun coverage",
      description:
        "Three regions, one team — coverage handed off across time zones so issues are addressed while you sleep.",
    },
  ],
};

// Services — the single home for service-specific stats (60%, 70%, 99.5%, 24/7).
export const services = [
  {
    number: "01",
    title: "Managed IT Services",
    description:
      "24/7 support, infrastructure, backup and disaster recovery — all under a single SLA.",
    highlights: [
      "Help Desk & End-user support",
      "IT Infrastructure Management",
      "Backup & Disaster Recovery",
    ],
    differentiators: [
      "Microsoft & AWS certified engineers",
      "AI-powered proactive monitoring",
      "Custom SLAs",
      "99.5% resolution rate",
    ],
    benefit: "Save up to 60% on IT operations",
  },
  {
    number: "02",
    title: "Managed Cybersecurity",
    description:
      "Continuous, proactive protection embedded into your IT strategy — not bolted on after the fact.",
    highlights: [
      "Managed SOC (24/7)",
      "Endpoint 360 Security",
      "Extended Detection & Response (XDR)",
      "Vulnerability & Penetration Testing",
    ],
    differentiators: [
      "Zero Trust architecture",
      "HIPAA, PCI-DSS, GDPR, SOC 2 built-in",
      "Real-time threat intelligence",
    ],
    benefit: "Lower cyber insurance premiums",
  },
  {
    number: "03",
    title: "Call Centre Outsourcing",
    description:
      "UK/U.S.-trained agents delivering omnichannel support — voice, email, chat, and social media.",
    highlights: [
      "Virtual & Inbound Call Centre",
      "Overflow Call Handling",
      "BPO Call Centre",
    ],
    differentiators: [
      "Omnichannel support",
      "Real-time KPI dashboards",
      "Cultural alignment with UK/U.S. expectations",
    ],
    benefit: "Up to 70% cost reduction",
  },
  {
    number: "04",
    title: "Enterprise Software Development",
    description:
      "Custom application development, solution design, support, and maintenance built around your needs.",
    highlights: [
      "Custom application development",
      "Solution recommendations",
      "Ongoing support & maintenance",
    ],
    // Brochure has no differentiator bullets for Enterprise Software Dev — only a
    // paragraph. These three are paraphrased directly from that paragraph + the OmniServe note.
    differentiators: [
      "Tailored to your specific needs",
      "Solution design, build, support & maintenance",
      "OmniServe option for off-the-shelf delivery",
    ],
    benefit: "Or skip custom — start with OmniServe",
  },
];

// OmniServe — restructured around brochure content. Banner first, then capabilities, then benefits.
export const omniServe = {
  tag: "Proprietary Platform",
  meetHeadline: "Meet OmniServe",
  meetSubhead:
    "A unified operations platform that eliminates software sprawl. Connect your project management, CRM, accounting, and compliance tools in one intelligent hub.",
  headline: "One Platform.",
  headlineAccent: "Every Tool, Connected.",
  description:
    "OmniServe is 1404's own SaaS platform — purpose-built for UK and U.S. SMEs that are tired of juggling tools. It automates workflows, gives you real-time cross-system dashboards, and keeps you audit-ready by default.",
  url: "https://www.myomniserve.com",
  cta: "Explore OmniServe",
  ctaSecondary: "See pricing",
  // Capabilities pulled directly from the brochure feature list.
  features: [
    {
      iconName: "link",
      title: "Universal integration layer",
      description:
        "Xero, QuickBooks, Salesforce, Trello, MS Project, and 50+ more — connected through one layer.",
    },
    {
      iconName: "bolt",
      title: "No-code workflow automation",
      description:
        "Trigger actions across your tools without writing a single line of code.",
    },
    {
      iconName: "chart",
      title: "Unified dashboards",
      description:
        "Operational and financial data in one real-time view — no more five-tab juggling.",
    },
    {
      iconName: "card",
      title: "SaaS management",
      description:
        "Discover and optimize subscriptions. See where your software spend is going — and reclaim it.",
    },
    {
      iconName: "shield",
      title: "Compliance engine",
      description:
        "Audit trails and built-in support for MTD, HIPAA, and GDPR. Audit-ready by default.",
    },
    {
      iconName: "building",
      title: "Industry modules",
      description:
        "Purpose-built modules for Construction, Logistics, and Healthcare — out of the box.",
    },
  ],
  // Real client benefits from the brochure.
  benefits: [
    "Save up to 5 hours per user per week",
    "Reduce SaaS waste by identifying unused licenses",
    "Achieve audit-ready compliance automatically",
    "Connect field teams to office systems in real time",
  ],
};

export const pricing = [
  {
    service: "Managed IT",
    model: "Per user / month",
    rate: "$100 – $150",
  },
  {
    service: "Managed Cybersecurity",
    model: "Per endpoint / month",
    rate: "$15 – $35",
  },
  {
    service: "Call Centre — Inbound",
    model: "Per minute",
    rate: "$0.35 – $0.75",
  },
  {
    service: "Call Centre — Dedicated",
    model: "Per agent / hour",
    rate: "$8 – $12",
  },
  {
    service: "OmniServe Platform",
    url: "https://www.myomniserve.com",
    model: "Per user / month",
    rate: "£99 – £599",
    currencyNote: "GBP",
    highlight: true,
  },
  {
    service: "Custom SLA Package",
    model: "Flat monthly rate",
    rate: null,
  },
  {
    service: "Custom Software",
    model: "Project-based",
    rate: null,
  },
];

export const discounts = [
  "10% off for contracts over 12 months",
  "Volume discounts for 50+ users or endpoints (Managed IT / Cybersecurity)",
  "Bundle: Add OmniServe to any BPO service for 15% off both",
];

export const certifications = ["HIPAA", "GDPR", "ISO 27001", "SOC 2 Type II"];

// Single real testimonial + two empty slots the user will fill later.
// Component renders the empty slots as quiet placeholders so the section has presence.
export const testimonials = [
  {
    quote:
      "The 1404 Technologies team is a lifesaver. It was easy working with Olu and his team. And OmniServe has completely changed how we manage our operations — no more juggling five different dashboards.",
    author: "Martin",
    role: "CEO, Reliance Health UK",
  },
  { placeholder: true },
  { placeholder: true },
];

// Case studies — restored Solution field from brochure, locations corrected.
// FinTech location was wrong on the live site (said United States) — brochure says Lagos, Nigeria.
export const caseStudies = [
  {
    client: "Healthcare Provider",
    location: "United Kingdom",
    industry: "Healthcare",
    challenge:
      "Frequent phishing attacks and GDPR compliance gaps across a distributed clinical team.",
    solution:
      "24/7 SOC monitoring, endpoint protection, and GDPR audit support — backed by OmniServe for compliance automation.",
    impact: [
      { metric: "85% reduction in phishing incidents", positive: true },
      { metric: "Zero non-compliance flags in HIPAA audit", positive: true },
      { metric: "$250K annual savings vs UK staffing", positive: true },
      { metric: "70% reduction in compliance reporting time", positive: true },
    ],
  },
  {
    client: "Retail Chain",
    location: "Lagos, Nigeria",
    industry: "Retail",
    challenge: "Support team overwhelmed during seasonal peaks, dragging customer satisfaction down.",
    solution:
      "20 U.S.-trained Nigerian agents delivering omnichannel support across voice, email, and chat.",
    impact: [
      { metric: "35% increase in Net Promoter Score", positive: true },
      { metric: "42% improvement in First Contact Resolution", positive: true },
      { metric: "60% cost savings vs domestic call centres", positive: true },
    ],
  },
  {
    client: "Africa FinTech Startup",
    location: "Lagos, Nigeria",
    industry: "FinTech",
    challenge: "Scaling IT support from 5 to 50 users in 90 days.",
    solution:
      "Hybrid support team, cloud migration, and managed helpdesk services rolled out in parallel.",
    impact: [
      { metric: "Fully scaled in 6 weeks", positive: true },
      { metric: "99.9% uptime achieved", positive: true },
      { metric: "58% reduction in IT spend", positive: true },
    ],
  },
];

export const contactServiceOptions = [
  "Managed IT Services",
  "Managed Cybersecurity",
  "Call Centre Outsourcing",
  "Enterprise Software Development",
  "OmniServe Platform",
  "Custom SLA Package",
];

export const contact = {
  website: "www.1404technologies.com",
  websiteUrl: "https://www.1404technologies.com",
  email: "info@1404technologies.com",
  // Phones grouped with their region so the contact section can pair them with the office addresses.
  offices: [
    {
      label: "Global HQ",
      region: "UK",
      address: "Suite 5711 Unit 3A, 34–35 Hatton Garden, Holborn, London EC1N 8DX",
      phone: "+44 7449 723948",
    },
    {
      label: "U.S. Office",
      region: "U.S.",
      address: "Office 85 Suite 101-B, 254 Chapman Road, Newark, Delaware 19702",
      phone: "+1 (817) 601-6860",
    },
    {
      label: "Nigeria Office",
      region: "NG",
      address: "10, Adeleke Street, Ikeja, Lagos, Nigeria",
      phone: "+234 707 920 7638",
    },
  ],
};

export const social = {
  linkedin: "https://www.linkedin.com/company/1404technologies",
};

export const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "OmniServe", href: "#omniserve" },
  { label: "Why us", href: "#why-us" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// UK Ltd companies must show registered name, number, and registered office on commercial sites.
// Placeholders — user to fill in once registration details are confirmed.
export const company = {
  registeredName: "1404 Technologies Limited",
  registeredNumber: "", // e.g. "12345678"
  registeredOffice: "Suite 5711 Unit 3A, 34–35 Hatton Garden, Holborn, London EC1N 8DX",
  vatNumber: "", // optional
};
