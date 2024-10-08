import React, { useState } from "react";
import pic2 from "../assets/plane.jpg";
import "./transfer.css";

function Transfer() {
  //   const [amount, setAmount] = useState("100,000");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="transfer-screen">
      {/* Header Section */}
      <div className="header1">
        <button className="back-btn">
          <img src="back-arrow-icon.png" alt="Back" />
        </button>
        <h2>Transfer</h2>
      </div>

      <div className="center">
        {/* Amount Section */}
        <div className="amount-section">
          <p>How much?</p>
          <div className="amount">
            <g> ₦ </g>
            <g>
              <input type="text" className="am" />
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
            <input type="file" name="" id=""/>
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
