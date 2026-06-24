import { getVSCodeFiles } from "../../data/vscode";
import { useViewMode } from "../../context/ViewModeContext";
import { useActivity } from "../../context/ActivityContext";
import { useSound } from "../../context/SoundContext";
import { useEditorScrollInit } from "../../hooks/useEditorScrollInit";
import { scrollEditorToSection } from "../../utils/editorScroll";
import { CopilotPanel } from "./CopilotPanel";

interface VSCodeShellProps {
  children: React.ReactNode;
}

export function VSCodeShell({ children }: VSCodeShellProps) {
  const {
    activeFile,
    setActiveFile,
    sidebarOpen,
    setSidebarOpen,
    sidebarPanel,
    setSidebarPanel,
    secretUnlocked,
  } = useViewMode();
  const { toggleTerminal, completeQuest } = useActivity();
  const { play, muted, toggleMute } = useSound();

  useEditorScrollInit();

  const files = getVSCodeFiles(secretUnlocked);
  const active = files.find((f) => f.id === activeFile) ?? files[0];

  const isMobileSidebar = () => window.matchMedia("(max-width: 899px)").matches;

  const openSidebarPanel = (panel: "explorer" | "copilot") => {
    play("click");
    setSidebarPanel(panel);
    if (isMobileSidebar()) setSidebarOpen(true);
  };

  const navigateTo = (fileId: string, sectionId: string) => {
    play("tab");
    setActiveFile(fileId);
    if (isMobileSidebar()) setSidebarOpen(false);
    setSidebarPanel("explorer");
    scrollEditorToSection(sectionId);
    history.pushState(null, "", `#${sectionId}`);
  };

  const openCopilot = () => {
    openSidebarPanel("copilot");
    completeQuest("copilot-chat");
  };

  const openExplorer = () => {
    openSidebarPanel("explorer");
  };

  return (
    <div className="vscode-app">
      <header className="vscode-titlebar">
        <div className="vscode-traffic" aria-hidden="true">
          <span className="vscode-dot vscode-dot--close"></span>
          <span className="vscode-dot vscode-dot--min"></span>
          <span className="vscode-dot vscode-dot--max"></span>
        </div>
        <button
          type="button"
          className="vscode-sidebar-toggle"
          onClick={() => {
            play("click");
            setSidebarOpen(!sidebarOpen);
          }}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
        <p className="vscode-title">
          <span className="vscode-title-short">{active.name}</span>
          <span className="vscode-title-full">{active.name} — Murugan Portfolio — Visual Studio Code</span>
        </p>
        <button
          type="button"
          className="vscode-sound-btn"
          onClick={toggleMute}
          aria-label={muted ? "Unmute sounds" : "Mute sounds"}
          title={muted ? "Unmute" : "Mute"}
        >
          <i className={`fa-solid ${muted ? "fa-volume-xmark" : "fa-volume-high"}`} aria-hidden="true"></i>
        </button>
      </header>

      <div className="vscode-body">
        {sidebarOpen && (
          <button
            type="button"
            className="vscode-sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          />
        )}

        <nav className="vscode-activity-bar" aria-label="Activity bar">
          <button
            type="button"
            className={`vscode-activity${sidebarPanel === "explorer" ? " is-active" : ""}`}
            aria-label="Explorer"
            title="Explorer"
            onClick={openExplorer}
          >
            <i className="fa-regular fa-copy" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className={`vscode-activity vscode-activity--copilot${sidebarPanel === "copilot" ? " is-active" : ""}`}
            aria-label="Copilot"
            title="AI Copilot"
            onClick={openCopilot}
          >
            <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
          </button>
          <button type="button" className="vscode-activity" aria-label="Search" title="Search" onClick={() => play("click")}>
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          </button>
          <button type="button" className="vscode-activity" aria-label="Source Control" title="Source Control" onClick={() => play("click")}>
            <i className="fa-solid fa-code-branch" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="vscode-activity vscode-activity--bottom"
            aria-label="Terminal"
            title="Terminal (`)"
            onClick={() => {
              play("click");
              toggleTerminal();
            }}
          >
            <i className="fa-solid fa-terminal" aria-hidden="true"></i>
          </button>
        </nav>

        <aside
          className={`vscode-sidebar${sidebarOpen ? " is-open" : ""}`}
          aria-label="Sidebar"
        >
          {sidebarPanel === "explorer" ? (
            <>
              <div className="vscode-sidebar-header">
                <span>EXPLORER</span>
              </div>
              <div className="vscode-tree">
                <p className="vscode-tree-root">
                  <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                  <i className="fa-solid fa-folder-open" aria-hidden="true"></i>
                  murugan-portfolio
                </p>
                <ul className="vscode-tree-files">
                  {files.map((file) => (
                    <li key={file.id}>
                      <button
                        type="button"
                        className={`vscode-tree-file${activeFile === file.id ? " is-active" : ""}${file.id === "secret" ? " vscode-tree-file--secret" : ""}`}
                        onClick={() => navigateTo(file.id, file.sectionId)}
                      >
                        <i className={`${file.icon} vscode-file-icon`} aria-hidden="true"></i>
                        {file.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="vscode-sidebar-hint">
                <i className="fa-solid fa-lightbulb" aria-hidden="true"></i>
                <span className="vscode-sidebar-hint-short">Press <kbd>`</kbd> for terminal</span>
                <span className="vscode-sidebar-hint-full">
                  Press <kbd>`</kbd> terminal · <kbd>↑↑↓↓←→←→BA</kbd> secret
                </span>
              </div>
            </>
          ) : (
            <CopilotPanel />
          )}
        </aside>

        <div className="vscode-main">
          <div className="vscode-tabs" role="tablist">
            <button type="button" role="tab" className="vscode-tab is-active" aria-selected>
              <i className={`${active.icon} vscode-tab-icon`} aria-hidden="true"></i>
              {active.name}
              <span className="vscode-tab-close" aria-hidden="true">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </button>
          </div>

          <div className="vscode-breadcrumb">
            <span>murugan-portfolio</span>
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span>src</span>
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
            <span className="vscode-breadcrumb-active">{active.name}</span>
          </div>

          <div className="vscode-editor" id="main-content">
            <div className="vscode-gutter" aria-hidden="true">
              {Array.from({ length: 50 }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="vscode-editor-content">{children}</div>
          </div>

          <button
            type="button"
            className="vscode-panel-toggle"
            onClick={() => {
              play("click");
              toggleTerminal();
            }}
          >
            <i className="fa-solid fa-terminal" aria-hidden="true"></i> TERMINAL
            <span className="vscode-panel-hint">Press ` to interact</span>
          </button>
        </div>
      </div>

      <footer className="vscode-statusbar">
        <div className="vscode-statusbar-left">
          <span>
            <i className="fa-solid fa-code-branch" aria-hidden="true"></i> main
          </span>
          <span>
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i> No issues
          </span>
          <span className="vscode-statusbar-available">● Open to work</span>
          {secretUnlocked && <span className="vscode-statusbar-secret">🎮 Secret unlocked</span>}
        </div>
        <div className="vscode-statusbar-right">
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <span>{active.language}</span>
          <span>
            <i className="fa-brands fa-react" aria-hidden="true"></i> React
          </span>
        </div>
      </footer>
    </div>
  );
}
