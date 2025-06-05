import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pin.css";
import { usePin } from "../../contexts/PinContext.tsx";
import { auth, db } from "../../utils/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import ToastMessage from "../ToastMessage.tsx";

const EnterPin = () => {
  const [error, setError] = useState("");
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

  // Checks if all digits are entered and validates the PIN
  useEffect(() => {
    const validatePin = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const storedPin = userDoc.data().pin;
          if (storedPin === pin.join("")) {
            setError("PIN validated successfully!");
            alert("PIN validated successfully!"); // Show success message
            navigate("/home"); // Navigate to the home page
          } else {
            setError("Invalid PIN. Please try again.");
            alert("Invalid PIN. Please try again."); // Show error message
            setPin1(""); // Clear the stored PIN in context
            setPin(["", "", "", ""]); // Clear the PIN input
            inputRefs.current[0]?.focus(); // Focus on the first input
          }
        } else {
          setError("User data not found.");
          alert("User data not found."); // Show error message
          setPin1(""); // Clear the stored PIN in context
        }
      } else {
        setError("User not authenticated.");
        alert("User not authenticated."); // Show error message
        setPin1(""); // Clear the stored PIN in context
        navigate("/login"); // Navigate to the login page
      }
    };

    if (pin.every((digit) => digit !== "")) {
      setTimeout(validatePin, 500);
    }
  }, [pin, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[black] font-bold">Enter your pin</h1>
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

export default EnterPin;
