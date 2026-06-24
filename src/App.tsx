import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Secret } from "./components/Secret";
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
  const { bootComplete } = useViewMode();
  useSectionSync();

  if (!bootComplete) {
    return <BootScreen />;
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <KonamiHandler />

      <VSCodeShell>
        <PortfolioContent />
      </VSCodeShell>

      <DevTerminal />
      <QuestWidget />
    </>
  );
}
