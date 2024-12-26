import React from "react";
import "../../utils/ImageDeclaration.d.ts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Welcome/Onboarding.tsx";
import SignUp from "./components/SignUp/SignUp.tsx";
import LogIn from "./components/LogIn/LogIn.tsx";
import ForgotPassword from "./components/LogIn/ForgotPassword.tsx";
import Verification from "./components/SignUp/Verification.tsx";
import Pin from "./components/Pin/Pin.tsx";
import Retype from "./components/Pin/Retype.tsx";
import Home from "./components/Home/Home.tsx";
import History from "./components/History/History.tsx";
import Top from "./components/TopUp/Top.tsx";
import TopUp from "./components/TopUp/TopUp.tsx";
import Profile from "./components/Profile/Profile.tsx";
import ForgotPasswordEmailSent from "./components/LogIn/ForgotPasswordEmailSent.tsx";
import SignUpSuccess from "./components/SignUp/SignUpSuccess.tsx";
import TransferNew from "./components/Transfer/TransferNew.tsx";
import Settings from "./components/Profile/Settings.tsx";
import CurrencySelection from "./components/Profile/SettingsCurrency.tsx";
import LanguageSelection from "./components/Profile/SettingsLanguage.tsx";

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
          <Route path="/verify" element={<Verification />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/retype" element={<Retype />} />
          <Route path="/home" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/transfer" element={<TransferNew />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Topup" element={<TopUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settingscurrency" element={<CurrencySelection />} />
          <Route path="/settingslanguage" element={<LanguageSelection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
