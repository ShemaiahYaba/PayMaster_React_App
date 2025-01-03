import React, { useState, useEffect } from "react";
import Header from "../Header.tsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const handleLogIn = () => {
    navigate("/login");
  };
  const handleGoBack = () => {
    navigate("/signup");
  };

  const [code, setCode] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(300);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else {
      setIsDisabled(true); // Disable input when timer ends
    }
  }, [timer]);

  const handleChange = (event, index) => {
    const value = event.target.value;
    if (/^[0-9]?$/.test(value)) {
      // Allow only digits or empty string
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 5) {
        const nextInput = document.getElementById(`digit-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      } else {
        // Once all digits are filled, send the PIN to the backend
        sendPinToBackend(newCode.join(""));
        console.log("Verification code entered:", newCode.join("")); // Log the code here
      }
    }
  };
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]!.focus(); // Move focus to the previous input
      }
    }
  };

  // Function to send PIN to backend
  const sendPinToBackend = (pin) => {
    const payload = { pin };
    //  fetch
    fetch("/api/verify-pin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/login");
        // Handle success (e.g., navigate to the next page)
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // If you're using Axios
    axios
      .post("/api/verify-pin", payload)
      .then((response) => {
        console.log("Success:", response.data);
        // Handle success (e.g., navigate to the next page)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <div
        className={
          isInputFocused
            ? "flex flex-col min-h-screen justify-between px-2 py-2"
            : "flex flex-col min-h-screen justify-between px-2 py-4"
        }
      >
        <div>
          <Header title="Verification" onBackClick={handleGoBack} />
        </div>
        <div
          className={
            isInputFocused
              ? "flex flex-col items-center space-y-1"
              : "flex flex-col items-center space-y-4"
          }
        >
          <div className={isInputFocused ? "mt-0" : "mt-28"}>
            <h2 className="tracking-tighter text-5xl text-left bg-transparent  ">
              Enter your Verification Code
            </h2>{" "}
            <br />
            <div className="flex justify-evenly items-center space-x-1 mb-3">
              {code.map((digit, index) => (
                <input
                  key={index}
                  id={`digit-${index}`}
                  type="text"
                  className="w-14 h-16 text-center rounded-xl focus:border-black"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={digit}
                  onChange={(event) => handleChange(event, index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  disabled={isDisabled}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              ))}
            </div>
          </div>

          <div className="px-2">
            <h3 className="font-bold">{formatTime()}</h3>
            <p className="text-left font-regular text-lg tracking-tight leading-6">
              We send Verification code to your email
              <span className="text-[black] font-bold tracking-tight">
                {" "}
                something@gmail.com.
              </span>{" "}
              You can check your inbox
            </p>
            <h3 className="text-xl underline text-left tracking-tighter py-2 text-black font-bold mb-3.5">
              {" "}
              I did not receive the code? Send again{" "}
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center px-3">
          <button
            type="submit"
            className="w-full border-none rounded-2xl bg-[black] text-white py-3 text-lg font-semibold"
            onClick={handleLogIn}
            disabled={isDisabled}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};

export default Verification;
