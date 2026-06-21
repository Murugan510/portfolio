import { Reveal } from "./Reveal";
import { SITE } from "../data/portfolio";

export function Secret() {
  return (
    <section id="secret" className="section section-secret" aria-labelledby="secret-heading">
      <div className="container">
        <Reveal>
          <header className="section-header section-header-center">
            <p className="section-eyebrow">🎮 Easter Egg Unlocked</p>
            <h2 id="secret-heading">Secret Developer Level</h2>
            <p className="section-subtitle">
              You entered the Konami code. You're clearly a curious engineer — Murugan likes that.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="secret-grid">
            <article className="secret-card glass">
              <h3><i className="fa-solid fa-trophy" aria-hidden="true"></i> Achievement Unlocked</h3>
              <p>Code Explorer — Found the hidden portfolio level.</p>
            </article>
            <article className="secret-card glass">
              <h3><i className="fa-solid fa-mug-hot" aria-hidden="true"></i> Fun Fact</h3>
              <p>Murugan debugs production issues with coffee, PostHog dashboards, and FlashList profiling.</p>
            </article>
            <article className="secret-card glass">
              <h3><i className="fa-solid fa-heart" aria-hidden="true"></i> Why Frontend?</h3>
              <p>Because the best products feel invisible — fast, intuitive, and delightful at 100K+ scale.</p>
            </article>
            <article className="secret-card glass secret-card--cta">
              <h3><i className="fa-solid fa-handshake" aria-hidden="true"></i> You passed the test</h3>
              <p>Curiosity + persistence = great engineer. Let's talk.</p>
              <a
                className="btn btn-gradient btn-sm"
                href={`mailto:${SITE.email}?subject=I%20found%20the%20secret%20level!&body=Hi%20Murugan%2C%0A%0AI%20entered%20the%20Konami%20code%20on%20your%20portfolio.%20Impressive%20build!%0A%0A`}
              >
                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Send a message
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
