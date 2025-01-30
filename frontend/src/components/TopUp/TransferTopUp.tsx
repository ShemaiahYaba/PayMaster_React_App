import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
import Header from "../Header";

const TransferTopUp = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const handleGoBack = () => {
    navigate("/topup");
  };

  return (
    <div className="flex flex-col h-screen py-2 bg-black text-white overflow-hidden">
      {/* Header Section */}
      <div>
        <Header
          title="Top up with transfer"
          onBackClick={handleGoBack}
        ></Header>{" "}
      </div>
      <div className="flex flex-col items-start px-4 py-2">
        <div className="flex-grow py-40"></div>
        <p className="text-gray-300 text-xl">Account number</p>
        <p className="flex flex-row items-center font-bold text-6xl">
          1234567890
        </p>
        <p className="text-gray-300 text-xl">Ajo Bank</p>
      </div>
      <div className="bg-white text-black flex flex-col px-4 py-12 rounded-t-[40px]">
        <p className="items-start ml-4 font-bold text-xl -mt-4">
          Please kindly make your transfer to the above account
        </p>
      </div>
    </div>
  );
};
export default TransferTopUp;
