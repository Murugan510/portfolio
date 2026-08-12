export const SITE = {
  name: "Murugan Ramakrishnan",
  title: "Senior Frontend Engineer",
  location: "Bengaluru, India",
  experience: "5+ Years",
  email: "murugan.ramakrishnan.tech@gmail.com",
  phone: "+91 8073114075",
  linkedin: "https://www.linkedin.com/in/murugan-ramakrishnan-897472218/",
  linkedinHandle: "murugan-ramakrishnan",
  github: "https://github.com/Murugan510",
  githubHandle: "Murugan510",
  url: "https://muruganramakrishnan.dev/",
  resumePath: "/assets/MG_Frontend_Engineer.pdf",
  resumeFilename: "MG_Frontend_Engineer.pdf",
  tagline:
    "Frontend engineer with 5+ years of professional experience, including 4+ years building production consumer and internal applications across React.js, Next.js and React Native in a shared TypeScript monorepo.",
  typingPhrases: ["React.js", "Next.js", "React Native", "TypeScript"],
} as const;

export const SUMMARY =
  "Frontend engineer with 5+ years of professional experience, including 4+ years building production consumer and internal applications across React.js, Next.js and React Native in a shared TypeScript monorepo. Experienced in frontend architecture, performance engineering, offline-first mobile experiences, SSR/SEO, payments, media, internationalization and analytics-driven product development. Built and shipped features for Ninja Kisan, an agri-tech platform with 1M+ downloads and 600K MAU, including experiences delivered across 11 Indian languages.";

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

export const STATS = [
  { icon: "fa-briefcase", target: 5, suffix: "+", decimals: 0, label: "Years Experience" },
  { icon: "fa-users", target: 600, suffix: "K+", decimals: 0, label: "Monthly Active Users" },
  { icon: "fa-download", target: 1, suffix: "M+", decimals: 0, label: "App Downloads" },
  { icon: "fa-language", target: 11, suffix: "", decimals: 0, label: "Languages Shipped" },
] as const;

export const ABOUT_HIGHLIGHTS = [
  "React.js, Next.js & React Native in a shared TypeScript monorepo",
  "Frontend architecture, performance engineering & offline-first mobile",
  "SSR/SEO, payments, media, i18n & analytics-driven product development",
  "Ninja Kisan — 1M+ downloads, 600K MAU, 11 Indian languages",
] as const;

export const ENGINEERING_PRINCIPLES = [
  {
    icon: "fa-sitemap",
    title: "Frontend architecture",
    description: "Shared TypeScript monorepo patterns across React.js, Next.js and React Native.",
  },
  {
    icon: "fa-gauge-high",
    title: "Performance engineering",
    description: "FlashList, caching, and low-end device optimization for real production traffic.",
  },
  {
    icon: "fa-wifi",
    title: "Offline-first mobile",
    description: "MMKV-persisted Zustand stores for intermittent connectivity on rural networks.",
  },
  {
    icon: "fa-chart-line",
    title: "Analytics-driven shipping",
    description: "Instrumented product analytics and SEO so features ship with measurable impact.",
  },
] as const;

export const CAREER_MILESTONES = [
  { year: "2021", label: "Masalabox Food Network — Frontend Developer (Angular, Ionic)" },
  { year: "2022", label: "Joined Ninjacart — React.js, Next.js & React Native" },
  { year: "2026", label: "SDE 1 — Ninja Kisan at 1M+ downloads & 600K MAU" },
] as const;

export const EDUCATION = {
  degree: "B.Sc. Computer Science",
  school: "Bangalore University",
} as const;

