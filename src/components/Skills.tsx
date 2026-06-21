import { SKILL_CATEGORIES } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SkillBadge } from "./SkillBadge";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Expertise</p>
            <h2 id="skills-heading">Skills & Technologies</h2>
          </header>
        </Reveal>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i > 0 && i < 4 ? (i as 1 | 2 | 3) : undefined}>
              <article className={`skill-category glass${cat.wide ? " skill-category-wide" : ""}`}>
                <h3>
                  <i className={`fa-solid ${cat.icon}`} aria-hidden="true"></i> {cat.title}
                </h3>
                <div className="skill-badges">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill.label} skill={skill} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
