import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Images
import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";
import img from "../assets/communication.png";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Problems = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f7f7] to-white text-gray-800 font-sans">
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
            Problem
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:max-w-[30rem] max-w-[20rem] mx-auto text-xs md:text-sm text-gray-600 mb-6 ">
            Clarity is the first step to resolution. Explore the causes,
            misalignments, and key communication gaps we often overlook.
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
            Problem

            </span>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative mx-auto w-[90%] max-w-5xl overflow-hidden rounded-3xl shadow-2xl group perspective-1000">
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, idx) => (
            <motion.span
              key={idx}
              className={`w-6 h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#47be07] scale-125" : "bg-[#cceac1]"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* New Section */}
        <div className="w-[90%] max-w-6xl mx-auto md:mt-32 mt-22 mb-16 md:mb-32 flex flex-col md:flex-row items-center gap-20">
          {/* Left Text Side */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full md:w-[60%] justify-between"
          >
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              The Importance of{" "}
              <span className="text-[#3c970b]">Clear Communication.</span>
            </h2>
            <p className="md:text-sm text-xs text-gray-600 mb-4">
              Communication drives everything — without it, collaboration and
              life itself would collapse. When discussing tasks like buying a
              house, it's crucial to separate the action and the communication
              behind it.
            </p>
            <p className="md:text-sm text-xs text-gray-600 mb-5 ">
              Both <span className="font-semibold">external communication</span>{" "}
              (spoken or written) and{" "}
              <span className="font-semibold">internal communication</span>
              (our thoughts) must align clearly. Otherwise, errors can occur,
              leading to flawed results.
            </p>
            <p className="md:text-sm text-xs text-gray-600">
              To perform any function without errors, we must first ensure our
              communication is accurate, precise, and aligned both externally
              and internally.
            </p>
          </motion.div>

          {/* Right Image Side */}
          <motion.div
            className="rounded-3xl overflow-hidden bg-gray-50 bg-opacity-60 backdrop-blur-md w-full md:w-[40%]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={img}
              alt="Solution Flow"
              className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Problems;
