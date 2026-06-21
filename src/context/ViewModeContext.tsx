import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type ViewMode = "vscode" | "classic";
export type SidebarPanel = "explorer" | "copilot";

interface ViewModeContextValue {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
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
const VIEW_KEY = "portfolio-view-mode";
const BOOT_KEY = "portfolio-boot-seen";
const SECRET_KEY = "portfolio-secret-unlocked";

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>(() => {
    const saved = localStorage.getItem(VIEW_KEY);
    return saved === "classic" ? "classic" : "vscode";
  });

  const [bootComplete, setBootComplete] = useState(() => {
    return localStorage.getItem(BOOT_KEY) === "true";
  });

  const [secretUnlocked, setSecretUnlocked] = useState(
    () => localStorage.getItem(SECRET_KEY) === "true"
  );

  const [activeFile, setActiveFile] = useState("readme");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPanel, setSidebarPanel] = useState<SidebarPanel>("explorer");

  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);
    localStorage.setItem(VIEW_KEY, mode);
    document.documentElement.setAttribute("data-view", mode);
  }, []);

  const completeBoot = useCallback(() => {
    setBootComplete(true);
    localStorage.setItem(BOOT_KEY, "true");
  }, []);

  const unlockSecret = useCallback(() => {
    setSecretUnlocked(true);
    localStorage.setItem(SECRET_KEY, "true");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-view", viewMode);
  }, [viewMode]);

  return (
    <ViewModeContext.Provider
      value={{
        viewMode,
        setViewMode,
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
