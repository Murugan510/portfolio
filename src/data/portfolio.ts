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

export const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Ninjacart",
    logo: "/assets/logos/ninjacart.svg",
    date: "2022 — Present",
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
      { icon: "fa-brands fa-js", label: "JavaScript" },
      { logo: "/assets/logos/tech/typescript.svg", label: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    icon: "fa-window-maximize",
    skills: [
      { logo: "/assets/logos/tech/react.svg", label: "React" },
      { logo: "/assets/logos/tech/react.svg", label: "React Native" },
      { logo: "/assets/logos/tech/nextjs.svg", label: "Next.js", logoClass: "skill-badge-logo--nextjs" },
      { logo: "/assets/logos/tech/expo.svg", label: "Expo", logoClass: "skill-badge-logo--expo" },
    ],
  },
  {
    title: "State Management",
    icon: "fa-database",
    skills: [
      { icon: "fa-solid fa-layer-group", label: "Zustand" },
      { icon: "fa-solid fa-arrows-rotate", label: "React Query" },
      { icon: "fa-solid fa-database", label: "MMKV" },
    ],
  },
  {
    title: "UI",
    icon: "fa-palette",
    skills: [
      { icon: "fa-solid fa-wind", label: "Tailwind" },
      { icon: "fa-solid fa-paintbrush", label: "Tamagui" },
      { icon: "fa-solid fa-cubes", label: "Material UI" },
    ],
  },
  {
    title: "Backend",
    icon: "fa-server",
    skills: [
      { icon: "fa-brands fa-node-js", label: "Node.js" },
      { icon: "fa-solid fa-server", label: "Express" },
    ],
  },
  {
    title: "Database",
    icon: "fa-cloud",
    skills: [{ logo: "/assets/logos/tech/firebase.svg", label: "Firebase" }],
  },
  {
    title: "Tools",
    icon: "fa-wrench",
    wide: true,
    skills: [
      { icon: "fa-brands fa-git-alt", label: "Git" },
      { icon: "fa-solid fa-diagram-project", label: "TurboRepo" },
      { icon: "fa-solid fa-box", label: "PNPM" },
      { logo: "/assets/logos/tech/posthog.svg", label: "PostHog" },
      { logo: "/assets/logos/tech/datadog.svg", label: "Datadog" },
      { icon: "fa-brands fa-figma", label: "Figma" },
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