export const EXPERIENCE = [
  {
    role: "SDE 1",
    company: "Ninjacart (63Ideas Infolabs Pvt. Ltd.)",
    logo: "/assets/logos/ninjacart.svg",
    date: "May 2022 – Jun 2026",
    badges: ["React.js", "Next.js", "React Native"],
    metrics: ["1M+ downloads", "600K MAU", "10M+ daily video views"],
    highlights: [
      "Ninja Kisan — agri-tech consumer platform: pnpm/Turborepo monorepo (React Native + Next.js, 20+ shared packages, ~89% shared code); **1M+ downloads**, **600K MAU**, **10M+ daily video views**.",
      "Owned frontend features end to end — from requirement analysis and technical design through implementation, API integration, testing, deployment and production debugging — across consumer and internal platforms.",
      "Built and maintained reusable React.js component architecture — functional components, custom hooks, Context API and shared UI primitives — across multiple product surfaces.",
      "Architected server-rendered category, news and QnA content routes on Next.js 14 App Router (**100+ routes**) using React Server Components, with parallel/intercepted routes for modal URLs.",
      "Implemented schema.org JSON-LD structured data and canonical/hreflang metadata across **11 locales**, enabling multilingual SEO indexing for content and QnA pages.",
      "Engineered a Next.js Route Handler (BFF) that server-side scrapes third-party article metadata, removing client-side CORS constraints from the news feed.",
      "Delivered one shared React component layer across web and native via Solito for unified cross-platform routing, and tuned per-route fetch caching (no-store/force-cache + tag revalidation).",
      "Shipped voice search for low-literacy users — locale-aware speech-to-text across **11 Indian languages** with microphone permission gating, on both React Native and web.",
      "Designed the mobile navigation shell — 7-tab bottom navigation over Expo Router file-based routing (~80 routes) with platform-specific tab bar rendering.",
      "Developed a cross-platform audio player for vernacular news with separate native/web playback engines behind one interface, including position polling, lifecycle cleanup and listen-through analytics.",
      "Drove viewability-based impression tracking and video autoplay (>50% visibility threshold) across feed, shorts and carousel surfaces, powering ad impression measurement.",
      "Built resumable large-file video upload — PeerTube resumable-session protocol (chunked reads via RNFS, HTTP 308 continuation) in an Android foreground service, with progress persisted in MMKV.",
      "Migrated high-volume feed/list surfaces to Shopify FlashList; integrated Truecaller one-tap authentication into the login flow with backend-config-driven gating.",
      "Led the cart-to-payment checkout flow end to end — Razorpay integration, order creation, payment status handling and transaction reconciliation.",
      "Co-built a LiveKit-powered real-time chat feature for interactive product experiences alongside the tech lead.",
      "Implemented Firebase deep linking for cross-surface navigation and Crashlytics for production crash monitoring and stability triage.",
      "Primary contributor to the server-driven UI / adaptive card system that lets backend-controlled layouts and campaigns ship without app releases.",
      "Delivered a farmer-facing product in **11 Indian languages** with a platform-split i18n strategy — offline-capable bundled dictionaries on mobile, lazy-loaded namespaces on web.",
      "Launched the in-app advertising surface — banner, image and video ad cards across feed, QnA, profile and product pages — with click/impression instrumentation.",
      "Owned the crop-preference personalization flow end to end across 8 merged iterations, driving personalized feed and advisory content.",
      "Engineered an offline-first state layer — MMKV-persisted Zustand stores within a 24-store shared layer — for intermittent connectivity on low-end Android devices.",
      "Instrumented ~79 product analytics events into a centralized 562-event taxonomy, and established a 185-identifier testID convention across 102 components for Testsigma E2E in CI.",
      "Mentored **3+ engineers**, contributed to code reviews and technical discussions, and coordinated sprint planning and task allocation for a **10+ engineer** Agile team.",
      "Omni Channel — developed a React.js internal operations platform covering inventory, vehicle and driver management, and import/export tracking.",
      "Delivered sales order and purchase order workflows with integrated payment flows; built truck management with MapmyIndia API routing using React Query, Zustand and Context.",
    ],
  },
  {
    role: "Frontend Developer (Angular, Ionic)",
    company: "Masalabox Food Network",
    logo: "/assets/logos/masalabox.svg",
    date: "Apr 2021 – Apr 2022",
    badges: ["Angular", "Ionic", "TypeScript"],
    metrics: ["Web + delivery apps"],
    highlights: [
      "Developed the customer-facing Angular food ordering and subscription platform — chef discovery, menus, ordering, subscription selection and delivery-date management.",
      "Designed role-based chef dashboards for order management, payment tracking, order history and menu management.",
      "Built an Ionic delivery app for delivery teams to view assigned orders and update order status, with reusable responsive components (Angular, TypeScript, SCSS) integrating REST APIs across web and mobile.",
    ],
  },
] as const;

export type SkillBadge = {
  label: string;
  icon?: string;
  logo?: string;
  logoClass?: string;
  years?: string;
  proficiency?: "Expert" | "Advanced" | "Proficient";
};

