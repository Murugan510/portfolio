import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";

type SoundType = "click" | "tab" | "success" | "konami" | "message";

interface SoundContextValue {
  muted: boolean;
  toggleMute: () => void;
  play: (type?: SoundType) => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);
const MUTE_KEY = "portfolio-sound-muted";

export function SoundProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(() => localStorage.getItem(MUTE_KEY) === "true");
  const ctxRef = useRef<AudioContext | null>(null);
  const reducedMotion = useRef(
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const getCtx = () => {
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };

  const beep = (freq: number, duration: number, type: OscillatorType = "sine", gain = 0.08) => {
    if (muted || reducedMotion.current) return;
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gain;
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      /* audio unavailable */
    }
  };

  const play = useCallback(
    (type: SoundType = "click") => {
      switch (type) {
        case "click":
          beep(520, 0.04);
          break;
        case "tab":
          beep(680, 0.03);
          beep(840, 0.03);
          break;
        case "success":
          beep(523, 0.08);
          setTimeout(() => beep(659, 0.1), 80);
          setTimeout(() => beep(784, 0.12), 160);
          break;
        case "konami":
          [392, 494, 587, 784, 988].forEach((f, i) => setTimeout(() => beep(f, 0.1, "square", 0.06), i * 90));
          break;
        case "message":
          beep(440, 0.05, "triangle", 0.05);
          break;
      }
    },
    [muted]
  );

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      localStorage.setItem(MUTE_KEY, String(next));
      if (!next) play("click");
      return next;
    });
  }, [play]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => {
      reducedMotion.current = mq.matches;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <SoundContext.Provider value={{ muted, toggleMute, play }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
