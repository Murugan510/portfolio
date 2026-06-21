import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

function formatValue(value: number, suffix: string, decimals: number) {
  return decimals > 0 ? value.toFixed(decimals) + suffix : Math.round(value) + suffix;
}

export function useCounter({ target, suffix = "", decimals = 0 }: CounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState("0" + suffix);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(formatValue(target, suffix, decimals));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animated.current) return;
        animated.current = true;

        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(formatValue(target * eased, suffix, decimals));
          if (progress < 1) requestAnimationFrame(tick);
          else setDisplay(formatValue(target, suffix, decimals));
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);

  return { ref, display };
}
