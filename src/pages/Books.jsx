import React, { useState, useEffect } from "react";
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
import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TAB_OPTIONS = ["All Categories", "Math", "Non Math"];
const IMAGES = [img1, img2, img3, img4];

const Books = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All Categories");
  const [modal, setModal] = useState({
    open: false,
    type: "",
    sectionIndex: null,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % IMAGES.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const filteredSections =
    activeTab === "All Categories"
      ? sections
      : sections.filter((s) => s.category === activeTab);

  const toggleExpand = (index) =>
    setExpandedIndex(index === expandedIndex ? null : index);

  const openModal = (type, index) =>
    setModal({ open: true, type, sectionIndex: index });
  const closeModal = () =>
    setModal({ open: false, type: "", sectionIndex: null });

  return (
    <>
      <div className="min-h-screen relative overflow-hidden from-[#47be07] via-[#3e9e0a] to-[#47be07]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9f7b8] via-transparent to-[#e9ffe0] opacity-40 z-0 pointer-events-none" />

        {/* Image Carousel */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d960d]/50 to-transparent z-10" />
          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {IMAGES.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`slide-${i}`}
                className="w-full object-cover max-h-[520px]"
              />
            ))}
          </motion.div>
          <div className="relative z-20 flex justify-center gap-2 mt-4">
            {IMAGES.map((_, i) => (
              <span
                key={i}
                className={`w-8 h-1 rounded ${
                  i === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Page Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative px-6 sm:px-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-[#3c970b] tracking-wide drop-shadow-md mt-10 sm:mt-18">
            Books
          </h1>
          <p className="mt-4 mx-auto max-w-[30rem] text-sm text-gray-600 mb-6">
            Discover insightful books that inspire thoughtful parenting and
            informed decisions.
          </p>

          {/* Modern Breadcrumb with Glassmorphism */}
          <div className="mt-6 flex justify-center space-x-2 text-sm ">
            <Link
              to="/"
              className="flex items-center gap-1 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/60 text-[#3c970b] shadow-sm border border-[#d9f5cb] hover:bg-white/80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4 0v-6m4 6h-8"
                />
              </svg>
              Home
            </Link>

            <span className="flex items-center text-gray-400">/</span>

            <span className="px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/60 text-gray-800 shadow-sm border border-[#e5e5e5]">
              books
            </span>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="relative z-10 px-6 md:px-16 py-16">
          <div className="flex justify-center mb-16 mt-10">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {TAB_OPTIONS.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.95 }}
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

          {/* Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8"
          >
            <AnimatePresence>
              {filteredSections.map((section, index) => (
                <motion.div
                  key={section.number}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative group flex flex-col max-w-sm mx-auto overflow-hidden rounded-3xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative w-full">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="w-full h-72 object-cover rounded-t-2xl"
                    />
                    <span className="absolute top-0 left-0 bg-[#47be07] text-white text-[16px] px-3 py-1.5 font-semibold rounded-br-[20px] shadow-md">
                      #{section.number}
                    </span>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                      {[
                        {
                          icon: <FaDownload />,
                          type: "download",
                          label: "Download",
                        },
                        { icon: <FaPrint />, type: "print", label: "Print" },
                        {
                          icon: <FaInfoCircle />,
                          type: "info",
                          label: "Details",
                        },
                        {
                          icon: <FaChevronDown />,
                          type: "type",
                          label: "More",
                        },
                      ].map(({ icon, type, label }) => (
                        <IconButton
                          key={type}
                          icon={icon}
                          onClick={() => openModal(type, index)}
                          label={label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="px-6 py-5 bg-white">
                    <h3 className="text-md font-bold text-gray-800 mb-3">
                      {section.heading}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {expandedIndex === index
                        ? section.description
                        : `${section.description.slice(0, 100)}... `}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(index);
                        }}
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

const IconButton = ({ icon, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className="w-10 h-10 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#47be07]"
  >
    {icon}
  </button>
);

export default Books;
