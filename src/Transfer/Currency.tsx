import React, { useState } from "react";

const CurrencyInput = () => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    // Get the raw input value
    const value = e.target.value;

    // Remove non-numeric characters (except for decimal point)
    const numericValue = value.replace(/[^0-9.]/g, "");

    // Format the numeric value to currency format
    const formattedValue = formatCurrency(numericValue);

    setAmount(formattedValue);
  };

  const formatCurrency = (value) => {
    // Convert to a float, then format to currency
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) return "";

    return floatValue.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div>
      <label htmlFor="currency-input" className="block text-gray-700">
        Amount
      </label>
      <input
        type="text"
        id="currency-input"
        value={amount}
        onChange={handleChange}
        placeholder="₦0.00"
        className="border border-gray-300 rounded-md p-2 mt-1 w-full"
      />
    </div>
  );
};

export default CurrencyInput;