export const SKILL_CATEGORIES: {
  title: string;
  icon: string;
  wide?: boolean;
  skills: SkillBadge[];
}[] = [
  {
    title: "Core",
    icon: "fa-code",
    skills: [
      { logo: "/assets/logos/tech/react.svg", label: "React.js" },
      { logo: "/assets/logos/tech/nextjs.svg", label: "Next.js 14", logoClass: "skill-badge-logo--nextjs" },
      { logo: "/assets/logos/tech/react.svg", label: "React Native" },
      { logo: "/assets/logos/tech/expo.svg", label: "Expo Router", logoClass: "skill-badge-logo--expo" },
      { logo: "/assets/logos/tech/typescript.svg", label: "TypeScript" },
      { icon: "fa-brands fa-js", label: "JavaScript ES6+" },
      { icon: "fa-solid fa-route", label: "Solito" },
    ],
  },
  {
    title: "State & Data",
    icon: "fa-database",
    skills: [
      { icon: "fa-solid fa-layer-group", label: "Zustand" },
      { icon: "fa-solid fa-database", label: "MMKV" },
      { icon: "fa-solid fa-arrows-rotate", label: "React Query" },
      { icon: "fa-solid fa-plug", label: "REST / Axios" },
      { icon: "fa-solid fa-file-code", label: "JSON Forms + AJV" },
    ],
  },
  {
    title: "UI & Performance",
    icon: "fa-palette",
    skills: [
      { icon: "fa-solid fa-paintbrush", label: "Tamagui" },
      { icon: "fa-solid fa-list", label: "FlashList" },
      { icon: "fa-solid fa-chart-simple", label: "ECharts" },
      { icon: "fa-solid fa-film", label: "SVG / Lottie" },
      { icon: "fa-solid fa-share-nodes", label: "react-native-share" },
    ],
  },
  {
    title: "Platform & Tooling",
    icon: "fa-wrench",
    skills: [
      { icon: "fa-solid fa-box", label: "pnpm + Turborepo" },
      { icon: "fa-solid fa-leaf", label: "Biome" },
      { icon: "fa-solid fa-language", label: "i18next" },
      { logo: "/assets/logos/tech/firebase.svg", label: "Firebase" },
      { logo: "/assets/logos/tech/posthog.svg", label: "PostHog" },
      { icon: "fa-solid fa-robot", label: "Testsigma E2E" },
    ],
  },
  {
    title: "CI/CD & Testing",
    icon: "fa-vial",
    skills: [
      { icon: "fa-solid fa-code-branch", label: "Bitbucket Pipelines" },
      { icon: "fa-solid fa-vial", label: "Cypress" },
      { icon: "fa-solid fa-robot", label: "Testsigma E2E" },
      { icon: "fa-solid fa-gears", label: "CI test instrumentation" },
    ],
  },
  {
    title: "Payments, Real-Time & AI",
    icon: "fa-bolt",
    wide: true,
    skills: [
      { icon: "fa-solid fa-credit-card", label: "Razorpay" },
      { icon: "fa-solid fa-comments", label: "LiveKit" },
      { icon: "fa-solid fa-wifi", label: "Offline-first architecture" },
      { icon: "fa-solid fa-robot", label: "Cursor" },
      { icon: "fa-solid fa-robot", label: "Claude Code" },
      { icon: "fa-brands fa-github", label: "GitHub Copilot" },
      { icon: "fa-solid fa-comments", label: "ChatGPT" },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Ninja Kisan",
    image: "/assets/images/project-ninja-kisan.svg",
    alt: "Ninja Kisan — agri-tech consumer platform",
    problem:
      "Farmers needed a reliable vernacular agri-tech platform for commerce, content, media and payments across web and mobile.",
    solution:
      "Shipped features across a pnpm/Turborepo React Native + Next.js monorepo (20+ shared packages, ~89% shared code) with offline-first state, Razorpay checkout, 11-locale i18n, voice search, FlashList feeds and analytics.",
    impact:
      "**1M+ downloads**, **600K MAU**, and **10M+ daily video views** — including experiences delivered across **11 Indian languages**.",
    architecture:
      "pnpm/Turborepo monorepo, Expo Router, Solito cross-platform routing, Next.js 14 App Router, Zustand + MMKV, PostHog/Firebase, Razorpay, LiveKit.",
    challenges:
      "Low-end Android devices, intermittent rural connectivity, resumable video upload, and shipping one product across 11 Indian languages.",
    metrics: ["1M+ downloads", "600K MAU", "11 locales"],
    lessons:
      "Offline-first state, vernacular UX and measured analytics are core product requirements for agri-tech at scale.",
    tech: [
      { icon: "fa-brands fa-react", label: "React Native" },
      { icon: "fa-solid fa-n", label: "Next.js" },
      { icon: "fa-solid fa-code", label: "TypeScript" },
    ],
  },
  {
    name: "Ninja Kisan Web",
    image: "/assets/images/project-snippets.svg",
    alt: "Ninja Kisan web — Next.js SSR and SEO content platform",
    problem:
      "Category, news and QnA content needed multilingual SEO, SSR and crawlability across 11 locales.",
    solution:
      "Architected Next.js 14 App Router routes (100+ routes) with React Server Components, JSON-LD/hreflang metadata, parallel/intercepted modal routes, and a BFF Route Handler for article metadata.",
    impact:
      "Enabled multilingual SEO indexing for content and QnA pages while balancing freshness against origin load with tag revalidation.",
    architecture:
      "Next.js App Router, RSC, schema.org JSON-LD, canonical/hreflang, Solito shared component layer, Cypress E2E.",
    challenges:
      "100+ content routes, locale-aware SEO at scale, and CORS-free news metadata ingestion via a server-side BFF.",
    metrics: ["100+ routes", "11-locale SEO", "SSR + RSC"],
    lessons:
      "Structured data, hreflang and per-route cache policy are product features for discoverability.",
    tech: [
      { icon: "fa-solid fa-n", label: "Next.js" },
      { icon: "fa-solid fa-code", label: "TypeScript" },
      { icon: "fa-solid fa-gauge-high", label: "SSR" },
    ],
  },
  {
    name: "Omni Channel",
    image: "/assets/images/project-reels.svg",
    alt: "Omni Channel — React.js internal operations platform",
    problem:
      "Operations teams needed a single internal platform for inventory, vehicles, drivers, orders and import/export tracking.",
    solution:
      "Developed a React.js internal operations platform with sales/purchase order workflows, integrated payments, and truck management with MapmyIndia route and payment estimation.",
    impact:
      "Gave operations a unified React.js surface for inventory, fleet and order workflows with React Query and Zustand + Context state management.",
    architecture:
      "React.js, React Query + custom hooks, Zustand + Context, MapmyIndia API, integrated payment flows.",
    challenges:
      "Modeling operational workflows (inventory, fleet, SO/PO) and map-based route/payment estimation in one internal product.",
    metrics: ["Inventory & fleet", "SO / PO workflows", "MapmyIndia routing"],
    lessons:
      "Internal tools need the same API discipline and state clarity as consumer apps — especially around payments and routing.",
    tech: [
      { icon: "fa-brands fa-react", label: "React.js" },
      { icon: "fa-solid fa-arrows-rotate", label: "React Query" },
      { icon: "fa-solid fa-map", label: "MapmyIndia" },
    ],
  },
] as const;

export const ACHIEVEMENTS = [
  { metric: "1M+", title: "App Downloads", description: "Shipped features for Ninja Kisan, an agri-tech platform with 1M+ downloads.", icon: null },
  { metric: "600K+", title: "Monthly Active Users", description: "Built and shipped production experiences for 600K MAU on Ninja Kisan.", icon: null },
  { metric: "11", title: "Indian Languages", description: "Delivered farmer-facing product experiences across 11 Indian languages.", icon: null },
  { metric: null, title: "Offline-First Architecture", description: "Engineered MMKV-persisted Zustand stores for intermittent connectivity on low-end Android devices.", icon: "fa-wifi" },
  { metric: null, title: "Mentorship", description: "Mentored 3+ engineers and coordinated sprint planning for a 10+ engineer Agile team.", icon: "fa-users" },
] as const;

export const AVAILABILITY = [
  { icon: "fa-globe", label: "Remote" },
  { icon: "fa-building", label: "Hybrid" },
  { icon: "fa-location-dot", label: "Onsite" },
  { icon: "fa-bolt", label: "Immediate Joining", highlight: true },
] as const;
