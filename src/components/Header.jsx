import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import headerImg1 from "../assets/img2.png";
import headerImg2 from "../assets/img3.jpg";
import headerImg3 from "../assets/img4.jpg";
import Counting from "./Counting";

const images = [headerImg1, headerImg2, headerImg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slideInTop = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const popUpImage = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-[#e8f5e9] via-white to-[#efffef] py-22 px-6 md:px-16 lg:px-32 transition-all overflow-hidden">
      {/* Decorative Green Circles */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#47be07] opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-[#47be07] opacity-15 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-[200px] h-[200px] bg-[#47be07] opacity-10 rounded-full blur-2xl z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 text-center">
        {/* Banner Carousel Section */}
        <motion.div
          className="w-full max-w-4xl mt-36"
          initial="hidden"
          animate="visible"
          variants={popUpImage}
        >
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <motion.div
              className="flex transition-all"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`carousel-img-${i}`}
                  className="w-full flex-shrink-0 object-cover max-h-[400px]"
                />
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-8">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-8 h-1 rounded-md ${
                  index === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                } transition-all`}
              />
            ))}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="mt-16 w-full max-w-7xl px-4 text-center flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={slideInTop}
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-gray-600 leading-tight mb-6 text-center">
            We Promote Better <br />
            <span className="text-[#3d960d]">Communication</span>
          </h1>
          <p className="text-gray-700 mb-10 max-w-4xl leading-relaxed text-md mx-auto lg:mx-0 text-center">
            Welcome to <strong>SpeakLogic.org</strong> — a nonprofit promoting
            logical communication through books and software.
            <br />
            <br />
            Click links for problems, solutions, downloads, and hardcopy orders
            to improve rational thinking and understanding.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-5 flex-wrap">
            <button className="bg-[#3d960d] text-white px-8 py-3 text-lg rounded-md font-semibold hover:bg-[#3eaa06] transition shadow-lg hover:scale-105">
              Get Started
            </button>
            <button className="flex items-center gap-3 text-[#333] font-medium group text-lg transition">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#47be07] text-[#47be07] transition-all duration-300 group-hover:border-[#3eaa06] group-hover:text-[#3eaa06]">
                <FaPlay className="text-sm" />
              </span>
              Play Video
            </button>
          </div>
        </motion.div>
      </div>

      <Counting />
    </section>
  );
};

export default HeroSection;
