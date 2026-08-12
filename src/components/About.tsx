import {
  ABOUT_HIGHLIGHTS,
  CAREER_MILESTONES,
  EDUCATION,
  ENGINEERING_PRINCIPLES,
  SUMMARY,
} from "../data/portfolio";
import { Reveal } from "./Reveal";
import { AboutSyntax } from "./code/HeroSyntax";

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <AboutSyntax />
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">About Me</p>
            <h2 id="about-heading">Summary</h2>
          </header>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-text">{SUMMARY}</p>
          </Reveal>

          <Reveal delay={1}>
            <ul className="about-highlights">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true"></i> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="about-principles">
              {ENGINEERING_PRINCIPLES.map((p) => (
                <article key={p.title} className="principle-card glass">
                  <h4>
                    <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
                    {p.title}
                  </h4>
                  <p>{p.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <article className="principle-card glass" aria-label="Education">
              <h4>
                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                Education
              </h4>
              <p>
                {EDUCATION.degree} — {EDUCATION.school}
              </p>
            </article>
          </Reveal>

          <Reveal>
            <div className="about-milestones" aria-label="Career milestones">
              {CAREER_MILESTONES.map((m) => (
                <div key={m.year} className="milestone">
                  <span className="milestone-year">{m.year}</span>
                  <p className="milestone-label">{m.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
