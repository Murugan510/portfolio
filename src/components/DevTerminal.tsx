import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { SITE } from "../data/portfolio";
import { useActivity } from "../context/ActivityContext";
import { useTheme } from "../context/ThemeContext";
import { useToast } from "../context/ToastContext";
import { scrollEditorToSection } from "../utils/editorScroll";

interface TerminalLine {
  type: "input" | "output" | "success" | "error" | "system";
  text: string;
}

const WELCOME = [
  "MuruganOS v1.0 — Portfolio Terminal",
  "Type help to see available commands.",
  "Tip: Complete all quests for a surprise 🎯",
];

function scrollToSection(id: string) {
  const sectionId = id.startsWith("#") ? id.slice(1) : id;
  if (scrollEditorToSection(sectionId)) {
    history.pushState(null, "", `#${sectionId}`);
    return true;
  }

  const el = document.querySelector(id.startsWith("#") ? id : `#${id}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id.startsWith("#") ? id : `#${id}`);
    return true;
  }
  return false;
}

export function DevTerminal() {
  const { terminalOpen, setTerminalOpen, completeQuest, allComplete } = useActivity();
  const { toggleTheme } = useTheme();
  const { showToast } = useToast();
  const [lines, setLines] = useState<TerminalLine[]>(
    WELCOME.map((text) => ({ type: "system", text }))
  );
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalOpen) {
      inputRef.current?.focus();
      bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
    }
  }, [terminalOpen, lines]);

  useEffect(() => {
    if (allComplete) {
      setLines((prev) => {
        if (prev.some((l) => l.text.includes("Portfolio Master"))) return prev;
        return [
          ...prev,
          { type: "success", text: "🏆 Achievement unlocked: Portfolio Master!" },
          { type: "success", text: "You explored everything. Murugan would love to work with you." },
        ];
      });
    }
  }, [allComplete]);

  const append = (...newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const parts = cmd.split(/\s+/);
    const command = parts[0];

    append({ type: "input", text: `$ ${raw}` });

    if (cmd === "easter egg") {
      append({
        type: "output",
        text: "Konami code: ↑ ↑ ↓ ↓ ← → ← → B A\nUnlocks a secret section for true explorers.",
      });
      return;
    }

    switch (command) {
      case "":
        break;

      case "help":
        append({
          type: "output",
          text: [
            "Commands:",
            "  whoami        → about Murugan",
            "  skills        → tech stack",
            "  goto <section>→ jump (projects, contact, skills…)",
            "  projects      → featured work",
            "  experience    → career timeline",
            "  contact       → email & socials",
            "  resume        → download CV",
            "  theme toggle  → dark / light mode",
            "  hire          → let's talk!",
            "  copilot       → hint: use sidebar AI",
            "  easter egg    → konami code hint",
            "  clear         → clear terminal",
            "  exit          → close terminal",
          ].join("\n"),
        });
        break;

      case "clear":
        setLines([]);
        break;

      case "exit":
      case "quit":
        setTerminalOpen(false);
        break;

      case "whoami":
        completeQuest("run-whoami");
        append({
          type: "output",
          text: [
            SITE.name,
            SITE.title,
            SITE.location,
            "",
            SITE.tagline,
            "",
            `Stack: ${SITE.typingPhrases.join(" · ")}`,
          ].join("\n"),
        });
        break;

      case "skills":
        scrollToSection("#skills");
        append({ type: "output", text: "Scrolling to skills…" });
        break;

      case "projects":
        completeQuest("explore-projects");
        scrollToSection("#projects");
        append({
          type: "output",
          text: "Featured: Ninja Kisan · Snippets · Reels Player\nScrolling to projects…",
        });
        break;

      case "experience":
        scrollToSection("#experience");
        append({ type: "output", text: "Scrolling to experience…" });
        break;

      case "contact":
        append({
          type: "output",
          text: [
            `Email:    ${SITE.email}`,
            `Phone:    ${SITE.phone}`,
            `LinkedIn: ${SITE.linkedin}`,
            `GitHub:   ${SITE.github}`,
          ].join("\n"),
        });
        scrollToSection("#contact");
        break;

      case "resume":
        completeQuest("download-resume");
        append({ type: "success", text: "Downloading resume.pdf…" });
        window.open("/assets/resume.pdf", "_blank");
        break;

      case "theme":
        toggleTheme();
        completeQuest("toggle-theme");
        append({ type: "success", text: "Theme toggled." });
        break;

      case "hire":
        completeQuest("run-hire");
        append({
          type: "success",
          text: "Opening email… Let's build something amazing together!",
        });
        window.location.href = `mailto:${SITE.email}?subject=Let's%20work%20together%20—%20Portfolio%20Terminal&body=Hi%20Murugan%2C%0A%0AI%20found%20your%20portfolio%20and%20completed%20the%20terminal%20quest!%0A%0A`;
        break;

      case "goto":
        if (parts[1]) {
          const section = parts[1].replace("#", "");
          if (section === "projects") completeQuest("explore-projects");
          const ok = scrollToSection(`#${section}`);
          append({
            type: ok ? "output" : "error",
            text: ok ? `Navigated to #${section}` : `Section not found: ${section}`,
          });
        } else {
          append({ type: "error", text: "Usage: goto <section>" });
        }
        break;

      case "copilot":
        append({
          type: "output",
          text: "Open the ✨ Copilot panel in the activity bar (left sidebar) to chat with Murugan's AI assistant.",
        });
        break;

      case "sudo":
        if (parts.slice(1).join(" ") === "hire me") {
          completeQuest("run-hire");
          append({ type: "success", text: "Permission granted. You're clearly a senior engineer. 😄" });
          showToast("sudo hire me — nice touch!");
        } else {
          append({ type: "error", text: "Murugan is not in the sudoers file." });
        }
        break;

      case "npm":
        if (parts[1] === "run" && parts[2] === "hire") {
          completeQuest("run-hire");
          append({ type: "success", text: "> hiring@murugan --immediate\nProcess started ✓" });
        } else {
          append({ type: "error", text: "Missing script: try npm run hire" });
        }
        break;

      default:
        append({
          type: "error",
          text: `Command not found: ${command}. Type help for options.`,
        });
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setHistory((h) => [...h, input]);
    setHistoryIndex(-1);
    runCommand(input);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const next = historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(history[next]);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex < 0) return;
      const next = historyIndex + 1;
      if (next >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(history[next]);
      }
    }
  };

  if (!terminalOpen) return null;

  return (
    <div className="terminal-overlay" role="dialog" aria-label="Developer terminal" aria-modal="true">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dots" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="terminal-title">murugan@portfolio ~ %</span>
          <button
            type="button"
            className="terminal-close"
            onClick={() => setTerminalOpen(false)}
            aria-label="Close terminal"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        <div className="terminal-body" ref={bodyRef}>
          {lines.map((line, i) => (
            <pre key={i} className={`terminal-line terminal-line--${line.type}`}>
              {line.text}
            </pre>
          ))}
        </div>

        <form className="terminal-input-row" onSubmit={onSubmit}>
          <span className="terminal-prompt" aria-hidden="true">
            $
          </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command…"
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
