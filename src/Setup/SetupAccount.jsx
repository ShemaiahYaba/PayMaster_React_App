import "../SetupAccount.css";
import { useNavigate } from "react-router-dom";

const SetupAccount = () => {
  const navigate = useNavigate();

  const handleSetupAccount = () => {
    navigate("/account");
  };
  return (
    <div className="setup-account-container px-4">
      <h1 className="setup-title">Let’s setup your Wallet!</h1>
      <p className="setup-description">
        Account can be your bank, credit card, or your wallet.
      </p>
      <button
        className="setup-button font-semibold"
        onClick={handleSetupAccount}
      >
        Let’s go
      </button>
    </div>
  );
};

export default SetupAccount;
