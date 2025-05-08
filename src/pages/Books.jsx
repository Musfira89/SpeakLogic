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

  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

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
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative isolate overflow-hidden pt-28 pb-12 px-6 sm:px-12 text-center"
        >
          {/* Decorative background blobs */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#f5fdf2] to-white" />
          <div className="absolute top-[-6rem] left-1/2 transform -translate-x-1/2 z-0 blur-3xl opacity-40 pointer-events-none">
            <div className="w-[400px] h-[400px] bg-[#bdf4a4] rounded-full mix-blend-multiply"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-[#3c970b] tracking-wide drop-shadow-md mt-4 md:mt-18">
            Books
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:max-w-[30rem] max-w-[20rem] mx-auto text-xs md:text-sm text-gray-600 mb-6 ">
            Discover insightful books that inspire thoughtful parenting and
            informed decisions.
          </p>

          {/* Modern Breadcrumb with Glassmorphism */}
          <div className="mt-6 flex justify-center space-x-2 text-xs md:text-sm ">
            <Link
              to="/"
              className="flex items-center gap-1 px-6 py-1.5 rounded-full backdrop-blur-sm bg-white/60 text-[#3c970b] shadow-sm border border-[#d9f5cb] hover:bg-white/80 transition"
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
              Books
            </span>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative mx-auto w-[90%] max-w-5xl overflow-hidden rounded-3xl shadow-2xl group perspective-1000 mb-5">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d960d]/30 to-transparent z-10 pointer-events-none rounded-3xl" />

          <motion.div
            className="flex transition-transform duration-1000 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {images.map((img, idx) => (
              <div
                key={idx}
                className="w-full shrink-0 transform transition-transform duration-700"
                style={{
                  transform: idx === currentIndex ? "scale(1)" : "scale(0.9)",
                  transition: "transform 0.7s ease",
                }}
              >
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full object-cover max-h-[550px] rounded-3xl shadow-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-28 py-18">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Tabs */}
            <div className="md:w-1/4">
              <div className="sticky top-20 flex md:flex-col gap-4">
                {TAB_OPTIONS.map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    whileTap={{ scale: 0.97 }}
                    className={`px-5 md:py-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm
                    ${
                      activeTab === tab
                        ? "bg-[#2e7c0e] text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {tab} Books
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8"
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
                        className="w-full md:h-80 h-60 object-cover rounded-t-2xl"
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
