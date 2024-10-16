import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login"); // Navigate back to the previous page
  };

  const handleEmailSent = () => {
    navigate("/ForgotPasswordEmailSent");
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white px-4 py-8">
      <div className="header">
        {/* Back Arrow */}
        <button
          onClick={handleGoBack}
          className="back-button absolute top-4 left-4 text-black"
        >
          <FaArrowLeft size={20} />
        </button>
        {/* Page Title */}
        <div className="header-title ">
          <h1
            className="back-button absolute top-3 left-20 right-14 text-black font-bold"
            style={{}}
          >
            Forgot Password
          </h1>
        </div>
      </div>

      <div className="w-full max-w-sm mx-auto">
        {/* Message */}
        <div
          style={{
            marginBottom: "70px",
            fontSize: "45px",
            fontWeight: "bold",
            marginTop: "-50px",
          }}
        >
          <h1 className="text-left mb-4 font-bold text-gray-900 tracking-tight">
            Don’t worry.
            <br />
            Enter your email and we’ll send you a link to reset your password.
          </h1>
        </div>

        {/* Email Input */}
        <form className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className="block w-full p-4 text-sm border focus:outline-none focus:ring-2 focus:ring-[black]"
              style={{
                border: "none",
                borderRadius: "18px",
              }}
            />
          </div>

          {/* Continue Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[black] text-white py-3 text-lg font-semibold"
              style={{
                border: "none",
                borderRadius: "15px",
              }}
              onClick={handleEmailSent}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
