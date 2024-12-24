import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import eye icons
import { useNavigate } from "react-router-dom";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiTransfer } from "react-icons/bi";
import { FormGroup, Label } from "reactstrap";
import NavBar from "../Home/NavBar.tsx";

const TransferNew = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  const [amount, setAmount] = useState("");
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [description, setDescription] = useState("");
  const [attachment, setAttachment] = useState<string>("");
  const [error, setError] = useState(""); // For error message display

  const handleChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9.]/g, "");
    const formattedValue = formatCurrency(numericValue);
    setAmount(formattedValue);
  };

  const formatCurrency = (value) => {
    // Convert to a float, then format to currency
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) return "";

    return floatValue.toLocaleString("en-NG", {
      style: "currency",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission for validation
    if (!amount) {
      setError("Please enter an amount");
      return;
    }
    if (!sender) {
      setError("Please enter a sender");
      return;
    }
    if (!recipient) {
      setError("Please enter a recipient");
      return;
    }
    if (!description) {
      setError("Please enter a description");
      return;
    }
    if (!attachment) {
      setError("Please select an attachment.");
      return;
    }

    // If validation passes, navigate to the signup success page
    setError(""); // Clear error if both fields are filled
    navigate(""); // Navigate to the appropriate route after submission
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
              Transfer
            </h2>
          </div>
        </div>
      </div>

      {/* Balance Section */}
      <div className="relative top-32 px-4 py-2">
        <p className="text-gray-300 font-semibold">
          How much would you like to transfer?
        </p>
        <div className="flex items-center space-x-2">
          <TbCurrencyNaira className="text-white" size={50} />
          <input
            className="w-full rounded-2xl font-medium text-5xl bg-transparent border-0 focus:ring-0 focus:ring-white active:bg-transparent"
            placeholder="0.00"
            type="text" // Changed from 'float' to 'text'
            required
            id="amount"
            name="amount"
            value={amount}
            onChange={handleChange} // Directly pass handleChange
          />
        </div>
      </div>

      {/* Form Section */}
      <form className="account-form" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <div className="form-group">
            <input
              type="name"
              className="text-black rounded-2xl focus:ring-black"
              placeholder="From"
              required
              id="sender"
              name="sender"
              value={sender}
              onChange={(e) => setSender(e.target.value)} // Update
            />
          </div>
          <BiTransfer size={50} className="text-black border-0 rounded-2xl" />
          <div className="form-group">
            <input
              type="name"
              className="text-black rounded-2xl focus:ring-black"
              placeholder="To"
              required
              id="recipient"
              name="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)} // Update
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="text-black rounded-2xl focus:ring-black"
            placeholder="Description"
            required
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} // Update state on input change
          />
        </div>
        <FormGroup floating>
          <div className="form-group">
            <input
              type="file"
              className="h-24 text-black rounded-2xl focus:ring-black"
              placeholder="Add attachment"
              id="attachment"
              name="attachment"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setAttachment(e.target.files[0].name); // Store the file name
                } else {
                  setAttachment(""); // No file selected, clear the state
                }
              }}
            />
            <Label
              htmlFor="attachment"
              className="absolute left-3 -top-1.5 px-1 -mt-1 text-xs font-medium text-gray-500 bg-white rounded-full"
            >
              Add attachment
            </Label>
          </div>
        </FormGroup>

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

export default TransferNew;
