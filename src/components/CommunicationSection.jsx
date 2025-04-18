import React from "react";
import rightImg from "../assets/rightImg.png";
import { FaUserTie, FaPhone, FaCircleCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CommunicationSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className="flex flex-col md:flex-row items-start justify-between px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-16 font-sans gap-12 leading-relaxed overflow-hidden mb-24 mt-10 md:mt-20 max-w-screen-xl mx-auto"
    >
      {/* Left Container */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={0}
        className="w-full md:w-[45%] space-y-6"
      >
        <p className="text-[#47be07] font-semibold text-sm sm:text-base">
          MORE ABOUT US
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Understanding the Root of{" "}
          <span className="text-[#379f00]">Communication Issues</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg">
          Effective communication is essential for executing everyday functions.
          Errors in internal or external communication can lead to flawed
          outcomes.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-2">
          {[
            "Communication enables collaboration",
            "Quality of communication affects results",
            "Functions rely on accurate communication",
            "Internal & external views both matter",
            "Error-free communication = flawless function",
            "Separation of message and action is key",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3"
              variants={fadeInLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx + 1}
            >
              <FaCircleCheck className="text-[#379f00] w-5 h-5 mt-1" />
              <p className="text-gray-700 text-sm sm:text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Container */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full md:w-[55%] relative mt-10 md:mt-0 flex flex-col items-center"
      >
        {/* Main Image */}
        <div className="w-full max-w-[900px] overflow-hidden rounded-3xl px-2 sm:px-0">
          <img
            src={rightImg}
            alt="Communication Visual"
            className="w-full h-auto object-cover rounded-3xl"
            style={{ maxHeight: "580px" }}
          />
        </div>

        {/* Floating Box */}
        <div className="relative sm:absolute bottom-0 sm:bottom-5 sm:right-5 md:right-10 lg:right-14 bg-[#379f00] text-white px-4 py-4 sm:px-6 sm:py-6 w-[90%] sm:w-[230px] rounded-lg shadow-lg text-sm animate-bounce-slow mt-4 sm:mt-0">
          <p className="leading-relaxed text-center text-sm sm:text-base">
            Scroll below and explore our books and softwares.
          </p>
        </div>
      </motion.div>

      {/* Custom Animation */}
      <style>{`
    @keyframes bounce-slow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
    .animate-bounce-slow {
      animation: bounce-slow 3s infinite;
    }
  `}</style>
    </section>
  );
};

export default CommunicationSection;
