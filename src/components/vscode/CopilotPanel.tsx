import { useState, useRef, useEffect, type FormEvent } from "react";
import { COPILOT_SUGGESTIONS, getCopilotResponse } from "../../data/copilot";
import { useSound } from "../../context/SoundContext";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export function CopilotPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm Murugan's AI copilot. Ask me about his experience, stack, projects, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { play } = useSound();

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const streamResponse = (text: string) => {
    setTyping(true);
    setMessages((prev) => [...prev, { role: "assistant", text: "" }]);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", text: text.slice(0, i) };
        return copy;
      });
      if (i >= text.length) {
        clearInterval(interval);
        setTyping(false);
        play("message");
      }
    }, 12);
  };

  const ask = (question: string) => {
    if (!question.trim() || typing) return;
    play("click");
    setMessages((prev) => [...prev, { role: "user", text: question.trim() }]);
    setInput("");
    setTimeout(() => streamResponse(getCopilotResponse(question)), 300);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <div className="copilot-panel">
      <div className="copilot-header">
        <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
        <span>Copilot</span>
        <span className="copilot-badge">AI</span>
      </div>

      <div className="copilot-suggestions">
        {COPILOT_SUGGESTIONS.map((s) => (
          <button key={s} type="button" className="copilot-chip" onClick={() => ask(s)} disabled={typing}>
            {s}
          </button>
        ))}
      </div>

      <div className="copilot-messages" ref={bodyRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`copilot-msg copilot-msg--${msg.role}`}>
            {msg.role === "assistant" && (
              <span className="copilot-avatar" aria-hidden="true">
                <i className="fa-solid fa-robot"></i>
              </span>
            )}
            <p>{msg.text}{typing && i === messages.length - 1 && msg.role === "assistant" && (
              <span className="copilot-cursor">▋</span>
            )}</p>
          </div>
        ))}
      </div>

      <form className="copilot-input-row" onSubmit={onSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Murugan..."
          disabled={typing}
          aria-label="Copilot message"
        />
        <button type="submit" disabled={typing || !input.trim()} aria-label="Send">
          <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
}
