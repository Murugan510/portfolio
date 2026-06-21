export interface VSCodeFile {
  id: string;
  name: string;
  sectionId: string;
  icon: string;
  language: string;
}

export const VSCODE_FILES: VSCodeFile[] = [
  { id: "readme", name: "README.md", sectionId: "hero", icon: "fa-brands fa-markdown", language: "Markdown" },
  { id: "about", name: "about.md", sectionId: "about", icon: "fa-solid fa-file-lines", language: "Markdown" },
  { id: "experience", name: "experience.json", sectionId: "experience", icon: "fa-solid fa-file-code", language: "JSON" },
  { id: "skills", name: "skills.json", sectionId: "skills", icon: "fa-solid fa-file-code", language: "JSON" },
  { id: "projects", name: "projects.tsx", sectionId: "projects", icon: "fa-brands fa-react", language: "TypeScript React" },
  { id: "achievements", name: "achievements.md", sectionId: "achievements", icon: "fa-solid fa-file-lines", language: "Markdown" },
  { id: "contact", name: "contact.json", sectionId: "contact", icon: "fa-solid fa-file-code", language: "JSON" },
];

export const SECRET_FILE: VSCodeFile = {
  id: "secret",
  name: "secrets.easter_egg",
  sectionId: "secret",
  icon: "fa-solid fa-lock-open",
  language: "Classified",
};

export function getVSCodeFiles(secretUnlocked: boolean): VSCodeFile[] {
  return secretUnlocked ? [...VSCODE_FILES, SECRET_FILE] : VSCODE_FILES;
}

export const BOOT_LINES = [
  { text: "MuruganOS v2.0 — Portfolio Runtime", delay: 0 },
  { text: "Initializing modules...", delay: 400 },
  { text: "✓ React.js", delay: 900 },
  { text: "✓ TypeScript", delay: 1200 },
  { text: "✓ React Native", delay: 1500 },
  { text: "✓ Next.js", delay: 1800 },
  { text: "Loading VS Code shell...", delay: 2200 },
  { text: "Ready. Welcome, recruiter 👋", delay: 2800 },
];
