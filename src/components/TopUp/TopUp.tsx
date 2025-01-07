import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import Header from "../Header";
const TopUp = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const handleGoBack = () => {
    navigate("/home");
  };
  const handleCard = () => {
    navigate("/top");

    // Fetch balance from the API
    useEffect(() => {
      const fetchBalance = async () => {
        try {
          const response = await fetch("https://api.example.com/balance"); // Replace with your API endpoint
          const data = await response.json();
          setBalance(data.balance); // Update state with fetched balance
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };

      fetchBalance();
    }, []); // Fetch balance only once when the component mounts
  };
  const handleTransfer = () => {
    navigate("/transfer");
  };

  return (
    <div className="flex flex-col h-screen py-2 bg-black text-white overflow-hidden">
      {/* Header Section */}
      <div>
        <Header title="Top Up" onBackClick={handleGoBack}></Header>{" "}
      </div>
      <div className="flex flex-col items-start px-4 py-2">
        <div className="flex-grow py-32"></div>
        <p className="text-gray-300 text-xl">Balance</p>
        <div className="flex flex-row items-center">
          <TbCurrencyNaira className="text-5xl text-white" />
          <p className="font-bold text-6xl">{balance}</p>
        </div>
      </div>
      <div className="bg-white text-black flex flex-col px-4 py-12 rounded-t-[40px]">
        <p className="items-start ml-4 font-bold text-xl -mt-4">
          Select payment method
        </p>
        <button
          className="bg-black text-white font-semibold py-3 my-2 rounded-2xl"
          onClick={handleCard}
        >
          {" "}
          Card
        </button>
        <button
          className="bg-black text-white font-semibold py-3 my-2 rounded-2xl"
          onClick={handleTransfer}
        >
          Transfer
        </button>
      </div>
    </div>
  );
};
export default TopUp;
