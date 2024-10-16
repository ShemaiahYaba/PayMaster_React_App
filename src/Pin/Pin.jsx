// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pin.css"; // Importing custom CSS for styling
import { usePin } from "../PinContext"; // Importing context for sharing PIN data across pages
import PropTypes from "prop-types";

const Pin = () => {
  const { setPin1 } = usePin(); // Getting the setPin1 function from PinContext to store the entered PIN
  const [pin, setPin] = useState(["", "", "", ""]); // State to hold the 4-digit PIN as an array of individual digits
  const [activeInput, setActiveInput] = useState(0); // State to keep track of which input field is currently active
  const inputRefs = useRef([]); // Reference array for the input fields, used to manage focus
  const [keyboardVisible, setKeyboardVisible] = useState(true); // State to show/hide the custom keyboard
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate between pages

  // Function to handle user input from the custom keyboard
  const handleCustomKeyboardInput = (value) => {
    const newPin = [...pin]; // Creating a copy of the current pin state
    if (value === "delete") {
      // If 'delete' is pressed, clear the current input and move back to the previous input (if not on the first input)
      if (pin[activeInput] === "" && activeInput > 0) {
        setActiveInput(activeInput - 1);
      }
      newPin[activeInput] = "";
    } else {
      // If a number is pressed, update the current active input with the value and move to the next input (if not the last input)
      newPin[activeInput] = value;
      if (activeInput < pin.length - 1) {
        setActiveInput(activeInput + 1);
      }
    }
    setPin(newPin); // Update the state with the new pin array
  };

  // Effect hook to check when the entire 4-digit PIN has been entered
  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      // If all PIN digits are entered (none are empty)
      setTimeout(() => {
        const enteredPin = pin.join(""); // Combine the PIN digits into a single string
        setPin1(enteredPin); // Save the complete PIN in the PinContext to share it between pages
        navigate("/retype"); // Navigate to the next page where the user will re-enter the PIN
      }, 500); // Wait 500ms before navigating (allows for a smoother UX)
    }
  }, [pin, navigate, setPin1]); // This effect depends on the PIN, navigate, and setPin1 function

  // Function to handle the user's click on an input field, activating the respective input
  const handleInputClick = (index) => {
    setActiveInput(index); // Set the clicked input field as the active one
    setKeyboardVisible(true); // Show the custom keyboard when the input is active
  };

  return (
    <div className="container">
      {/* Title and prompt for the user */}
      <h2 className="bg-transparent text-[black] font-bold">
        Let&apos;s setup your PIN
      </h2>

      {/* PIN input fields */}
      <div className="pin-container">
        {pin.map((digit, index) => (
          <input
            key={index}
            type="password" // Set to password type to hide the entered digits
            value={digit}
            readOnly // The user cannot type directly, they will use the custom keyboard
            onClick={() => handleInputClick(index)} // Clicking an input field will activate it
            className="pin-input rounded-lg border-[black]" // Styling for the input fields
            ref={(el) => (inputRefs.current[index] = el)} // Storing the input reference for later use (optional, for focus handling)
          />
        ))}
      </div>

      {/* Render custom keyboard if visible */}
      {keyboardVisible && (
        <CustomKeyboard onKeyPress={handleCustomKeyboardInput} /> // Custom keyboard to handle PIN input
      )}
    </div>
  );
};

// Custom Keyboard component

const CustomKeyboard = ({ onKeyPress }) => {
  const handleKeyClick = (key) => {
    onKeyPress(key); // Call the onKeyPress function (passed as a prop) when a key is pressed
  };

  return (
    <div className="keyboard-container">
      {/* First row of keys (1, 2, 3) */}
      <div className="keyboard-row">
        {[1, 2, 3].map((key) => (
          <button
            key={key}
            className="keyboard-key rounded-xl"
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Second row of keys (4, 5, 6) */}
      <div className="keyboard-row">
        {[4, 5, 6].map((key) => (
          <button
            key={key}
            className="keyboard-key rounded-xl"
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Third row of keys (7, 8, 9) */}
      <div className="keyboard-row">
        {[7, 8, 9].map((key) => (
          <button
            key={key}
            className="keyboard-key rounded-xl"
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Fourth row with the delete button and 0 */}
      <div className="keyboard-row">
        <button
          className="keyboard-key rounded-xl"
          onClick={() => handleKeyClick("delete")}
        >
          Delete
        </button>
        <button
          className="keyboard-key rounded-xl"
          onClick={() => handleKeyClick(0)}
        >
          0
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
CustomKeyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired, // onKeyPress is a required function prop
};

export default Pin;
