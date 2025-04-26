"use client";
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
        {/* Heading and Breadcrumb */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mt-40 mb-20"
        >
          <h1 className="text-6xl font-extrabold text-gray-800 tracking-tight mb-6 drop-shadow-md">
            PROBLEM
          </h1>
          <nav className="text-base font-semibold text-[#3c970b] flex justify-center items-center gap-3">
            <Link
              to="/"
              className="hover:underline hover:text-[#2e7c08] transition-colors duration-300"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span>Problems</span>
          </nav>
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
                className="w-full shrink-0 transform transition-transform duration-700 hover:scale-105 hover:rotate-[-2deg]"
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
              className={`w-6 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-[#47be07] scale-125" : "bg-[#cceac1]"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        {/* New Section */}
        <div className="w-[90%] max-w-6xl mx-auto mt-32 mb-32 flex flex-col md:flex-row items-center gap-20">
          {/* Left Text Side */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 w-full md:w-[60%] justify-between"
          >
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              The Importance of{" "}
              <span className="text-[#3c970b]">Clear Communication</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Communication drives everything — without it, collaboration and
              life itself would collapse. When discussing tasks like buying a
              house, it's crucial to separate the action and the communication
              behind it.
            </p>
            <p className="text-sm text-gray-600 mb-5 ">
              Both <span className="font-semibold">external communication</span>{" "}
              (spoken or written) and{" "}
              <span className="font-semibold">internal communication</span>
              (our thoughts) must align clearly. Otherwise, errors can occur,
              leading to flawed results.
            </p>
            <p className="text-sm text-gray-600">
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
