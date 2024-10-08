import React, { useState, useEffect } from "react";
import "./V.css";


import axios from 'axios'; 

const Verification = () => {
    const [code, setCode] = useState(new Array(6).fill(""));
    const [timer, setTimer] = useState(300);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setIsDisabled(true); // Disable input when timer ends
        }
    }, [timer]);

    const handleChange = (value, index) => {
        if (/^[0-9]$/.test(value)) { // Allow only digits
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (index < 5) {
                document.getElementById(`digit-${index + 1}`).focus();
            } else {
                // Once all digits are filled, send the PIN to the backend
                sendPinToBackend(newCode.join(""));
            }
        }
    };

    // Function to send PIN to backend
    const sendPinToBackend = (pin) => {
        const payload = { pin }; 
        //  fetch
        fetch('/api/verify-pin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success (e.g., navigate to the next page)
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        // If you're using Axios
        axios.post('/api/verify-pin', payload)
            .then(response => {
                console.log('Success:', response.data);
                // Handle success (e.g., navigate to the next page)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="body">
        <div className="hd1">
          <h3 className="hd2"><b> ← </b></h3>
          <h3 className="hd3">Verification</h3>
        </div>
        
        <div className="container1">
          <div className="container">
            <div className="ab">
              <h2 className="h2Verify">Enter your Verification Code</h2> <br /> <br />
        
              <div className="code-inputs">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    id={`digit-${index}`}
                    type="text"
                    className="code-input"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    disabled={isDisabled}
                  />
                ))}
              </div>
            </div>
        
            <div className="timer">
              <p>
                Time remaining: <span>{formatTime()}</span>
              </p>
            </div>
            <div>
            <h4 className="verifyCode1">
              We send Verification code to your email
              <span className="under"> Something@gmail.com.</span> You can check your inbox
            </h4>
            <h3 className="Resend-code">
              {" "}
              I did not receive the code? send again{" "}
            </h3>
          </div>
          <button
            className="verify-button"
            disabled={isDisabled || code.includes("")}
          >
            Verify
          </button>
          </div>
         
        </div>
        </div>
    );
};

export default Verification;
