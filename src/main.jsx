import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CurrencyProvider } from "./contexts/CurrencyContext.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { PinProvider } from "./contexts/PinContext.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <CurrencyProvider>
      <LanguageProvider>
        <PinProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </PinProvider>
      </LanguageProvider>
    </CurrencyProvider>
  );
}
