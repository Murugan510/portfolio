import { SITE } from "./portfolio";

export const COPILOT_SUGGESTIONS = [
  "Who is Murugan?",
  "What is his tech stack?",
  "Tell me about his experience",
  "What projects has he built?",
  "Is he open to work?",
  "How can I contact him?",
] as const;

interface CopilotRule {
  keywords: string[];
  response: string;
}

const RULES: CopilotRule[] = [
  {
    keywords: ["who", "murugan", "about", "introduce", "background"],
    response: `${SITE.name} is a ${SITE.title} based in ${SITE.location} with ${SITE.experience} of experience. ${SITE.tagline} He specializes in product-based companies and ships at scale.`,
  },
  {
    keywords: ["stack", "skill", "technology", "tech", "react", "typescript", "tools"],
    response:
      "Primary stack from his CV: React.js, Next.js 14, React Native, Expo Router, TypeScript, Solito. Also Zustand, MMKV, React Query, Tamagui, FlashList, pnpm/Turborepo, Firebase, PostHog, Razorpay, LiveKit, Cypress, and Testsigma.",
  },
  {
    keywords: ["experience", "work", "job", "ninjacart", "masalabox", "career"],
    response:
      "SDE 1 at Ninjacart / 63Ideas Infolabs Pvt. Ltd. (May 2022 – Jun 2026) on Ninja Kisan and Omni Channel. Previously Frontend Developer (Angular, Ionic) at Masalabox Food Network (Apr 2021 – Apr 2022).",
  },
  {
    keywords: ["project", "built", "portfolio", "ninja kisan", "omni", "reels"],
    response:
      "From his CV: Ninja Kisan (React Native + Next.js monorepo, 1M+ downloads, 600K MAU), Ninja Kisan Web (Next.js SSR/SEO across 11 locales), and Omni Channel (React.js internal operations platform).",
  },
  {
    keywords: ["open", "hire", "available", "joining", "remote", "relocate"],
    response:
      "Yes — open to Frontend, React Native, and Next.js roles. Available for Remote, Hybrid, and Onsite. Immediate joining possible. Based in Bengaluru, India.",
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "reach", "connect"],
    response: `Email: ${SITE.email}\nPhone: ${SITE.phone}\nLinkedIn: ${SITE.linkedin}\nGitHub: ${SITE.github}`,
  },
  {
    keywords: ["performance", "optimize", "scale", "users", "dau", "mau"],
    response:
      "Murugan has shipped production features on apps with 1M+ downloads and 600K MAU. Focus areas: FlashList virtualization, offline-first mobile, SSR/SEO, payments, and reusable monorepo architecture across web and native.",
  },
];

export function getCopilotResponse(input: string): string {
  const q = input.toLowerCase().trim();
  if (!q) return "Ask me anything about Murugan's experience, skills, or projects.";

  if (q.includes("help")) {
    return "Try asking about: tech stack, experience, projects, availability, or contact info. You can also type commands in the terminal with `.";
  }

  const match = RULES.find((rule) => rule.keywords.some((kw) => q.includes(kw)));
  if (match) return match.response;

  return `I'm Murugan's portfolio copilot. I don't have a specific answer for that, but you can explore the **projects** section or run \`hire\` in the terminal to connect directly.`;
}
