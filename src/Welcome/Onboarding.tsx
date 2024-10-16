import React, { useState } from "react"; // Import useState for managing active slide
import SwipeableAutoSlider from "./SwipeableComponent";
import Breadcrumb from "./BreadCrumb"; // Import the Breadcrumb component
import { Button, ButtonGroup } from "reactstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

("use client");

function Onboarding() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current slide index

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentIndex(index);
  };

  const slides = ["1", "2"]; // You can replace these with your slide identifiers or titles

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Main content centered in the middle */}
      <div className="flex-1 flex flex-col justify-center items-center w-full text-center">
        <SwipeableAutoSlider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        <div style={{ marginTop: "-50px" }}>
          {/* Use the updated Breadcrumb component */}
          <Breadcrumb
            slides={slides}
            currentIndex={currentIndex}
            onClick={handleBreadcrumbClick}
          />

          <ButtonGroup vertical>
            <Button
              size="lg"
              color="primary"
              style={{
                backgroundColor: "black",
                padding: "15px 130px", // Adjusted padding for a balanced look
                fontSize: "18px", // Adjusted font size for better fit
                border: "none",
                borderRadius: "20px",
                marginBottom: "2px",
                fontWeight: "bold",
              }}
              onClick={() => handleNavigation("/signup")}
            >
              Sign Up
            </Button>

            <Button
              size="lg"
              color="secondary"
              style={{
                backgroundColor: "#EEE5FF",
                color: "black",
                padding: "15px 140px", // Adjusted padding for a balanced look
                fontSize: "18px", // Adjusted font size for better fit
                border: "none",
                borderRadius: "20px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
              onClick={() => handleNavigation("/login")}
            >
              Login
            </Button>
          </ButtonGroup>
        </div>
      </div>

      {/* Footer or empty space to ensure the main content stays in view */}
      <footer className="py-6"></footer>
    </div>
  );
}

export default Onboarding;
