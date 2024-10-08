import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./pin.css";


const Pin = () => {
  const [pin, setPin] = useState(["", "", "", ""]); 
  const [activeInput, setActiveInput] = useState(0); 
  const inputRefs = useRef([]);
  const [keyboardVisible, setKeyboardVisible] = useState(false); 
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
    if (pin.every(digit => digit !== "")) {
      
      setTimeout(() => {
        navigate('/retype'); 
      }, 500); 
    }
  }, [pin, navigate]);


  const handleInputClick = (index) => {
    setActiveInput(index); 
    setKeyboardVisible(true); 
  };

  return (
    <div className="container">
      <h2 className="headerPin">Let's setup your PIN</h2>
      <div className="pin-container">
        {pin.map((digit, index) => (
          <input
            key={index}
            type="password"
            value={digit}
            readOnly 
            onClick={() => handleInputClick(index)}
            className="pin-input"
            ref={(el) => (inputRefs.current[index] = el)} 
          />
        ))}
      </div>

      {/* Render custom keyboard if visible */}
      {keyboardVisible && (
        <CustomKeyboard onKeyPress={handleCustomKeyboardInput} />
      )}
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
          <button key={key} className="keyboard-key" onClick={() => handleKeyClick(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {[4, 5, 6].map((key) => (
          <button key={key} className="keyboard-key" onClick={() => handleKeyClick(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {[7, 8, 9].map((key) => (
          <button key={key} className="keyboard-key" onClick={() => handleKeyClick(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        <button className="keyboard-key" onClick={() => handleKeyClick("delete")}>
          Delete
        </button>
        <button className="keyboard-key" onClick={() => handleKeyClick(0)}>
          0
        </button>
      </div>
    </div>
  );
};

export default Pin;
