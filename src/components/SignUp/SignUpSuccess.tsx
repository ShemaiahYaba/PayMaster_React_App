// import "../SetupAccount.css";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface SuccessMessageProps {
  onContinue?: () => void; // Optional function to handle continue button click
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onContinue }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleContinue = () => {
    if (onContinue) {
      onContinue(); // Call the onContinue function if provided
    }
    navigate("/home"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col min-h-screen justify-start items-center py-8">
      {/* Top Section */}
      <div className="flex-grow"></div>
      <div className="flex flex-col items-center mt-8">
        {/* Checkmark Circle */}
        <div className="bg-[#00A86B] flex items-center justify-center w-20 h-20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {/* Success Message Text */}
        <h1 className="mt-4 text-2xl font-bold text-gray-800">You are set!</h1>
      </div>
      {/* Spacer */}
      <div className="flex-grow"></div>
      {/* Bottom Section */}
      <div className="w-full px-4">
        <button
          type="submit"
          className="w-full border-none rounded-2xl bg-[black] text-white py-3 text-lg font-semibold"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
