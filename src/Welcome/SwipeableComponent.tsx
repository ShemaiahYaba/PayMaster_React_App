import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../ImageDeclaration.d.ts";
import Img01 from "../assets/Image_01.png";
import Img02 from "../assets/Image_02.png";

// Define the content array (image and text for each slide)
const content = [
  {
    image: Img01,
    text: (
      <div className="relative isolate pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-48">
          <div
            className="text-center"
            style={{
              marginTop: "-60px",
            }}
          >
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl">
              Gain total control of your money
            </h1>
            <p className="mt-4 text-lg leading-none text-gray-600">
              Become your own money manager and make every kobo count
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    image: Img02,
    text: (
      <div className="relative isolate pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-32 lg:py-48">
          <div
            className="text-center"
            style={{
              marginTop: "-60px",
            }}
          >
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl">
              Seamless transactions
            </h1>
            <p className="mt-4 text-lg leading-none text-gray-600">
              Track your transactions easily with categories and financial
              reports
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

// Define props for SwipeableAutoSlider
interface SwipeableAutoSliderProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SwipeableAutoSlider: React.FC<SwipeableAutoSliderProps> = ({
  currentIndex,
  setCurrentIndex,
}) => {
  // Function to handle swipe and change content
  const swipeToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto swipe every 5 seconds
  useEffect(() => {
    const interval = setInterval(swipeToNext, 5000); // Change content every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-white"
      style={{ marginTop: "20px" }}
    >
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: currentIndex === 0 ? -300 : 300 }} // Initial position for swipe
        animate={{ opacity: 1, x: 0 }} // Animate to center
        exit={{ opacity: 0, x: currentIndex === 0 ? 300 : -300 }} // Exit animation for swipe
        transition={{ duration: 0.8 }} // Smooth transition duration
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={content[currentIndex].image}
          alt="Swipeable content"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          style={{
            padding: "20px 30px", // Maintained original padding format
            textAlign: "center",
            marginTop: "-30px",
          }}
        >
          {content[currentIndex].text}
        </div>
      </motion.div>
    </div>
  );
};

export default SwipeableAutoSlider;
