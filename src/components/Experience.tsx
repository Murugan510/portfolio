import { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "../data/portfolio";
import { Reveal, RichText } from "./Reveal";
import { getEditorScrollContainer } from "../utils/editorScroll";

const PREVIEW_COUNT = 3;
const COLLAPSE_MS = 360;

function getScrollParent(el: HTMLElement | null): HTMLElement | Window {
  return getEditorScrollContainer() ?? (el?.ownerDocument.defaultView ?? window);
}

function getScrollTop(scroller: HTMLElement | Window): number {
  return scroller instanceof Window ? scroller.scrollY : scroller.scrollTop;
}

function setScrollTop(scroller: HTMLElement | Window, top: number) {
  if (scroller instanceof Window) {
    scroller.scrollTo({ top, behavior: "instant" });
    return;
  }
  const prev = scroller.style.scrollBehavior;
  scroller.style.scrollBehavior = "auto";
  scroller.scrollTop = top;
  scroller.style.scrollBehavior = prev;
}

function ExperienceCard({ job }: { job: (typeof EXPERIENCE)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const collapseRaf = useRef<number | null>(null);

  const preview = job.highlights.slice(0, PREVIEW_COUNT);
  const rest = job.highlights.slice(PREVIEW_COUNT);
  const hasMore = rest.length > 0;
  const moreId = `experience-more-${job.company}-${job.role}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-");

  useEffect(() => {
    return () => {
      if (collapseRaf.current != null) cancelAnimationFrame(collapseRaf.current);
    };
  }, []);

  const toggle = () => {
    if (collapseRaf.current != null) {
      cancelAnimationFrame(collapseRaf.current);
      collapseRaf.current = null;
    }

    if (!expanded) {
      setExpanded(true);
      return;
    }

    const button = buttonRef.current;
    if (!button) {
      setExpanded(false);
      return;
    }

    const scroller = getScrollParent(button);
    const pinnedTop = button.getBoundingClientRect().top;
    const startedAt = performance.now();

    setExpanded(false);

    const lockScroll = (now: number) => {
      const delta = button.getBoundingClientRect().top - pinnedTop;
      if (Math.abs(delta) > 0.5) {
        setScrollTop(scroller, getScrollTop(scroller) + delta);
      }

      if (now - startedAt < COLLAPSE_MS) {
        collapseRaf.current = requestAnimationFrame(lockScroll);
      } else {
        collapseRaf.current = null;
      }
    };

    collapseRaf.current = requestAnimationFrame(lockScroll);
  };

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
              <span key={b} className="timeline-badge">
                {b}
              </span>
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

        <ul className="timeline-highlights">
          {preview.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>

        {hasMore && (
          <>
            <div className={`timeline-more${expanded ? " is-open" : ""}`}>
              <div className="timeline-more-inner">
                <ul className="timeline-highlights timeline-highlights--more" id={moreId}>
                  {rest.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              ref={buttonRef}
              type="button"
              className="timeline-expand"
              onClick={toggle}
              aria-expanded={expanded}
              aria-controls={moreId}
            >
              {expanded ? "Show less" : "Show all responsibilities"}
            </button>
          </>
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
