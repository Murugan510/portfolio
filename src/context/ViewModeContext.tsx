import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type SidebarPanel = "explorer" | "copilot";

interface ViewModeContextValue {
  bootComplete: boolean;
  completeBoot: () => void;
  activeFile: string;
  setActiveFile: (id: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarPanel: SidebarPanel;
  setSidebarPanel: (panel: SidebarPanel) => void;
  secretUnlocked: boolean;
  unlockSecret: () => void;
}

const ViewModeContext = createContext<ViewModeContextValue | null>(null);
const BOOT_KEY = "portfolio-boot-seen";
const SECRET_KEY = "portfolio-secret-unlocked";

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [bootComplete, setBootComplete] = useState(() => {
    return localStorage.getItem(BOOT_KEY) === "true";
  });

  const [secretUnlocked, setSecretUnlocked] = useState(
    () => localStorage.getItem(SECRET_KEY) === "true"
  );

  const [activeFile, setActiveFile] = useState("readme");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPanel, setSidebarPanel] = useState<SidebarPanel>("explorer");

  const completeBoot = useCallback(() => {
    setBootComplete(true);
    localStorage.setItem(BOOT_KEY, "true");
  }, []);

  const unlockSecret = useCallback(() => {
    setSecretUnlocked(true);
    localStorage.setItem(SECRET_KEY, "true");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-view", "vscode");
  }, []);

  return (
    <ViewModeContext.Provider
      value={{
        bootComplete,
        completeBoot,
        activeFile,
        setActiveFile,
        sidebarOpen,
        setSidebarOpen,
        sidebarPanel,
        setSidebarPanel,
        secretUnlocked,
        unlockSecret,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext);
  if (!ctx) throw new Error("useViewMode must be used within ViewModeProvider");
  return ctx;
}
