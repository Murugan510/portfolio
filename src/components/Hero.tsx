import { SITE } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { useTyping } from "../hooks/useTyping";
import { useActivity } from "../context/ActivityContext";
import { useViewMode } from "../context/ViewModeContext";
import { HeroSyntax } from "./code/HeroSyntax";

export function Hero() {
  const typingText = useTyping();
  const { toggleTerminal } = useActivity();
  const { viewMode } = useViewMode();
  const showImmediately = viewMode === "vscode";

  return (
    <section id="hero" className="hero section" aria-labelledby="hero-heading">
      <HeroSyntax />
      <div className="container">
        <div className="hero-grid">
          <Reveal className="hero-content" immediate={showImmediately}>
            <p className="eyebrow">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              {SITE.location} · {SITE.experience}
            </p>
            <h1 id="hero-heading">
              Hi, I'm
              <span className="gradient-text">{SITE.name}</span>
            </h1>
            <p className="hero-title">{SITE.title}</p>
            <p className="hero-stack">
              <span className="typing-text" aria-live="polite">
                {typingText}
              </span>
            </p>
            <p className="hero-summary">{SITE.tagline}</p>

            <div className="hero-actions">
              <a className="btn btn-gradient" href="/assets/resume.pdf" download>
                <i className="fa-solid fa-download" aria-hidden="true"></i>
                Download Resume
              </a>
              <a className="btn btn-outline" href="#projects">
                <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                View Projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                Contact Me
              </a>
            </div>

              <div className="hero-social" aria-label="Social links">
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fa-brands fa-github" aria-hidden="true"></i>
                </a>
                <a href={`mailto:${SITE.email}`} aria-label="Email">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </a>
              </div>

              <button type="button" className="terminal-hint" onClick={toggleTerminal}>
                <i className="fa-solid fa-terminal" aria-hidden="true"></i>
                Try the dev terminal — press <kbd>`</kbd> or click here
              </button>
            </Reveal>

          <Reveal className="hero-visual" delay={1} immediate={showImmediately}>
            <div className="profile-card glass float">
              <div className="profile-ring" aria-hidden="true"></div>
              <div className="profile-glow" aria-hidden="true"></div>
              <div className="profile-avatar">
                <img
                  className="profile-image"
                  src="/assets/images/profile.svg"
                  alt={`${SITE.name} — ${SITE.title}`}
                  width={280}
                  height={280}
                />
              </div>
              <div className="profile-stats-mini">
                <div>
                  <span className="profile-stat-num">3.5+</span>
                  <span className="profile-stat-label">Years</span>
                </div>
                <div>
                  <span className="profile-stat-num">100K+</span>
                  <span className="profile-stat-label">DAU</span>
                </div>
              </div>
              <div className="profile-badge">
                <span className="status-dot" aria-hidden="true"></span>
                Open to opportunities
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
