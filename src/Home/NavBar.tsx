import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
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
    <nav className="bottom-navigation items-center">
      <GoHome onClick={handleHome} size={20} />
      <GrTransaction onClick={handleTransfer} size={20} />
      <LuScanLine size={30} />
      <LuMessagesSquare size={20} />
      <CgProfile onClick={handleProfile} size={20} />
    </nav>
  );
};

export default NavBar;
