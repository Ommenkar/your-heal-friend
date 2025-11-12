import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark">
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
