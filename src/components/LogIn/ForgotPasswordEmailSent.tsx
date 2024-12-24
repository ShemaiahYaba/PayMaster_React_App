import React from "react";
import Img_03 from "../../assets/Image_03.png";
import { useNavigate } from "react-router-dom";

function ForgotPasswordEmailSent() {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/LogIn"); // Navigate back to the previous page
  };

  return (
    <div className="flex flex-col min-h-screen justify-between py-8">
      <div className="flex flex-col items-center px-4">
        <img src={Img_03} alt="email" />

        <h3 className="text-center font-semibold text-gray-900 tracking-tight py-2">
          Your email is on the way
        </h3>
        <p className="text-lg text-center font-medium text-gray-900 tracking-tighter leading-6">
          Check your email test@test.com and follow the instructions to reset
          your password
        </p>
      </div>

      {/* Continue Button */}
      <div className="flex flex-col items-center px-4">
        <button
          type="submit"
          className="w-full border-none rounded-2xl bg-[black] text-white py-3 text-lg font-semibold"
          onClick={handleLogIn}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
export default ForgotPasswordEmailSent;
