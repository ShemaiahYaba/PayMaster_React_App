import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CurrencyProvider } from "./CurrencyContext.tsx";
import { LanguageProvider } from "./LanguageContext.tsx";
import { PinProvider } from "./PinContext.tsx";

createRoot(document.getElementById("root")).render(
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
