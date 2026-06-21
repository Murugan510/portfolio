import { ABOUT_HIGHLIGHTS } from "../data/portfolio";
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
        <Reveal>
          <div className="about-grid">
            <p className="about-text">
              Senior Frontend Engineer with <strong>3.5+ years</strong> of experience shipping
              production software at product-based companies. I specialize in{" "}
              <strong>React Native</strong>, <strong>React.js</strong>, <strong>Next.js</strong>,
              and <strong>TypeScript</strong> — building interfaces that are fast, maintainable,
              and built to scale.
            </p>
            <p className="about-text">
              My work spans <strong>performance optimization</strong>,{" "}
              <strong>reusable architecture</strong>, <strong>video streaming</strong>,{" "}
              <strong>analytics integration</strong>, and <strong>SEO</strong> for platforms
              serving <strong>100K+ daily active users</strong>. I care deeply about engineering
              quality — from component APIs and state management to Core Web Vitals and mobile UX.
            </p>
            <ul className="about-highlights">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
