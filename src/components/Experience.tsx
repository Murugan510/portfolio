import { useState } from "react";
import { EXPERIENCE } from "../data/portfolio";
import { Reveal, RichText } from "./Reveal";

function ExperienceCard({ job }: { job: (typeof EXPERIENCE)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.highlights.length > 3;

  return (
    <article className="timeline-item">
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className="timeline-card glass">
        <div className="timeline-header">
          <div className="timeline-title-group">
            <div className="company-logo-wrap">
              <img
                className="company-logo"
                src={job.logo}
                alt={`${job.company} logo`}
                width={56}
                height={56}
                loading="lazy"
              />
            </div>
            <div className="timeline-role-info">
              <h3>{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
            </div>
          </div>
          <span className="timeline-date">{job.date}</span>
        </div>

        {job.badges && (
          <div className="timeline-badges">
            {job.badges.map((b) => (
              <span key={b} className="timeline-badge">{b}</span>
            ))}
          </div>
        )}

        {job.metrics && (
          <div className="timeline-metrics">
            {job.metrics.map((m) => (
              <span key={m} className="timeline-metric">
                <i className="fa-solid fa-chart-simple" aria-hidden="true"></i>
                {m}
              </span>
            ))}
          </div>
        )}

        <ul className={`timeline-highlights${!expanded && hasMore ? " timeline-highlights--collapsed" : ""}`}>
          {job.highlights.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        {hasMore && (
          <button
            type="button"
            className="timeline-expand"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "Show all responsibilities"}
          </button>
        )}
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section section-alt" aria-labelledby="experience-heading">
      <div className="container">
        <Reveal>
          <header className="section-header">
            <p className="section-eyebrow">Career</p>
            <h2 id="experience-heading">Experience</h2>
          </header>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE.map((job) => (
            <Reveal key={job.company + job.role}>
              <ExperienceCard job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
