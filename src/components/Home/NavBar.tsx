import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Img08 from "../../assets/profile.png";
import { GoHome } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { LuScanLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleTransfer = () => {
    navigate("/transfer");
  };
  const handleHome = () => {
    navigate("/home");
  };
  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center py-2">
      <nav className="flex justify-around items-center w-[95%] bg-[#e6eef7] px-2 rounded-t-3xl shadow-lg">
        <GoHome onClick={handleHome} size={24} className="text-black " />
        <GrTransaction
          onClick={handleTransfer}
          size={24}
          className="text-black "
        />
        <div className="bg-black p-2 rounded-full">
          <LuScanLine size={28} className="text-white" />
        </div>
        <LuMessagesSquare size={24} className="text-black " />
        <CgProfile size={24} onClick={handleProfile} className="text-black" />
      </nav>
    </div>
  );
};

export default NavBar;
