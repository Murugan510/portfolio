export const SITE = {
  name: "Murugan Ramakrishnan",
  title: "Senior Frontend Engineer",
  location: "Bangalore, India",
  experience: "3.5+ Years",
  email: "murugan.ramakrishnan.tech@gmail.com",
  phone: "+91 80731 14075",
  linkedin: "https://www.linkedin.com/in/murugan-ramakrishnan-897472218/",
  linkedinHandle: "murugan-ramakrishnan",
  github: "https://github.com/muruganramakrishnan",
  githubHandle: "muruganramakrishnan",
  url: "https://muruganramakrishnan.dev/",
  tagline:
    "I build high-performance React Native and Next.js applications used by 100,000+ daily users.",
  typingPhrases: ["React Native", "React.js", "Next.js", "TypeScript"],
} as const;

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
  { icon: "fa-briefcase", target: 3.5, suffix: "+", decimals: 1, label: "Years Experience" },
  { icon: "fa-users", target: 100, suffix: "K+", decimals: 0, label: "Daily Active Users" },
  { icon: "fa-rocket", target: 20, suffix: "+", decimals: 0, label: "Production Features" },
  { icon: "fa-shield-halved", target: 99.9, suffix: "%", decimals: 1, label: "App Stability" },
] as const;

export const ABOUT_HIGHLIGHTS = [
  "Production apps at 100K+ DAU scale",
  "React Native & Next.js expertise",
  "Performance-first engineering mindset",
  "Open to product company roles",
] as const;

export const ENGINEERING_PRINCIPLES = [
  {
    icon: "fa-gauge-high",
    title: "Performance first",
    description: "Profile, measure, and optimize before shipping — especially on mobile and low-connectivity surfaces.",
  },
  {
    icon: "fa-cubes",
    title: "Reusable systems",
    description: "Build component APIs and patterns that scale across teams, not one-off screens.",
  },
  {
    icon: "fa-chart-line",
    title: "Data-informed shipping",
    description: "Instrument with analytics, validate with metrics, iterate with evidence.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Real-world UX",
    description: "Design for offline, mid-range devices, and users who depend on the product daily.",
  },
] as const;

export const CAREER_MILESTONES = [
  { year: "2022", label: "Joined Ninjacart — Frontend engineering at scale" },
  { year: "Ops", label: "Operations leadership at Masalabox & Swiggy" },
  { year: "Now", label: "Shipping React Native products for 100K+ DAU" },
] as const;

