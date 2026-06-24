import { useCallback } from "react";
import { useViewMode } from "../context/ViewModeContext";
import { useSound } from "../context/SoundContext";
import { useToast } from "../context/ToastContext";
import { useActivity } from "../context/ActivityContext";
import { useKonamiCode } from "../hooks/useKonamiCode";
import { scrollEditorToSection } from "../utils/editorScroll";

/** Listens for Konami code and unlocks secret section */
export function KonamiHandler() {
  const { unlockSecret, secretUnlocked, setActiveFile, setSidebarPanel } = useViewMode();
  const { play } = useSound();
  const { showToast } = useToast();
  const { completeQuest } = useActivity();

  const onUnlock = useCallback(() => {
    if (secretUnlocked) return;
    unlockSecret();
    completeQuest("konami-secret");
    play("konami");
    showToast("🎮 Secret level unlocked!");

    setTimeout(() => {
      if (scrollEditorToSection("secret")) {
        setActiveFile("secret");
        setSidebarPanel("explorer");
      }
    }, 400);
  }, [secretUnlocked, unlockSecret, completeQuest, play, showToast, setActiveFile, setSidebarPanel]);

  useKonamiCode(onUnlock);
  return null;
}
