import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { usePin } from "../PinContext"; // Correctly import usePin
import "./pin.css";
import { FaArrowLeft } from "react-icons/fa";

const Retype = () => {
  const { pin1 } = usePin(); // Change previousPin to pin1
  const [pin, setPin] = useState(["", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const navigate = useNavigate();

  const handleCustomKeyboardInput = (value) => {
    const newPin = [...pin];
    if (value === "delete") {
      if (pin[activeInput] === "" && activeInput > 0) {
        setActiveInput(activeInput - 1);
      }
      newPin[activeInput] = "";
    } else {
      newPin[activeInput] = value;
      if (activeInput < pin.length - 1) {
        setActiveInput(activeInput + 1);
      }
    }
    setPin(newPin);
  };

  useEffect(() => {
    if (pin.every((digit) => digit !== "")) {
      if (pin.join("") === pin1) {
        // Compare with pin1
        setTimeout(() => {
          navigate("/signupsuccess");
        }, 500);
      } else {
        alert("Pins do not match!");
      }
    }
  }, [pin, pin1, navigate]);

  const handleInputClick = (index) => {
    setActiveInput(index);
    setKeyboardVisible(true);
  };

  const handleGoBack = () => {
    navigate("/pin");
  };

  return (
    <div className="">
      <button
        onClick={handleGoBack}
        className="back-button absolute top-4 left-4 text-black"
      >
        <FaArrowLeft size={20} />
      </button>
      <div className="container">
        <h2 className="bg-transparent text-[black] font-bold">
          Confirm your PIN
        </h2>
        <div className="pin-container">
          {pin.map((digit, index) => (
            <input
              key={index}
              type="password"
              value={digit}
              readOnly
              onClick={() => handleInputClick(index)}
              className="pin-input rounded-lg border-[black]"
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        {keyboardVisible && (
          <CustomKeyboard onKeyPress={handleCustomKeyboardInput} />
        )}
      </div>
    </div>
  );
};

const CustomKeyboard = ({ onKeyPress }) => {
  const handleKeyClick = (key) => {
    onKeyPress(key);
  };

  return (
    <div className="keyboard-container">
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

CustomKeyboard.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
};

export default Retype;
