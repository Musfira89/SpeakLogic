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
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide mb-3 text-shadow-lg">
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
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-[#1f2937] mb-12 text-center"
          >
            Available Books
            <div className="w-16 h-1 bg-[#47be07] rounded-full mx-auto mt-4" />
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center mb-14">
            <div className="flex flex-wrap gap-6 bg-white rounded-xl px-6 py-4 shadow-lg">
              {["All Categories", "Math", "Non Math"].map((tab) => (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition 
                    ${
                      activeTab === tab
                        ? "bg-black text-white shadow-md"
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
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.number}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative group flex md:flex-row flex-col overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-white"
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

                  {/* Content */}
                  <div className="md:w-[60%] w-full px-6 py-5 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-[#1f2937] mb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {expandedIndex === index
                        ? section.description
                        : section.description.slice(0, 100) + "... "}
                      <button
                        onClick={() => toggleShowMore(index)}
                        className="text-[#47be07] underline font-medium text-xs ml-1"
                      >
                        {expandedIndex === index ? "Show Less" : "Show More"}
                      </button>
                    </p>
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

const IconButton = ({ icon, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="w-9 h-9 rounded-full bg-[#47be07] text-white flex items-center justify-center shadow-md"
  >
    {icon}
  </motion.button>
);

export default Books;
