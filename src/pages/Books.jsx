import React, { useState } from "react";
import { FaDownload, FaPrint, FaInfoCircle } from "react-icons/fa";
import img1 from "../assets/3D-1.jpg";
import img2 from "../assets/3D-2.jpg";
import img3 from "../assets/3D-3.jpg";

const sections = [
  {
    number: 1,
    heading: "Start Learning Better Communication",
    description:
      "Promotes better communication by incorporating logic into everyday exchanges. This helps children become more expressive and responsive in their early years of development, encouraging open-minded dialogue and mutual respect.",
    image: img1,
  },
  {
    number: 2,
    heading: "Easy Access & Navigation",
    description:
      "Application Modeling Tutorial Communication Domain with Practical Examples Vol. I. It simplifies how you navigate complex topics using interactive modules and structured logic.",
    image: img2,
  },
  {
    number: 3,
    heading: "Increase Learning",
    description:
      "Includes problem and solution links for practical, hands-on understanding of logical thinking. It helps reinforce learning through engaging exercises tailored for all levels.",
    image: img3,
  },
  {
    number: 4,
    heading: "Explore Real World Scenarios",
    description:
      "Learn to apply communication techniques in everyday life with interactive examples that develop critical thinking and empathy.",
    image: img1,
  },
];

const Books = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleShowMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const renderCard = (section, index) => (
    <div
      key={index}
      className="relative group flex md:flex-row flex-col overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-white transition-all duration-500 md:h-[260px]"
    >
      <div className="relative md:w-[40%] w-full cursor-pointer group/image z-10">
        <img
          src={section.image}
          alt="Visual"
          className="w-full h-full object-cover rounded-l-2xl"
        />
        <span className="absolute top-4 left-4 bg-[#47be07] text-white text-xs px-3 py-1 rounded-full font-semibold shadow z-20">
          #{section.number}
        </span>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-full h-full bg-[#47be07] opacity-20 group-hover/image:left-0 transition-all duration-700 ease-in-out" />
        </div>
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex gap-2">
          <IconButton icon={<FaDownload />} />
          <IconButton icon={<FaPrint />} />
          <IconButton icon={<FaInfoCircle />} />
        </div>
      </div>

      <div className="md:w-[60%] w-full px-6 py-5 flex flex-col justify-center z-10">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-[1.2rem] xl:text-[1.3rem] font-sora font-bold text-[#1f2937] mb-3 leading-snug tracking-normal">
          {section.heading}
        </h3>
        <p className="text-[0.7rem] sm:text-sm md:text-base lg:text-[0.80rem] xl:text-[0.9rem] font-sora text-[#4B5563] leading-relaxed mb-2 tracking-normal">
          {expandedIndex === index
            ? section.description
            : section.description.slice(0, 100) + "... "}
          {expandedIndex !== index && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleShowMore(index);
              }}
              className="text-[#47be07] underline font-sora font-medium text-xs sm:text-sm lg:text-xs ml-1"
            >
              Show More
            </button>
          )}
        </p>
        {expandedIndex === index && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleShowMore(index);
            }}
            className="text-[#47be07] underline font-sora font-medium text-xs sm:text-sm lg:text-xs self-start mt-1"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-28 px-4 sm:px-6 md:px-16 text-white text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10 z-0" />

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
            BOOKS
          </h1>

          {/* Breadcrumb */}
          <nav className="text-sm sm:text-base font-medium text-white flex justify-center space-x-2">
            <span className="hover:underline cursor-pointer">Home</span>
            <span>&gt;</span>
            <span className="text-gray-100">Books</span>
          </nav>
        </div>

        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#F9FAFB] rounded-t-3xl" />
      </div>

      {/* Books Grid */}
      <div className="px-4 sm:px-6 md:px-12 xl:px-24 py-16">
        {/* Enhanced Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] mb-22 text-center relative ">
          Available Books
          {/* Green line below the heading */}
          <div className="absolute top-10 left-1/2 w-16 h-1 bg-[#47be07] rounded-full mx-auto mt-2 mb-4 transform -translate-x-1/2" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => renderCard(section, index))}
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ icon }) => (
  <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md">
    {icon}
  </button>
);

export default Books;
