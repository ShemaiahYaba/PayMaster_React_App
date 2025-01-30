import React, { useState } from "react";
import Header from "../Header";
import "../../utils/ImageDeclaration.d.ts";
import { useNavigate, useLocation } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import img01 from "../../assets/transaction.png";

const Transfer = () => {
  const navigate = useNavigate();

  //Process transfer function
  const handleTransfer = () => {};

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
    <div className="flex flex-col h-screen py-2 bg-black text-white">
      {/* Header Section */}
      <div>
        <Header title="Transfer" onBackClick={handleGoBack}></Header>{" "}
      </div>
      <div className="flex flex-col items-start px-4 py-2">
        <div className="flex-grow py-12"></div>
        <p className="text-gray-300 text-xl">How much ?</p>
        <div className="flex flex-row items-center -mt-4">
          <TbCurrencyNaira size={100} className="text-white" />
          <div className="font-bold text-5xl px-2">
            <input
              type="currency"
              className="w-full bg-transparent"
              placeholder="0"
            />{" "}
          </div>
        </div>
      </div>
      <div className=" bottom-1 bg-white text-black flex flex-col px-4 pt-8 pb-6 rounded-t-[40px]">
        <form className="flex flex-col items-center space-y-4 pb-4">
          <div className="flex flex-row items-center space-x-4 relative">
            <div className="z-0 border border-gray-300 rounded-2xl py-4 px-4">
              <input className="w-full" placeholder="From" />
            </div>
            <div className="z-0 border border-gray-300 rounded-2xl py-4 px-4">
              <input className="w-full" placeholder="To" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-[40px] w-12 h-12 z-10 flex flex-row items-center justify-center rounded-full border border-gray-300 bg-white">
              <img src={img01} className="w-8 h-8" />
            </div>
          </div>
          <input
            className="w-full border border-gray-300 rounded-2xl py-4 px-4"
            placeholder="Description"
          />
          <input
            className="w-full border-2 border-dashed border-gray-400 rounded-2xl py-4 text-center"
            placeholder="🔗Add attachment"
            type=""
          />
        </form>
        <button
          className="bg-black text-white font-semibold py-3 my-2 rounded-2xl"
          onClick={handleTransfer}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Transfer;
