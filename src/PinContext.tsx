import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type of the context state
type PinContextType = {
  pin1: string;
  setPin1: (pin: string) => void;
};

// Create the context with an initial value
const PinContext = createContext<PinContextType | undefined>(undefined);

// Custom hook to use the PinContext
export const usePin = () => {
  const context = useContext(PinContext);
  if (!context) {
    throw new Error("usePin must be used within a PinProvider");
  }
  return context;
};

// Provider component
export const PinProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pin1, setPin1] = useState<string>("");

  return (
    <PinContext.Provider value={{ pin1, setPin1 }}>
      {children}
    </PinContext.Provider>
  );
};
