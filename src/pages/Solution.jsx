import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBook, FaBrain, FaLaptop } from "react-icons/fa";
import Footer from "../components/Footer";

import img1 from "../assets/Problem/1.jpg";
import img2 from "../assets/Problem/2.jpg";
import img3 from "../assets/Problem/3.jpg";
import img4 from "../assets/Problem/4.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const popUpImage = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Solutions = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="bg-[radial-gradient(circle_at_20%_30%,#e8f5e9_0%,white_40%),radial-gradient(circle_at_80%_70%,#d0f0d6_0%,white_50%)] text-gray-800 font-sans relative min-h-screen overflow-hidden">
        {/* Carousel */}
        <div className="relative w-full overflow-hidden  py-16 sm:py-12 ">
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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative isolate overflow-hidden px-6 sm:px-12 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#3c970b] tracking-wide drop-shadow-md md:mt-4">
            Solution
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:max-w-[30rem] max-w-[20rem] mx-auto text-xs md:text-sm text-gray-600 mb-6  leading-relaxed">
            Effective solutions begin with clear understanding and purposeful
            action.
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
              Solution
            </span>
          </div>
        </motion.div>

        <section className="relative max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          {/* Vertical Timeline Line */}
          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#47be07] to-[#3e9e0a] opacity-80 rounded-full h-[85%]"></div>

          {/* Timeline Items */}
          <div className="relative z-10 flex flex-col gap-12 md:gap-10">
            {[
              {
                title: "The Solution Process",
                content:
                  "The functions we execute rely on our communication. To perform these functions effectively, we must identify and correct communication errors by learning the principle of communication...",
                btn: "Learn More",
                link: "/downloads",
                icon: <FaBook size={24} />, // Book Icon
              },
              {
                title: "Learning the Principle",
                content:
                  "Learning the principle of communication is essential for identifying and correcting errors. With tools, books, and software available, Speak Logic makes learning accessible...",
                btn: "Download Resources",
                link: "/downloads",
                icon: <FaBrain size={24} />, // Brain Icon
              },
              {
                title: "Software & Guidelines",
                content:
                  "Speak Logic also provides analysis software to help you identify errors in your communication and correct them effectively...",
                btn: "Get the Software",
                link: "/downloads",
                icon: <FaLaptop size={24} />, // Laptop Icon
              },
            ].map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center w-full md:w-1/2 ${
                    isLeft ? "self-start pr-10" : "self-end pl-10"
                  }`}
                >
                  {/* Modern Card */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-gray-200 hover:border-[#47be07] transition duration-300 p-8 rounded-2xl shadow-lg w-full text-left transform hover:shadow-xl"
                  >
                    {/* Card Header */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#3e9e0a]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Card Content */}
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                      {item.content}
                    </p>

                    {/* Button */}
                    <Link
                      to={item.link}
                      className="inline-block bg-[#47be07] text-white text-sm font-semibold px-6 py-2 rounded-md transform transition duration-300 hover:bg-[#3e9e0a] hover:scale-105"
                    >
                      {item.btn}
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2e7c0e] text-white py-12 md:py-20 px-2 text-center relative overflow-hidden">
          <motion.h4
            className="md:text-4xl text-xl font-bold mb-4 text-shadow-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            Transform how you communicate.
          </motion.h4>
          <motion.p
            className="text-xs md:text-sm md:max-w-[30rem] max-w-[18rem] mx-auto mb-8 text-shadow-md"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            Logical communication creates better leaders, teachers, and
            collaborators. Let Speak Logic help you reshape the way you connect.
          </motion.p>
          <Link
            to="/downloads"
            className="inline-block bg-white md:text-sm text-xs text-[#2e7c0e] font-semibold md:px-6 md:py-3 px-4 py-2 rounded-md transform transition duration-300 hover:bg-gray-100 hover:scale-110"
          >
            Download Now
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
