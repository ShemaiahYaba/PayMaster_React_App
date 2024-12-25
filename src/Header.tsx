import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface HeaderProps {
  title: string;
  onBackClick: () => void;
  icon?: React.ReactNode; // Optional prop for a custom icon
}

const Header: React.FC<HeaderProps> = ({ title, onBackClick, icon }) => {
  return (
    <header className="flex items-center justify-between py-4 px-6 relative">
      <button onClick={onBackClick}>
        <FaArrowLeft size={20} className="-mt-3" />
      </button>
      <h1
        className={`text-2xl font-bold tracking-tight ${
          icon ? "mx-auto" : "flex-grow text-center"
        }`}
      >
        {title}
      </h1>
      {icon ? (
        <button className="-mt-3">{icon}</button>
      ) : (
        <div className="w-6"></div> // Placeholder to keep the layout balanced
      )}
    </header>
  );
};

export default Header;
