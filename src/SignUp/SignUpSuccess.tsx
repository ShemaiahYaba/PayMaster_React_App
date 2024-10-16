import "../SetupAccount.css";
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
    <div className="flex flex-col items-center justify-center bg-white -mt-8">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Checkmark Circle */}
        <div
          className="flex items-center justify-center w-20 h-20 bg--500 rounded-full"
          style={{
            backgroundColor: "#00A86B",
          }}
        >
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
      {/* Continue Button */}
      <button
        style={{
          marginTop: "-50px",
          marginBottom: "30px",
          backgroundColor: "black",
          color: "white",
          padding: "15px 140px", // Adjusted padding for a balanced look
          fontSize: "18px", // Adjusted font size for better fit
          border: "none",
          borderRadius: "18px",
          fontWeight: "bold",
        }}
        onClick={handleContinue} // Handle the click event
      >
        Continue
      </button>
    </div>
  );
};

export default SuccessMessage;
