
import React from 'react';


const Account = () => {
  return (
    <div className="account-container">
      {/* Header Section */}
      <header className="header">
        <button className="back-button">&lt;</button>
        <h1>Add New Account</h1>
      </header>

      {/* Balance Section */}
      <div className="balance-container">
        <p>Balance</p>
        <h2>₦ 0.00</h2>
      </div>

      {/* Form Section */}
      <form className="account-form">
        <div className="form-group">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form-group">
          <select>
            <option value="">Account Type</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
          </select>
        </div>
        <a href="/set">  
        <button type="submit" className="continue-button">Continue</button>
        </a>
       
      </form>
    </div>
  );
};

export default Account;
