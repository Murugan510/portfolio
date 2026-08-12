import { PROJECTS } from "../data/portfolio";
import { Reveal, RichText } from "./Reveal";

const DETAIL_SECTIONS = [
  { key: "solution", label: "Solution" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "lessons", label: "Lessons Learned" },
] as const;

type Project = (typeof PROJECTS)[number];

function ProjectCard({ project }: { project: Project }) {
  const accordionName = `project-${project.name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <article className="project-card project-card--featured glass">
      <div className="project-body">
        <h3>{project.name}</h3>

        <div className="project-metrics" aria-label="Key metrics">
          {project.metrics.map((m) => (
            <span key={m} className="project-metric-chip">
              {m}
            </span>
          ))}
        </div>

        <p className="project-lead">{project.problem}</p>

        <div className="project-block project-block--impact">
          <span className="project-block-label">Impact</span>
          <p>
            <RichText text={project.impact} />
          </p>
        </div>

        <div className="project-accordion" role="group" aria-label={`${project.name} details`}>
          {DETAIL_SECTIONS.map(({ key, label }) => (
            <details key={key} className="project-accordion-item" name={accordionName}>
              <summary>
                <span>{label}</span>
                <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </summary>
              <p className="project-accordion-body">{project[key]}</p>
            </details>
          ))}
        </div>

        <div className="skill-badges project-tech">
          {project.tech.map((t) => (
            <span key={t.label} className="skill-badge">
              <i className={t.icon} aria-hidden="true"></i> {t.label}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

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
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
