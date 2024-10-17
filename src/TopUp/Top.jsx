import { useState } from "react";

const Top = () => {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");

  // Handle the number input with Naira symbol
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Only keep digits
    setAmount(value ? `₦${value}` : "");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.amountHeader}>How much?</h1>
      <div style={styles.amountInput}>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="₦0"
          style={styles.inputAmount}
        />
      </div>

      <div style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Wasiu John"
            style={styles.inputField}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Credit Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 1234 1234 1234"
            maxLength="19" // Assuming card format
            style={styles.inputField}
          />
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroupHalf}>
            <label style={styles.label}>Exp Date</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength="5"
              style={styles.inputField}
            />
          </div>

          <div style={styles.inputGroupHalf}>
            <label style={styles.label}>CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="..."
              maxLength="3"
              style={styles.inputField}
            />
          </div>
        </div>

        <button style={styles.continueButton}>Continue</button>
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
    padding: "20px",
    backgroundColor: "#000",
    minHeight: "100vh",
    color: "#fff",
  },
  amountHeader: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  amountInput: {
    fontSize: "48px",
    marginBottom: "30px",
  },
  label: {
    color: "Black",
  },
  inputAmount: {
    fontSize: "48px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "2px solid #fff",
    width: "100%",
    maxWidth: "300px",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputGroupHalf: {
    width: "48%",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    borderRadius: "13px",
    border: "1px solid #ddd",
    marginTop: "5px",
  },
  continueButton: {
    width: "100%",
    padding: "15px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Top;
