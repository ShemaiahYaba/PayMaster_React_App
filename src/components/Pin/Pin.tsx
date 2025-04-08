import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pin.css";
import { usePin } from "../../contexts/PinContext.tsx";

const Pin = () => {
  const { setPin1 } = usePin(); // Context function to store the entered PIN
  const [pin, setPin] = useState(["", "", "", ""]); // 4-digit PIN stored as an array
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // References for the input fields
  const navigate = useNavigate();

  // Handles changes in the input fields
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newPin = [...pin];
    if (/^[0-9]?$/.test(value)) {
      // Allow only numeric input
      newPin[index] = value;
      setPin(newPin);
      if (value && index < pin.length - 1) {
        inputRefs.current[index + 1]?.focus(); // Move focus to the next input
      }
    }
  };

  // Handles backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move focus to the previous input
    }
  };

  // Checks if all digits are entered and navigates to the next page
  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      setTimeout(() => {
        setPin1(pin.join("")); // Save PIN to context
        navigate("/retype"); // Navigate to the retype page
      }, 500);
    }
  }, [pin, navigate, setPin1]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[black] font-bold">Let&apos;s setup your pin</h1>
      <div className="flex justify-evenly items-center space-x-2 mb-3">
        {pin.map((digit, index) => (
          <input
            key={index}
            type="password"
            value={digit}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-14 h-14 text-center rounded-xl border border-black"
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Pin;
