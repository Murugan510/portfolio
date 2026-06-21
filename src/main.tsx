import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastContext";
import { ActivityProvider } from "./context/ActivityContext";
import { ViewModeProvider } from "./context/ViewModeContext";
import { SoundProvider } from "./context/SoundContext";
import "./index.css";
import "./vscode.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ToastProvider>
        <ActivityProvider>
          <SoundProvider>
            <ViewModeProvider>
              <App />
            </ViewModeProvider>
          </SoundProvider>
        </ActivityProvider>
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>
);
