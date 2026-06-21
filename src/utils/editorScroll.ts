/** Scroll container for VS Code view (not window). */
export function getEditorScrollContainer(): HTMLElement | null {
  return document.querySelector(".vscode-editor-content");
}

export function scrollEditorToSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth"
): boolean {
  const editor = getEditorScrollContainer();
  const el = document.getElementById(sectionId);
  if (!editor || !el || !editor.contains(el)) return false;

  const top =
    el.getBoundingClientRect().top -
    editor.getBoundingClientRect().top +
    editor.scrollTop;

  editor.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Reset editor scroll after boot / layout — fixes #hash jumps before shell mounts. */
export function initEditorScroll(): void {
  const editor = getEditorScrollContainer();
  if (!editor) return;

  const hash = window.location.hash.slice(1);
  if (hash) {
    const el = document.getElementById(hash);
    if (el && editor.contains(el)) {
      const top =
        el.getBoundingClientRect().top -
        editor.getBoundingClientRect().top +
        editor.scrollTop;
      editor.scrollTop = Math.max(0, top);
      return;
    }
  }

  editor.scrollTop = 0;
  window.scrollTo(0, 0);
}
