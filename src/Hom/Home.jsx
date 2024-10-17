// src/App.jsx

import "./home.css";
import { IoIosNotifications } from "react-icons/io";
import { BiQrScan } from "react-icons/bi";
import { BiTransfer } from "react-icons/bi";
import { PiHandDeposit } from "react-icons/pi";
import { MdSendToMobile } from "react-icons/md";
import { MdCallMissedOutgoing } from "react-icons/md";
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
      <div className="flex items-center justify-between p-3">
        <div className="profile space-x-1">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile"
            className="profile-img"
          />
          <div className="-mb-4 items-center">
            <p className="font-bold leading-none">
              Wasiru <br /> <p className="font-normal">Account</p>
            </p>
          </div>
        </div>

        <div>
          <h2 className="h2Home bg-transparent">Ajo</h2>
        </div>

        <div className="notification-bell">
          <IoIosNotifications size={30} />
        </div>
      </div>

      {/* Account Card */}
      <div className="account-card rounded-2xl">
        <div className="account-info">
          <p>0987-6543-2810-7821</p>
          <h2>₦ 1,500,000.00 NGN</h2>
          <p className="account-type">Smart Account</p>
        </div>
        <div className="qr-code">
          <BiQrScan className="bg-white text-black rounded-md" size={40} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons -mt-2">
        <a href="transfer" className="btag">
          {" "}
          <button className="rounded-2xl py-4 -mb-2 hover:bg-black hover:text-white ease-in duration-200">
            <BiTransfer
              className="mx-auto mb-0 -mt-2 hover:text-white"
              size={30}
            />
            Transfer
          </button>{" "}
        </a>

        <a href="Topup" className="btag">
          {" "}
          <button className="rounded-2xl py-4 -mb-2 hover:bg-black hover:text-white ease-in duration-200">
            <PiHandDeposit
              className="mx-auto mb-0 -mt-2 hover:text-white"
              size={30}
            />
            Topup
          </button>{" "}
        </a>
        <a href="" className="btag">
          {" "}
          <button className="rounded-2xl py-4 -mb-2 hover:bg-black hover:text-white ease-in duration-200">
            <MdSendToMobile
              className="mx-auto mb-0 -mt-2 hover:text-white"
              size={30}
            />
            Pay Ajo
          </button>{" "}
        </a>
        <a href="" className="btag">
          {" "}
          <button className="rounded-2xl py-4 -mb-2 hover:bg-black hover:text-white ease-in duration-200">
            <MdCallMissedOutgoing
              className="mx-auto mb-0 -mt-2 hover:text-white"
              size={30}
            />
            Request
          </button>{" "}
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
        <div key={transaction.id} className="transaction-item py-2">
          {" "}
          <br /> <br />
          <p className="atag px-4 font-semibold">
            {transaction.date} | <br /> {transaction.type} <br /> <br />
          </p>
          <div className="ptag px-4 font-semibold">
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
