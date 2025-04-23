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
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Books = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All Categories");
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

  return (
    <>
      <div className="min-h-screen from-[#47be07] via-[#3e9e0a] to-[#47be07] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9f7b8] via-transparent to-[#e9ffe0] opacity-40 pointer-events-none z-0" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-gradient-to-r from-[#47be07] via-[#3e9e0a] to-[#47be07] py-28 px-4 text-white text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg mt-16">
            BOOKS
          </h1>
          <nav className="text-sm font-medium flex justify-center space-x-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-gray-100">Books</span>
          </nav>
        </motion.div>

        {/* Main */}
        <div className="relative z-10 px-6 md:px-16 py-16">
          {/* Tabs */}
          <div className="flex justify-center mb-16 mt-10">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {["All Categories", "Math", "Non Math"].map((tab) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition
          ${
            activeTab === tab
              ? "bg-black text-white shadow"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
                >
                  {tab} Books
                  {activeTab === tab && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full mt-1"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Book Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.number}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative group flex flex-col rounded-2xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Image Section */}
                  <div className="relative w-full">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    {/* Bigger Book Tag */}
                    <span
                      className="absolute top-0 left-0 bg-[#47be07] text-white text-[17px] px-3 py-2 font-bold shadow-md"
                      style={{ borderBottomRightRadius: "20px" }}
                    >
                      #{section.number}
                    </span>

                    {/* Top-Right Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                      <IconButton
                        icon={<FaDownload size={14} />}
                        onClick={() => openModal("download", index)}
                        label="Download"
                      />
                      <IconButton
                        icon={<FaPrint size={14} />}
                        onClick={() => openModal("print", index)}
                        label="Print"
                      />
                      <IconButton
                        icon={<FaInfoCircle size={14} />}
                        onClick={() => openModal("info", index)}
                        label="Details"
                      />
                      <IconButton
                        icon={<FaChevronDown size={14} />}
                        onClick={() => openModal("type", index)}
                        label="More"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full px-6 py-5 flex flex-col justify-center bg-white">
                    <h3 className="text-lg font-bold text-gray-800 leading-tight mb-3">
                      {section.heading}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expandedIndex === index
                        ? section.description
                        : section.description.slice(0, 100) + "... "}
                      {expandedIndex !== index && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleShowMore(index);
                          }}
                          className="text-[#47be07] underline font-medium text-sm ml-1"
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
                        className="text-[#47be07] underline font-medium text-sm mt-2 self-start"
                      >
                        Show Less
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <Modal modal={modal} closeModal={closeModal} />
      </div>
      <Footer />
    </>
  );
};

const IconButton = ({ icon, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="w-12 h-12 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#47be07]"
    title={label}
  >
    {icon}
  </button>
);

export default Books;
