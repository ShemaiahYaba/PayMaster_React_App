import NavBar from "../Home/NavBar.tsx";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div>
      {/* Header Section */}
      <div>
        <div>←</div>
        <div>✎</div>
      </div>

      {/* Profile Info Section */}
      <div>
        <img
          src="https://via.placeholder.com/100" // Placeholder image, replace with actual avatar URL
          alt="Profile"
        />
        <h2>Wasiu John</h2>
        <p>wasiujohn@gmail.com</p>

        {/* Stats Section */}
        <div>
          <div>
            <p>5</p>
            <p>Joined Pools</p>
          </div>
          <hr />
          <div>
            <p>1</p>
            <p>Created Pools</p>
          </div>
          <hr />
          <div>
            <p>473</p>
            <p>Ajo Points</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <MenuItem label="Profile" />
        <MenuItem label="Bookmarked" />
        <MenuItem label="Your pools" />
        <MenuItem onClick={handleSettings} label="Settings" />
        <MenuItem label="Create pool" />
      </div>
    </div>
  );
};

// Menu Item Component
// eslint-disable-next-line react/prop-types
const MenuItem = ({ label }) => (
  <>
    <div>
      <p>{label}</p>
      <span>→</span>
    </div>
    <NavBar />
  </>
);
export default Profile;
