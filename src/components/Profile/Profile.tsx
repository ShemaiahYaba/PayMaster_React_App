import React from "react";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import PropTypes from "prop-types";
import Header from "../../Header";
import Img08 from "../../assets/profile.png";
import Img09 from "../../assets/bookmark.png";
import Img10 from "../../assets/pools.png";
import Img11 from "../../assets/settings.png";
import Img12 from "../../assets/pool.png";

const Profile = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login"); // Redirect to login page after logout
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <>
      <div className="flex flex-col justify-center px-6 py-4">
        {/* Profile Header */}
        <div className="">
          <Header title="Profile" onBackClick={handleGoBack} />
        </div>

        <div className="text-center mb-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="mx-auto rounded-full border-4 border-white shadow-md"
            />
          </div>
          <h2 className="text-xl font-semibold mt-4 bg-transparent">
            Wasiu John
          </h2>
          <p className="text-gray-500 text-sm">wasijohn@gmail.com</p>
        </div>

        {/* Statistics Section */}
        <div className="flex justify-evenly items-center shadow-sm shadow-black outline-none pt-3 rounded-xl mb-4">
          <div className="text-center font-bold">
            <p className="text-sm">Joined Pools</p>
            <p className="text-lg font-semibold">5</p>
          </div>
          <div className="text-center font-bold">
            <p className="text-sm">Created Pools</p>
            <p className="text-lg font-semibold">1</p>
          </div>
          <div className="text-center font-bold">
            <p className="text-sm">Ajo Points</p>
            <p className="text-lg font-semibold">473</p>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <MenuItem
            icon={<img src={Img08} className="w-9 h-9" />}
            label="Profile"
          />
          <MenuItem
            icon={<img src={Img09} className="w-9 h-9" />}
            label="Bookmarked"
          />
          <MenuItem
            icon={<img src={Img10} className="w-9 h-9" />}
            label="Your pools"
          />
          <MenuItem
            icon={<img src={Img11} className="w-9 h-9" />}
            label="Settings"
            onClick={handleSettings}
          />
          <MenuItem
            icon={<img src={Img12} className="w-9 h-9" />}
            label="Create pool"
          />
          <MenuItem
            icon={<CgLogOut size={40} className="text-[#7D848D]" />}
            label="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, label, onClick }) => (
  <div
    className="flex px-8 justify-between py-2"
    onClick={onClick} // Click handler
    role="button" // Accessibility as button
  >
    <div className="flex items-center p-2 space-x-2">
      {icon}
      <div className="-mb-4">
        <p className="font-medium leading-none ml-1 mr-1">{label}</p>
      </div>
    </div>
    <div className="flex items-center p-2">
      <button className="text-gray-400">→</button>
    </div>
  </div>
);

// Add PropTypes validation for MenuItem
MenuItem.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Profile;
