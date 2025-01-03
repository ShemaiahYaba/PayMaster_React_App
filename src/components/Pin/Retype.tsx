import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePin } from "../../contexts/PinContext.tsx"; // Correctly import usePin
import "./pin.css";

const Retype = () => {
  const { pin1 } = usePin(); // PIN from the first page
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

  // Validates the PIN when all digits are entered
  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      if (pin.join("") === pin1) {
        // If PINs match, navigate to the success page
        setTimeout(() => {
          navigate("/signupsuccess");
        }, 500);
      } else {
        alert("Pins do not match!");
        navigate("/pin");
      }
    }
  }, [pin, pin1, navigate]);

  // Navigate back to the first PIN page
  const handleGoBack = () => {
    navigate("/pin");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[black] font-bold">Confirm your PIN</h1>
        <div className="flex justify-evenly items-center space-x-1 mb-3">
          {pin.map((digit, index) => (
            <input
              key={index}
              type="password"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center rounded-xl border-[black]"
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Retype;
