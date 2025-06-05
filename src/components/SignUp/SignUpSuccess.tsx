import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase.js";

interface SuccessMessageProps {
  onContinue?: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onContinue }) => {
  const [error, setError] = useState("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const navigate = useNavigate();
  const user = auth.currentUser; // you need user ID for DB write

  const generateRandomAccountNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // Generate a random 10-digit number
  };

  const handleContinue = async () => {
    if (!user?.uid) return;

    if (onContinue) onContinue();

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().balance === undefined) {
        await setDoc(
          userRef,
          {
            balance: 0,
            balanceCreatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
      }
      if (userSnap.exists() && userSnap.data().accountNumber) {
        // If the account number already exists, use it
        setAccountNumber(userSnap.data().accountNumber);
      } else {
        // If no account number exists, generate and store it
        const newAccountNumber = generateRandomAccountNumber();
        setAccountNumber(newAccountNumber);
        await setDoc(
          userRef,
          { accountNumber: newAccountNumber },
          { merge: true }
        );
      }
      // If the account number already exists, use it
      navigate("/home");
    } catch (err) {
      setError("Error updating user document:");
      alert(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-start items-center py-8">
      <div className="flex-grow" />
      <div className="flex flex-col items-center mt-8">
        <div className="bg-[#00A86B] flex items-center justify-center w-20 h-20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">You are set!</h1>
      </div>
      <div className="flex-grow" />
      <div className="w-full px-4">
        <button
          type="button"
          className="w-full border-none rounded-2xl bg-black text-white py-3 text-lg font-semibold"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
