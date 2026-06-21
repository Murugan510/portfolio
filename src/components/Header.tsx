import { useEffect, useState, type MouseEvent } from "react";
import { NAV_LINKS } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";
import { useActivity } from "../context/ActivityContext";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { completeQuest } = useActivity();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    const onResize = () => {
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [navOpen]);

  const handleNavClick = () => setNavOpen(false);

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    }
    setNavOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`} role="banner">
      <div className="container header-inner">
        <a className="logo" href="#hero" onClick={(e) => scrollTo(e, "#hero")} aria-label={`${"Murugan Ramakrishnan"} — Home`}>
          <span className="logo-mark">MR</span>
          <span className="logo-text">Murugan</span>
        </a>

        <button
          className={`nav-toggle${navOpen ? " is-active" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          onClick={() => setNavOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="site-nav" className={`site-nav${navOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "is-active" : ""}
              onClick={(e) => scrollTo(e, href)}
            >
              {label}
            </a>
          ))}
          <a className="nav-resume btn btn-gradient btn-sm" href="/assets/resume.pdf" download onClick={handleNavClick}>
            <i className="fa-solid fa-download" aria-hidden="true"></i>
            Resume
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={() => {
              toggleTheme();
              completeQuest("toggle-theme");
            }}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
