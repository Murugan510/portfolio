import { useLayoutEffect } from "react";
import { initEditorScroll } from "../utils/editorScroll";

/** Align editor scroll after mount — boot screen defers #hero until shell exists. */
export function useEditorScrollInit() {
  useLayoutEffect(() => {
    if (typeof history !== "undefined" && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    initEditorScroll();

    const editor = document.querySelector(".vscode-editor-content");
    if (!editor) return;

    const raf = requestAnimationFrame(() => initEditorScroll());

    const ro = new ResizeObserver(() => {
      initEditorScroll();
      ro.disconnect();
    });
    ro.observe(editor);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);
}
