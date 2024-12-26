import React, { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleGoBack = () => {
    navigate("/login"); // Navigate back to the previous page
  };

  const handleEmailSent = () => {
    if (validateEmail(email)) {
      navigate("/ForgotPasswordEmailSent");
    } else {
      setError("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(""); // Clear error when user starts typing
  };

  return (
    <div className="flex flex-col min-h-screen justify-between py-4">
      <div>
        <Header title="Forgot Password" onBackClick={handleGoBack} />
      </div>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-left mb-4 font-bold text-gray-900 tracking-tight">
          Don’t worry.
          <br />
          Enter your email and we’ll send you a link to reset your password.
        </h1>

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className=" w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black] border-none rounded-2xl mb-2"
          placeholder="Email"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div className="flex flex-col items-center px-4">
        <button
          type="submit"
          className="w-full border-none rounded-2xl bg-[black] text-white py-3 text-lg font-semibold"
          onClick={handleEmailSent}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
