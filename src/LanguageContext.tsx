import React, { createContext, useContext, useState, ReactNode } from "react";

interface LanguageContextType {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

// Create the context with a default value of null
const LanguageContext = createContext<LanguageContextType | null>(null);

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English"); // Default Language

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
