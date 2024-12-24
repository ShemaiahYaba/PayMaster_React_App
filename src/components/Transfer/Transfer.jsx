import { useState } from "react";
import pic2 from "../assets/plane.jpg";
import "./transfer.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Transfer() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  //   const [amount, setAmount] = useState("100,000");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="transfer-screen min-h-screen">
      {/* Header Section */}
      <div className="header">
        <button
          onClick={handleGoBack}
          className="back-button absolute top-4 left-4 text-black"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="header-title">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-bold tracking-tight back-button absolute top-3 left-20 right-20 text-black">
              Transfer
            </h2>
          </div>
        </div>
      </div>

      <div className="center">
        {/* Amount Section */}
        <div className="amount-section">
          <p>How much?</p>
          <div className="amount justify-center">
            <g> ₦ </g>
            <g>
              <input type="text" className="am font-semibold text-2xl" />
            </g>
            {/* {amount} */}
          </div>
        </div>

        {/* Form Section */}
        <div className="form-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <span className="swap-icon">
              <img src={pic2} alt="swap" />
            </span>
            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="add-attachment-btn">
            <input type="file" name="" id="" />
            {/* <img src="attachment-icon.png" alt="Add Attachment" /> */}
            Add attachment
          </button>

          {/* Continue Button */}
          <button className="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
