import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../../contexts/CurrencyContext"; // Import the useCurrency hook

const CurrencySelection = () => {
  const navigate = useNavigate();
  const { selectedCurrency, setSelectedCurrency } = useCurrency(); // Get the currency state from context

  const handleGoBack = () => {
    navigate("/settings");
  };

  const currencies = [
    { name: "Nigeria", code: "NGN" },
    { name: "Indonesia", code: "IDR" },
    { name: "Japan", code: "JPY" },
    { name: "Russia", code: "RUB" },
    { name: "Germany", code: "EUR" },
    { name: "Korea", code: "WON" },
  ];

  const handleSelect = (code) => {
    setSelectedCurrency(code); // Update the selected currency
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button className="h-6 w-6 text-black" onClick={() => handleGoBack()}>
          <FaArrowLeft size={20} />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold">Currency</h1>
      </div>

      {/* Currency List */}
      <ul className="">
        {currencies.map((currency) => (
          <li
            key={currency.code}
            onClick={() => handleSelect(currency.code)}
            className="flex items-center justify-between font-semibold px-4 py-3 -ml-8 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-lg">{`${currency.name} (${currency.code})`}</span>
            {/* Checkmark for selected currency */}
            {selectedCurrency === currency.code && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencySelection;
