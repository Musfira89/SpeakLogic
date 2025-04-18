import React, { useState } from "react";
import {
  FaDownload,
  FaPrint,
  FaInfoCircle,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { sections } from "../data/book";
import Modal from "../components/Modal";
import Footer from "../components/Footer"

const Books = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All Categories"); // default tab
  const [modal, setModal] = useState({
    open: false,
    type: "",
    sectionIndex: null,
  });

  const filteredSections =
    activeTab === "All Categories"
      ? sections
      : sections.filter((s) => s.category === activeTab);

  const toggleShowMore = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const openModal = (type, index) => {
    setModal({ open: true, type, sectionIndex: index });
  };

  const closeModal = () => {
    setModal({ open: false, type: "", sectionIndex: null });
  };

  const renderCard = (section, index) => (
    <div
      key={index}
      className="relative group flex md:flex-row flex-col overflow-hidden rounded-2xl shadow-xl border border-gray-300 bg-white transition-all duration-500 md:h-[260px]"
    >
      {/* Image & Overlay */}
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

        {/* Centered Icons */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex gap-2">
          <IconButton
            icon={<FaDownload />}
            onClick={() => openModal("download", index)}
          />
          <IconButton
            icon={<FaPrint />}
            onClick={() => openModal("print", index)}
          />
          <IconButton
            icon={<FaInfoCircle />}
            onClick={() => openModal("info", index)}
          />
          <IconButton
            icon={<FaChevronDown />}
            onClick={() => openModal("type", index)}
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="md:w-[60%] w-full px-6 py-5 flex flex-col justify-center z-10">
        <h3 className="text-xl font-sora font-bold text-[#1f2937] mb-3">
          {section.heading}
        </h3>
        <p className="text-sm font-sora text-[#4B5563] leading-relaxed mb-2">
          {expandedIndex === index
            ? section.description
            : section.description.slice(0, 100) + "... "}
          {expandedIndex !== index && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleShowMore(index);
              }}
              className="text-[#47be07] underline font-medium text-xs ml-1"
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
            className="text-[#47be07] underline font-medium text-xs self-start mt-1"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
    <div className="min-h-screen from-[#47be07] via-[#3e9e0a] to-[#47be07] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c9f7b8] via-transparent to-[#e9ffe0] opacity-40 pointer-events-none z-0" />

      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-28 px-4 sm:px-6 md:px-16 text-white text-center overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-10 z-0" />
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight">
            BOOKS
          </h1>
          <nav className="text-sm sm:text-base font-medium text-white flex justify-center space-x-2">
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-gray-100">Books</span>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#f9fbf9] rounded-t-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 xl:px-24 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] mb-12 text-center relative">
          Available Books
          <div className="absolute top-10 left-1/2 w-16 h-1 bg-[#47be07] rounded-full mx-auto mt-2 mb-4 transform -translate-x-1/2" />
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-14 px-4">
          <div className="flex flex-wrap gap-8 bg-white rounded-md px-4 py-4 shadow-lg w-full max-w-xl justify-center">
            {["All Categories", "Math", "Non Math"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-md transition-all duration-300 focus:outline-none 
                  ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {tab} Books
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full mt-1"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSections.map((section, index) => renderCard(section, index))}
        </div>
      </div>

      <Modal modal={modal} closeModal={closeModal} />
    </div>
    <Footer/>

    </>
  );
};

const IconButton = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md"
  >
    {icon}
  </button>
);

export default Books;
