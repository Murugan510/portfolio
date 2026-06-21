import { useState, type CSSProperties } from "react";
import { QUESTS, useActivity } from "../context/ActivityContext";

export function QuestWidget() {
  const { toggleTerminal, completed, progress, allComplete } = useActivity();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`quest-widget${expanded ? " is-expanded" : ""}`}>
      <button
        type="button"
        className="quest-fab"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        aria-label={expanded ? "Close quest panel" : "Open portfolio quest"}
      >
        <span className="quest-fab-ring" style={{ "--progress": progress } as CSSProperties}>
          <i className={`fa-solid ${allComplete ? "fa-trophy" : "fa-gamepad"}`} aria-hidden="true"></i>
        </span>
        {!expanded && !allComplete && <span className="quest-fab-pulse" aria-hidden="true"></span>}
      </button>

      {expanded && (
        <div className="quest-panel glass">
          <div className="quest-panel-header">
            <div>
              <p className="quest-panel-title">
                {allComplete ? "Quest Complete!" : "Portfolio Quest"}
              </p>
              <p className="quest-panel-sub">
                {allComplete
                  ? "You explored like a true engineer."
                  : `${progress}% explored — try the terminal`}
              </p>
            </div>
            <span className="quest-progress-badge">{progress}%</span>
          </div>

          <ul className="quest-list">
            {QUESTS.map((quest) => {
              const done = completed.has(quest.id);
              return (
                <li key={quest.id} className={`quest-item${done ? " is-done" : ""}`}>
                  <span className="quest-check" aria-hidden="true">
                    {done ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-circle"></i>}
                  </span>
                  <div>
                    <p className="quest-label">{quest.label}</p>
                    {!done && <p className="quest-hint">{quest.hint}</p>}
                  </div>
                </li>
              );
            })}
          </ul>

          <button type="button" className="btn btn-gradient btn-sm quest-terminal-btn" onClick={toggleTerminal}>
            <i className="fa-solid fa-terminal" aria-hidden="true"></i>
            Open Terminal <kbd>`</kbd>
          </button>
        </div>
      )}
    </div>
  );
}
