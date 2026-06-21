import { useEffect, useState } from "react";
import { SITE } from "../data/portfolio";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{SITE.name}</p>
          <p className="footer-role">{SITE.title}</p>
          <p className="footer-built">
            Built with <i className="fa-brands fa-react" aria-hidden="true"></i> React.js &amp; TypeScript
          </p>
        </div>
        <button
          className={`back-to-top${showBackToTop ? " is-visible" : ""}`}
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
          Back to Top
        </button>
      </div>
      <div className="container footer-bottom">
        <p>
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
