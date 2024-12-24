import React from "react";
import Header from "../../Header";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../../contexts/CurrencyContext"; // Import the useCurrency hook
import { useLanguage } from "../../contexts/LanguageContext";

const Settings: React.FC = () => {
  const navigate = useNavigate(); // Use the hook inside the component
  const { selectedLanguage } = useLanguage();
  const { selectedCurrency } = useCurrency(); // Get the selected currency from context

  const handleProfile = () => {
    navigate("/profile");
  };
  const handleCurrency = () => {
    navigate("/settingscurrency");
  };

  const handleLanguage = () => {
    navigate("/settingslanguage");
  };

  const handleTheme = () => {
    navigate("/settingstheme");
  };

  const handleSecurity = () => {
    navigate("/settingssecurity");
  };

  const handleNotification = () => {
    navigate("/settingsnotification");
  };

  const handleExportData = () => {
    navigate("/settingsexportdata");
  };

  const handleAbout = () => {
    navigate("/settingsabout");
  };

  const handleHelp = () => {
    navigate("/settingshelp");
  };

  return (
    <div className="flex flex-col bg-white py-4 px-1">
      {/* Top Bar */}
      <div>
        <Header title="Settings" onBackClick={handleProfile} />
      </div>

      {/* Settings List */}
      <div className="flex flex-col leading-none py-1 px-1">
        <SettingsItem
          label="Currency"
          value={selectedCurrency}
          onClick={handleCurrency}
        />
        <SettingsItem
          label="Language"
          value={selectedLanguage}
          onClick={handleLanguage}
        />
        <SettingsItem label="Theme" value="Light" onClick={handleTheme} />
        <SettingsItem
          label="Security"
          value="Fingerprint"
          onClick={handleSecurity}
        />
        <SettingsItem label="Notification" onClick={handleNotification} />
        <SettingsItem label="Export data" onClick={handleExportData} />
      </div>
      <div className="flex flex-col leading-none py-2 px-1 mt-4">
        <SettingsItem label="About" onClick={handleAbout} />
        <SettingsItem label="Help" onClick={handleHelp} />
      </div>
    </div>
  );
};

interface SettingsItemProps {
  label: string;
  value?: string; // Optional value to display on the right
  onClick?: () => void; // onClick prop to handle navigation
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  label,
  value,
  onClick,
}) => {
  return (
    <div
      className="flex justify-between items-center px-4 py-4 cursor-pointer"
      onClick={onClick} // Trigger onClick when clicked
    >
      <span className="text-black font-semibold">{label}</span>
      <div className="flex items-center">
        {value && (
          <span
            className="text--500 mr-2"
            style={{
              color: "gray",
            }}
          >
            {value}
          </span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            color="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Settings;
