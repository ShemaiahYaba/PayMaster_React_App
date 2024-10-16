import { useState } from "react";
import "../Header.css";
import { FaArrowLeft } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/pin");
  };

  const [name, setName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [error, setError] = useState(""); // For error message display

  const handleSignUpSuccess = (e) => {
    e.preventDefault(); // Prevent form submission for validation
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!accountType) {
      setError("Please select an account type.");
      return;
    }

    // If validation passes, navigate to the signup success page
    setError(""); // Clear error if both fields are filled
    navigate("/signupsuccess");
  };

  return (
    <div className="account-container bg-[black]">
      {/* Header Section */}
      <div className="header">
        <button
          onClick={handleGoBack}
          className="back-button absolute top-4 left-4 text-white"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="header-title">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-semibold tracking-tight back-button absolute top-3 left-20 right-20 text-white">
              Add new account
            </h2>
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="relative top-60 px-4 py-16">
        <p className="text-gray-300 font-semibold">Balance</p>
        <p className="font-semibold text-7xl">₦ 0.00</p>
      </div>

      {/* Form Section */}
      <form className="account-form" onSubmit={handleSignUpSuccess}>
        <div className="form-group">
          <input
            type="text"
            className="text-black rounded-2xl focus:ring-black"
            placeholder="Name"
            required
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on input change
          />
        </div>
        <div className="form-group">
          <select
            className="text-black rounded-2xl focus:ring-black"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)} // Update state on selection change
          >
            <option value="" disabled>
              Account type
            </option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>

        {/* Display error message if validation fails */}
        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="continue-button font-semibold rounded-2xl bg-[black]"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Account;
