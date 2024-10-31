import "./home.css";
import Img04 from "../assets/topup.png";
import Img05 from "../assets/bill.png";
import Img06 from "../assets/request.png";
import Img07 from "../assets/withdraw.png";
import NavBar from "./NavBar.tsx";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiQrScan } from "react-icons/bi";

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

  const navigate = useNavigate();

  const handleTopUp = () => {
    navigate("/Topup");
  };
  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <div className="app">
      {/* Profile Header */}
      <div className="flex items-center p-3 ">
        <div className="profile space-x-1">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile"
            className="profile-img"
          />
          <div className="-mb-4">
            <p className="font-bold leading-none -ml-3 mr-1">Wasiru</p>
          </div>
        </div>
        <div className="ml-16">
          <span className="flex space-x-20 items-center">
            <h2 className="bg-transparent text-3xl -mb-1">AJO</h2>
            <IoIosNotificationsOutline className="" size={30} />
          </span>
        </div>
      </div>

      {/* Account Card */}
      <div className="">
        <span className="font-semibold px-4 ">Default Acount</span>
        <div className="account-card rounded-2xl">
          <div className="account-info">
            <div className="flex flex-row space-x-32">
              <p>0987-6543-2810-7821</p>
              <div className="qr-code">
                <BiQrScan
                  className="bg-white text-black rounded-md"
                  size={40}
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 mt-2">
              <h2>1,500,000.00 </h2>
              <span className="">NGN</span>
            </div>
            <p className="-mt-2">Smart Account</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons px-4">
        <div>
          {" "}
          <button
            onClick={handleTopUp}
            className="box-border rounded-2xl py-3 px-3 -mb-2 "
          >
            <img src={Img04} className="flex-col mx-auto w-8 h-8" />
            <span className="mx-1">Top-up</span>
          </button>{" "}
        </div>
        <div>
          {" "}
          <button className="box-border rounded-2xl py-3 px-3 -mb-2 ">
            <img src={Img05} className="flex-col mx-auto w-8 h-8" />
            <span className="mx-1">Pay Ajo</span>
          </button>
        </div>
        <div>
          {" "}
          <button className="box-border rounded-2xl py-3 px-3 -mb-2 ">
            <img src={Img07} className="flex-col mx-auto w-8 h-8" />
            <span className="mx-1">Withdraw</span>
          </button>{" "}
        </div>
        <div>
          {" "}
          <button className="box-border rounded-2xl py-3 px-3 -mb-2 ">
            <img src={Img06} className="flex-col mx-auto w-8 h-8" />
            <span className="mx-1">Request</span>
          </button>{" "}
        </div>
      </div>

      {/* Transaction History */}
      <div className="px-3 py-2 mt-3">
        <div className="history-header">
          <h3>Recent History</h3>{" "}
          <button onClick={handleHistory} className="see-all">
            See All &gt;
          </button>{" "}
        </div>
      </div>
      <div className="w-full">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item h-max py-2">
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
      </div>

      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
};

export default Home;
