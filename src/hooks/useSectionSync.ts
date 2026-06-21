import { useEffect } from "react";
import { getVSCodeFiles } from "../data/vscode";
import { useViewMode } from "../context/ViewModeContext";
import { getEditorScrollContainer } from "../utils/editorScroll";

/** Sync active file tab with scroll position */
export function useSectionSync() {
  const { setActiveFile, viewMode, secretUnlocked, bootComplete } = useViewMode();

  useEffect(() => {
    if (viewMode !== "vscode" || !bootComplete) return;

    const root = getEditorScrollContainer();
    if (!root) return;

    const files = getVSCodeFiles(secretUnlocked);
    const sections = files
      .map((f) => ({ id: f.id, el: document.getElementById(f.sectionId) }))
      .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const match = files.find((f) => f.sectionId === visible.target.id);
        if (match) setActiveFile(match.id);
      },
      {
        root,
        rootMargin: "-12% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    sections.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, [viewMode, setActiveFile, secretUnlocked, bootComplete]);
}
