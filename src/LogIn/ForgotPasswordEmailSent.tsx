import React from "react";
import Img_03 from "../assets/Image_03.png";
import { useNavigate } from "react-router-dom";

function ForgotPasswordEmailSent() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/LogIn"); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white px-4 py-8">
      <div className="mb-5">
        <div className="flex flex-col items-center mb-20 -mt-5">
          <div>
            <img src={Img_03} alt="email" />
          </div>
          {/* Message */}
          <div
            style={{
              marginBottom: "70px",
            }}
          >
            <h3 className="text-center font-semibold text-gray-900 tracking-tight py-2">
              Your email is on the way
            </h3>
            <p className="text-lg text-center font-medium text-gray-900 tracking-tighter leading-6">
              Check your email test@test.com and follow the instructions to
              reset your password
            </p>
          </div>
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
            onClick={handleLogIn}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default ForgotPasswordEmailSent;
