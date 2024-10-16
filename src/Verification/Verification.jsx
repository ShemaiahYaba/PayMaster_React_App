import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./V.css";
import "../Header.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  const handleLogIn = () => {
    navigate("/login");
  };
  const handleGoBack = () => {
    navigate(-1);
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

  const handleChange = (value, index) => {
    if (/^[0-9]$/.test(value)) {
      // Allow only digits
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      } else {
        // Once all digits are filled, send the PIN to the backend
        sendPinToBackend(newCode.join(""));
        console.log("Verification code entered:", newCode.join("")); // Log the code here
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
    <div
      className={`flex flex-col justify-center items-center px-1 ${
        isInputFocused ? "mt-4" : "mt-0"
      } transition-all duration-300`}
    >
      <div className="header">
        <button
          onClick={handleGoBack}
          className="back-button absolute top-4 left-4 text-black"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="header-title">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-bold tracking-tight back-button absolute top-3 left-20 right-20 text-black">
              Verification
            </h2>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center space-y-0">
        <div className="mt-10">
          <h2 className="tracking-tighter text-5xl text-left bg-transparent p-2 mt-auto">
            Enter your Verification Code
          </h2>{" "}
          <br />
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                className="code-input focus:border-black"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                disabled={isDisabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <div className="timer">
            <p>
              Time remaining: <span>{formatTime()}</span>
            </p>
          </div>
          <div className="">
            <p className="text-left font-regular text-lg tracking-tight leading-6">
              We send Verification code to your email
              <span className="text-[black] font-bold tracking-tight">
                {" "}
                something@gmail.com.
              </span>{" "}
              You can check your inbox
            </p>
            <h3 className="Resend-code tracking-tighter py-2 text-[black] font-bold mb-3.5">
              {" "}
              I did not receive the code? Send again{" "}
            </h3>
          </div>
        </div>

        <div className="mb-4 bottom-0 left-0 right-0 mt-auto mx-auto font-semibold py-0">
          <button
            type="submit"
            className="rounded-2xl bg-black text-white text-lg py-3.5 px-40 mt-4"
            onClick={handleLogIn}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
