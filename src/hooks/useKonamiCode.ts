import { useEffect } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(onUnlock: () => void) {
  useEffect(() => {
    let index = 0;

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[index];
      const expectedKey = expected.length === 1 ? expected.toLowerCase() : expected;

      if (key === expectedKey) {
        index++;
        if (index === SEQUENCE.length) {
          index = 0;
          onUnlock();
        }
      } else {
        index = key === (SEQUENCE[0].length === 1 ? SEQUENCE[0].toLowerCase() : SEQUENCE[0]) ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);
}
