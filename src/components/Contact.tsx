import { AVAILABILITY, SITE } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { useToast } from "../context/ToastContext";

export function Contact() {
  const { showToast } = useToast();

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(SITE.phone);
      showToast("Phone number copied!");
    } catch {
      showToast("Could not copy — please select manually");
    }
  };

  return (
    <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal>
          <header className="section-header section-header-center">
            <p className="section-eyebrow">Get in Touch</p>
            <h2 id="contact-heading">Let's build something amazing together.</h2>
            <p className="section-subtitle">
              Open to Frontend, React Native, and Next.js opportunities at product companies.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className="availability" aria-label="Work availability">
            {AVAILABILITY.map((item) => (
              <span
                key={item.label}
                className={`availability-chip${"highlight" in item && item.highlight ? " availability-chip--highlight" : ""}`}
              >
                <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i> {item.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-grid">
            <a className="contact-card glass" href={`mailto:${SITE.email}`} aria-label={`Email ${SITE.name}`}>
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <span className="contact-label">Email</span>
              <span className="contact-value">{SITE.email}</span>
            </a>
            <button
              type="button"
              className="contact-card glass contact-card--copy"
              onClick={copyPhone}
              aria-label="Copy phone number to clipboard"
            >
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span className="contact-label">
                Phone <span className="copy-hint">Click to copy</span>
              </span>
              <span className="contact-value">{SITE.phone}</span>
            </button>
            <a
              className="contact-card glass"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">{SITE.linkedinHandle}</span>
            </a>
            <a
              className="contact-card glass"
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">{SITE.githubHandle}</span>
            </a>
            <div className="contact-card glass contact-card-static">
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              <span className="contact-label">Location</span>
              <span className="contact-value">{SITE.location}</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="contact-cta">
            <a className="btn btn-gradient btn-lg" href={`mailto:${SITE.email}`}>
              <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
              Send me an email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
