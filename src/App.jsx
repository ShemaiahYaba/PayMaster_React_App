// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./Welcome/Onboarding.tsx";
import SignUp from "./SignUp/SignUp.tsx";
import LogIn from "./LogIn/LogIn.tsx";
import ForgotPassword from "./LogIn/ForgotPassword.tsx";
import Verification from "./Verification/Verification.jsx";
import Pin from "./Pin/Pin.jsx";
import Retype from "./Pin/Retype.jsx";
import SetupAccount from "./Setup/SetupAccount.jsx";
import Start from "./Begin/Start.jsx";
import Account from "./Account/Account.jsx";
import Home from "./Home/Home.jsx";
import History from "./History/History.jsx";
import Top from "./TopUp/Top.jsx";
import TopUp from "./TopUp/TopUp.jsx";
import Profile from "./Profile/Profile.jsx";
import ForgotPasswordEmailSent from "./LogIn/ForgotPasswordEmailSent.tsx";
import SignUpSuccess from "./SignUp/SignUpSuccess.tsx";
import TransferNew from "./Transfer/TransferNew.tsx";
import Settings from "./Profile/Settings.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route
            path="/forgotpasswordemailsent"
            element={<ForgotPasswordEmailSent />}
          />
          <Route path="/signupsuccess" element={<SignUpSuccess />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/Verify" element={<Verification />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/retype" element={<Retype />} />
          <Route path="/setupaccount" element={<SetupAccount />} />
          <Route path="/start" element={<Start />} />
          <Route path="/account" element={<Account />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/transfer" element={<TransferNew />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Topup" element={<TopUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
