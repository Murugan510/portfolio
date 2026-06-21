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
      "Primary stack: React Native, React.js, Next.js, TypeScript. Also experienced with Zustand, React Query, Expo, Node.js, Firebase, PostHog, Datadog, and building reusable component libraries.",
  },
  {
    keywords: ["experience", "work", "job", "ninjacart", "swiggy", "career"],
    response:
      "Currently Senior Frontend Developer at Ninjacart (2022–Present), building React Native apps for 100K+ daily users. Previously Operations roles at Masalabox (200+ partners) and Swiggy (promoted internally).",
  },
  {
    keywords: ["project", "built", "portfolio", "ninja kisan", "snippets", "reels"],
    response:
      "Featured projects: Ninja Kisan (React Native + Razorpay + offline), Snippets (Next.js SSR/SEO video platform), Reels Player (FlashList video streaming). All focused on performance and production scale.",
  },
  {
    keywords: ["open", "hire", "available", "joining", "remote", "relocate"],
    response:
      "Yes — open to Frontend, React Native, and Next.js roles. Available for Remote, Hybrid, and Onsite. Immediate joining possible. Based in Bangalore, India.",
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "reach", "connect"],
    response: `Email: ${SITE.email}\nPhone: ${SITE.phone}\nLinkedIn: ${SITE.linkedin}\nGitHub: ${SITE.github}`,
  },
  {
    keywords: ["performance", "optimize", "scale", "users", "dau"],
    response:
      "Murugan has shipped production apps serving 100K+ daily active users. Focus areas: list virtualization, memoization, Core Web Vitals, offline-first mobile, and reusable architecture adopted across teams.",
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
