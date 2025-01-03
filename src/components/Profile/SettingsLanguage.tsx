import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext.tsx"; // Import the useLanguage hook

const LanguageSelection = () => {
  const navigate = useNavigate();
  const { selectedLanguage, setSelectedLanguage } = useLanguage(); // Get the currency state from context

  const handleGoBack = () => {
    navigate("/settings");
  };

  const languages = [
    { name: "English", code: "EN" },
    { name: "Indonesian", code: "ID" },
    { name: "Arabic", code: "AR" },
    { name: "Chinese", code: "ZH" },
    { name: "French", code: "FR" },
    { name: "German", code: "DE" },
    { name: "Italian", code: "IT" },
    { name: "Korean", code: "KO" },
    { name: "Portuguese", code: "PT" },
    { name: "Russian", code: "RU" },
    { name: "Spanish", code: "ES" },
  ];

  const handleSelect = (name) => {
    setSelectedLanguage(name); // Update the selected currency
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button className="h-6 w-6 text-black" onClick={() => handleGoBack()}>
          <FaArrowLeft size={20} />
        </button>
        <h1 className="flex-1 text-center text-xl font-bold">Language</h1>
      </div>

      {/* Language List */}
      <ul className="">
        {languages.map((language) => (
          <li
            key={language.name}
            onClick={() => handleSelect(language.name)}
            className="flex items-center justify-between font-semibold px-4 py-3 -ml-8 cursor-pointer hover:bg-gray-50"
          >
            <span className="text-lg">{`${language.name} (${language.code})`}</span>
            {/* Checkmark for selected Language */}
            {selectedLanguage === language.name && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
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
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelection;