export const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Ninjacart",
    logo: "/assets/logos/ninjacart.svg",
    date: "2022 — Present",
    badges: ["React Native", "100K+ DAU", "Payments"],
    metrics: ["100K+ daily users", "3+ teams on shared UI"],
    highlights: [
      "Built production React Native applications serving **100K+ daily active users**",
      "Developed a reusable component library adopted across **3+ product teams**",
      "Integrated Razorpay payments, reducing checkout friction for thousands of daily transactions",
      "Implemented PostHog analytics enabling data-driven feature decisions across the org",
      "Built a video streaming platform with optimized playback and reduced buffering incidents",
      "Improved app performance through profiling, memoization, and list virtualization",
      "Delivered Next.js SEO improvements increasing organic discoverability for web surfaces",
    ],
  },
  {
    role: "Operations Manager",
    company: "Masalabox",
    logo: "/assets/logos/masalabox.svg",
    date: "Previous",
    badges: ["Logistics", "Last-mile"],
    metrics: ["200+ delivery partners"],
    highlights: [
      "Scaled delivery operations across multiple zones with measurable SLA improvements",
      "Led and managed **200+ delivery partners** across high-volume routes",
    ],
  },
  {
    role: "Assistant Manager",
    company: "Swiggy",
    logo: "/assets/logos/swiggy.svg",
    date: "Previous",
    badges: ["Promoted internally", "High-growth ops"],
    metrics: ["Fast-paced delivery ops"],
    highlights: [
      "Started as Delivery Executive — **promoted internally** for operational excellence",
      "Managed high-growth delivery operations in a fast-paced product environment",
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
    title: "Languages",
    icon: "fa-code",
    skills: [
      { icon: "fa-brands fa-js", label: "JavaScript", years: "4+ yrs", proficiency: "Advanced" },
      { logo: "/assets/logos/tech/typescript.svg", label: "TypeScript", years: "3+ yrs", proficiency: "Advanced" },
    ],
  },
  {
    title: "Frontend",
    icon: "fa-window-maximize",
    skills: [
      { logo: "/assets/logos/tech/react.svg", label: "React", years: "4+ yrs", proficiency: "Expert" },
      { logo: "/assets/logos/tech/react.svg", label: "React Native", years: "3+ yrs", proficiency: "Expert" },
      { logo: "/assets/logos/tech/nextjs.svg", label: "Next.js", logoClass: "skill-badge-logo--nextjs", years: "2+ yrs", proficiency: "Advanced" },
      { logo: "/assets/logos/tech/expo.svg", label: "Expo", logoClass: "skill-badge-logo--expo", years: "3+ yrs", proficiency: "Advanced" },
    ],
  },
  {
    title: "State Management",
    icon: "fa-database",
    skills: [
      { icon: "fa-solid fa-layer-group", label: "Zustand", years: "2+ yrs", proficiency: "Advanced" },
      { icon: "fa-solid fa-arrows-rotate", label: "React Query", years: "2+ yrs", proficiency: "Advanced" },
      { icon: "fa-solid fa-database", label: "MMKV", years: "2+ yrs", proficiency: "Proficient" },
    ],
  },
  {
    title: "UI",
    icon: "fa-palette",
    skills: [
      { icon: "fa-solid fa-wind", label: "Tailwind", years: "3+ yrs", proficiency: "Advanced" },
      { icon: "fa-solid fa-paintbrush", label: "Tamagui", years: "1+ yrs", proficiency: "Proficient" },
      { icon: "fa-solid fa-cubes", label: "Material UI", years: "2+ yrs", proficiency: "Proficient" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: [
      { icon: "fa-brands fa-node-js", label: "Node.js", years: "2+ yrs", proficiency: "Proficient" },
      { icon: "fa-solid fa-server", label: "Express", years: "2+ yrs", proficiency: "Proficient" },
    ],
  },
  {
    title: "Database",
    icon: "fa-cloud",
    skills: [{ logo: "/assets/logos/tech/firebase.svg", label: "Firebase", years: "2+ yrs", proficiency: "Proficient" }],
  },
  {
    title: "Tools",
    icon: "fa-wrench",
    wide: true,
    skills: [
      { icon: "fa-brands fa-git-alt", label: "Git", years: "4+ yrs", proficiency: "Advanced" },
      { icon: "fa-solid fa-diagram-project", label: "TurboRepo", years: "1+ yrs", proficiency: "Proficient" },
      { icon: "fa-solid fa-box", label: "PNPM", years: "2+ yrs", proficiency: "Proficient" },
      { logo: "/assets/logos/tech/posthog.svg", label: "PostHog", years: "2+ yrs", proficiency: "Advanced" },
      { logo: "/assets/logos/tech/datadog.svg", label: "Datadog", years: "1+ yrs", proficiency: "Proficient" },
      { icon: "fa-brands fa-figma", label: "Figma", years: "3+ yrs", proficiency: "Proficient" },
    ],
  },
];

export const PROJECTS = [
  {
    name: "Ninja Kisan",
    image: "/assets/images/project-ninja-kisan.svg",
    alt: "Ninja Kisan — React Native agricultural commerce app UI mockup",
    problem:
      "Farmers needed a reliable mobile platform for commerce, video content, and payments — with poor connectivity in rural areas.",
    solution:
      "Built a production React Native app with offline support, Razorpay integration, PostHog analytics, and a performant video feed.",
    impact:
      "Serves **100K+ daily users** with stable payments, analytics-driven iterations, and seamless offline-to-online sync.",
    architecture:
      "React Native + Expo monorepo patterns, offline queue layer, shared component library, PostHog event pipeline.",
    challenges:
      "Unreliable rural connectivity, payment edge cases, and video performance on mid-range Android devices.",
    metrics: ["100K+ DAU", "Stable Razorpay flows", "Offline-to-online sync"],
    lessons:
      "Offline-first isn't optional for rural users — design sync and payment states explicitly from day one.",
    tech: [
      { icon: "fa-brands fa-react", label: "React Native" },
      { icon: "fa-solid fa-bolt", label: "Expo" },
      { icon: "fa-solid fa-code", label: "TypeScript" },
    ],
    github: "#",
    demo: "#",
  },
  {
    name: "Snippets",
    image: "/assets/images/project-snippets.svg",
    alt: "Snippets — Next.js video platform UI mockup",
    problem:
      "Video content needed strong SEO, fast initial loads, and excellent Core Web Vitals to compete for organic traffic.",
    solution:
      "Engineered a Next.js platform with SSR, metadata optimization, and performance budgets for video-heavy pages.",
    impact:
      "Improved discoverability and page performance with measurable gains in LCP and SEO-indexed content surfaces.",
    architecture:
      "Next.js App Router, SSR for content pages, metadata API, image optimization, performance budgets per route.",
    challenges:
      "Video-heavy pages hurting LCP, SEO metadata at scale, and balancing SSR with interactive video UI.",
    metrics: ["Improved LCP", "SEO-indexed surfaces", "Faster initial loads"],
    lessons:
      "Set performance budgets early — video pages need a deliberate SSR and asset loading strategy.",
    tech: [
      { icon: "fa-solid fa-n", label: "Next.js" },
      { icon: "fa-solid fa-code", label: "TypeScript" },
      { icon: "fa-solid fa-gauge-high", label: "SSR" },
    ],
    github: "#",
    demo: "#",
  },
  {
    name: "Reels Player",
    image: "/assets/images/project-reels.svg",
    alt: "Reels Player — React Native video streaming component mockup",
    problem:
      "Short-form video feeds suffered from janky scrolling, memory spikes, and unreliable autoplay on mid-range devices.",
    solution:
      "Built a FlashList-powered reels component with optimized video preloading, autoplay logic, and aggressive memory management.",
    impact:
      "Delivered buttery-smooth vertical scrolling and reduced frame drops across production video surfaces.",
    architecture:
      "FlashList virtualization, video preloading pool, memory-aware autoplay controller, reusable feed component.",
    challenges:
      "Memory spikes on scroll, autoplay reliability, and frame drops on mid-range devices.",
    metrics: ["Smoother scroll", "Reduced frame drops", "Production video surfaces"],
    lessons:
      "Virtualized lists + aggressive memory management are non-negotiable for vertical video feeds.",
    tech: [
      { icon: "fa-brands fa-react", label: "React Native" },
      { icon: "fa-solid fa-list", label: "FlashList" },
      { icon: "fa-solid fa-code", label: "TypeScript" },
    ],
    github: "#",
    demo: "#",
  },
] as const;

export const ACHIEVEMENTS = [
  { metric: "100K+", title: "Daily Active Users", description: "Shipped production apps reaching over 100,000 users every day.", icon: null },
  { metric: null, title: "Performance Improvements", description: "Reduced render overhead via profiling, memoization, and list virtualization.", icon: "fa-gauge-high" },
  { metric: null, title: "Reusable Component Library", description: "Built shared UI systems adopted across multiple product teams.", icon: "fa-cubes" },
  { metric: null, title: "Video Streaming Platform", description: "Delivered optimized video playback for high-traffic mobile surfaces.", icon: "fa-play" },
  { metric: null, title: "Analytics Integration", description: "Implemented PostHog for product analytics and data-informed shipping.", icon: "fa-chart-simple" },
  { metric: null, title: "SEO Optimization", description: "Improved Next.js SEO and discoverability for content-heavy web apps.", icon: "fa-magnifying-glass" },
] as const;

export const AVAILABILITY = [
  { icon: "fa-globe", label: "Remote" },
  { icon: "fa-building", label: "Hybrid" },
  { icon: "fa-location-dot", label: "Onsite" },
  { icon: "fa-bolt", label: "Immediate Joining", highlight: true },
] as const;
