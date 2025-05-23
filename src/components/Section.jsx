import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/phone-app-screen.webp";
import img2 from "../assets/phone-app-screen.webp";
import img3 from "../assets/phone-app-screen.webp";

import {
  FaCommentDots,
  FaTimesCircle,
  FaLightbulb,
  FaEye,
  FaCheckCircle,
  FaChartLine,
  FaClone,
  FaBook,
  FaGlobe,
  FaRegCommentDots,
} from "react-icons/fa";

const points = [
  {
    title: "Communication Drives Function",
    desc: "Effective communication is essential for successfully executing any function or task.",
    icon: <FaCommentDots size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Error Correction Is Vital",
    desc: "To function properly, communication errors must first be identified and corrected.",
    icon: <FaTimesCircle size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Principle of Communication",
    desc: "Understanding this principle is necessary to recognize and fix communication issues.",
    icon: <FaLightbulb size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Awareness is the First Step",
    desc: "We can't automatically learn principles — awareness and learning are required.",
    icon: <FaEye size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Learning Enables Correction",
    desc: "Once the principle is learned, it helps in correcting errors for better function execution.",
    icon: <FaCheckCircle size={28} className="text-[#41aa09]" />,
  },
];

const pointsRight = [
  {
    title: "Analysis Leads to Insight",
    desc: "Communication must be analyzed to identify the source of errors and apply principles.",
    icon: <FaChartLine size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Portability & Presentation",
    desc: "Corrected communication is portable and presentable — the principle can be taught or learned anywhere.",
    icon: <FaClone size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Resources for Learning",
    desc: "Books, tutorials, and downloadable software are available for continued learning.",
    icon: <FaBook size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Universal Applicability",
    desc: "These principles can be applied regardless of location, thanks to their portability.",
    icon: <FaGlobe size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Feedback Enhances Understanding",
    desc: "Constructive feedback plays a critical role in helping users refine their communication skills.",
    icon: <FaRegCommentDots size={28} className="text-[#41aa09]" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AnimatedItem = ({ children, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const SolutionSection = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileImages = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="font-sora w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 xl:py-24 mb-4">
      {/* Section Heading */}
      <div className="text-center mb-22">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-[26px] font-bold text-gray-800 leading-tight">
          Our Solution Process & Learning Principles
        </h2>
        <div className="w-16 h-1 bg-[#41aa0980] mx-auto mt-2 mb-3 rounded" />
        <p className="text-gray-600 text-sm sm:text-base md:text-[13px] max-w-2xl mx-auto leading-relaxed">
          A step-by-step approach to identifying and correcting communication
          errors by understanding and applying core communication principles.
        </p>
      </div>

      {/* Main Content: Left - Center Image - Right */}
      <div className="flex flex-col lg:flex-row items-start justify-between ">
        {/* Left Points */}
        <div className="space-y-8 w-full max-w-md mx-auto lg:mx-0">
          {points.map((item, idx) => (
            <AnimatedItem key={idx} index={idx}>
              <div className="flex items-start flex-row-reverse justify-end space-x-reverse space-x-4">
                <div className="bg-[#eaf7dc] p-4 md:p-3 md:text-[2px] rounded-md text-[2px]">
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        {/* Center Carousel Image */}
        <div className="w-full flex flex-col items-center justify-center my-8 lg:my-0">
          <motion.div
            className="relative w-full max-w-[200px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[200px] xl:max-w-[210px] overflow-hidden rounded-xl shadow-md"
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="flex transition-all"
              animate={{ x: `-${mobileIndex * 100}%` }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {mobileImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`mobile-img-${i}`}
                  className="w-full flex-shrink-0 object-cover h-auto"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-5">
            {mobileImages.map((_, index) => (
              <span
                key={index}
                className={`w-6 h-1 rounded-md ${
                  index === mobileIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                } transition-all`}
              />
            ))}
          </div>
        </div>

        {/* Right Points */}
        <div className="space-y-8 w-full max-w-md mx-auto lg:mx-0">
          {pointsRight.map((item, idx) => (
            <AnimatedItem key={idx} index={idx}>
              <div className="flex items-start space-x-4">
                <div className="bg-[#eaf7dc] p-3 md:p-3 text-[1px]  rounded-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
