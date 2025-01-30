// Breadcrumb.tsx
import React from "react";

interface BreadcrumbProps {
  slides: string[]; // Titles or identifiers for the slides
  currentIndex: number; // Current active slide index
  onClick: (index: number) => void; // Click handler to change slides
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  slides,
  currentIndex,
  onClick,
}) => {
  return (
    <div
      className="flex justify-center space-x-2 mb-10"
      style={{ marginTop: "-35px" }}
    >
      {slides.map((_, index) => (
        <div
          key={index}
          onClick={() => onClick(index)}
          className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
            currentIndex === index
              ? "bg-black" // Active dot color
              : "bg-gray-300" // Inactive dot color
          }`}
          style={{
            backgroundColor: currentIndex === index ? "" : undefined, // Custom active dot color
          }}
        />
      ))}
    </div>
  );
};

export default Breadcrumb;
