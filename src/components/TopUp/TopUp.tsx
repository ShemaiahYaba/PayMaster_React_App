import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TbCurrencyNaira } from "react-icons/tb";
const TopUp = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home");
  };

  return (
    <div style={styles.container as React.CSSProperties}>
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
            <h2 className="font-bold tracking-tight back-button absolute top-3 left-20 right-20 text-white">
              Top Up
            </h2>
          </div>
        </div>
      </div>

      {/* Balance Display */}
      <div style={styles.balanceContainer as React.CSSProperties}>
        <div style={styles.balanceLabel}>Balance</div>
        <div className="flex items-center space-x-2 ">
          <TbCurrencyNaira className="text-white" size={50} />
          <input
            className="w-1/2 rounded-2xl font-medium text-5xl bg-transparent border-0 focus:ring-0 focus:ring-white active:bg-transparent"
            placeholder="0.00"
            type="text" // Changed from 'float' to 'text'
            required
            id="amount"
            name="amount"
            // Directly pass handleChange
          />
        </div>
      </div>

      {/* Payment Method Section */}
      <div style={styles.paymentMethodContainer as React.CSSProperties}>
        <div style={styles.paymentMethodLabel}>Select payment method</div>
        <a href="top" className="btag">
          {" "}
          <button style={styles.paymentButton}>Card</button>{" "}
        </a>
        <a href="transfer" className="btag">
          {" "}
          <button style={styles.paymentButton}>Transfer</button>
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#000",
    color: "#fff",
  },
  header: {
    width: "100%",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    left: 0,
  },
  backArrow: {
    fontSize: "24px",
    cursor: "pointer",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  balanceContainer: {
    marginTop: "100px",
    textAlign: "center",
  },
  balanceLabel: {
    fontSize: "18px",
    color: "#aaa",
    marginBottom: "10px",
  },
  balanceAmount: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  paymentMethodContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "18px",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    marginTop: "40px",
  },
  paymentMethodLabel: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#000",
  },
  paymentButton: {
    width: "100%",
    padding: "15px",
    margin: "10px 0",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    cursor: "pointer",
  },
};

export default TopUp;
