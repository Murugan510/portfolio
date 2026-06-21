import { useEffect, useState } from "react";
import { BOOT_LINES } from "../../data/vscode";
import { useViewMode } from "../../context/ViewModeContext";

export function BootScreen() {
  const { bootComplete, completeBoot, viewMode } = useViewMode();
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (bootComplete || viewMode !== "vscode") return;

    const timers = BOOT_LINES.map((line) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
      }, line.delay)
    );

    const finishTimer = setTimeout(() => {
      setDone(true);
      setTimeout(completeBoot, 600);
    }, 3400);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [bootComplete, completeBoot, viewMode]);

  if (bootComplete || viewMode !== "vscode") return null;

  return (
    <div className={`boot-screen${done ? " boot-screen--exit" : ""}`} aria-live="polite">
      <div className="boot-screen-inner">
        <div className="boot-logo">
          <i className="fa-solid fa-code" aria-hidden="true"></i>
        </div>
        <div className="boot-lines">
          {visibleLines.map((line, i) => (
            <p key={i} className="boot-line">
              {line}
              {i === visibleLines.length - 1 && !done && (
                <span className="boot-cursor" aria-hidden="true">
                  ▋
                </span>
              )}
            </p>
          ))}
        </div>
        <div className="boot-progress">
          <div className={`boot-progress-bar${done ? " is-full" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}
