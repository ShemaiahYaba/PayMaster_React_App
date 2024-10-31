import "./history.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

function History() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/home");
  };
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      icon: <FaWallet />,
      title: "Mobile Topup",
      date: "Mar 27, 2024",
      amount: "3,000",
      isPositive: false,
    },
    {
      id: 2,
      icon: "withdrawal-icon.png",
      title: "Withdrawal",
      date: "Mar 12, 2024",
      amount: "70,000",
      isPositive: false,
    },
    {
      id: 3,
      icon: "internet-bill-icon.png",
      title: "Internet Bill",
      date: "Mar 1, 2024",
      amount: "50,000",
      isPositive: false,
    },
    {
      id: 4,
      icon: "ajo-topup-icon.png",
      title: "Ajo Iya Bukky",
      date: "Feb 28, 2024",
      amount: "150,000",
      isPositive: true,
    },
    {
      id: 5,
      icon: "cash-deposit-icon.png",
      title: "Cash Deposit",
      date: "Jan 31, 2024",
      amount: "1,500,000",
      isPositive: true,
    },
  ];

  return (
    <div className="App">
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
              History
            </h2>
          </div>
        </div>
        <button className="text-black hover:text-gray-700">
          <FaFilter size={20} />
        </button>
      </div>

      {/* Transactions List */}
      <div className="transaction-list">
        <h2 className="bg-gray-300 px-2 font-semibold text-base">March</h2>
        {transactions.slice(0, 3).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div
              className={`transaction-amount ${
                transaction.isPositive ? "positive" : "negative"
              }`}
            >
              {transaction.isPositive ? "+" : "-"}
              {transaction.amount}
            </div>
          </div>
        ))}

        <h2 className="bg-gray-300 px-2 font-semibold text-base">February</h2>
        {transactions.slice(3, 4).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction.icon} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div
              className={`transaction-amount ${
                transaction.isPositive ? "positive" : "negative"
              }`}
            >
              {transaction.isPositive ? "+" : "-"}
              {transaction.amount}
            </div>
          </div>
        ))}
        <br />
        <h2 className="bg-gray-300 px-2 font-semibold text-base">January</h2>
        {transactions.slice(4, 5).map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div className="transaction-icon">
              <img src={transaction.icon} alt="icon" />
            </div>
            <div className="transaction-details">
              <div className="transaction-title">{transaction.title}</div>
              <div className="transaction-date">{transaction.date}</div>
            </div>
            <div
              className={`transaction-amount ${
                transaction.isPositive ? "positive" : "negative"
              }`}
            >
              {transaction.isPositive ? "+" : "-"}
              {transaction.amount}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navbar */}
      <div className="navbar">
        <div className="nav-item">Home</div>
        <div className="nav-item">Calendar</div>
        <div className="nav-item">Search</div>
        <div className="nav-item">Messages</div>
        <div className="nav-item">Profile</div>
      </div>
    </div>
  );
}

export default History;
