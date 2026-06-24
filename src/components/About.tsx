import { ABOUT_HIGHLIGHTS, CAREER_MILESTONES, ENGINEERING_PRINCIPLES } from "../data/portfolio";
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
            <h2 id="about-heading">Building products that scale</h2>
          </header>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-text">
              Senior Frontend Engineer with <strong>3.5+ years</strong> of experience shipping
              production software at product-based companies. I specialize in{" "}
              <strong>React Native</strong>, <strong>React.js</strong>, <strong>Next.js</strong>,
              and <strong>TypeScript</strong> — building interfaces that are fast, maintainable,
              and built to scale.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <p className="about-text">
              My work spans <strong>performance optimization</strong>,{" "}
              <strong>reusable architecture</strong>, <strong>video streaming</strong>,{" "}
              <strong>analytics integration</strong>, and <strong>SEO</strong> for platforms
              serving <strong>100K+ daily active users</strong>.
            </p>
          </Reveal>

          <Reveal delay={2}>
            <ul className="about-highlights">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true"></i> {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
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
