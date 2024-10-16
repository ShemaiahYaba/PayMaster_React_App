// src/App.jsx

import "./home.css";

const Home = () => {
  // Sample transactions
  const transactions = [
    {
      id: 1,
      type: "Withdrawal",
      amount: "-70,000",
      date: "Mar 12, 2024",
      positive: false,
    },
    {
      id: 2,
      type: "Internet Bill",
      amount: "-50,000",
      date: "Mar 1, 2024",
      positive: false,
    },
    {
      id: 3,
      type: "Ajo Bukky",
      amount: "+150,000",
      date: "Feb 28, 2024",
      positive: true,
    },
    {
      id: 4,
      type: " Major Gen",
      amount: "-65,000",
      date: "Feb 17, 2024",
      positive: false,
    },
    {
      id: 5,
      type: "Cash Deposit",
      amount: "+1,500,000",
      date: "Jan 31, 2024",
      positive: true,
    },
  ];

  return (
    <div className="app">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile"
            className="profile-img"
          />
          <div>
            <p className="profile-name">Wasiru</p>
            <p className="profile-account">Account</p>
          </div>
        </div>

        <div>
          <h2 className="h2Home">Ajo</h2>
        </div>

        <div className="notification-bell">
          <i className="fas fa-bell">bell</i>
        </div>
      </div>

      {/* Account Card */}
      <div className="account-card">
        <div className="account-info">
          <p>0987-6543-2810-7821</p>
          <h2>₦ 1,500,000.00 NGN</h2>
          <p className="account-type">Smart Account</p>
        </div>
        <div className="qr-code">
          <i className="fas fa-qrcode"></i>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <a href="transfer" className="btag">
          {" "}
          <button>Transfer</button>{" "}
        </a>

        <a href="Topup" className="btag">
          {" "}
          <button>Topup</button>{" "}
        </a>
        <a href="" className="btag">
          {" "}
          <button>Pay Ajo</button>{" "}
        </a>
        <a href="" className="btag">
          {" "}
          <button>Request</button>{" "}
        </a>
      </div>

      {/* Transaction History */}
      <div className="transaction-history">
        <div className="history-header">
          <h3>Recent History</h3>
          <a href="history">
            {" "}
            <button className="see-all">See All &gt;</button>{" "}
          </a>
        </div>
      </div>

      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          {" "}
          <br /> <br />
          <p className="atag">
            {transaction.date} | <br /> {transaction.type} <br /> <br />
          </p>
          <div className="ptag">
            <p className={transaction.positive ? "positive" : "negative"}>
              {transaction.amount} NGN
            </p>
          </div>
        </div>
      ))}

      {/* Bottom Navigation */}
      <nav className="bottom-navigation">
        <button>Home</button>
        <button>Calendar</button>
        <button>Search</button>
        <button>Messages</button>
        <button>Profile</button>
      </nav>
    </div>
  );
};

export default Home;
