import { ACHIEVEMENTS } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="section" aria-labelledby="achievements-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Impact</p>
            <h2 id="achievements-heading">Achievements</h2>
          </header>
        </Reveal>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <Reveal key={item.title} delay={i > 0 && i < 4 ? (i as 1 | 2 | 3) : undefined}>
              <article className="achievement-card glass">
                <div className="achievement-metric">
                  {item.metric ? item.metric : <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
