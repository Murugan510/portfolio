import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Secret } from "./components/Secret";
import { Footer } from "./components/Footer";
import { DevTerminal } from "./components/DevTerminal";
import { QuestWidget } from "./components/QuestWidget";
import { BootScreen } from "./components/vscode/BootScreen";
import { VSCodeShell } from "./components/vscode/VSCodeShell";
import { KonamiHandler } from "./components/KonamiHandler";
import { useViewMode } from "./context/ViewModeContext";
import { useSectionSync } from "./hooks/useSectionSync";

function PortfolioContent() {
  const { secretUnlocked } = useViewMode();

  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      {secretUnlocked && <Secret />}
    </>
  );
}

export default function App() {
  const { viewMode, bootComplete, setViewMode } = useViewMode();
  useSectionSync();

  if (viewMode === "vscode" && !bootComplete) {
    return <BootScreen />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <KonamiHandler />

      {viewMode === "vscode" ? (
        <VSCodeShell>
          <PortfolioContent />
        </VSCodeShell>
      ) : (
        <>
          <Header />
          <main id="main-content">
            <PortfolioContent />
          </main>
          <Footer />
          <button
            type="button"
            className="view-switch-fab"
            onClick={() => setViewMode("vscode")}
            aria-label="Switch to VS Code view"
          >
            <i className="fa-solid fa-code" aria-hidden="true"></i>
            <span className="view-switch-fab-label">VS Code View</span>
          </button>
        </>
      )}

      <DevTerminal />
      <QuestWidget />
    </>
  );
}
