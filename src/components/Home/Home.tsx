import React from "react";
import "../../utils/ImageDeclaration.d.ts";
import Img04 from "../../assets/topup.png";
import Img05 from "../../assets/bill.png";
import Img06 from "../../assets/request.png";
import Img07 from "../../assets/withdraw.png";
import NavBar from "./NavBar.tsx";
import { useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiQrScan } from "react-icons/bi";
import { useEffect, useState } from "react";
import { auth, db } from "../../utils/firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

const Home: React.FC = () => {
  const [balance, setBalance] = useState<string>("0");
  const [accountNumber, setAccountNumber] = useState<string>("0");
  const [userName, setUserName] = useState<string>("");
  const AccountNumber = `AJO-${accountNumber}`;
  const navigate = useNavigate();

  useEffect(() => {
    let unsubscribe: (() => void) | null = null;

    const fetchDetails = async () => {
      try {
        const user = auth.currentUser;

        if (!user) {
          alert("No authenticated user found.");
          navigate("/login");
          return;
        }

        const userId = user.uid;
        const userDocRef = doc(db, `users/${userId}`);

        unsubscribe = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.data();
            setBalance(data?.balance ?? "0");
            setAccountNumber(data?.accountNumber ?? "0");
            setUserName(
              [data?.fname, data?.lname].filter(Boolean).join(" ") || ""
            );
          } else {
            alert("User data not found.");
            setBalance("0");
            setAccountNumber("0");
            setUserName("");
          }
        });
      } catch (error) {
        console.error("Error fetching details:", error);
        alert("An error occurred while fetching user details.");
      }
    };

    fetchDetails();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [navigate]);

  const formatCurrency = (amount: string | number) => {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;

    if (isNaN(num)) return "₦0";

    if (num >= 1_000_000_000) return `₦${(num / 1_000_000_000).toFixed(2)}B`;
    if (num >= 1_000_000) return `₦${(num / 1_000_000).toFixed(2)}M`;
    if (num >= 1_000) return `₦${(num / 1_000).toFixed(2)}K`;
    return `₦${num.toFixed(2)}`;
  };

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
    {
      id: 6,
      type: "Cash Deposit",
      amount: "+1,500,000",
      date: "Jan 31, 2024",
      positive: true,
    },
    {
      id: 6,
      type: "Cash Deposit",
      amount: "+1,500,000",
      date: "Jan 31, 2024",
      positive: true,
    },
  ];

  const handleTopUp = () => {
    navigate("/Topup");
  };
  const handleHistory = () => {
    navigate("/history");
  };

  return (
    <div className="h-screen w-full px-1">
      {/* Profile Header */}
      <div className="flex items-center p-3 ">
        <div className="flex items-center p-2 bg-[#e6eef7] rounded-[35px] text-black shadow-lg shadow-[#e6eef7] space-x-1">
          <img
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="profile"
            className="mr-4 rounded-3xl w-12 h-12"
          />
          <div className="-mb-4">
            <p className="font-bold leading-none -ml-3 mr-2">{userName}</p>
          </div>
        </div>
        <div className="ml-16">
          <span className="flex space-x-20 items-center">
            <h2 className="bg-transparent text-3xl -mb-1 -ml-5">AJO</h2>
          </span>
        </div>
        <IoIosNotificationsOutline className="ml-[110px] mt-2" size={30} />
      </div>

      {/* Account Card */}
      <div className="">
        <div className="flex shadow-lg shadow-[#e6eef7] bg-[#1a1c1e] rounded-2xl p-6 text-white justify-between items-center m-3">
          <div className="text-base">
            <p className="-mt-2">Smart Account</p>
            <div className="flex flex-row items-center justify-between space-x-6">
              <h5>{AccountNumber}</h5>

              <BiQrScan
                className="bg-white text-black rounded-md justify-end"
                size={40}
              />
            </div>
            <div className="pt-3 ">
              <h2 className="text-xl -tracking-tighter bg-transparent">
                {formatCurrency(balance)} NGN
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center items-center space-x-3 -mt-2 -mb-4">
        <div>
          {" "}
          <button
            onClick={handleTopUp}
            className="bg-[#e6eef7] rounded-2xl px-3 py-4 font-bold text-xs"
          >
            <img src={Img04} className=" mx-auto w-8 h-8" />
            <span className="mx-1">Top-up</span>
          </button>{" "}
        </div>
        <div>
          {" "}
          <button className="bg-[#e6eef7] rounded-2xl px-3 py-4 font-bold text-xs">
            <img src={Img05} className=" mx-auto w-8 h-8" />
            <span className="mx-1">Pay Ajo</span>
          </button>
        </div>
        <div>
          {" "}
          <button className="bg-[#e6eef7] rounded-2xl px-3 py-4 font-bold text-xs">
            <img src={Img07} className=" mx-auto w-8 h-8" />
            <span className="mx-1">Withdraw</span>
          </button>{" "}
        </div>
        <div>
          {" "}
          <button className="bg-[#e6eef7] rounded-2xl px-3 py-4 font-bold text-xs">
            <img src={Img06} className=" mx-auto w-8 h-8" />
            <span className="mx-1">Request</span>
          </button>{" "}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-transparent">
        <div className="flex justify-between items-center px-4 py-2 mt-4">
          <h3>Recent History</h3>
          <button
            onClick={handleHistory}
            className="border-none bg-transparent text-black text-xl"
          >
            See All &gt;
          </button>
        </div>
        <div className="rounded-2xl p-4 mx-4 -mt-2 overflow-y-scroll h-60 border-2 border-[#e6eef7]">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex justify-between items-center py-1"
            >
              <div>
                <p className="font-semibold leading-5">
                  {transaction.type} <br /> {transaction.date}
                </p>{" "}
              </div>
              <div>
                <p
                  className={`font-semibold ${
                    transaction.positive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount} NGN
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex0-grow"></div>
      {/* Bottom Navigation */}
      <NavBar />
    </div>
  );
};

export default Home;
