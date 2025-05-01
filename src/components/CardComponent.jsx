import React, { useState } from "react";
import Footer from "./Footer";

const CardComponent = ({ item, index }) => {
  const [clicked, setClicked] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // Reset ripple
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div>
      {/* Card Component */}
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 pt-4 shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.015]">
        {/* Floating gradient shape */}
        <div className="absolute top-[-40px] right-[-40px] w-32 h-32 bg-gradient-to-br from-[#3d960d] to-[#2b6909] opacity-20 rounded-full blur-3xl" />

        {/* Badge */}
        <span
          className="absolute top-0 left-0 bg-[#47be07] text-white text-[15px] px-3 py-1 font-bold shadow-md"
          style={{ borderBottomRightRadius: "20px" }}
        >
          #{item.number}
        </span>

        {/* Book Image */}
        <div className="w-full h-48 mb-4 rounded-xl overflow-hidden px-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-[20px] font-bold text-gray-900 z-10 relative leading-relaxed mb-1">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 z-10 relative mb-6 leading-relaxed">
          {item.description}
        </p>

        {/* Button to toggle dropdown */}
        <button
          onClick={toggleDropdown} // Toggle dropdown on click
          className={`group z-10 relative inline-flex items-center justify-center px-6 py-2.5 text-white font-semibold rounded-full overflow-hidden shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3d960d]/50
          bg-gradient-to-r from-[#3d960d] to-[#4ab80f] hover:from-[#5ba334] hover:to-[#3d960d]`}
        >
          <span className="text-sm z-10 relative group-hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            View More
          </span>
          {clicked && (
            <span className="absolute w-full h-full animate-ping bg-white/30 rounded-full z-0" />
          )}
        </button>
      </div>

      {/* Dropdown with modal-like background */}
      {isDropdownOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 border border-[#47be07] font-sora relative">
            {/* Close Button (Black Cross Icon) */}
            <button
              onClick={toggleDropdown}
              className="absolute top-2 right-2 text-black text-3xl font-bold"
            >
              &times; {/* This is the cross icon */}
            </button>

            {/* Dropdown Content */}
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-contain mb-4"
              />
              <h3 className="text-[24px] font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{item.description}</p>
              <button
                onClick={handleClick}
                className="bg-[#3d960d] text-white text-sm px-6 py-2 rounded-md hover:bg-[#4ab80f] transition-all"
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
