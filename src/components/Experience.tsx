import { EXPERIENCE } from "../data/portfolio";
import { Reveal, RichText } from "./Reveal";

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
                  <ul className="timeline-highlights">
                    {job.highlights.map((item) => (
                      <li key={item}>
                        <RichText text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
