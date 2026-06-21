import { PROJECTS } from "../data/portfolio";
import { Reveal, RichText } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Work</p>
            <h2 id="projects-heading">Featured Projects</h2>
          </header>
        </Reveal>

        <div className="project-grid project-grid--featured">
          {PROJECTS.map((project) => (
            <Reveal key={project.name}>
              <article className="project-card project-card--featured">
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.alt} width={1200} height={675} loading="lazy" />
                  <div className="project-overlay" aria-hidden="true"></div>
                </div>
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <div className="project-meta">
                    <div className="project-block">
                      <span className="project-block-label">Problem</span>
                      <p>{project.problem}</p>
                    </div>
                    <div className="project-block">
                      <span className="project-block-label">Solution</span>
                      <p>{project.solution}</p>
                    </div>
                    <div className="project-block project-block--impact">
                      <span className="project-block-label">Impact</span>
                      <p>
                        <RichText text={project.impact} />
                      </p>
                    </div>
                  </div>
                  <div className="skill-badges project-tech">
                    {project.tech.map((t) => (
                      <span key={t.label} className="skill-badge">
                        <i className={t.icon} aria-hidden="true"></i> {t.label}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a
                      className="btn btn-outline btn-sm"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub repository`}
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i> GitHub
                    </a>
                    <a
                      className="btn btn-gradient btn-sm"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
