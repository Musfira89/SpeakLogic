import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Footer from "../components/Footer";

import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";

const videosWithSound = [
  {
    title: "Speak Logic Information Analysis for Microsoft Office V1.1",
    src: "/videos/speak-logic.mp4",
  },
];

const videosWithoutSound = [
  {
    title: "Visual Guide to Early Learning Activities",
    src: "/videos/early-learning.mp4",
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Videos = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("withSound");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="bg-[radial-gradient(circle_at_20%_30%,#e8f5e9_0%,white_40%),radial-gradient(circle_at_80%_70%,#d0f0d6_0%,white_50%)] text-gray-800 font-sans relative min-h-screen overflow-hidden">
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
            Videos
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:max-w-[30rem] max-w-[20rem] mx-auto text-xs md:text-sm text-gray-600 mb-6 ">
            Watch curated videos tailored for your learning — with or without
            sound.
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
              Videos
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
        <div className="flex justify-center gap-2 mt-8 md:mb-22">
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-20 px-6 sm:px-12 text-center"
        >
          <div className="max-w-3xl mx-auto p-6">
            {/* Tab Header */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setSelectedTab("withSound")}
                className={`px-5 py-2 mx-2 rounded-full transition font-semibold flex items-center gap-2 ${
                  selectedTab === "withSound"
                    ? "bg-[#3c970b] text-white shadow"
                    : "bg-white text-[#3c970b] border border-[#c8e6c9]"
                }`}
              >
                <FaVolumeUp /> With Sound
              </button>
              <button
                onClick={() => setSelectedTab("withoutSound")}
                className={`px-5 py-2 mx-2 rounded-full transition font-semibold flex items-center gap-2 ${
                  selectedTab === "withoutSound"
                    ? "bg-[#3c970b] text-white shadow"
                    : "bg-white text-[#3c970b] border border-[#c8e6c9]"
                }`}
              >
                <FaVolumeMute /> Without Sound
              </button>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {(selectedTab === "withSound" ? videosWithSound : videosWithoutSound).map(
    (video, index) => (
      <div
        key={index}
        className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
        onClick={() => {
          setSelectedVideo(video);
          setIsOpen(true);
        }}
      >
        <div className="aspect-video bg-gray-200">
          <video
            src={video.src}
            className="w-full h-full object-cover"
            muted
            playsInline
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-800 text-center">
            {video.title}
          </h3>
        </div>
      </div>
    )
  )}
</div>

       
          </div>
        </motion.div>

        {/* Modal for Video */}
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen px-4">
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-2xl mx-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <Dialog.Title className="text-lg font-bold text-[#3c970b]">
                  {selectedVideo?.title}
                </Dialog.Title>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
              </div>
              <div className="p-4">
                <video
                  src={selectedVideo?.src}
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow"
                />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default Videos;
