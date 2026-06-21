import { useEffect, useRef, useState, type ReactNode } from "react";
import { getEditorScrollContainer } from "../utils/editorScroll";

/** Intersection Observer scroll-reveal wrapper */
export function Reveal({
  children,
  className = "",
  delay,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
  /** Skip scroll-reveal — use for above-the-fold VS Code content */
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const root = getEditorScrollContainer();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        root: root ?? null,
        threshold: 0.12,
        rootMargin: root ? "0px 0px -8% 0px" : "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    if (root) {
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const rootRect = root.getBoundingClientRect();
        if (rect.top < rootRect.bottom && rect.bottom > rootRect.top) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }

    return () => observer.disconnect();
  }, [immediate]);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}

/** Renders text with **bold** markers as <strong> */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </>
  );
}
