import React, { createContext, useContext, useState, ReactNode } from "react";

interface CurrencyContextType {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
}

// Create the context with a default value of null
const CurrencyContext = createContext<CurrencyContextType | null>(null);

// Create a provider component
export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN"); // Default currency

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, setSelectedCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom hook to use the Currency context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === null) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
