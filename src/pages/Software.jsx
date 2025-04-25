import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import softwareData from "../data/softwareData"; // Importing the software data
import Footer from "../components/Footer";
import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";
import { FaInfoCircle } from "react-icons/fa";
import Modal from "../components/Modal";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const popUpImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const IconButton = ({ icon, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    title={label}
    className="w-12 h-12 rounded-full bg-[#47be07] text-white flex items-center justify-center hover:bg-[#3aa506] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#47be07]"
  >
    {icon}
  </button>
);

const Software = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState({
    open: false,
    type: "",
    sectionIndex: null,
  });

  const openModal = (type, index) => {
    setModal({ open: true, type, sectionIndex: index });
  };

  const closeModal = () => {
    setModal({ open: false, type: "", sectionIndex: null });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] text-gray-800 font-sans">
        {/* Carousel */}
        <div className="relative w-full overflow-hidden ">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d960d]/50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex transition-transform duration-700 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide-${idx}`}
                className="w-full object-cover max-h-[520px]"
              />
            ))}
          </motion.div>

          {/* Dots */}
          <div className="relative z-20 flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-8 h-1 rounded ${
                  idx === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Problem Heading and Breadcrumb */}
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">SOFTWARE</h1>
          <nav className="text-sm font-medium text-[#3c970b] mb-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Software</span>
          </nav>
        </div>

        {/* Instructions Section */}
        <section className="px-6 sm:px-6 md:px-10 xl:px-16 py-16 bg-[#F9FAFB] text-gray-800">
          <div className="max-w-5xl mx-auto text-sm space-y-12">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-left text-[#3d960d] mb-10">
              Installation Instructions
            </h2>

            <div className="space-y-8">
              {/* Download Software */}
              <div className="space-y-4">
                <p className="leading-relaxed text-sm text-left">
                  <span className="font-semibold text-[#3e9e0a] text-md">
                    Download Software:
                  </span>{" "}
                  Understand the relationship between information and
                  communication. The data you see about an entity depends on
                  that entity, which you can explore in detail through the
                  Principle of Communication exercise number 126.
                </p>
              </div>

              {/* Speak Logic Information Analysis */}
              <div className="space-y-4">
                <p className="leading-relaxed text-sm text-left">
                  <span className="font-semibold text-[#3e9e0a]">
                    Speak Logic Information Analysis:
                  </span>{" "}
                  This tool allows us to manage the information presented to us.
                  The tool for Internet Explorer enhances our experience by
                  allowing better management of web-based information. Learn
                  more about the key features of this tool{" "}
                  <a
                    href="#speak-logic"
                    className="text-[#3d960d] underline hover:text-[#3e9e0a] transition"
                  >
                    here
                  </a>
                  .
                </p>
              </div>

              {/* New Features */}
              <div className="space-y-4">
                <p className="leading-relaxed text-sm text-left">
                  <span className="font-semibold text-[#3e9e0a]">
                    New Features:
                  </span>{" "}
                  Version 2012 includes additional features such as identifying
                  principles in selection and interpreting those principles. You
                  can learn about these updates in detail in the release notes.
                </p>
              </div>

              {/* Installation Instructions */}
              <div className="space-y-4">
                <p className="leading-relaxed text-sm text-left">
                  <span className="font-semibold text-[#3e9e0a]">
                    Installation Instructions:
                  </span>{" "}
                  After downloading, if the application doesn't open, unzip the
                  file in your installation directory. Below are the download
                  links based on your operating system:
                </p>
              </div>

              {/* Download Links */}
              <div className="flex flex-col sm:flex-row justify-start gap-4 mt-6">
                <a
                  href="#download-windows-xp"
                  className="px-5 py-3 bg-[#3d960d] text-white rounded-lg shadow-lg hover:bg-[#3e9e0a] transition duration-300 transform hover:scale-105"
                >
                  Download for Windows XP
                </a>
                <a
                  href="#download-windows-vista"
                  className="px-5 py-3 bg-[#3d960d] text-white rounded-lg shadow-lg hover:bg-[#3e9e0a] transition duration-300 transform hover:scale-105"
                >
                  Download for Windows Vista/7
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Software Cards Section */}
        <section className="px-6 sm:px-10 md:px-16 xl:px-32 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {softwareData.map((software, index) => (
              <div
                key={software.id}
                className="bg-white rounded-2xl p-6 shadow-xl ring-1 ring-gray-200 relative"
              >
                {/* Top-Left Action Button on Card */}
                <div className="absolute top-2 left-2 z-10">
                  <IconButton
                    icon={<FaInfoCircle size={14} />}
                    onClick={() => openModal("info", index)}
                    label="Details"
                  />
                </div>

                <div className="h-48 w-full flex justify-center items-center overflow-hidden rounded-xl mb-4">
                  <img
                    src={software.imgSrc}
                    alt={`Software ${software.id}`}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>

                <div className="text-center space-y-2">
                  <a
                    href={software.downloadLink}
                    className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-md transition inline-block shadow-md w-full"
                  >
                    Download Software
                  </a>
                  <a
                    href={software.videoLink}
                    className="bg-[#47be07] text-white text-sm font-semibold py-2 px-6 rounded-md transition inline-block shadow-md w-full"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <Modal modal={modal} closeModal={closeModal} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Software;
