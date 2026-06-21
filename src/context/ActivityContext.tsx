import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const QUESTS = [
  { id: "open-terminal", label: "Open the dev terminal", hint: "Press ` or click the button" },
  { id: "run-whoami", label: "Run whoami", hint: "Type whoami in the terminal" },
  { id: "explore-projects", label: "Explore projects", hint: "Type: goto projects" },
  { id: "toggle-theme", label: "Toggle dark mode", hint: "Type: theme toggle" },
  { id: "run-hire", label: "Run hire command", hint: "Type: hire" },
  { id: "download-resume", label: "Download resume", hint: "Type: resume" },
  { id: "copilot-chat", label: "Chat with AI Copilot", hint: "Open Copilot in the sidebar" },
  { id: "konami-secret", label: "Find the secret level", hint: "Try the Konami code ↑↑↓↓←→←→BA" },
] as const;

export type QuestId = (typeof QUESTS)[number]["id"];

interface ActivityContextValue {
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean) => void;
  toggleTerminal: () => void;
  completed: Set<QuestId>;
  completeQuest: (id: QuestId) => void;
  progress: number;
  allComplete: boolean;
}

const ActivityContext = createContext<ActivityContextValue | null>(null);
const STORAGE_KEY = "portfolio-quests";

export function ActivityProvider({ children }: { children: ReactNode }) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [completed, setCompleted] = useState<Set<QuestId>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return new Set(JSON.parse(saved) as QuestId[]);
    } catch {
      /* ignore */
    }
    return new Set();
  });

  const completeQuest = useCallback((id: QuestId) => {
    setCompleted((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      return next;
    });
  }, []);

  const toggleTerminal = useCallback(() => {
    setTerminalOpen((o) => {
      if (!o) completeQuest("open-terminal");
      return !o;
    });
  }, [completeQuest]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "`" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const tag = (e.target as HTMLElement).tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        toggleTerminal();
      }
      if (e.key === "Escape") setTerminalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleTerminal]);

  const progress = useMemo(
    () => Math.round((completed.size / QUESTS.length) * 100),
    [completed]
  );

  const allComplete = completed.size === QUESTS.length;

  return (
    <ActivityContext.Provider
      value={{
        terminalOpen,
        setTerminalOpen,
        toggleTerminal,
        completed,
        completeQuest,
        progress,
        allComplete,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export function useActivity() {
  const ctx = useContext(ActivityContext);
  if (!ctx) throw new Error("useActivity must be used within ActivityProvider");
  return ctx;
}
